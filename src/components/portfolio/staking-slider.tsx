import React from "react";
import { Button } from "../ui/button";
import { cn, formatUnits } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useUserStakingData } from "@/hooks/use-staking-data";
import { setSelectedAmountToStake } from "@/lib/redux/features/buu-pricing";

export default function StakingSlider() {
  const {
    userStaking: { data: userStakingData },
  } = useUserStakingData();

  const earnings = formatUnits(
    userStakingData?.yourEarnings ?? "0",
    userStakingData?.decimals ?? 0
  );

  const selected = useAppSelector((state) => state.BuuPricing.amountToStake);
  const dispatch = useAppDispatch();

  // Calculate percentages of earnings
  const is25Percent = selected === Math.round(Number(earnings) * 0.25);
  const is50Percent = selected === Math.round(Number(earnings) * 0.5);
  const is75Percent = selected === Math.round(Number(earnings) * 0.75);
  const isMax = selected === Math.round(Number(earnings));

  // Handle button clicks
  const handlePercentageClick = (percentage: number) => {
    dispatch(
      setSelectedAmountToStake(Math.round(Number(earnings) * percentage))
    );
  };

  return (
    <div className="flex items-center justify-around bg-portfolio-statistics-button-background rounded-md px-2 py-2">
      <Button
        type="button"
        onClick={() => handlePercentageClick(0.25)}
        variant={is25Percent ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            !is25Percent,
        })}
      >
        25%
      </Button>
      <Button
        type="button"
        onClick={() => handlePercentageClick(0.5)}
        variant={is50Percent ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            !is50Percent,
        })}
      >
        50%
      </Button>
      <Button
        type="button"
        onClick={() => handlePercentageClick(0.75)}
        variant={is75Percent ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            !is75Percent,
        })}
      >
        75%
      </Button>
      <Button
        type="button"
        onClick={() => handlePercentageClick(1)}
        variant={isMax ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            !isMax,
        })}
      >
        MAX
      </Button>
    </div>
  );
}
