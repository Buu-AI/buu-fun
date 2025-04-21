"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import SubscriptionContent from "./subscription-content";

export default function SubscriptionDialog() {
  const isModelOpen = useAppSelector(
    (state) => state.subscription.isSubscriptionModelOpen,
  );
  const dispatch = useAppDispatch();
  return (
    <Dialog
      onOpenChange={(open) => dispatch(setSubscriptionModel(open))}
      open={isModelOpen}
    >
      <DialogContent className="md:rounded-[20px] scrollbar-w-hidden scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded overflow-scroll pt-11 pb-4 lg:rounded-[20px] bg-subscription-dialog max-w-screen-md max-h-[98dvh]">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-2xl">Select a Plan</DialogTitle>
          <DialogDescription className="text-sm">
            Get access to more generation hours and priority queue
          </DialogDescription>
        </DialogHeader>
        <SubscriptionContent />
      </DialogContent>
    </Dialog>
  );
}
