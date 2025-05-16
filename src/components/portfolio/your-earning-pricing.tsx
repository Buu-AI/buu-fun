"use client";
import { useBuuPricingData } from "@/hooks/use-pricing";
import { useUserStakingData } from "@/hooks/use-staking-data";
import {
  formatNumber,
  formatPrice,
  formatUnits,
  multiplyAndFormatPricing,
} from "@/lib/utils";
import React from "react";

export default function YourEarningsPricing() {
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
    <div>
      <div className="flex items-center gap-2">
        <p className="text-5xl font-medium">{formatNumber(Number(earnings))}</p>
        <p>$BUU</p>
      </div>
      <p className="text-muted-foreground/50 block lg:hidden tracking-tight font-medium text-sm">
        $ {formatPrice(Number(EarningPrice))}
      </p>
    </div>
  );
}
