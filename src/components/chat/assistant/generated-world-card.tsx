"use client";

import FailedCross from "@/assets/icons/failed-cross";
import { World } from "@/gql/types/graphql";
import { useAppDispatch } from "@/hooks/redux";
import {
  isToolCallFailed,
  isToolCallPending
} from "@/lib/helpers/status-checker";
import { setViewWorld } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { Maybe } from "@/types";
import { TToolRequest } from "@/types/chat/chat-types";
import LottieLoader from "lottie-react";
import Image from "next/image";

import data from "./buu-loader.json";

type TGeneratedWorldCard = {
  world: World;
  toolRequest: Maybe<TToolRequest>;
};

export default function GeneratedWorldCard({
  world,
  toolRequest,
}: TGeneratedWorldCard) {
  const dispatch = useAppDispatch();
  const status = toolRequest?.status;
  // const isGenerating = isToolCallGenerating(status);
  const isPending = isToolCallPending(status);
  const isFailed = isToolCallFailed(status);

  const thumbnailUrl = world.thumbnailMedia?.url;
  const isHighResReady = !!world.splatFiles?.highRes?.url;
  const isReady = isHighResReady && world.status === "COMPLETED";

  const handleClick = () => {
    if (!isReady) return;
    dispatch(
      setViewWorld({
        isOpen: true,
        world: { id: world._id },
      }),
    );
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isReady}
      className={cn(
        "w-full aspect-square overflow-hidden rounded-2xl relative justify-center",
        isReady && "cursor-pointer hover:ring-2 hover:ring-buu-blue transition-all",
        !isReady && "cursor-default",
      )}
    >
      <div
        className={cn(
          "w-full h-full image-model-generation transition-all duration-300 ease-in-out absolute top-0 left-0",
          {
            "image-loader": isPending,
          },
        )}
      />

      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt={world.textPrompt ?? "World thumbnail"}
          fill
          className="object-cover"
        />
      )}

      {!isReady && (
        <div className="w-full h-full absolute top-0 left-0 z-20 bg-black/50">
          <div className="flex items-center justify-center w-full h-full">
            {isPending ? (
              <p className="text-2xl text-center">
                Approval
                <br />
                Pending
              </p>
            ) : isFailed ? (
              <div className="h-32 w-32">
                <FailedCross />
              </div>
            ) : (
              <div className="h-32 w-32 flex items-center justify-center p-1">
                <LottieLoader animationData={data} loop autoplay />
              </div>
            )}
          </div>
        </div>
      )}

      {/* {isGenerating && !isReady && (
        <div className="absolute bottom-2 left-2 right-2 z-30">
          <div className="bg-black/60 rounded-lg px-3 py-1.5">
            <p className="text-xs text-white/80 truncate">
            </p>
          </div>
        </div>
      )} */}
    </button>
  );
}
