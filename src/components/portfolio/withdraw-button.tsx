"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { setStreamflowDialogOpen } from "@/lib/redux/features/buu-pricing";

export default function WithdrawButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(setStreamflowDialogOpen(true));
      }}
      className="h-[40px]"
    >
      <span className="p-3">Withdraw</span>
    </Button>
  );
}
