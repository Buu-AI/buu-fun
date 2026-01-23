"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  changeThreeDStyles,
  threeDStyles,
  TThreeDStyles,
} from "@/lib/redux/features/settings";
import {
  cuteIcon,
  EnvironmentIcon,
  FantasyIcon,
  GunsIcon,
  LowPolyIcon,
  RealisticIcon,
  SciFiIcon,
  StylizedIcon,
  ToonIcon,
  VoxelIcon,
} from "@/assets/icons";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { TKey } from "./styles-data";
import AnimatedCircle from "./defined-by-ai-style";

// Create a mapping for the image sources to avoid affecting other components
type StyleImageData = {
  value: TKey;
  displayName: string;
  imageSrc?: StaticImageData;
  isDefault?: boolean;
};

const styleImages: StyleImageData[] = [
  {
    value: "definedByAI",
    displayName: "Default",
    isDefault: true,
  },
  {
    value: "cute",
    displayName: "Cute",
    imageSrc: cuteIcon,
  },
  {
    value: "realistic",
    displayName: "Realistic",
    imageSrc: RealisticIcon,
  },
  {
    value: "environment",
    displayName: "Environment",
    imageSrc: EnvironmentIcon,
  },
  {
    value: "lowPoly",
    displayName: "Low Poly",
    imageSrc: LowPolyIcon,
  },
  {
    value: "voxel",
    displayName: "Voxel",
    imageSrc: VoxelIcon,
  },
  {
    value: "stylized",
    displayName: "Stylized",
    imageSrc: StylizedIcon,
  },
  {
    value: "toon",
    displayName: "Toon",
    imageSrc: ToonIcon,
  },
  {
    value: "sciFi",
    displayName: "Sci-Fi",
    imageSrc: SciFiIcon,
  },
  {
    value: "fantasy",
    displayName: "Fantasy",
    imageSrc: FantasyIcon,
  },
  {
    value: "weapons",
    displayName: "Guns",
    imageSrc: GunsIcon,
  },
];

export default function StylesSelector() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.settings);
  const isPopoverOpen = useAppSelector((state) => state.settings.isPopoverOpen);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const selectedItemRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll to selected item when popover opens or selection changes
  useEffect(() => {
    if (
      isPopoverOpen &&
      scrollContainerRef.current &&
      selectedItemRef.current
    ) {
      // Small delay to ensure the popover is fully rendered
      const timer = setTimeout(() => {
        selectedItemRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isPopoverOpen, selected.ThreeDStyle]);

  const handleStyleChange = (value: TKey) => {
    if (threeDStyles.includes(value as TThreeDStyles)) {
      dispatch(changeThreeDStyles(value));
      return;
    }
    dispatch(changeThreeDStyles(undefined));
  };

  return (
    <div className="w-full mb-4">
      <p className="uppercase text-sm font-semibold mb-3">style</p>

      <TooltipProvider delayDuration={200}>
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto overflow-y-visible pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgb(75 85 99) transparent",
          }}
        >
          <div className="flex gap-[6px] min-w-max">
            {styleImages.map((style) => {
              const isSelected = style.isDefault
                ? !selected.ThreeDStyle || selected.ThreeDStyle === style.value
                : selected.ThreeDStyle === style.value;

              return (
                <Tooltip key={`${style.value}-style-selector`}>
                  <TooltipTrigger asChild>
                    <button
                      ref={isSelected ? selectedItemRef : null}
                      onClick={() => handleStyleChange(style.value)}
                      className={`
                        relative flex-shrink-0 w-[55px] h-[72px] rounded-sm overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${
                          isSelected
                            ? "scale-100 shadow-lg shadow-blue-500/30"
                            : ""
                        }
                        focus-visible:outline-none
                      `}
                      aria-label={`Select ${style.displayName} style`}
                    >
                      {style.isDefault ? (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20">
                          <AnimatedCircle />
                        </div>
                      ) : (
                        style.imageSrc && (
                          <Image
                            src={style.imageSrc}
                            alt={`${style.displayName} style`}
                            fill
                            className="object-cover"
                            sizes="55px"
                          />
                        )
                      )}

                      {/* Selected indicator overlay */}
                      {isSelected && (
                        <div
                          className="absolute inset-0 bg-blue-500/10 flex items-center justify-center"
                          style={{
                            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.4)",
                          }}
                        >
                          <div className="absolute top-1 right-1 w-4 h-4 bg-buu-pill-solid rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-2 h-2 text-white"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="">
                    <p className="text-xs  font-medium">{style.displayName}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
