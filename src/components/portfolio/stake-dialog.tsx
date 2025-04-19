import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useTokenBalance } from "@/hooks/use-pricing-history";
import { useUserStakingData } from "@/hooks/use-staking-data";
import { setSelectedAmountToStake } from "@/lib/redux/features/buu-pricing";
import { executeStakingTransaction } from "@/lib/solana/executeStakingTransaction";
import { formatWithComma } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Connection } from "@solana/web3.js";
import { useEffect } from "react";
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
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import StakeConfirmButton from "./stake-confirm-button";
import StakingRewardReview from "./staking-reward-review";
import StakingSlider from "./staking-slider";
import { getClusterUrl } from "@/lib/solana/staking";

export default function StakingDialog() {
  const { wallet, connectSolanaWallet } = useAuthentication();
  // const { data } = useBuuPricingData();
  const {
    userStaking: { data: userStakingData },
    // globalStaking: { data: globalStakingData },
  } = useUserStakingData();

  const { data: tokenData } = useTokenBalance();
  const earnings = tokenData?.value.uiAmount ?? 0;
  // const earnings = formatUnits(
  //   userStakingData?.yourEarnings ?? "0",
  //   userStakingData?.decimals ?? 0
  // );

  const toBeStaked = useAppSelector((state) => state.BuuPricing.amountToStake);
  const dispatch = useAppDispatch();

  // Define the validation schema
  const stakeInputSchema = z.object({
    amount: z
      .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
      })
      .positive("Amount must be positive")
      .max(
        Number(tokenData?.value.uiAmount ?? 0),
        `Maximum ${earnings} $BUU allowed`
      ),
  });

  // Initialize form with react-hook-form
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(stakeInputSchema),
    defaultValues: {
      amount: toBeStaked || 0,
    },
  });

  // Watch the amount field to update Redux when it changes
  const amountValue = watch("amount");

  // Update Redux when form value changes
  useEffect(() => {
    if (amountValue !== undefined) {
      dispatch(setSelectedAmountToStake(Number(amountValue)));
    }
  }, [amountValue, dispatch]);

  // Update form when Redux state changes (from slider or elsewhere)
  useEffect(() => {
    if (toBeStaked !== undefined) {
      setValue("amount", toBeStaked);
    }
  }, [toBeStaked, setValue]);

  async function onSubmit(data: z.infer<typeof stakeInputSchema>) {
    if (!wallet || !wallet.address) {
      connectSolanaWallet();
      return;
    }

    if (wallet?.chainType !== "solana") {
      connectSolanaWallet();
      toast.error("Please connect using Solana wallet");
      return;
    }

    try {
      const connection = new Connection(getClusterUrl());

      // Show loading state
      toast.loading(`Creating transaction for ${data.amount}...`);
      const transaction = await executeStakingTransaction({
        address: wallet.address,
        amountToStake: data.amount * 10 ** (userStakingData?.decimals ?? 1),
      });

      if (!transaction) {
        toast.dismiss();
        toast.error("Failed to create transaction");
        return;
      }

      toast.dismiss();
      toast.loading("Please confirm the transaction in your wallet");

      // Use the wallet's sendTransaction method
      // const signature = await wallet.walletData?.sendTransaction(
      //   transaction,
      //   connection
      // );
      const signature = await wallet.walletData?.sendTransaction(
        transaction,
        connection
      );
      console.log(signature);
      toast.dismiss();

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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-medium">Stake $BUU</Button>
      </DialogTrigger>
      <DialogContent className="rounded-[20px]  lg:rounded-[20px]  bg-buu/80 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle className="text-2xl">Stake</DialogTitle>
          <DialogDescription className="text-center font-medium max-w-md text-muted-foreground/60">
            If you in top 100 stakers, you&apos;ll start instantly earning
            rewards. Once you unstake, there&apos;s{" "}
            <span className="text-white">16 yours cooldown</span> period.
          </DialogDescription>
        </DialogHeader>{" "}
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex justify-between items-center">
              <Label className="uppercase text-xs font-medium text-muted-foreground/60 ">
                amount to stake
              </Label>
              <Label className="uppercase text-xs font-medium text-muted-foreground/60 ">
                balance: {formatWithComma(Number(earnings))}
              </Label>
            </div>
            <Input
              {...register("amount", { valueAsNumber: true })}
              className="py-2.5 mt-1 appearance-none text-lg h-auto border-gray-700"
              placeholder="30"
            />
            {/* Display error message if there's an error */}
            {errors.amount && (
              <p className="text-xs ml-2 text-red-500">
                {errors.amount.message}
              </p>
            )}
            <StakingSlider />
            <StakingRewardReview />
            <div className="mt-6">
              <StakeConfirmButton />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
