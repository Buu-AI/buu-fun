"use client";
import { Button } from "@/components/ui/button";
import { getUnStakingTransactions } from "@/lib/solana/getUnstakingTransaction";
import { getClusterUrl } from "@/lib/solana/staking";
import { useAuthentication } from "@/providers/account.context";
import { useSolanaWallets } from "@privy-io/react-auth";
import { Connection } from "@solana/web3.js";
import toast from "react-hot-toast";
import { TUserStakedCard } from "./user-staked-card";
import { useAppDispatch } from "@/hooks/redux";
import { setTogglers } from "@/lib/redux/features/buu-pricing";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function UnstakeButton({
  depositNonce,
  rewards,
  stakeUnlockedTs,
}: TUserStakedCard) {
  const [isLoading, setIsLoading] = useState(false);

  const { address, connectSolanaWallet, wallet } = useAuthentication();
  const { wallets } = useSolanaWallets();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const refreshStakingData = async () => {
    await queryClient.invalidateQueries({
      queryKey: ["get-token-balance"],
      exact: false,
      type: "all",
    });
    await queryClient.invalidateQueries({
      queryKey: ["get-global-staking-data"],
      exact: false,
      type: "all",
    });
    await queryClient.invalidateQueries({
      queryKey: ["token-data"],
      exact: false,
      type: "all",
    });
    await queryClient.invalidateQueries({
      queryKey: ["get-user-staking-data"],
      exact: false,
      type: "all",
    });

    await Promise.all([
      queryClient.refetchQueries({
        queryKey: ["get-token-balance"],
        exact: false,
        type: "all",
      }),
      queryClient.refetchQueries({
        queryKey: ["get-global-staking-data"],
        exact: false,
        type: "all",
      }),
      queryClient.refetchQueries({
        queryKey: ["token-data"],
        exact: false,
        type: "all",
      }),
      // The user staking query depends on the global staking data,
      // so we need to ensure it's re-fetched after global data is updated
      queryClient.refetchQueries({
        queryKey: ["get-user-staking-data"],
        exact: false,
        type: "all",
      }),
    ]);
    toast.dismiss();
    toast.success(
      "Token has been Unstaked, will credit to your account shortly"
    );
  };

  function revalidate() {
    setTimeout(async () => {
      await refreshStakingData();
    }, 7000);
  }

  async function handleUnstakeTransaction() {
    try {
      setIsLoading(true);
      if (!wallets.length || !address || !wallet) {
        connectSolanaWallet();
        return;
      }
      if (Number(rewards) > 0) {
        dispatch(
          setTogglers({ key: "unclaimedRewardsModalOpen", value: true })
        );
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
        toast.loading("Transaction sent! Waiting for confirmation...");

        // Wait for confirmation
        try {
          const confirmation = await connection.confirmTransaction(
            signature,
            "confirmed"
          );
          toast.dismiss();
          if (confirmation.value.err) {
            toast.error("Transaction failed on-chain");
            console.error("Transaction error:", confirmation.value.err);
          } else {
            toast.loading("Transaction received!, processing unstaking...");
            revalidate();
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
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      disabled={isLoading || new Date(stakeUnlockedTs) > new Date()}
      onClick={async () => {
        await handleUnstakeTransaction();
      }}
      variant={"special"}
      className="h-[40px]"
    >
      <span className="p-3">Unstake</span>
    </Button>
  );
}
