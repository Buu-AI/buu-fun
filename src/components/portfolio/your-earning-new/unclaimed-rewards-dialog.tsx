import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setTogglers } from "@/lib/redux/features/buu-pricing";
import ClaimRewardButton from "./claim-rewards-button";
import { TUserStakedCard } from "./user-staked-card";

export default function UnClaimedRewardsDialog(staking: TUserStakedCard) {
  const dispatch = useAppDispatch();
  const isOpened = useAppSelector(
    (state) => state.BuuPricing.unclaimedRewardsModalOpen,
  );
  return (
    <Dialog
      open={isOpened}
      onOpenChange={(value) => {
        dispatch(setTogglers({ key: "unclaimedRewardsModalOpen", value }));
      }}
    >
      <DialogContent className="rounded-[20px]  lg:rounded-[20px]  bg-buu/80 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>You have unclaimed rewards</DialogTitle>
          <DialogDescription>
            You have unclaimed rewards pending to be claimed to your wallet
          </DialogDescription>
        </DialogHeader>
        <div className="gap-2">
          <div className="grid grid-cols-[40%_60%]">
            <DialogClose asChild>
              <Button size={"special"} className="w-full" variant={"muted"}>
                Cancel
              </Button>
            </DialogClose>
            <ClaimRewardButton className="w-full" {...staking} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
