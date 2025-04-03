import React from "react";
import { Button } from "../ui/button";
import EarningAvailableCard from "./earning-available";
import EarningTotalStakedCard from "./earning-total-staked-card";
import EarningPlatformCredits from "./earning-platform-credits";

export default function YourEarnings() {
  return (
    <div className="bg-portfolio-statistics mt-5 rounded-lg">
      <div className="px-1 md:px-6 md:py-6">
        <div className="">
          <div className="flex items-center justify-between">
            <h3 className="font-medium   w-full text-center lg:text-left ">
              Your Earnings
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 pt-3">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-5xl font-medium">138.012456</p>
                <p>$BUU</p>
              </div>
              <p className="text-muted-foreground/50 block lg:hidden tracking-tight font-medium text-sm">
                $ 0.084
              </p>
            </div>
            <div className="flex items-center flex-wrap justify-center gap-3">
              <Button variant={"special"} className="h-[40px]">
                <span className="p-3">Claim</span>
              </Button>
              <Button className="h-[40px]">
                <span className="p-3">Claim & Restake</span>
              </Button>
              <Button className="h-[40px]">
                <span className="p-3">Withdraw</span>
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground/50 hidden lg:block tracking-tight font-medium text-sm">
            $ 0.084
          </p>
        </div>

        <div className="w-full p-5">
          <div className="grid md:grid-cols-2 gap-3">
            <EarningAvailableCard />
            <EarningTotalStakedCard />
          </div>
        </div>
      </div>
      <EarningPlatformCredits />
    </div>
  );
}
