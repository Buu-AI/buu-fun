import SwitchIcon from "@/assets/icons/change-icon";
import Pill from "@/components/elements/pill";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useGlobalStakingData } from "@/hooks/use-global-staking";
import {
  useBuuPricingData,
  useTokenBalance,
} from "@/hooks/use-pricing-history";
import { cn, formatNumberWithFractions } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { calculateROI } from "./roi-calculations";
import RoiDetailedLine from "./roi-detail-line";
import RoiListInfo from "./roi-list-info";
export default function RoiStakingCard() {
  const { data } = useBuuPricingData();
  const { data: globalStakingData } = useGlobalStakingData();
  const { data: tokenData } = useTokenBalance();
  const tokenBalance = tokenData?.value?.uiAmount;
  const tokenPrice = (tokenBalance ?? 0) * (data?.price ?? 0);
  const aprPersentage = globalStakingData?.apr ?? 0;

  const [amount, setAmount] = useState<number | null>(100);

  const [stakedUpto, setStakedTo] = useState<1 | 7 | 30 | 365>(1);
  const [isCompounding, setIsCompounding] = useState<boolean>(true);
  const [compoundDays, setCompoundDays] = useState<1 | 7 | 14 | 30>(1);

  const { creditsValue, stakingRewards, totalROI } = calculateROI({
    amountStaked: amount ?? 0,
    apr: globalStakingData?.apr ?? 0,
    compoundFrequencyDays: compoundDays,
    stakingPeriodDays: stakedUpto,
    useCompounding: isCompounding,
  });

  function calculatePercentage(
    totalROI: number,
    amount: number | null
  ): number {
    if (amount && !isNaN(Number(amount)) && Number(amount) > 0) {
      return (totalROI / Number(amount)) * 100;
    }
    return 0;
  }

  const totalRoiInPercentage = calculatePercentage(totalROI, amount);

  return (
    <div className="">
      <div className="px-6">
        <p className="font-semibold tracking-tight text-xs">STAKED $BUU</p>
        <div className="my-2 p-3 border rounded-lg border-muted-foreground/20">
          <div className="flex items-center  ">
            <div className="flex  py-1">
              <p className="pr-1 font-medium text-muted-foreground/60">$</p>
              <input
                value={amount?.toFixed(2) ?? ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "") {
                    setAmount(null);
                    return;
                  }
                  if (!isNaN(Number(value)) && Number(value) >= 0) {
                    setAmount(Number(value));
                    return;
                  }
                }}
                className="bg-transparent font-medium tracking-tight appearance-none text-xl outline-none "
              />{" "}
            </div>
            <button className="w-6 h-6  flex">
              <SwitchIcon />
            </button>
          </div>
          <p className="text-sm font-medium text-muted-foreground/60">
            {formatNumberWithFractions(tokenBalance ?? 0)} <span>$BUU</span>
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setAmount(100);
            }}
            className="font-semibold uppercase text-muted-foreground/60"
          >
            <Pill
              size={"sm"}
              className=""
              variant={amount === 100 ? "white" : "default"}
            >
              $100
            </Pill>
          </button>
          <button
            onClick={() => {
              setAmount(1000);
            }}
            className="font-semibold uppercase text-muted-foreground/60"
          >
            <Pill
              size={"sm"}
              className=""
              variant={amount === 1000 ? "white" : "default"}
            >
              $1000
            </Pill>
          </button>
          <button
            // tokenPrice

            onClick={() => {
              if (tokenPrice) {
                setAmount(tokenPrice);
              }
            }}
            className="font-semibold uppercase"
          >
            <Pill
              size={"sm"}
              variant={amount === tokenPrice ? "white" : "default"}
            >
              My Balance
            </Pill>
          </button>
        </div>
        <div className="mt-6">
          <p className="font-semibold tracking-tight text-xs mb-3 uppercase">
            Staked up
          </p>
          <div className="flex items-center gap-4 justify-between bg-portfolio-statistics-button-background rounded-md px-2 py-2">
            <Button
              onClick={() => {
                setStakedTo(1);
              }}
              variant={stakedUpto === 1 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  stakedUpto !== 1,
              })}
            >
              1D
            </Button>
            <Button
              onClick={() => {
                setStakedTo(7);
              }}
              variant={stakedUpto === 7 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  stakedUpto !== 7,
              })}
            >
              7D
            </Button>
            <Button
              onClick={() => {
                setStakedTo(30);
              }}
              variant={stakedUpto === 30 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  stakedUpto !== 30,
              })}
            >
              30D
            </Button>
            <Button
              onClick={() => {
                setStakedTo(365);
              }}
              variant={stakedUpto === 365 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  stakedUpto !== 365,
              })}
            >
              1Y
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex mb-3 items-center justify-between">
            <Label
              htmlFor="compound-checkbox"
              className="font-semibold tracking-tight text-xs uppercase"
            >
              Compounding every
            </Label>
            <Checkbox
              checked={isCompounding}
              onCheckedChange={(value) => {
                if (typeof value === "boolean") {
                  setIsCompounding(value);
                }
              }}
              id="compound-checkbox"
              className="rounded-[4px] w-4 h-4  
              data-[state=checked]:bg-buu-blue/40
              data-[state=checked]:text-buu-blue
              border-muted-foreground/40
              border
              data-[state=checked]:border-none              
              "
            />{" "}
          </div>
          <div className="flex items-center gap-4 justify-between bg-portfolio-statistics-button-background rounded-md px-2 py-2">
            <Button
              onClick={() => {
                setCompoundDays(1);
              }}
              disabled={!isCompounding}
              variant={compoundDays === 1 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  compoundDays !== 1,
              })}
            >
              1D
            </Button>
            <Button
              onClick={() => {
                setCompoundDays(7);
              }}
              disabled={!isCompounding}
              variant={compoundDays === 7 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  compoundDays !== 7,
              })}
            >
              7D
            </Button>
            <Button
              onClick={() => {
                setCompoundDays(14);
              }}
              disabled={!isCompounding}
              variant={compoundDays === 14 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  compoundDays !== 14,
              })}
            >
              14D
            </Button>
            <Button
              onClick={() => {
                setCompoundDays(30);
              }}
              disabled={!isCompounding}
              variant={compoundDays === 30 ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  compoundDays !== 30,
              })}
            >
              30D
            </Button>
          </div>
        </div>
        <div className="mb-2 relative my-2 p-3 border rounded-lg border-muted-foreground/20">
          <div className="flex items-center">
            <div className="flex w-full max-w-sm  py-1">
              <p className="pr-1 font-medium text-muted-foreground/60">$</p>
              <div className="flex items-center gap-2">
                <p className="bg-transparent w-full font-medium tracking-tight appearance-none text-2xl outline-none">
                  {formatNumberWithFractions(totalROI)}
                </p>
                <Pill
                  size={"sm"}
                  className="font-semibold px-1.5 text-muted-foreground/60"
                >
                  {formatNumberWithFractions(totalRoiInPercentage)}%
                </Pill>
              </div>
            </div>
          </div>
          <p className="uppercase text-xs font-semibold text-muted-foreground/60">
            ROI AT Current rates
          </p>
          <BorderBeam
            initialOffset={0}
            size={70}
            colorFrom="rgba(119, 217, 253,1)"
            colorTo="rgba(119, 217, 253,1)"
            className="border-2 rounded-2xl z-50 relative"
          />{" "}
        </div>
      </div>
      <div className="mt-6">
        <Accordion
          type="single"
          collapsible
          className="bg-roi-accordion px-0 rounded-b-2xl "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="flex group  group  items-center justify-center w-full"
              arrowClass="hidden"
            >
              <div className="flex justify-center  items-center gap-1.5  py-2 rounded-md px-2 font-medium">
                <p className="text-base">Details</p>
                <div className="w-6 h-6 group-[&[data-state=open]]:rotate-180 transition-transform duration-700 ease-in-out">
                  <ArrowDown />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mb-10 text-base">
              <div>
                <div className="px-4 max-w-sm flex gap-3.5 flex-col items-center justify-center">
                  <RoiDetailedLine
                    title="APR (Staking Rewards)"
                    value={`$${formatNumberWithFractions(stakingRewards)}`}
                  />
                  <RoiDetailedLine
                    title="Credits Value (Current rate)"
                    value={`$${formatNumberWithFractions(creditsValue)}`}
                  />
                  <RoiDetailedLine
                    title="APR Rewards"
                    value={`${aprPersentage}%`}
                  />
                  <RoiDetailedLine title="APR Credits" value="30%" />
                </div>
                <div className="mt-2">
                  <RoiListInfo description="Rewards are calculated using current rates." />
                  <RoiListInfo description="Credits are awarded with each new deposit. After they unlock every three months, we recommend relocking them to earn additional credits." />
                  <RoiListInfo description="APR Credits are determined by the current USD-per-credit rate and assume that unlocked amounts are restaked every three months." />
                  <RoiListInfo description="APR is subject to depletion of the rewards pool." />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
