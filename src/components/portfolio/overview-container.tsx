"use client";
import { JupiterAgIcon } from "@/assets/icons";
import DexScreenerIcon from "@/assets/icons/dex-screener-icon";
import { LINKS } from "@/constants/social-links";
import { useGlobalStakingData } from "@/hooks/use-global-staking";
import { useBuuPricingData } from "@/hooks/use-pricing-history";
import { formatNumberWithFractions, formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import OverviewTilesContainer from "./overview-tiles";
import CopyContractAddress from "./copy-contract-address";

export default function OverviewContainer() {
  const { data } = useBuuPricingData();
  const { data: GlobalStakingData } = useGlobalStakingData();

  const apr = GlobalStakingData?.apr;
  const price = data?.price;
  const FDSupply = data?.fullyDilutedValue;
  const marketCap = data?.marketCap;
  const totalSupply = data?.totalSupply;
  // const
  return (
    <div className="backdrop-blur-lg rounded-3xl">
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
        <OverviewTilesContainer
          // pill="+1,33%"
          value={`$${formatPrice(price ?? 0.0004)}`}
        />
        <OverviewTilesContainer
          title="Total Supply"
          value={`${formatNumberWithFractions(totalSupply ?? 0)}`}
        />
        <OverviewTilesContainer
          title="Market Cap"
          value={`$ ${formatNumberWithFractions(marketCap ?? 0)}`}
        />
        <OverviewTilesContainer
          title="Fully Diluted Value (FDV)"
          value={`$ ${formatNumberWithFractions(FDSupply ?? 0)}`}
        />
        <OverviewTilesContainer
          pill={`APR ${apr?.toFixed(2) ?? 0}%`}
          title="Staking Yield"
        />
        <CopyContractAddress address={`${data?.address ?? ""}`} />
        {/* <OverviewTilesContainer
          title="Contract"
          value={data?.address?.slice(0, 6)}
        /> */}
        {/* <Link href={"/"} className="w-full h-full">
          <OverviewTilesContainer title="Audit" value="View Audit" />
        </Link> */}
        <OverviewTilesContainer
          title="Buy/Sell"
          value={
            <div className="flex items-center gap-2">
              <Link
                target="_blank"
                href={LINKS.BUY_BUU_DEX_SCREENER}
                className="w-4 h-4"
              >
                <DexScreenerIcon />
              </Link>
              <Link
                target="_blank"
                href={LINKS.BUY_BUU_JUPITER_AG}
                className="w-4 h-4"
              >
                <Image
                  src={JupiterAgIcon}
                  width={250}
                  height={250}
                  alt="jupiter ag swap icon"
                />
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
}
