"use client";
import StreamflowIcon from "@/assets/icons/streamflow-logo";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { LINKS } from "@/constants/social-links";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setStreamflowDialogOpen } from "@/lib/redux/features/buu-pricing";

export default function StreamFlowRedirectDialog() {
  const isStreamFlowDialogOpen = useAppSelector(
    (state) => state.BuuPricing.streamflowDialogOpen
  );
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isStreamFlowDialogOpen}
      onOpenChange={(value) => {
        dispatch(setStreamflowDialogOpen(value));
      }}
    >
      <DialogContent className="rounded-[20px]  lg:rounded-[20px]  bg-buu/60 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle>You are being redirected to Streamflow</DialogTitle>
          <DialogDescription className="text-center font-medium max-w-md text-muted-foreground/60">
            In app Staking is in progress, meanwhile, you can stake $buu using
            streamflow
          </DialogDescription>
        </DialogHeader>
        <div>
          <Link
            href={LINKS.STREAMFLOW_STAKING}
            target="_blank"
            className={buttonVariants({
              size: "buu",
              variant: "special",
              className: "w-full",
            })}
          >
            <span>Continue to</span>
            <StreamflowIcon />
            <span>Streamflow</span>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
