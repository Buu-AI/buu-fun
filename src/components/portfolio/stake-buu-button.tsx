"use client";
import { useAppDispatch } from "@/hooks/redux";
import { useTokenBalance } from "@/hooks/use-pricing";
import { setTogglers } from "@/lib/redux/features/buu-pricing";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useSolanaWallets } from "@privy-io/react-auth";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { config } from "./buy-buu-button";

export default function StakeBuuButton({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const {
    wallet,
    connectSolanaWallet,
    address,
    isAuthenticated,
    loading,
    login,
  } = useAuthentication();
  const { wallets } = useSolanaWallets();
  const { data: tokenData, isLoading } = useTokenBalance();

  return (
    <Button
      disabled={loading || isLoading}
      onClick={() => {
        if (!isAuthenticated) {
          login({ walletChainType: "solana-only" });
        }
        if (!tokenData?.value?.uiAmount) {
          toast.error("Please purchase $buu token to start staking");
          window.Jupiter.init(config);
          return;
        }
        if (!wallets.length || !address || !wallet || !wallet?.address) {
          connectSolanaWallet();
          return;
        }
        if (wallet?.chainType !== "solana") {
          connectSolanaWallet();
          toast.error("Please connect using Solana wallet");
          return;
        }
        dispatch(setTogglers({ key: "openStakingModal", value: true }));
      }}
      // variant={"special"}
      className={cn("h-[40px]", className)}
    >
      Stake $BUU{" "}
    </Button>
  );
}
