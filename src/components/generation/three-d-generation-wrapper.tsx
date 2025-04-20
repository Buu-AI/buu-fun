"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useMediaResponse from "@/hooks/use-media-response";
import { setSubThreadResponse } from "@/lib/redux/features/chat";
import { TSubthreadV1 } from "@/lib/redux/features/chat-types";
import { getSubThreadsMedia } from "@/lib/redux/selectors/chat";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useEffect } from "react";
import { iconByTitle, TKey } from "../settings/styles-data";
import CurvedEmblaCarousel from "./carousal";

type TThreeDGenerationWrapper = {
  threadId: string;
  subThread: TSubthreadV1;
};

export default function ThreeDGenerationWrapper({
  threadId,
  subThread,
}: TThreeDGenerationWrapper) {
  const dispatch = useAppDispatch();
  const { data } = useMediaResponse({ subThreadId: subThread._id });

  useEffect(() => {
    if (data?.length) {
      console.log("DATA FOR SUB THREAD RESPONSE", data);
      dispatch(setSubThreadResponse(data, subThread._id));
    }
  }, [data, dispatch, subThread._id]);

  const { medias, totalGenerated } = useAppSelector((state) =>
    getSubThreadsMedia(state, state.chat.genRequest, subThread._id),
  );

  const styleColor = (subThread.style ?? "no_style") as TKey;

  const IconData = iconByTitle[styleColor];

  return (
    <div className="flex  items-center pointer-events-none  justify-center h-full     flex-col gap-4">
      <div className="flex gap-2 items-center justify-center">
        <div className="bg-buu  relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
          <p className="text-xs font-semibold px-0.5 uppercase text-[#D5D9DF60] line-clamp-2">
            {format(subThread?.createdAt ?? Date.now(), "KK:mm:a")}
          </p>
        </div>
        {IconData ? (
          <div className="bg-buu flex items-center justify-center gap-1  relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1">
            <div className="w-4 h-4">{IconData?.Icon}</div>
            <p className="text-xs font-semibold px-0.5  text-[#D5D9DF60] capitalize line-clamp-2">
              {IconData?.displayName}
            </p>
          </div>
        ) : null}
      </div>

      <h2
        className={cn(
          "text-2xl max-w-md text-center hidden lg:block  relative font-medium tracking-tighter",
          {
            "text-xl":
              subThread && subThread.prompt && subThread?.prompt?.length > 40,
            "text-lg":
              subThread && subThread.prompt && subThread?.prompt?.length > 80,
            "text-base":
              subThread && subThread.prompt && subThread?.prompt?.length > 120,
            "text-sm line-clamp-3":
              subThread && subThread.prompt && subThread?.prompt?.length > 160,
          },
        )}
      >
        {subThread?.prompt}
      </h2>
      <div className="flex items-center  md:max-h-[370px]   justify-center w-full h-full">
        <div className="flex items-center  md:max-h-[370px] h-full   justify-center w-full md:max-w-sm ">
          <CurvedEmblaCarousel
            GenRequests={medias}
            threadId={threadId}
            subThreadId={subThread ? subThread?._id : ""}
            totalGenerations={totalGenerated}
          />
        </div>
      </div>
    </div>
  );
}
