"use client";
import { cn } from "@/lib/utils";
import SuggestionBar from "../chat-input/suggestion-bar";
import NewAvailableSettingsPill from "./new-available-settings-pill";
import PopoverHiddenTrigger from "./popover-hidden-trigger";
import RecentChatButton from "./recent-chat-button";
import SettingsBarPopOver from "./settings-bar-pop-over-button";
import SettingsBarDisplayTitle from "./settings-bar-selected-display-title";

export default function SettingsBar() {
  return (
    <div className="flex group   relative items-center justify-between mb-2">
      <div className="ml-0 pb-0 px-2  flex self-end">
        <SuggestionBar />
        <RecentChatButton />
      </div>
      <div
        className={cn(
          "px-4 self-end max-w-max  md:w-full   transition-all duration-300 ease-in-out  rounded-2xl py-2  z-10 border  items-center relative justify-end mr-1 flex gap-2 bg-buu shadow-buu-inner flex-shrink"
        )}
      >
        <NewAvailableSettingsPill />
        <PopoverHiddenTrigger />
        <SettingsBarDisplayTitle />
        <div className="flex items-center  justify-center">
          <div className="h-6 my-auto bg-white w-[2px] bg-buu shadow-buu-inner " />
          <SettingsBarPopOver />
        </div>
      </div>
    </div>
  );
}
