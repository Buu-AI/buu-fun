import SwitchIcon from "@/assets/icons/change-icon";
import Pill from "@/components/elements/pill";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export default function RoiStakingCard() {
  return (
    <div className="">
      <div>
        <p className="font-semibold tracking-tight text-xs">STAKED $BUU</p>
        <div className="mb-2 ">
          <div className="flex items-center  ">
            <div className="flex  py-1">
              <p className="pr-1 font-medium text-muted-foreground/60">$</p>
              <input
                type="number"
                className="bg-transparent font-medium tracking-tight appearance-none text-xl outline-none "
              />{" "}
            </div>
            <button className="w-6 h-6  flex">
              <SwitchIcon />
            </button>
          </div>
          <p className="text-sm font-medium text-muted-foreground/60">
            412312312 <span>$BUU</span>
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button className="font-semibold uppercase text-muted-foreground/60">
            <Pill size={"sm"} className="">
              $100
            </Pill>
          </button>
          <button className="font-semibold uppercase text-muted-foreground/60">
            <Pill size={"sm"}>$1000</Pill>
          </button>
          <button className="font-semibold uppercase">
            <Pill size={"sm"} variant={"white"}>
              My Balance
            </Pill>
          </button>
        </div>
        <div className="mt-6">
          <p className="font-semibold tracking-tight text-xs uppercase">
            Compounding every
          </p>
          <div className="flex items-center gap-4 justify-between bg-portfolio-statistics-button-background rounded-md px-2 py-2">
            <Button
              variant={true ? "default" : "ghost"}
              className={cn("w-full",{
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
                  false,
              })}
            >
              1D
            </Button>
            <Button
              onClick={() => {}}
              variant={false ? "default" : "ghost"}
              className={cn("w-full",{
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
                  false,
              })}
            >
              7D
            </Button>
            <Button
              variant={false ? "default" : "ghost"}
              className={cn("w-full",{
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
                  false,
              })}
            >
              14D
            </Button>
            <Button
              variant={false ? "default" : "ghost"}
              className={cn("w-full",{
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
                  false,
              })}
            >
              30D
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
