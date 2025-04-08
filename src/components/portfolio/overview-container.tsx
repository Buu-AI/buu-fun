"use client";
import React from "react";
import OverviewTilesContainer from "./overview-tiles";
import { useBuuPricingData } from "@/hooks/use-pricing-history";

export default function OverviewContainer() {
  const { data } = useBuuPricingData();
  console.log("OVERVIEW:", data);
  return (
    <div className="">
      <div className="px-4 py-4   border-white/5 border rounded-t-3xl  bg-overview-portfolio">
        <p className="uppercase text-xs font-medium">Overview</p>
      </div>
      <div className="px-4 py-5  bg-buu">
        <p className="font-medium tracking-tighter  text-muted-foreground/60">
          The BUU.FUN token (BUU) is an access key for AI agents and developers
          to consume private, uncensored inference through the BUU.FUN API,
          without paying per request. Stakers control an ongoing flow of
          BUU.FUN&apos;s inference capacity via its API, while receiving yield.
        </p>
        <p className="font-medium tracking-tighter text-muted-foreground/60 pt-4">
          Stakers control an ongoing flow of BUU.FUN&apos;s inference capacity
          via its API, while receiving yield.
        </p>
      </div>
      <div className="px-4  bg-buu pb-4 rounded-b-3xl flex items-center justify-center gap-2 flex-col">
        <OverviewTilesContainer pill="+1,33%" value="$3.26" />
        <OverviewTilesContainer title="Total Supply" value="101.51M" />
        <OverviewTilesContainer title="Market Cap" value="$ 91.28M" />
        <OverviewTilesContainer
          title="Fully Diluted Value (FDV)"
          value="$ 328.02M"
        />
        <OverviewTilesContainer pill="APR 88.78%" title="Staking Yield" />
        <OverviewTilesContainer title="Contract" value="0xacfE" />
        <OverviewTilesContainer title="Audit" value="View Audit" />
        <OverviewTilesContainer title="Buy/Sell" />
      </div>
    </div>
  );
}
