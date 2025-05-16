"use client";
import { useAppDispatch } from "@/hooks/redux";
import { setStreamflowDialogOpen } from "@/lib/redux/features/buu-pricing";
import { Button } from "../ui/button";

export default function StakingClaimAndRestake() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(setStreamflowDialogOpen(true));
      }}
      className="h-[40px]"
    >
      <span className="p-3">Restake Rewards</span>
    </Button>
  );
}
