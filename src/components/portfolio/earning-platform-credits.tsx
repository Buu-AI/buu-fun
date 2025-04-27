"use client";
import FlashIcon from "@/assets/icons/flash-icon";
import useUserCredits from "@/hooks/use-credits";
import { getFixedCredits } from "@/lib/utils";
import RoiButton from "./your-earning-new/roi-button";

export default function EarningPlatformCredits() {
  const credits = useUserCredits();
  return (
    <div className="bg-[#1C202733] border py-4 px-[18px] flex items-center justify-between  border-white/5 rounded-b-lg w-full">
      <div className="flex items-center gap-3.5">
        <div className="bg-platform-credit px-1.5 py-2 w-[40px] h-[40px] rounded-xl flex items-center justify-center">
          <div className="flex h-5 w-5">
            <FlashIcon />
          </div>{" "}
        </div>
        <div>
          <p className="text-xl font-medium">
            <span className="blue-text-clip">
              {getFixedCredits(credits.data?.available)}{" "}
            </span>{" "}
            Platform Credits
          </p>
          <p className="text-sm font-medium text-muted-foreground/60">
            Stake $BUU to get more platform credits{" "}
          </p>
        </div>
      </div>
      {/* <RoiButton /> */}
      {/* Dont remove the dialog, it will be replaced in future */}
      {/* <StakingDialog /> */}
      {/* <StakeBuuButton /> */}
    </div>
  );
}
