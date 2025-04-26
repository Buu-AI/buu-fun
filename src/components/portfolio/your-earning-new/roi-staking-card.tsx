import SwitchIcon from "@/assets/icons/change-icon";
import Pill from "@/components/elements/pill";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowDown } from "lucide-react";
import RoiDetailedLine from "./roi-detail-line";
import RoiListInfo from "./roi-list-info";
export default function RoiStakingCard() {
  return (
    <div className="">
      <div className="px-6">
        <p className="font-semibold tracking-tight text-xs">STAKED $BUU</p>
        <div className="my-2 p-3 border rounded-lg border-muted-foreground/20">
          <div className="flex items-center  ">
            <div className="flex  py-1">
              <p className="pr-1 font-medium text-muted-foreground/60">$</p>
              <input className="bg-transparent font-medium tracking-tight appearance-none text-xl outline-none " />{" "}
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
          <p className="font-semibold tracking-tight text-xs mb-3 uppercase">
            Staked up
          </p>
          <div className="flex items-center gap-4 justify-between bg-portfolio-statistics-button-background rounded-md px-2 py-2">
            <Button
              variant={true ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  false,
              })}
            >
              1D
            </Button>
            <Button
              onClick={() => {}}
              variant={false ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  !false,
              })}
            >
              7D
            </Button>
            <Button
              variant={false ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  !false,
              })}
            >
              30D
            </Button>
            <Button
              variant={false ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  !false,
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
              onCheckedChange={(value) => {}}
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
              variant={true ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm  text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  false,
              })}
            >
              1D
            </Button>
            <Button
              onClick={() => {}}
              variant={false ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  !false,
              })}
            >
              7D
            </Button>
            <Button
              variant={false ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  !false,
              })}
            >
              14D
            </Button>
            <Button
              variant={false ? "default" : "ghost"}
              className={cn("w-full", {
                "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-buu-button-muted":
                  !false,
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
                  123
                </p>
                <Pill
                  size={"sm"}
                  className="font-semibold px-1.5 text-muted-foreground/60"
                >
                  22.74%
                </Pill>
              </div>
            </div>
          </div>
          <p className="uppercase text-xs font-semibold text-muted-foreground/60">
            Roi AT Current rates
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
              //   asChild
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
                  <RoiDetailedLine />
                  <RoiDetailedLine
                    title="Credits Value (Current rate)"
                    value="$1.73"
                  />
                  <RoiDetailedLine title="APR Rewards" value="20%" />
                  <RoiDetailedLine title="APR Credits" value="3%" />
                </div>
                <div>
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
