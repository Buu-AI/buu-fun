"use client";
import DexScreenerIcon from "@/assets/icons/dex-screener-icon";
import { LINKS } from "@/constants/social-links";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setBuyBuuDialogOpen } from "@/lib/redux/features/buu-pricing";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function BuyBuuRedirectDialog() {
  const isBuyBuuDialogOpen = useAppSelector(
    (state) => state.BuuPricing.buyBuuDialogOpen,
  );
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isBuyBuuDialogOpen}
      onOpenChange={(value) => {
        dispatch(setBuyBuuDialogOpen(value));
      }}
    >
      <DialogContent className="rounded-[20px]  lg:rounded-[20px]  bg-buu/60 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle>You are being redirected to DexScreener</DialogTitle>
          <DialogDescription className="text-center font-medium max-w-md text-muted-foreground/60">
            In app purchases is in progress, meanwhile, you can buy $buu using
            DexScreener
          </DialogDescription>
        </DialogHeader>
        <div>
          <Link
            href={LINKS.BUY_BUU_DEX_SCREENER}
            target="_blank"
            className={buttonVariants({
              size: "buu",
              variant: "special",
              className: "w-full",
            })}
          >
            <span>Continue to</span>
            <DexScreenerIcon />
            <span>Dex Screener</span>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
