import { MaybeString } from "@/types";
import { TChatMessage, TMessageQueryData } from "@/types/chat/chat-types";
import { InfiniteData } from "@tanstack/react-query";
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

export type TMaximizeModelViewer = {
  type: "model";
  modelUrl: MaybeString;
  imageUrl: MaybeString;
  messageId: string;
  nftId?: MaybeString;
  tokenized?: boolean;
};

export type TMaximizeImage = {
  type: "image";
  modelUrl: string;
  imageUrl: string;
};
type TMaximizeData = TMaximizeImage | TMaximizeModelViewer;
export type TMaximize = {
  isOpened: boolean;
  data?: TMaximizeData;
};

export type TGenerateModal = {
  isOpened: boolean;
  imageUrl?: MaybeString;
  modelUrl?: MaybeString;
};

export type TEditImage = {
  isOpened: boolean;
  imageUrl?: MaybeString;
};

export type TImageData = {
  id: string;
  url: string;
  name: string;
  size: number;
  type: string;
};
export type ChatState = {
  inputQuery: string;
  inputImageUrl: string | null;
  inputFile: TImageData[];
  draggingImage?: string;
  placedImage?: string;
  genNft: {
    isGenNftModalOpen: boolean;
    messageId?: string | null;
    modelUrl?: string | null;
    imageUrl?: string | null;
  };
  maximizedContainer: TMaximize;
  chatMessageEditImage: TEditImage;
  genModelFromImage: TGenerateModal;
  sessionId: string;
  messages: TChatMessage[];
};

export type TErrorTypeName = { __typename?: "HandledError" };

export type TGenResponseStatus = "InProgress" | "Success" | "Error";

export type TGenerationalData = {
  style: TThreeDStyles | null | undefined;
  isGenerating: boolean;
  isErrored: boolean;
  tokenized: boolean;
  model?: {
    modelId: string;
    modelUrl?: string | null;
    modelStatus: TGenResponseStatus;
  };
  image: {
    imageId: string;
    imageStatus: TGenResponseStatus;
    imageUrl?: string | null;
  };
};
