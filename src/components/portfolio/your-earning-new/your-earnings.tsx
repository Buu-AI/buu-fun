"use client";
import { useBuuPricingData } from "@/hooks/use-pricing";
import { useUserStakingData } from "@/hooks/use-staking-data";
import {
  cn,
  formatUnits,
  formatWithComma,
  multiplyAndFormatPricing,
} from "@/lib/utils";
import EarningPlatformCredits from "../earning-platform-credits";
import TotalStaked from "./total-staked";
import UserStakedCards from "./user-staked-cards";

export default function YourEarnings() {
  const { data } = useBuuPricingData();
  const {
    userStaking: { data: userStakingData },
  } = useUserStakingData();

  const earnings = formatUnits(
    userStakingData?.yourEarnings ?? "0",
    userStakingData?.decimals ?? 0,
  );

  const EarningPrice = multiplyAndFormatPricing(
    Number(earnings),
    data?.price ?? 0,
  );
  return (
    <div className="bg-portfolio-statistics mt-5 rounded-lg">
      <div className="px-2  md:px-6 py-5">
        <div className="">
          <div className="flex items-center justify-between">
            <h3 className="font-medium   w-full lg:text-left ">
              Your Earnings
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-5xl font-medium tracking-tight">
              {formatWithComma(Number(earnings ?? "0"))}
            </p>
            <span className="text-sm text-muted-foreground/60">$BUU</span>
          </div>
          <p className="text-muted-foreground/50 hidden lg:block tracking-tight font-medium text-sm">
            $ {EarningPrice}
          </p>
        </div>
      </div>
      <div className="px-1  md:px-6">
        <TotalStaked />
      </div>
      <div
        className={cn("px-1  md:px-6", {
          hidden: !userStakingData || !userStakingData?.userStakes?.length,
        })}
      >
        <p className="font-medium text-muted-foreground/60 tracking-tight">
          Your Stakes
        </p>
        <div className="w-full my-6">
          <UserStakedCards />
        </div>
      </div>
      <EarningPlatformCredits />
    </div>
  );
}
