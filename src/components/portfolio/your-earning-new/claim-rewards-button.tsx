"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { setStreamflowDialogOpen } from "@/lib/redux/features/buu-pricing";
import { getClaimRewardsTransactions } from "@/lib/solana/getClaimRewardsTransactions";
import { getClusterUrl } from "@/lib/solana/staking";
import { useAuthentication } from "@/providers/account.context";
import { useSolanaWallets } from "@privy-io/react-auth";
import { Connection } from "@solana/web3.js";
import toast from "react-hot-toast";
import { TUserStakedCard } from "./user-staked-card";

export default function ClaimRewardButton(staking: TUserStakedCard) {
  const { address, connectSolanaWallet, wallet } = useAuthentication();
  const { wallets } = useSolanaWallets();
  async function handleClaimRewards() {
    try {
      if (!wallets.length || !address || !wallet) {
        connectSolanaWallet();
        return;
      }
      const connection = new Connection(getClusterUrl());
      const transaction = await getClaimRewardsTransactions({
        address,
        staking,
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
      disabled={Number(staking.rewards) <= 0}
      onClick={async () => {
        await handleClaimRewards();
      }}
      className="h-[40px]"
    >
      <span className="p-3">Claim Rewards</span>
    </Button>
  );
}
