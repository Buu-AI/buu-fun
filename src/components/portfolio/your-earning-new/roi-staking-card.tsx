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
import { useBuuPricingData, useTokenBalance } from "@/hooks/use-pricing";
import { cn, formatNumberWithFractions } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import {
  calculateROI,
  STAKED_UP_TO,
  TStakedUptoValues,
} from "./roi-calculations";
import RoiDetailedLine from "./roi-detail-line";
import RoiListInfo from "./roi-list-info";
import StakedUpButton from "./StakedUpButton";

export default function RoiStakingCard() {
  const { data } = useBuuPricingData();
  const { data: globalStakingData } = useGlobalStakingData();
  const { data: tokenData } = useTokenBalance();
  const tokenBalance = tokenData?.value?.uiAmount;
  const tokenPrice = (tokenBalance ?? 0) * (data?.price ?? 0);
  const aprPersentage = globalStakingData?.apr ?? 0;

  const [inputAmount, setAmount] = useState<string>("100");
  function getNumber(value: string) {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
  }

  const amount = getNumber(inputAmount);

  const [isUsd, setIsUsd] = useState<boolean>(true);

  const [stakedUpto, setStakedTo] = useState<TStakedUptoValues>(90);
  const [isCompounding, setIsCompounding] = useState<boolean>(true);
  const [compoundDays, setCompoundDays] = useState<1 | 7 | 14 | 30>(1);

  // Conversion functions between USD and tokens
  const usdToToken = (usdAmount: number): number => {
    return data?.price ? usdAmount / data.price : 0;
  };

  const tokenToUsd = (tokenAmount: number): number => {
    return data?.price ? tokenAmount * data.price : 0;
  };

  // Get the effective USD amount for calculations
  const effectiveUsdAmount = isUsd ? (amount ?? 0) : tokenToUsd(amount ?? 0);

  const { creditsValue, stakingRewards, totalROI } = calculateROI({
    amountStaked: effectiveUsdAmount,
    apr: globalStakingData?.apr ?? 0,
    compoundFrequencyDays: compoundDays,
    stakingPeriodDays: stakedUpto,
    useCompounding: isCompounding,
  });

  // Convert ROI back to token if needed for display
  const displayROI = isUsd ? totalROI : usdToToken(totalROI);

  function calculatePercentage(
    totalROI: number,
    amount: number | null,
  ): number {
    if (amount && !isNaN(Number(amount)) && Number(amount) > 0) {
      return (totalROI / Number(amount)) * 100;
    }
    return 0;
  }

  const totalRoiInPercentage = isUsd
    ? calculatePercentage(totalROI, amount)
    : calculatePercentage(displayROI, amount);

  // Handle input value change with proper conversion
  const handleAmountChange = (value: string) => {
    const input = value;

    // Allow only numbers, decimal point, and optional minus sign
    if (/^-?\d*\.?\d*$/.test(input)) {
      setAmount(input);
    }
  };

  // Handle preset amounts with proper conversion
  const handlePresetAmount = (presetUsdAmount: number) => {
    const presetAmount = isUsd ? presetUsdAmount : usdToToken(presetUsdAmount);
    setAmount(presetAmount.toFixed(2));
  };

  // Toggle between USD and token
  const toggleCurrency = () => {
    if (amount !== null) {
      // Convert the current amount when switching
      const convertedAmount = isUsd ? usdToToken(amount) : tokenToUsd(amount);
      setAmount(Number(convertedAmount.toFixed(2)).toFixed(2));
    }
    setIsUsd(!isUsd);
  };

  return (
    <div className="">
      <div className="px-6">
        <p className="font-semibold tracking-tight text-xs">
          STAKED {isUsd ? "USD" : "$BUU"}
        </p>
        <div className="my-2 p-3 border rounded-lg border-muted-foreground/20">
          <div className="flex items-center justify-between">
            <div className="flex py-1">
              {isUsd && (
                <p className="pr-1 font-medium text-muted-foreground/60">$</p>
              )}
              <input
                value={inputAmount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="bg-transparent max-w-[200px]   font-medium tracking-tight  text-xl outline-none"
              />
              {!isUsd && <span className="pl-1 text-xl font-medium">$BUU</span>}
            </div>
            <button
              className="w-6 h-6 flex ml-2"
              onClick={toggleCurrency}
              aria-label={`Switch to ${isUsd ? "$BUU" : "USD"}`}
            >
              <SwitchIcon />
            </button>
          </div>
          <p className="text-sm font-medium text-muted-foreground/60">
            {isUsd ? (
              <>
                {formatNumberWithFractions(usdToToken(amount ?? 0))}{" "}
                <span>$BUU</span>
              </>
            ) : (
              <>
                ${formatNumberWithFractions(tokenToUsd(amount ?? 0))}{" "}
                <span>USD</span>
              </>
            )}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => handlePresetAmount(100)}
            className="font-semibold uppercase text-muted-foreground/60"
          >
            <Pill
              size={"sm"}
              className=""
              variant={
                isUsd
                  ? amount === 100
                    ? "white"
                    : "default"
                  : Math.abs(amount! - usdToToken(100)) < 0.000001
                    ? "white"
                    : "default"
              }
            >
              {isUsd
                ? "$100"
                : `${formatNumberWithFractions(usdToToken(100))} $BUU`}
            </Pill>
          </button>
          <button
            onClick={() => handlePresetAmount(1000)}
            className="font-semibold uppercase text-muted-foreground/60"
          >
            <Pill
              size={"sm"}
              className=""
              variant={
                isUsd
                  ? amount === 1000
                    ? "white"
                    : "default"
                  : Math.abs(amount! - usdToToken(1000)) < 0.000001
                    ? "white"
                    : "default"
              }
            >
              {isUsd
                ? "$1000"
                : `${formatNumberWithFractions(usdToToken(1000))} $BUU`}
            </Pill>
          </button>
          <button
            onClick={() => {
              if (isUsd && tokenPrice) {
                setAmount(tokenPrice.toFixed(2));
              } else if (!isUsd && tokenBalance) {
                setAmount(tokenBalance.toFixed(2));
              }
            }}
            className={cn("font-semibold uppercase", {
              hidden: !tokenData?.value.amount,
            })}
          >
            <Pill
              size={"sm"}
              variant={
                isUsd
                  ? amount?.toFixed(2) === tokenPrice?.toFixed(2)
                    ? "white"
                    : "default"
                  : amount?.toFixed(2) === tokenBalance?.toFixed(2)
                    ? "white"
                    : "default"
              }
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
            {Object.entries(STAKED_UP_TO).map(([key, data]) => {
              return (
                <StakedUpButton
                  key={`staked-up-button-${key}-${data.title.trim()}`}
                  stakedUpTo={data.value}
                  title={data.title}
                  CurrStakedUpto={stakedUpto}
                  onChange={(value) => {
                    setStakedTo(value);
                  }}
                />
              );
            })}
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
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
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
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
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
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
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
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  compoundDays !== 30,
              })}
            >
              30D
            </Button>
          </div>
        </div>
        <div className="mb-2 relative my-2 p-3 border rounded-lg border-muted-foreground/20">
          <div className="flex items-center">
            <div className="flex w-full max-w-sm py-1">
              {isUsd && (
                <p className="pr-1 font-medium text-muted-foreground/60">$</p>
              )}
              <div className="flex items-center gap-2">
                <p className="bg-transparent w-full font-medium tracking-tight appearance-none text-2xl outline-none">
                  {formatNumberWithFractions(displayROI)}
                  {!isUsd && <span className="ml-1">$BUU</span>}
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
            YOUR EXPECTED RETURN (ROI)
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
              className="flex group  items-center justify-center w-full"
              arrowClass="hidden"
            >
              <div className="flex justify-center items-center gap-1.5 py-2 rounded-md px-2 font-medium">
                <p className="text-base">
                  Details
                  {/* <span className="group-[&[data-state=open]]:hidden">Details</span>
                <span className="group-[&[data-state=closed]]:hidden">hide</span>                   */}
                </p>
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
                    value={
                      isUsd
                        ? `$${formatNumberWithFractions(stakingRewards)}`
                        : `${formatNumberWithFractions(usdToToken(stakingRewards))} $BUU`
                    }
                  />
                  <RoiDetailedLine
                    title="Credits Value (Current rate)"
                    value={
                      isUsd
                        ? `$${formatNumberWithFractions(creditsValue)}`
                        : `${formatNumberWithFractions(usdToToken(creditsValue))} $BUU`
                    }
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
