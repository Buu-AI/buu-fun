"use client";
import { useBuuPricingData } from "@/hooks/use-pricing-history";
import { multiplyAndFormatPricing } from "@/lib/utils";
import React from "react";

export default function YourEarningsPricing() {
  const { data } = useBuuPricingData();

  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="text-5xl font-medium">138.056</p>
        <p>$BUU</p>
      </div>
      <p className="text-muted-foreground/50 block lg:hidden tracking-tight font-medium text-sm">
        $ {multiplyAndFormatPricing(data?.price ?? 0 , 1388)}
      </p>
    </div>
  );
}
