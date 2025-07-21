import StagingHistoryIcon from "@/assets/icons/staging-history-icon";
import buuLoadedData from "@/components/chat/assistant/buu-loader.json";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useModels } from "@/hooks/use-models";
import { TModel } from "@/lib/react-query/model";
import { MaybeString } from "@/types";
import LottieLoader from "lottie-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function LibraryModels({
  loaderCallback,
  modelChooser,
}: {
  loaderCallback: (modelUrl: MaybeString, modelId: string) => void;
  modelChooser?: (model: TModel) => MaybeString;
}) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useModels({
    limit: 15,
  });

  // Control popover state manually
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Use click outside hook to close popover

  const { ref: observerRef } = useInView({
    threshold: 0,
    rootMargin: `0px 150px`,
    onChange(inView, entry) {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          size={"special"}
          variant={"special"}
          className=" text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <StagingHistoryIcon />
          Library
        </Button>
      </PopoverTrigger>
      <PopoverContent
        ref={popoverRef}
        align="start"
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
                if (!model?.texturedMesh?.url) return null;
                return (
                  <LibraryCards
                    modelId={model._id}
                    callBack={(modelUrl, modelId) => {
                      loaderCallback(modelUrl, modelId);
                      setIsOpen(false); // Close popover when model is selected
                    }}
                    imageUrl={model.image.url}
                    modelUrl={
                      modelChooser
                        ? modelChooser(model)
                        : model.texturedMesh.url
                    }
                    key={`${model?._id}`}
                  />
                );
              });
            })}
            <div ref={observerRef} className="h-4 w-full " />
            {isFetchingNextPage && (
              <div className="w-full flex items-center justify-center">
                <div className="h-14 w-14 flex items-center justify-center p-1">
                  <LottieLoader animationData={buuLoadedData} loop autoplay />
                </div>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function LibraryCards({
  modelId,
  modelUrl,
  imageUrl,
  callBack,
}: {
  modelId: string;
  modelUrl: MaybeString;
  imageUrl: MaybeString;
  callBack: (modelUrl: MaybeString, modelId: string) => void;
}) {
  return (
    <button
      onClick={() => {
        callBack(modelUrl, modelId);
      }}
      className="w-[120px] aspect-square  overflow-hidden border border-muted-foreground/80 rounded-lg"
    >
      <Image
        src={imageUrl ?? "/logo.png"}
        alt="logo"
        width={250}
        height={250}
      />
    </button>
  );
}
