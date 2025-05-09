import { useBuuPricingData } from "@/hooks/use-pricing-history";
import { useUserStakingData } from "@/hooks/use-staking-data";
import {
  formatNumber,
  formatUnits,
  multiplyAndFormatPricing,
} from "@/lib/utils";
import BuyBuuButton from "./buy-buu-button";
import StakingClaimButton from "./staking-claim-button";

export default function EarningAvailableCard() {
  const { data } = useBuuPricingData();
  const {
    userStaking: { data: userStakingData },
  } = useUserStakingData();

  const available = formatUnits(
    userStakingData?.available ?? "0",
    userStakingData?.decimals ?? 0,
  );

  const AvailablePrice = multiplyAndFormatPricing(
    Number(available),
    data?.price ?? 0,
  );

  return (
    <div className="bg-buu shadow-buu-inner grid grid-cols-2 pt-6 pr-4 pb-5 pl-5 rounded-2xl  ">
      <div>
        <h4 className="font-medium tracking-tight text-muted-foreground/70">
          Available
        </h4>
        <div className="flex gap-2 items-center pt-3 pb-0.5">
          <p className="text-2xl text-white font-medium leading-3">
            {formatNumber(Number(available))}
          </p>
          <p className="text-sm text-muted-foreground/40 font-medium">BUU</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground/50 tracking-tight font-medium">
            {/*  */}$ {AvailablePrice}
          </p>{" "}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 flex-col">
        <StakingClaimButton className="w-full" />
        <BuyBuuButton />
        {/* <Button className="h-[40px] w-full">
          <span className="p-3">Buy $Buu</span>
        </Button> */}
      </div>
    </div>
  );
}
