import { isError, isInProgress } from "@/lib/helpers/status-checker";
import { isOverAllRequestLimitReached } from "@/lib/utils";
import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";
import { TGenerationalData } from "../features/chat-types";
import {
  isImageModel,
  isSubThreadInProgressForFirstTimeOrForTheLastObject,
  isThreeDModel,
  mergeImageAndMedia,
} from "../utils";
const Threads = (state: RootState) => state.chat.threads.subThreads;
export const getSubThreadsFromStore = createSelector(
  [Threads, (_, id: string) => id],
  (SubThread, id) => {
    const FoundedSubthread = SubThread.find((fv) => fv._id === id);
    return FoundedSubthread;
  },
);

const SubThreads = (state: RootState) => state.chat.subThreads;
const Medias = (state: RootState) => state.chat.genRequest;

export const getSubThreadsMedia = createSelector(
  [SubThreads, Medias, (_, __, subThreadId: string) => subThreadId],
  (SubThreads, Medias, subThreadId) => {
    const SubThread = SubThreads.find((item) => item._id === subThreadId);

    const Media = Medias[subThreadId] ?? [];

    const ImageGenerated =
      Media?.filter((item) => isImageModel(item.type)) ?? [];

    const ThreeDGenerated =
      Media?.filter((item) => isThreeDModel(item.type)) ?? [];

    const style = SubThread?.style;
    let GeneratedRequestMedias: TGenerationalData[] = [];

    if (ThreeDGenerated.length >= ImageGenerated.length) {
      GeneratedRequestMedias = ThreeDGenerated.map((item) => {
        const isGenerating = isInProgress(item.status);
        const isErrored = isError(item.status);
        const tokenized = item.tokenized ?? false;
        return {
          style,
          isGenerating,
          isErrored,
          tokenized,
          model: {
            modelId: item._id,
            modelStatus: item.status,
            modelUrl: item.model_mesh?.url,
          },
          image: {
            imageId: item._id,
            imageStatus: "Success",
            imageUrl: item.metadata.imageUrl,
          },
        };
      });
    } else {
      GeneratedRequestMedias = ImageGenerated?.map((item) => {
        const FoundedModel = ThreeDGenerated.find(
          (fv) => fv.metadata.imageRequestId === item?._id,
        );

        const imageStatus = item.status;
        const modelStatus = FoundedModel?.status ?? "InProgress";
        const tokenized = (FoundedModel?.tokenized || item.tokenized) ?? false;
        const model = FoundedModel
          ? {
              modelId: FoundedModel?._id,
              modelUrl: FoundedModel?.model_mesh?.url,
              modelStatus,
            }
          : undefined;
        // Either the model or the image is Generating
        const isGenerating =
          isInProgress(modelStatus) || isInProgress(imageStatus);

        const isErrored = isError(modelStatus) || isError(imageStatus);

        return {
          style,
          isGenerating,
          isErrored,
          model,
          tokenized: tokenized ?? false,
          image: {
            imageId: item._id,
            imageStatus,
            imageUrl: item.images?.length ? item?.images[0]?.url : null,
          },
        };
      });
    }

    return {
      medias: GeneratedRequestMedias,
      totalGenerated: GeneratedRequestMedias.length,
    };
  },
);

export const isSubThreadGenerating = createSelector(
  [SubThreads, Medias],
  (SubThread, Medias) => {
    const lastThread = SubThread?.length
      ? SubThread[SubThread.length - 1]
      : null;

    if (!lastThread) {
      return {
        totalRequest: 1,
        isJustStarted: true,
        isLimitReached: false,
      };
    }
    const lastSubThreadGenRequest = Medias[lastThread._id] ?? [];
    // First request and its Generating
    const isJustStarted = isSubThreadInProgressForFirstTimeOrForTheLastObject(
      lastSubThreadGenRequest,
    );

    const totalRequests = Object.keys(Medias).reduce((acc, item) => {
      const subThreads = mergeImageAndMedia(Medias[item]).filter((item) => {
        return item.isGenerating === true;
      }).length;
      return subThreads + acc;
    }, 0);

    return {
      isJustStarted: isJustStarted.isFirstGenerating,
      totalRequest: totalRequests,
      isLimitReached: isOverAllRequestLimitReached(totalRequests),
    };
  },
);
