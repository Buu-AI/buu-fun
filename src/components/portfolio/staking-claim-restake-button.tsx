'use client'
import React from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { setStreamflowDialogOpen } from "@/lib/redux/features/buu-pricing";
import { useAppDispatch } from "@/hooks/redux";

export default function StakingClaimAndRestake() {
  const dispatch = useAppDispatch()
    return (
      <Button
      onClick={()=> {
        dispatch(setStreamflowDialogOpen(true))
      }}
      className="h-[40px]"
    >
      <span className="p-3">Claim & Restake</span>
    </Button>
  );
}
