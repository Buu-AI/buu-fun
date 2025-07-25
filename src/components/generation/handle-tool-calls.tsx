import {
  // BoneIcon,
  DownloadIcon,
} from "@/assets/icons";
import CreateNFTIcon from "@/assets/icons/create-nft-icon";
import SelectObjectIcon from "@/assets/icons/select-object-icon";
import ShareIcon from "@/assets/icons/share-icon";
import Animator from "@/assets/icons/utility/animator";
import Pen from "@/assets/icons/utility/pen";
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
  {
    type: "PLAYGROUND" as const,
    Icon: (
      <div className="flex w-full">
        <SelectObjectIcon height={"100%"} width={"100%"} />
      </div>
    ),
    content: "Add To Playground",
  },

  {
    type: "ANIMATOR" as const,
    Icon: (
      <div className="w-full h-full">
        <Animator />
      </div>
    ),
    content: "Rig & Animate",
  },
  {
    type: "EDITOR" as const,
    Icon: <Pen />,
    content: "Edit Mesh",
  },
];

export type TBoardToolTipData = typeof BoardToolTips;
export type TBoardToolTipEvents = TBoardToolTipData[number]["type"];
