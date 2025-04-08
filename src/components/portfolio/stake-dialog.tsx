import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import StakingRewardReview from "./staking-reward-review";
import StakingSlider from "./staking-slider";

export default function StakingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-medium">Stake $BUU</Button>
      </DialogTrigger>
      <DialogContent className="rounded-[20px]  lg:rounded-[20px]  bg-buu/80 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle className="text-2xl">Stake</DialogTitle>
          <DialogDescription className="text-center font-medium max-w-md text-muted-foreground/60">
            If you in top 100 stakers, you&apos;ll start instantly earning
            rewards. Once you unstake, there&apos;s{" "}
            <span className="text-white">16 yours cooldown</span> period.
          </DialogDescription>
        </DialogHeader>{" "}
        <div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <Label className="uppercase text-xs font-medium text-muted-foreground/60 ">
                amount to stake
              </Label>
              <Label className="uppercase text-xs font-medium text-muted-foreground/60 ">
                balance: 552,567.292
              </Label>
            </div>
            <Input
              //   {...register("expiresIn.value", {
              // valueAsNumber: true,
              //   })}
              className="py-2.5 mt-1 text-lg h-auto border-gray-700"
              placeholder="30"
            />
            <StakingSlider />
            <StakingRewardReview />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
