import {
  // BoneIcon,
  DownloadIcon,
} from "@/assets/icons";
import CreateNFTIcon from "@/assets/icons/create-nft-icon";
import ShareIcon from "@/assets/icons/share-icon";
import { Eye, Trash2 } from "lucide-react";

export const ToolTips = [
  {
    type: "DOWNLOAD" as const,
    Icon: <DownloadIcon />,
    content: "Download GLB",
  },
  {
    type: "GENERATE_NFT" as const,
    Icon: <CreateNFTIcon />,
    content: "Generate Collectible",
  },
];

export type TToolTipsData = typeof ToolTips;
export type TToolTipEvents = TToolTipsData[number]["type"];

export const BoardToolTips = [
  {
    type: "DELETE" as const,
    Icon: <Trash2 className="w-4 h-4" />,
    content: "Delete",
  },
  {
    type: "UPDATE" as const,
    Icon: <Eye className="w-4 h-4" />,
    content: "Public",
  },
  {
    type: "SHARE" as const,
    Icon: <ShareIcon />,
    content: "Share",
  },

  {
    type: "DOWNLOAD" as const,
    Icon: <DownloadIcon />,
    content: "Download",
  },
];

export type TBoardToolTipData = typeof BoardToolTips;
export type TBoardToolTipEvents = TBoardToolTipData[number]["type"];
