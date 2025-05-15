"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setIndex } from "@/lib/redux/features/boards";
import { getBoards } from "@/lib/redux/selectors/board";
import { cn } from "@/lib/utils";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Ghost } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect } from "react";
import BoardsToolTip from "./boards-tool-tip";
const ModelViewer = dynamic(() => import("../generation/model-viewer"), {
  ssr: false,
  loading: () => null,
});

export default function ViewBoardCarousal({
  currentUser,
}: {
  currentUser?: boolean;
}) {
  const boards = useAppSelector((state) => getBoards(state));

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    dispatch(setIndex(api.selectedScrollSnap() + 1));
    api.on("select", () => {
      dispatch(setIndex(api.selectedScrollSnap() + 1));
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, dispatch]);

  return (
    <div className="flex w-full md:flex-row flex-col-rev  erse justify-center px-2 md:px-0 items-center  h-full    gap-2">
      <div className="flex relative z-10 items-center justify-center md:flex-col gap-4 mr-6">
        {boards.board && boards.board.length > 0
          ? boards.board.map((item, index) => (
              <button
                key={`index-button-${item.GenId}`}
                onClick={() => {
                  if (api) {
                    api?.scrollTo(index);
                  }
                }}
                className={cn("w-[36px] rounded-lg overflow-hidden", {
                  "w-[44px]": index === current - 1,
                })}
              >
                <div>
                  <Image
                    // TODO
                    src={item.ImageUrl ?? "/logo.png"}
                    alt="Generated AI Image Url"
                    width={1920}
                    height={1080}
                    className=""
                  />
                </div>
              </button>
            ))
          : null}
      </div>
      <div className="w-full max-w-md flex flex-col">
        <Carousel
          plugins={[WheelGesturesPlugin()]}
          setApi={setApi}
          opts={{
            align: "start",
            dragFree: false,
            watchDrag: false,
            watchResize: true,
            watchSlides: true,
          }}
          orientation="vertical"
          className="w-full max-w-md"
        >
          <CarouselContent className="-mt-1 h-[65vh] ">
            {boards.board.length ? (
              boards.board.map((item, index) => (
                <CarouselItem
                  key={`carousel-${index}-button-${item.GenId}`}
                  className="py-2  md:basis-full relative"
                >
                  <div className=" border-buu border-2 my-1 overflow-hidden rounded-2xl w-full bg-[#15192420]  backdrop-blur-lg h-full">
                    <ModelViewer src={item.modelUrl ?? ""} />
                  </div>
                </CarouselItem>
              ))
            ) : (
              <CarouselItem className="pt-1  md:basis-full">
                <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
                  <Ghost className="w-10 h-10 text-blue-300 animate-pulse" />
                  <p className="text-2xl font-medium max-w-sm text-center">
                    The Board you are looking for is either private or
                    doesn&apos;t exists
                  </p>
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>{" "}
        <BoardsToolTip currentUser={currentUser} />
      </div>
    </div>
  );
}
