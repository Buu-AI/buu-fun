import React from "react";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import Pill, { TPillVariant } from "../elements/pill";
import { pluralize } from "@/lib/utils";

export default function StatusPill({
  expiresAt,
}: {
  createdAt: string;
  expiresAt?: string;
}) {
  const getPillDetails = (): {
    text: string;
    variant: TPillVariant["variant"];
  } => {
    if (!expiresAt) return { text: "Active", variant: "blue" };

    const now = new Date();
    const expDate = new Date(expiresAt);

    const minutesDiff = differenceInMinutes(expDate, now);
    const hoursDiff = differenceInHours(expDate, now);
    const daysDiff = differenceInDays(expDate, now);
    const monthsDiff = differenceInMonths(expDate, now);
    const yearsDiff = differenceInYears(expDate, now);

    if (minutesDiff <= 0) return { text: "Expired", variant: "destructive" };

    if (minutesDiff > 0 && minutesDiff < 60) {
      const minutePluralized = pluralize(minutesDiff, "minute");
      return {
        text: `Expires in ${minutesDiff} ${minutePluralized}`,
        variant: "orange",
      };
    }

    if (hoursDiff > 0 && hoursDiff < 24) {
      const hourPluralized = pluralize(hoursDiff, "hour");
      return {
        text: `Expires in ${hoursDiff} ${hourPluralized}`,
        variant: "orange",
      };
    }

    if (daysDiff > 0 && daysDiff <= 7) {
      const dayPluralized = pluralize(daysDiff, "day");
      return {
        text: `Expires in ${daysDiff} ${dayPluralized}`,
        variant: "orange",
      };
    }

    if (yearsDiff > 0) {
      const yearPluralized = pluralize(yearsDiff, "year");
      return {
        text: `Expires in ${yearsDiff} ${yearPluralized}`,
        variant: "blue",
      };
    }

    if (monthsDiff > 0) {
      const monthPluralized = pluralize(monthsDiff, "month");
      return {
        text: `Expires in ${monthsDiff} ${monthPluralized}`,
        variant: "blue",
      };
    }

    return { text: `Expires in ${daysDiff} days`, variant: "blue" };
  };

  const { text, variant } = getPillDetails();

  return (
    <Pill
      variant={variant}
      className="max-w-max px-2 py-0.5 text-sm font-normal"
      size={"default"}
    >
      {text}
    </Pill>
  );
}
