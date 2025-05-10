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
} from "@solana/web3.js";
import toast from "react-hot-toast";
const BUU_ADDRESS = process.env.NEXT_PUBLIC_BUU_ADDRESS;
const SOL_ADDRESS = process.env.NEXT_PUBLIC_SOLANA_ADDRESS;
/**
 * 
 export interface WalletInfo {
  address?: string;
  id: string;
  name: string;
  icon?: string;
  chainType?: "ethereum" | "solana";
  walletData?: ConnectedSolanaWallet | undefined;
}
 */

type InvoiceCreatingParams = {
  buuPrice: number;
  solPricing: number;
  invoicePriceLamports: number; // invoice amount in lamports unit
  invoicePrice: number;
  userAddress: string;
  wallet: WalletInfo; // Using any for simplicity, but should be properly typed
};
export const bitRefillFunctions = {
  invoiceCreated: async ({
    userAddress,
    wallet,
    buuPrice, // in usd
    solPricing, // in usd
    invoicePrice, // in solana converted to uiAmount
    invoicePriceLamports, // in solana lamports
  }: InvoiceCreatingParams) => {
    try {
      if (!BUU_ADDRESS || !SOL_ADDRESS) {
        throw new Error("Solana address or Buu Address is invalid");
      }
      // should the checks be done in lamports ? or ui pricing ?
      const paymentAmountInUSD = invoicePrice * solPricing;

      if (paymentAmountInUSD < MIN_AMOUNT_TO_PURCHASE_USD) {
        toast.error(
          `Invoice amount should be greater than $${MIN_AMOUNT_TO_PURCHASE_USD}`
        );
        return;
      }
      let paymentAmount = invoicePrice;

      const tokenBalance = await getTokenBalance({
        address: userAddress,
        token: "SOLANA",
      });
      // value.amount: string; is [lamports]
      const solAmount = tokenBalance?.value?.uiAmount;

      if (!solAmount || solAmount < 0.001) {
        paymentAmount = paymentAmount + 0.01; // Add 0.01 SOL if balance is low
        console.log("[PAYMENT_AMOUNT_ADJUSTED]", paymentAmount);
      }

      let amountInBuu = (paymentAmount * solPricing) / buuPrice;

      console.log("[AMOUNT_IN_BUU]", amountInBuu);

      const finalAmount = amountInBuu / (1 - WITHDRAW_REFERRAL_FEE / 100);

      const finalAmountFormatted = Math.floor(finalAmount * 10 ** 8).toString();

      const jupiterOrderParams = {
        inputMint: BUU_ADDRESS,
        outputMint: SOL_ADDRESS,
        amount: finalAmountFormatted,
        taker: userAddress,
        /** need to add these after confirmation of the account which need to be verified by @victor */
        // referralAccount: NEXT_PUBLIC_WITHDRAW_REFERRAL_ACCOUNT,
        // referralFee: WITHDRAW_REFERRAL_FEE,
      };
      console.log(jupiterOrderParams);

      const queryParams = new URLSearchParams();
      Object.entries(jupiterOrderParams).forEach(([key, value]) => {
        queryParams.append(key, value.toString());
      });

      console.log("[JUPITER_ORDER_PARAMS]", jupiterOrderParams);
      // will return a unsigned transaction in base64
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
        console.log("Jupiter input failed");
      }
      const jupiterOrder = await jupiterOrderResponse.json();

      if (!jupiterOrder || jupiterOrder.error || !jupiterOrder?.transaction) {
        throw new Error(
          `Failed to get order from Jupiter: ${jupiterOrder?.error || "Unknown error"}`
        );
      }

      // Extract the transaction from the order response
      const transactionBase64 = jupiterOrder.transaction;

      console.log("[BASE64_TRANSACTION]:", transactionBase64);

      // Deserialize the transaction
      const transaction = VersionedTransaction.deserialize(
        Buffer.from(transactionBase64, "base64")
      );

      console.log("[TRANSACTION JUPITER]:", transaction);

      // asking user to sign the transaction
      const signature = await wallet.walletData?.signTransaction(transaction);

      if (typeof signature === "undefined") {
        throw new Error("User rejected the request");
      }

      // Serialize the transaction to base64 format
      const signedTransaction = Buffer.from(signature.serialize()).toString(
        "base64"
      );

      // execute api will return swap status to be either `success` / `failed` if not success then throw error and return failed.
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

      // now user have solana in their address
      const swap = await executeJupiterTransaction.json();

      console.log("[SWAP]:", swap);

      if (swap.status !== "success") {
        throw new Error("Swapping to sol failed.");
      }

      const connection = new Connection(getSolanaClusterUrl());

      const transferringTransaction = new Transaction();
      transferringTransaction.add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(wallet.address ?? ""),
          toPubkey: new PublicKey(""),
          lamports: 1,
        })
      );

      const data = await wallet.walletData?.sendTransaction(
        transferringTransaction,
        connection
      );
      console.log("[TRANSACTION]:", data);
    } catch (error) {
      console.log("[ERROR]:", error);
    }
  },
};
