import CreateChatNftIcon from "@/assets/icons/create-chat-nft-icon";
import ModelDownload from "@/assets/icons/model-download";
import { ReactNode } from "react";

export type TChatToolTips = {
  type: "DOWNLOAD" | "GENERATE_NFT";
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
];
