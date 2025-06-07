import ToolTipGenerateNft from "@/components/chat/toolbar/tool-tip-generate-nft";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MaybeString } from "@/types";
import DownloadModel from "./download-model";
import {
  ChatToolTips,
  isToolbarImage,
  isToolbarModel,
  TChatToolTips,
} from "./tool-bar-content";
import ToolTipGenerateModel from "./tool-tip-generate-model";
import ToolTipRetryImage from "./tool-tip-retry-image";
import ToolTipMaximize from "./tool-tip-maximize";
export type TDisabledToolbar = {
  [key in TChatToolTips["type"]]?: boolean;
};

type TToolBarWrapper = {
  modelUrl?: MaybeString;
  messageId?: string;
  imageUrl?: MaybeString;
  nftId?: MaybeString;
  tokenized?: boolean;
  type: "image" | "model";
  role?: "user" | "assistant";
  imageId: MaybeString;
  disabled?: TDisabledToolbar;
  modelId: MaybeString;
  isTexturedMesh?: boolean
};

export default function ToolBarWrapper({
  modelUrl,
  messageId,
  nftId,
  tokenized,
  imageUrl,
  type,
  disabled,
  modelId,
  imageId,
  isTexturedMesh
}: TToolBarWrapper) {
  return (
    <TooltipProvider>
      {ChatToolTips.map((item, index) => {
        if (type === "image") {
          if (!isToolbarImage(item.type)) return null;
        }

        if (type === "model") {
          if (!isToolbarModel(item.type)) return null;
        }

        if (item.type === "DOWNLOAD" && !disabled?.DOWNLOAD) {
          return (
            <DownloadModel
              tool={item}
              url={type === "image" ? imageUrl : modelUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}`}
            />
          );
        }

        if (item.type === "GENERATE_NFT" && !disabled?.GENERATE_NFT) {
          return (
            <ToolTipGenerateNft
              messageId={messageId}
              toolTipData={item}
              length={ChatToolTips.length}
              modelUrl={modelUrl}
              nftId={nftId}
              tokenized={tokenized}
              modelId={modelId}
              imageUrl={imageUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}`}
            />
          );
        }
        if (item.type === "EDIT_IMAGE" && !disabled?.EDIT_IMAGE) {
          return (
            <ToolTipRetryImage
              toolTipData={item}
              length={ChatToolTips.length}
              imageUrl={imageUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}`}
            />
          );
        }
        if (item.type === "GENERATE_MODEL" && !disabled?.GENERATE_MODEL) {
          return (
            <ToolTipGenerateModel
              imageId={imageId}
              length={ChatToolTips.length}
              toolTipData={item}
              modelUrl={modelUrl}
              imageUrl={imageUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}`}
            />
          );
        }
        if (item.type === "MAXIMIZE_VIEW" && !disabled?.MAXIMIZE_VIEW) {
          return (
            <ToolTipMaximize
              length={ChatToolTips.length}
              type={type}
              imageId={imageId}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}`}
              imageUrl={imageUrl}
              messageId={messageId}
              modelId={modelId}
              modelUrl={modelUrl}
              tool={item}
              nftId={nftId}
              tokenized={tokenized}
              isTexturedMesh={isTexturedMesh}
            />
          );
        }
        return null;
      })}
    </TooltipProvider>
  );
}
