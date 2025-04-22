"use client";
import { Button } from "@/components/ui/button";
import { getUnStakingTransactions } from "@/lib/solana/getUnstakingTransaction";
import { getClusterUrl } from "@/lib/solana/staking";
import { useAuthentication } from "@/providers/account.context";
import { useSolanaWallets } from "@privy-io/react-auth";
import { Connection } from "@solana/web3.js";
import toast from "react-hot-toast";

export default function UnstakeButton({
  depositNonce,
}: {
  depositNonce: number;
}) {
  const { address, connectSolanaWallet, wallet } = useAuthentication();
  const { wallets } = useSolanaWallets();
  async function handleUnstakeTransaction() {
    try {
      if (!wallets.length || !address || !wallet) {
        console.log("NOT LOGGED IN");
        connectSolanaWallet();
        return;
      }
      const connection = new Connection(getClusterUrl());
      const transaction = await getUnStakingTransactions({
        address,
        depositNonce,
      });
      const signature = await wallet.walletData?.sendTransaction(
        transaction,
        connection
      );

      if (signature) {
        toast.success("Transaction sent! Waiting for confirmation...");

        // Wait for confirmation
        try {
          const confirmation = await connection.confirmTransaction(
            signature,
            "confirmed"
          );

          if (confirmation.value.err) {
            toast.error("Transaction failed on-chain");
            console.error("Transaction error:", confirmation.value.err);
          } else {
            toast.success("Staking successful!");
          }
        } catch (confirmError) {
          toast.error("Failed to confirm transaction");
          console.error("Confirmation error:", confirmError);
        }
      } else {
        toast.error("Transaction was not sent");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(
        "Transaction failed: " +
          (error instanceof Error ? error.message : "Unknown error")
      );
      console.error("Transaction error:", error);
    }
  }

  return (
    <Button
      onClick={async () => {
        await handleUnstakeTransaction();
        // dispatch(setStreamflowDialogOpen(true));
      }}
      variant={"special"}
      className="h-[40px]"
    >
      <span className="p-3">Unstake</span>
    </Button>
  );
}
