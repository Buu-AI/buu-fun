"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setBooleanToggler } from "@/lib/redux/features/buu-pricing";
import React from "react";
import RoiStakingCard from "./roi-staking-card";

export default function RoiStakingDialog() {
  const state = useAppSelector(
    (state) => state.BuuPricing.roiStakingDialogOpen
  );
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={state}
      onOpenChange={(value) => {
        dispatch(setBooleanToggler({ key: "roiStakingDialogOpen", value }));
      }}
    >
      <DialogContent className="rounded-[20px] px-6 lg:rounded-[20px]  bg-buu/80 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle className="text-2xl text-center font-medium max-w-xs">
            ROI Calculator{" "}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Let you calculate roi for the $Buu Tokens
          </DialogDescription>
        </DialogHeader>
        <div>
          <RoiStakingCard />
        </div>
      </DialogContent>
    </Dialog>
  );
}
