import React from "react";
import { TStakedUptoValues } from "./roi-calculations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
type TStakedUpButton = {
  onChange(value: TStakedUptoValues): void;
  CurrStakedUpto: TStakedUptoValues;
  stakedUpTo: TStakedUptoValues;
  title: string;
};
export default function StakedUpButton({
  onChange,
  CurrStakedUpto,
  stakedUpTo,
  title,
}: TStakedUpButton) {
  return (
    <Button
      onClick={() => {
        onChange(stakedUpTo);
      }}
      variant={CurrStakedUpto === stakedUpTo ? "default" : "ghost"}
      className={cn("w-full", {
        "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
          CurrStakedUpto !== stakedUpTo,
      })}
    >
      {title}
    </Button>
  );
}
