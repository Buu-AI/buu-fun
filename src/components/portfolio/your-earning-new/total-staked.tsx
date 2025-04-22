import APRCalculatorIcon from "@/assets/icons/apr-calculator-icon";
import { Button } from "@/components/ui/button";
import { useBuuPricingData } from "@/hooks/use-pricing-history";
import { useUserStakingData } from "@/hooks/use-staking-data";
import {
  formatNumber,
  formatUnits,
  multiplyAndFormatPricing
} from "@/lib/utils";
import StakeBuuButton from "../stake-buu-button";

export default function TotalStaked() {
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
    <div className="bg-total-staked py-6 px-5 mb-6 grid grid-cols-2 grid-flow-col">
      <div>
        <p className="text-muted-foreground/60 font-medium leading-none">
          Your Total Staked
        </p>
        <div className="flex items-center gap-1 pt-3 ">
          <p className="text-2xl font-medium tracking-tight leading-none ">
            {formatNumber(Number(totalStaked ?? "0"))}
          </p>{" "}
          <span className="text-muted-foreground/60">$BUU</span>
        </div>
        <div className="pt-1.5">
          <p className="text-muted-foreground/50  tracking-tight font-medium text-sm">
            $ {totalStakedPrice}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-2  w-full">
        <StakeBuuButton className="w-full" />
        <Button
          variant={"special"}
          className="h-[40px]  w-full bg-apr-button border-none"
        >
          <div className="p-3 flex items-center justify-center gap-1">
            <APRCalculatorIcon />
            <span className="">APR {globalStakingData?.apr?.toFixed(2)}%</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
