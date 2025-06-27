"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSettingsPopoverChange } from "@/lib/redux/features/settings";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import SettingsCardContainer from "./settings-card-container";

export default function SettingsBarPopOver() {
  const isSettingsPopoverOpen = useAppSelector((state) => state.settings);

  const dispatch = useAppDispatch();

  return (
    <div className="">
      <Popover
        onOpenChange={(value) => {
          dispatch(setSettingsPopoverChange(value));
        }}
        open={isSettingsPopoverOpen.isPopoverOpen}
      >
        <PopoverTrigger asChild className="">
          <button className="flex items-center justify-center ml-1 ">
            <ChevronUp
              className={cn(
                "-rotate-180 transition-transform duration-300 ease-in-out",
                {
                  "rotate-0 rotate": isSettingsPopoverOpen.isPopoverOpen,
                },
              )}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="max-w-lg w-[100vw] md:w-[460px]  rounded-2xl   bg-[#2D323C60]  backdrop-blur-2xl  px-2 overflow-hidden "
          sideOffset={20}
          alignOffset={-16}
          align="end"
          side="top"
        >
          <SettingsCardContainer />
        </PopoverContent>
      </Popover>
    </div>
  );
}
