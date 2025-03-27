import {
  // BoneIcon,
  DownloadIcon,
  // FilterIcon,
  // MagicPenIcon,
  // MaximizeIcon,
  RetryIcon,
} from "@/assets/icons";
import ShareIcon from "@/assets/icons/share-icon";
import { Eye, Trash2 } from "lucide-react";

export const ToolTips = [
  {
    type: "TRY_AGAIN" as const,
    Icon: <RetryIcon />,
    content: "Try Again",
  },
  // {
  //   type: "MODIFY" as const,
  //   Icon: <FilterIcon />,
  //   content: "Modify",
  // },
  // {
  //   type: "ANIMATE" as const,
  //   Icon: <MagicPenIcon />,
  //   content: "Animate",
  // },
  // {
  //   type: "AUTO_RIGGING" as const,
  //   Icon: <BoneIcon />,
  //   content: "Auto-rigging",
  // },
  // {
  //   type: "MAXIMIZE" as const,
  //   Icon: <MaximizeIcon />,
  //   content: "Maximize",
  // },
  {
    type: "DOWNLOAD" as const,
    Icon: <DownloadIcon />,
    content: "Download",
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
