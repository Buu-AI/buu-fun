import {
  GetSubthreadGenRequestsQuery,
  GetSubthreadsQuery,
} from "@/gql/types/graphql";
import { TThreeDStyles } from "./settings";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TMediaData = {
  content_type: string;
  file_name: string;
  file_size: number;
  url: string;
};

export type TMediaRequest = {
  // id of image
  _id: string;
  // status of the image
  status: string;

  //Could be more specific based on actual data
  metadata: any;
  //type of image
  type: string;
  images: TMediaData[];
  modelMesh: TMediaData | null;
};

export type TSubThread = {
  // subThreadID
  loadingNewGeneration: boolean;
  _id: string;

  createdAt: string;

  // threadId which the message belongs to.
  threadId: string;

  // Prompt which was given by the user to generate
  message: string;
  // Style which a user was given to generate the model.
  style: string;
  imageRequest: TMediaRequest[];
  modelRequest: TMediaRequest[];
};

export type ChatMessage = {
  threadId: string;
  subThreads: TSubThread[];
};

export type ImageData = {
  url: string;
  name: string;
  size: number;
  type: string;
};
export type ChatState = {
  inputQuery: string;
  inputImageUrl: string | null;
  inputFile: ImageData | null;
  currentSubThreadIndex: number;
  currentGenRequestIndex: number;
  draggingImage?: string;
  placedImage?: string;
  threads: ChatMessage;
  subThreads: TSubthreadV1[];
  genRequest: Record<string, TSubThreadsMedia[]>;
  retry: {
    modalOpened: boolean;
    subThreadId: string | null;
  };
  genNft: {
    isGenNftModalOpen: boolean;
    genId?: string | null;
    modelUrl?: string | null;
    imageUrl?: string | null;
  };
};

export type TErrorTypeName = { __typename?: "HandledError" };

export type TAllSubThreads = TAllSubThreadsResponse["items"];

export type TAllSubThreadsResponse = Exclude<
  GetSubthreadsQuery["getSubthreads"],
  TErrorTypeName
>;

export type TSubThreadsResponse = Exclude<
  GetSubthreadGenRequestsQuery["getSubthreadGenRequests"],
  TErrorTypeName
>;
export type TGenResponseStatus = "InProgress" | "Success" | "Error";
export type TSubThreadsMedia = Omit<
  TSubThreadsResponse["items"][number],
  "status"
> & { status: TGenResponseStatus };

export type TSubthreadV1 = TAllSubThreads[number];

export type TGenerationalData = {
  style: TThreeDStyles | null | undefined;
  isGenerating: boolean;
  isErrored: boolean;
  tokenized: boolean;
  model?: {
    modelId: string;
    modelUrl?: string;
    modelStatus: TGenResponseStatus;
  };
  image: {
    imageId: string;
    imageStatus: TGenResponseStatus;
    imageUrl: string | null;
  };
};
