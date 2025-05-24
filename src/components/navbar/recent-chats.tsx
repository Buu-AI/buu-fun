"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { HistoryIcon } from "lucide-react";
import HistoryNavigation from "./history-navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setHistoryModel } from "@/lib/redux/features/settings";

export default function RecentChats() {
  const isOpen = useAppSelector((state) => state.settings.isRecentChatOpen);
  const dispatch = useAppDispatch();

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(value) => {
        dispatch(setHistoryModel(value));
      }}
    >
      <SheetTrigger asChild className="hidden md:flex relative">
        <div className="flex  items-center gap-1 justify-center">
          <div>
            <Button
              variant={"outline"}
              className="px-3 flex items-center hover:bg-buu-button justify-center gap-1 text-base h-[40px] group  py-2 bg-buu shadow-buu-secondary border-buu rounded-[10px]"
            >
              <HistoryIcon className="w-4 h-4  " />
              <span className="hidden lg:block">History</span>
            </Button>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        className="bg-buu shadow-buu-pill rounded-r-3xl"
        side={"left"}
      >
        <SheetHeader>
          <SheetTitle>History</SheetTitle>
          <SheetDescription>Your recent chat histories</SheetDescription>
        </SheetHeader>
        <HistoryNavigation />
      </SheetContent>
    </Sheet>
  );
}
