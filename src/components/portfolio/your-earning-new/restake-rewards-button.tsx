"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { setStreamflowDialogOpen } from "@/lib/redux/features/buu-pricing";

export default function RestakeRewardButton() {
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
