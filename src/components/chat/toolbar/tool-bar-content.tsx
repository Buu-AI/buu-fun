import { MagicPenIcon, RetryIcon } from "@/assets/icons";
import CreateChatNftIcon from "@/assets/icons/create-chat-nft-icon";
import GenerateModelIcon from "@/assets/icons/generate-model-icon";
import ModelDownload from "@/assets/icons/model-download";
import { ReactNode } from "react";

export const allowedImageTool: TChatToolTips["type"][] = [
  "DOWNLOAD",
  "EDIT_IMAGE",
  "GENERATE_MODEL",
];

export const isToolImage = (type: TChatToolTips["type"]) => {
  return allowedImageTool.some((item) => type === item);
};

export type TChatToolTips = {
  type: "DOWNLOAD" | "GENERATE_NFT" | "EDIT_IMAGE" | "GENERATE_MODEL";
  Icon: ReactNode;
  content: string;
};
export const buttonVariants = {
  initial: { y: 0, scale: 1 },
  // hover: { y: -2, scale: 1.05 },
  tap: { y: 0, scale: 0.95 },
  drag: { scale: 1.1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" },
};

export const ChatToolTips: TChatToolTips[] = [
  {
    type: "DOWNLOAD",
    content: "Download",
    Icon: <ModelDownload />,
  },
  {
    type: "GENERATE_NFT",
    content: "Generate Collectible",
    Icon: <CreateChatNftIcon />,
  },
  {
    type: "EDIT_IMAGE",
    content: "Edit Image",
    Icon: <MagicPenIcon className="fill-current" />,
  },
  {
    type: "GENERATE_MODEL",
    content: "Generate Model",
    Icon: <GenerateModelIcon />,
  },
];
