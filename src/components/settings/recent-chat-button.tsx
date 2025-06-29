"use client";
import { useAppDispatch } from "@/hooks/redux";
import { setHistoryModel } from "@/lib/redux/features/chat";
import { HistoryIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function RecentChatButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex  items-center gap-1 justify-center md:hidden ">
      <div>
        <Button
          onClick={() => {
            dispatch(setHistoryModel(true));
          }}
          variant={"outline"}
          className="px-3 flex items-center hover:bg-buu-button justify-center gap-1 text-base h-[55px] w-[55px] group  py-2 bg-buu shadow-buu-secondary border-buu rounded-[10px]"
        >
          <HistoryIcon className="w-8 h-8  " />
          {/* <span className="">History</span> */}
        </Button>
      </div>
    </div>
  );
}
