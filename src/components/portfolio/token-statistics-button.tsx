"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setBuuPricingHour } from "@/lib/redux/features/buu-pricing";

export default function TokenStatisticsButtons() {
  const dispatch = useAppDispatch();
  const selectedTime = useAppSelector(
    (state) => state.BuuPricing.buuPricingHistoryTime
  );
  return (
    <div className="flex items-center justify-center bg-portfolio-statistics-button-background rounded-md px-2 py-2">
      <Button
        onClick={() => {
          dispatch(setBuuPricingHour("LAST_HOUR"));
        }}
        variant={selectedTime === "LAST_HOUR" ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            selectedTime !== "LAST_HOUR",
        })}
      >
        1H
      </Button>
      <Button
        onClick={() => {
          dispatch(setBuuPricingHour("LAST_THREE_HOURS"));
        }}
        variant={selectedTime === "LAST_THREE_HOURS" ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            selectedTime !== "LAST_THREE_HOURS",
        })}
      >
        3H
      </Button>
      <Button
        onClick={() => {
          dispatch(setBuuPricingHour("LAST_DAY"));
        }}
        variant={selectedTime === "LAST_DAY" ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            selectedTime !== "LAST_DAY",
        })}
      >
        Day
      </Button>
      <Button
        onClick={() => {
          dispatch(setBuuPricingHour("LAST_WEEK"));
        }}
        variant={selectedTime === "LAST_WEEK" ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            selectedTime !== "LAST_WEEK",
        })}
      >
        Week
      </Button>
      <Button
        onClick={() => {
          dispatch(setBuuPricingHour("LAST_MONTH"));
        }}
        variant={selectedTime === "LAST_MONTH" ? "default" : "ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            selectedTime !== "LAST_MONTH",
        })}
      >
        Month
      </Button>
    </div>
  );
}
