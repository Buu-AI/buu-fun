"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { setStreamflowDialogOpen } from "@/lib/redux/features/buu-pricing";
import { cn } from "@/lib/utils";

export default function StakeBuuButton({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(setStreamflowDialogOpen(true));
      }}
      // variant={"special"}
      className={cn("h-[40px]", className)}
    >
      Stake $BUU{" "}
    </Button>
  );
}
