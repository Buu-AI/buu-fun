"use client";
import { CoinStackIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTokenBalance } from "@/hooks/use-pricing";
import { useUserStakingData } from "@/hooks/use-staking-data";
import { ethers } from "ethers";
import {
  setSelectedAmountToStake,
  setTogglers,
} from "@/lib/redux/features/buu-pricing";
import { executeStakingTransaction } from "@/lib/solana/executeStakingTransaction";
import { getClusterUrl } from "@/lib/solana/staking";
import { formatWithComma } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSolanaWallets } from "@privy-io/react-auth";
import { Connection } from "@solana/web3.js";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import StakingSlider from "./staking-slider";
import BN from "bn.js";
import { useConfetti } from "@/providers/confetti-provider";

export default function StakingDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const { wallet, connectSolanaWallet, address } = useAuthentication();

  const { wallets } = useSolanaWallets();
  const openState = useAppSelector(
    (state) => state.BuuPricing.openStakingModal,
  );
  const {
    userStaking: { data: userStakingData },
  } = useUserStakingData();
  const queryClient = useQueryClient();
  const { data: tokenData } = useTokenBalance();
  const balance = tokenData?.value.uiAmount ?? 0;
  const decimals = userStakingData?.decimals ?? 6;
  const toBeStaked = useAppSelector((state) => state.BuuPricing.amountToStake);
  const dispatch = useAppDispatch();
  const confetti = useConfetti();
  const stakeInputSchema = z.object({
    amount: z
      .string({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
      })
      .refine(
        (value) => {
          try {
            if (Number(value) <= 0) return false;
            return true;
          } catch (error) {
            if (error) {
            }
            return false;
          }
        },
        { message: "Please enter a valid number" },
      )
      .refine(
        (value) => {
          if (!balance || balance <= 0) return false;

          try {
            // Convert the input value to BigNumber
            // Convert balance to BigNumber (if it's not already)
            const balanceInDecimals = ethers.parseUnits(
              balance.toString(),
              decimals,
            );
            return balanceInDecimals >= parseFloat(value);
          } catch (error) {
            console.error("Error comparing values:", error);
            return false;
          }
        },
        { message: "insufficient balance" },
      ),
  });

  const {
    setValue,
    watch,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(stakeInputSchema),
    defaultValues: {
      amount: toBeStaked || "0",
    },
  });

  // Watch the amount field to update Redux when it changes
  const amountValue = watch("amount");

  useEffect(() => {
    if (amountValue !== undefined) {
      dispatch(setSelectedAmountToStake(amountValue));
    }
  }, [amountValue, dispatch]);

  useEffect(() => {
    if (toBeStaked !== undefined) {
      setValue("amount", toBeStaked);
    }
  }, [toBeStaked, setValue]);

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
    toast.success("Staking successful!");
    dispatch(setTogglers({ key: "openStakingModal", value: false }));
  };

  function revalidate() {
    setTimeout(async () => {
      await refreshStakingData();
    }, 7000);
  }
  async function onSubmit(data: z.infer<typeof stakeInputSchema>) {
    try {
      setIsLoading(true);
      if (!wallets.length || !address || !wallet || !wallet?.address) {
        connectSolanaWallet();
        return;
      }
      if (wallet?.chainType !== "solana") {
        connectSolanaWallet();
        toast.error("Please connect using Solana wallet");
        return;
      }

      const connection = new Connection(getClusterUrl());

      // Show loading state
      toast.loading(`Creating transaction for ${data.amount}...`);
      const isFirstTimeStaking = !userStakingData?.userStakes.length;

      const scaledAmount = new BN(
        ethers
          .parseUnits(data.amount, userStakingData?.decimals ?? 6)
          .toString(),
      );

      const transaction = await executeStakingTransaction({
        address: wallet.address,
        amountToStake: scaledAmount,
        isFirstTimeStaking,
      });

      if (!transaction) {
        toast.dismiss();
        toast.error("Failed to create transaction");
        return;
      }

      toast.dismiss();
      toast.loading("Please confirm the transaction in your wallet");

      const signature = await wallet.walletData?.sendTransaction(
        transaction,
        connection,
      );
      toast.dismiss();
      if (signature) {
        toast.loading("Transaction sent! Waiting for confirmation...");

        // Wait for confirmation
        try {
          const confirmation = await connection.confirmTransaction(
            signature,
            "confirmed",
          );
          toast.dismiss();
          if (confirmation.value.err) {
            toast.dismiss();
            toast.error("Transaction failed on-chain");
            console.error("Transaction error:", confirmation.value.err);
          } else {
            confetti.runConfetti({
              duration: 3500,
            });
            toast.loading("Transaction received! processing transaction...");
            dispatch(setTogglers({ key: "openStakingModal", value: false }));
            revalidate();
          }
        } catch (confirmError) {
          toast.dismiss();
          toast.error("Failed to confirm transaction");
          console.error("Confirmation error:", confirmError);
        }
      } else {
        toast.dismiss();
        toast.error("Transaction was not sent");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(
        "Transaction failed: " +
          (error instanceof Error ? error.message : "Unknown error"),
      );
      console.error("Transaction error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAmountChange = (value: string) => {
    const input = value;
    // Allow only numbers, decimal point, and optional minus sign
    if (/^-?\d*\.?\d*$/.test(input)) {
      setValue("amount", input);
    }
  };
  return (
    <Dialog
      open={openState}
      onOpenChange={(value) => {
        dispatch(setTogglers({ key: "openStakingModal", value: value }));
      }}
    >
      <DialogContent className="rounded-[20px]  lg:rounded-[20px]  bg-buu/80 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle className="text-2xl">Stake</DialogTitle>
          <DialogDescription className="text-center font-medium max-w-md text-muted-foreground/60">
            If you in top 100 stakers, you&apos;ll start instantly earning
            rewards. Once you unstake, there&apos;s{" "}
            <span className="text-white">16 days cooldown</span> period.
          </DialogDescription>
        </DialogHeader>{" "}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex justify-between items-center">
              <Label className="uppercase text-xs font-medium text-muted-foreground/60 ">
                amount to stake
              </Label>
              <Label className="uppercase text-xs font-medium text-muted-foreground/60 ">
                balance: {formatWithComma(Number(balance))}
              </Label>
            </div>
            <Input
              value={amountValue}
              onChange={(e) => {
                handleAmountChange(e.target.value);
              }}
              className="py-2.5 mt-1 appearance-none text-lg h-auto border-gray-700 placeholder:text-gray-600 placeholder:font-medium "
              placeholder="3000"
            />
            {/* Display error message if there's an error */}
            {errors.amount && (
              <p className="text-xs font-medium ml-2 mt-1 text-red-500">
                {errors.amount.message}
              </p>
            )}
            <StakingSlider />
            {/* <StakingRewardReview /> */}
            <div className="mt-6">
              <Button disabled={isSubmitting || isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading{" "}
                  </>
                ) : (
                  <>
                    <CoinStackIcon />
                    Stake $BUU
                  </>
                )}
              </Button>{" "}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
