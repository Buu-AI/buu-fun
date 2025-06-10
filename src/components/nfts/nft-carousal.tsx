"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NftFile } from "@/gql/types/graphql";
import { useAppDispatch } from "@/hooks/redux";
import { setIndex } from "@/lib/redux/features/boards";
import { cn } from "@/lib/utils";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Ghost } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect } from "react";

const ModelViewer = dynamic(() => import("../generation/model-viewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      Loading 3D model...
    </div>
  ),
});

export default function ViewNFTCarousal({ nfts }: { nfts: NftFile[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    dispatch(setIndex(api.selectedScrollSnap()));

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      dispatch(setIndex(selectedIndex));
      setCurrent(selectedIndex);
    });
  }, [api, dispatch]);

  const handleThumbnailClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  if (!nfts || nfts.length === 0) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <Ghost className="w-12 h-12 text-gray-400" />
        <span className="ml-2 text-gray-400">No NFTs to display</span>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col justify-center px-2 md:px-0 items-center h-full gap-4">
      {/* Main Carousel */}
      <div className="w-full flex items-center justify-center">
        <Carousel
          plugins={[WheelGesturesPlugin()]}
          setApi={setApi}
          opts={{
            align: "center",
            dragFree: false,
            watchDrag: false,
            watchResize: true,
            watchSlides: false,
            loop: false,
          }}
          orientation="horizontal" // Changed to horizontal for better stability
          className="w-full max-w-4xl"
        >
          <CarouselContent className="w-full aspect-square md:h-[70vh]">
            {nfts.map((item, index) => (
              <CarouselItem
                key={`carousel-item-${index}-${item.uri}`}
                className="w-full h-full flex items-center justify-center "
              >
                <div className="w-full h-full bg-black/20 backdrop-blur-lg rounded-2xl overflow-hidden flex items-center justify-center">
                  {isUriGlb(item.uri) ? (
                    <ModelViewer src={item.uri ?? ""} />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.uri ?? "/logo.png"}
                        alt={`NFT ${index + 1}`}
                        fill
                        className="object-cover w-full "
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        priority={index === 0} // Only prioritize first image
                        onError={(e) => {
                          console.error(`Failed to load image: ${item.uri}`);
                          // Fallback to placeholder
                          e.currentTarget.src = "/logo.png";
                        }}
                      />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {nfts.map((item, index) => (
          <button
            key={`thumbnail-${index}-${item.uri}`}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "w-12 h-12 rounded-lg overflow-hidden border transition-all duration-200",
              {
                "border-white scale-110": index === current,
                "border-gray-400 hover:border-gray-200": index !== current,
              },
            )}
          >
            {isUriGlb(item.uri) ? (
              <div className="w-full h-full bg-model-viewer flex items-center justify-center">
                <span className="text-xs text-white font-bold">3D</span>
              </div>
            ) : (
              <Image
                src={item.uri ?? "/logo.png"}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/logo.png";
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Current Index Indicator */}
      <div className="text-sm text-gray-400">
        {current + 1} of {nfts.length}
      </div>
    </div>
  );
}

export const isUriGlb = (uri: string) => {
  return uri?.toLowerCase().endsWith(".glb") ?? false;
};
