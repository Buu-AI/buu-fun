import React from "react";
import { Button } from "../ui/button";
import APRCalculatorIcon from "@/assets/icons/apr-calculator-icon";
import { useBuuPricingData } from "@/hooks/use-pricing-history";
import { useUserStakingData } from "@/hooks/use-staking-data";
import {
  formatNumber,
  formatUnits,
  multiplyAndFormatPricing,
} from "@/lib/utils";
import StakeBuuButton from "./stake-buu-button";

export default function EarningTotalStakedCard() {
  const { data } = useBuuPricingData();
  const {
    userStaking: { data: userStakingData },
    globalStaking: { data: globalStakingData },
  } = useUserStakingData();

  const totalStaked = formatUnits(
    userStakingData?.yourTotalStaked ?? "0",
    userStakingData?.decimals ?? 0
  );

  const totalStakedPrice = multiplyAndFormatPricing(
    Number(totalStaked),
    data?.price ?? 0
  );
  return (
    <div className="bg-buu shadow-buu-inner grid grid-cols-2 pt-6 pr-4 pb-5 pl-5 rounded-2xl  ">
      <div>
        <h4 className="font-medium tracking-tight text-muted-foreground/70">
          Your Total Staked{" "}
        </h4>
        <div className="flex gap-2 items-center pt-3 pb-0.5">
          <p className="text-2xl text-white font-medium leading-3">
            {" "}
            {formatNumber(Number(totalStaked))}
          </p>
          <p className="text-sm text-muted-foreground/40 font-medium">BUU</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground/50 tracking-tight font-medium">
            $ {totalStakedPrice}
          </p>{" "}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 flex-col">
        {/* <Button variant={"special"} className="h-[40px] w-full">
          <span className="p-3">Unstake</span>
        </Button> */}
        <StakeBuuButton className="w-full" />
        <Button variant={"special"} className="h-[40px] w-full bg-apr-button">
          <div className="p-3 flex items-center justify-center gap-1">
            <APRCalculatorIcon />
            <span className="">APR {globalStakingData?.apr?.toFixed(2)}%</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
