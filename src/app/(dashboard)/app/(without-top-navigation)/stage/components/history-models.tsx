import StagingHistoryIcon from "@/assets/icons/staging-history-icon";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch } from "@/hooks/redux";
import { addModels } from "@/lib/redux/features/stage";
import { TModelState } from "@/types/stage/objects";
import Image from "next/image";
import { MOCK_HISTORY_MODELS } from "../modelUrls";
import { nanoid } from "@reduxjs/toolkit";

export default function HistoryModels() {
  const models = MOCK_HISTORY_MODELS;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"special"} className="bg-stage-modal text-white">
          <StagingHistoryIcon />
          History
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        side="top"
        className="bg-stage-modal border-none border-0 w-[300px]"
      >
        <div className="">
          <p className="uppercase text-sm font-semibold text-muted-foreground/90">
            History
          </p>
          <div className="flex gap-2 max-h-[500px] flex-wrap mt-3  px-2 overflow-y-scroll scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-white scrollbar-thumb-rounded">
            {models.map((item) => (
              <HistoryCards key={`${item.id}-${item?.modelUrl}`} {...item} />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function HistoryCards(history: TModelState) {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addModels({ ...history, id: nanoid() }));
      }}
      className="w-[120px] aspect-square  overflow-hidden border border-muted-foreground/80 rounded-lg"
    >
      <Image
        src={history.imageUrl ?? "/logo.png"}
        alt="logo"
        width={250}
        height={250}
      />
    </button>
  );
}
