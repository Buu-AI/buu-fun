"use client";
import { useBuuPricingData } from "@/hooks/use-pricing-history";
import { useUserStakingData } from "@/hooks/use-staking-data";
import { formatUnits, multiplyAndFormatPricing } from "@/lib/utils";
import EarningAvailableCard from "./earning-available";
import EarningPlatformCredits from "./earning-platform-credits";
import EarningTotalStakedCard from "./earning-total-staked-card";
import YourEarningsPricing from "./your-earning-pricing";

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
      <div className="px-1  md:px-6 py-6">
        <div className="">
          <div className="flex items-center justify-between">
            <h3 className="font-medium   w-full text-center lg:text-left ">
              Your Earnings
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 pt-3">
            <YourEarningsPricing />
            <div className="flex items-center flex-wrap justify-center gap-3">
              {/* <StakingClaimButton /> */}
              {/* <StakingClaimAndRestakeButton /> */}
              {/* <WithdrawButton /> */}
            </div>
          </div>
          <p className="text-muted-foreground/50 hidden lg:block tracking-tight font-medium text-sm">
            $ {EarningPrice}
          </p>
        </div>

        <div className="w-full py-5 ">
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
