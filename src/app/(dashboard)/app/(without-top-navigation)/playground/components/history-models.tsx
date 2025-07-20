import StagingHistoryIcon from "@/assets/icons/staging-history-icon";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch } from "@/hooks/redux";
import { useModels } from "@/hooks/use-models";
import { getModelBasedOnPriority } from "@/lib/helpers/chat/model";
import { addModels } from "@/lib/redux/features/stage";
import { TModelState } from "@/types/stage/objects";
import { nanoid } from "@reduxjs/toolkit";
import Image from "next/image";
import { getDefaultModelProps } from "../modelUrls";

export default function HistoryModels() {
  const { data } = useModels({
    limit: 200,
  });
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"special"} className="bg-stage-modal hover:bg-buu-secondary
         text-white">
          <StagingHistoryIcon />
          Library
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        side="top"
        className="bg-stage-modal border-none border-0 w-[300px]"
      >
        <div className="">
          <p className="uppercase text-sm font-semibold text-muted-foreground/90">
            Library
          </p>
          <div className="flex gap-2 max-h-[500px] flex-wrap mt-3  px-2 overflow-y-scroll scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-white scrollbar-thumb-rounded">
            {data?.pages.map((page) => {
              return page.items.map((model) => {
                const texturedModel = getModelBasedOnPriority(model);
                const defaultModelParams = getDefaultModelProps({
                  modelUrl: texturedModel,
                  imageUrl: model.image.url,
                  createdAt: new Date(model.createdAt).toISOString(),
                });
                if (!model.texturedMesh || !defaultModelParams) return null;
                return (
                  <HistoryCards
                    key={`${defaultModelParams.id}-${defaultModelParams?.modelUrl}`}
                    {...defaultModelParams}
                  />
                );
              });
            })}
            {/* {models.map((item) => (
              <HistoryCards key={`${item.id}-${item?.modelUrl}`} {...item} />
            ))} */}
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
