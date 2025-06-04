import { MaybeString } from "@/types";
import { TChatMessage } from "@/types/chat/chat-types";
import { TThreeDStyles } from "./settings";

export type TMaximizeModelViewer = {
  type: "model";
  modelUrl: MaybeString;
  imageUrl: MaybeString;
  modelId: MaybeString;
  messageId: string;
  nftId?: MaybeString;
  tokenized?: boolean;
};

export type TMaximizeImage = {
  type: "image";
  modelUrl: string;
  imageUrl: string;
  imageId: MaybeString;
};
type TMaximizeData = TMaximizeImage | TMaximizeModelViewer;
export type TMaximize = {
  isOpened: boolean;
  data?: TMaximizeData;
};

export type TGenerateModal = {
  isOpened: boolean;
  imageId?: MaybeString;
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
    modelId?: MaybeString;
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
