import FlashIcon from "@/assets/icons/flash-icon";
import React from "react";
import { Button } from "../ui/button";
import StakingDialog from "./stake-dialog";

export default function EarningPlatformCredits() {
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
            <span className="blue-text-clip">1256 </span> Platform Credits
          </p>
          <p className="text-sm font-medium text-muted-foreground/60">
            Stake $BUU to get more platform credits{" "}
          </p>
        </div>
      </div>
      <StakingDialog />
    </div>
  );
}
