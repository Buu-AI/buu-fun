import {
  MIN_AMOUNT_TO_PURCHASE_USD,
  WITHDRAW_REFERRAL_FEE,
} from "@/constants/bitrefill";
import { getTokenBalance } from "@/lib/solana/getTokenBalance";
import { getSolanaClusterUrl } from "@/lib/solana/staking";
import { getJupiterUltraAPI } from "@/lib/utils";
import { WalletInfo } from "@/providers/account.context";
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  VersionedTransaction,
  Commitment,
} from "@solana/web3.js";
import toast from "react-hot-toast";

const BUU_ADDRESS = process.env.NEXT_PUBLIC_BUU_ADDRESS;
const SOL_ADDRESS = process.env.NEXT_PUBLIC_SOLANA_ADDRESS;
const WITHDRAW_REFERRAL_ACCOUNT =
  process.env.NEXT_PUBLIC_WITHDRAW_REFERRAL_ACCOUNT;

/**
 * Parameters for creating an invoice transaction
 */
type InvoiceCreatingParams = {
  buuPrice: number; // BUU price in USD
  solPricing: number; // SOL price in USD
  invoicePriceLamports: number; // Invoice amount in lamports
  invoicePrice: number; // Invoice amount in SOL (UI amount)
  userAddress: string; // User's wallet address
  wallet: WalletInfo; // User's wallet information
  paymentAddress: string;
  buuDecimals: number;
};
type TJupiterOrderParams = {
  inputMint: string;
  outputMint: string;
  amount: string;
  taker: string;
  referralAccount?: string;
  referralFee?: number;
};
export const bitRefillFunctions = {
  /**
   * Creates and processes an invoice payment using Solana and Jupiter API
   */
  invoiceCreated: async ({
    userAddress,
    paymentAddress,
    wallet,
    buuPrice,
    solPricing,
    invoicePrice,
    invoicePriceLamports,
    buuDecimals,
  }: InvoiceCreatingParams) => {
    // For tracking transaction progress
    let toastId = toast.loading("Processing your transaction...");

    try {
      // Validate required environment variables
      if (!BUU_ADDRESS || !SOL_ADDRESS || !paymentAddress) {
        throw new Error("Required address configuration is missing");
      }

      // Validate wallet is connected
      if (!wallet.address || !wallet.walletData) {
        throw new Error("Wallet is not connected");
      }

      // Check if payment meets minimum USD amount
      const paymentAmountInUSD = invoicePrice * solPricing;
      if (paymentAmountInUSD < MIN_AMOUNT_TO_PURCHASE_USD) {
        throw new Error(
          `Invoice amount should be greater than $${MIN_AMOUNT_TO_PURCHASE_USD}`
        );
      }

      // Adjust payment amount if SOL balance is low
      let paymentAmount = invoicePrice;
      const tokenBalance = await getTokenBalance({
        address: userAddress,
        token: "SOLANA",
      });

      const solAmount = tokenBalance?.value?.uiAmount;
      if (!solAmount || solAmount < 0.001) {
        paymentAmount = paymentAmount + 0.01; // Add 0.01 SOL for transaction fees
        console.log("[PAYMENT_AMOUNT_ADJUSTED]", paymentAmount);
      }

      // Calculate BUU amount including referral fee
      let amountInBuu = (paymentAmount * solPricing) / buuPrice;
      console.log("[AMOUNT_IN_BUU]", amountInBuu);
      // 1000 / (1 - 20 / 100)
      const finalAmount = amountInBuu / (1 - WITHDRAW_REFERRAL_FEE / 100);
      const finalAmountFormatted = Math.floor(
        finalAmount * 10 ** buuDecimals
      ).toString();

      // Prepare Jupiter order parameters
      const jupiterOrderParams: TJupiterOrderParams = {
        inputMint: BUU_ADDRESS,
        outputMint: SOL_ADDRESS,
        amount: finalAmountFormatted,
        taker: userAddress,
      };

      // Add referral information if available
      if (WITHDRAW_REFERRAL_ACCOUNT) {
        /** need to add these after confirmation of the account which need to be verified by @victor */

        jupiterOrderParams["referralAccount"] = WITHDRAW_REFERRAL_ACCOUNT;
        jupiterOrderParams["referralFee"] = WITHDRAW_REFERRAL_FEE;
      }

      console.log("[JUPITER_ORDER_PARAMS]", jupiterOrderParams);

      // Build query parameters
      const queryParams = new URLSearchParams();
      Object.entries(jupiterOrderParams).forEach(([key, value]) => {
        queryParams.append(key, value.toString());
      });

      // Get order from Jupiter API
      toast.loading("Preparing swap details...", { id: toastId });
      const jupiterOrderResponse = await fetch(
        getJupiterUltraAPI(`/order?${queryParams.toString()}`),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (jupiterOrderResponse.status !== 200) {
        throw new Error(
          `Failed to book order for swapping Buu Tokens, Please try again`
        );
      }

      const jupiterOrder = await jupiterOrderResponse.json();
      if (!jupiterOrder || jupiterOrder.error || !jupiterOrder?.transaction) {
        throw new Error(
          `Failed to get order from Jupiter: ${jupiterOrder?.error || "Unknown error"}`
        );
      }

      // Deserialize the transaction
      const transactionBase64 = jupiterOrder.transaction;
      const transaction = VersionedTransaction.deserialize(
        Buffer.from(transactionBase64, "base64")
      );

      // Request user to sign the transaction
      toast.loading("Please sign the transaction in your wallet...", {
        id: toastId,
      });

      if (!wallet?.walletData?.signTransaction) {
        throw new Error("Wallet does not support transaction signing");
      }

      const signature = await wallet.walletData.signTransaction(transaction);

      if (typeof signature === "undefined") {
        throw new Error("Transaction was not signed");
      }

      // Serialize the signed transaction to base64 string
      const signedTransaction = Buffer.from(signature.serialize()).toString(
        "base64"
      );

      // Execute the Jupiter swap
      toast.loading("Executing swap...", { id: toastId });
      const executeJupiterTransaction = await fetch(
        getJupiterUltraAPI("/execute"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            signedTransaction: signedTransaction,
            requestId: jupiterOrder.requestId,
          }),
        }
      );

      const swap = await executeJupiterTransaction.json();
      if (swap.status !== "success") {
        throw new Error(`Swap failed: ${swap.error || "Unknown error"}`);
      }

      // Connect to Solana network
      // [TODO] Change this in production to helius
      const connection = new Connection(getSolanaClusterUrl());

      // Create transfer transaction to payment recipient
      toast.loading("Creating payment transaction...", { id: toastId });
      const transferringTransaction = new Transaction();
      transferringTransaction.add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(wallet.address),
          toPubkey: new PublicKey(paymentAddress),
          lamports: invoicePriceLamports, // Use the actual invoice amount
        })
      );

      // Sign and send the transfer transaction
      if (!wallet.walletData.sendTransaction) {
        throw new Error("Wallet does not support sending transactions");
      }

      const txSignature = await wallet.walletData.sendTransaction(
        transferringTransaction,
        connection
      );

      // Wait for transaction confirmation
      toast.loading("Confirming transaction...", { id: toastId });

      const confirmation = await connection.confirmTransaction(
        {
          signature: txSignature ?? "",
          blockhash: transferringTransaction.recentBlockhash ?? "",
          lastValidBlockHeight:
            transferringTransaction.lastValidBlockHeight ?? 0,
        },
        "confirmed"
      );

      if (confirmation.value.err) {
        throw new Error(`Transaction failed: ${confirmation.value.err}`);
      }

      // Transaction successful
      toast.success("Payment completed successfully!", { id: toastId });

      return {
        success: true,
        swapTx: swap.txid,
        paymentTx: txSignature,
      };
    } catch (error: any) {
      console.error("[TRANSACTION_ERROR]:", error);
      if ("message" in error) {
        // Show error to user
        toast.error(error?.message || "Transaction failed", { id: toastId });

        return {
          success: false,
          error: error.message || "Transaction failed",
        };
      }
      return {
        success: false,
        error: "Transaction failed",
      };
    }
  },
};
