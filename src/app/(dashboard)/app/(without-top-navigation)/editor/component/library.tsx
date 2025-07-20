import StagingHistoryIcon from "@/assets/icons/staging-history-icon";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useModels } from "@/hooks/use-models";
import { TModel } from "@/lib/react-query/model";
import { MaybeString } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
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
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"special"} variant={'special'} className=" text-white">
          <StagingHistoryIcon />
          Library
        </Button>
      </PopoverTrigger>
      <PopoverContent
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
                    callBack={loaderCallback}
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full flex justify-center py-4 items-center "
              >
                <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
              </motion.div>
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
