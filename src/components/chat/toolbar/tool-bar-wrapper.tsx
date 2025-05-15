import ToolTipGenerateNft from "@/components/chat/toolbar/tool-tip-generate-nft";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MaybeString } from "@/types";
import DownloadModel from "./download-model";
import { ChatToolTips, isToolImage } from "./tool-bar-content";
import ToolTipRetryImage from "./tool-tip-retry-image";

type TToolBarWrapper = {
  modelUrl?: MaybeString;
  messageId: string;
  imageUrl?: MaybeString;
  nftId?: MaybeString;
  tokenized?: boolean;
  type: "image" | "model";
  role?: "user" | "assistant";
};

export default function ToolBarWrapper({
  modelUrl,
  messageId,
  nftId,
  tokenized,
  imageUrl,
  type,
}: TToolBarWrapper) {
  return (
    <TooltipProvider>
      {ChatToolTips.map((item, index) => {
        if (type === "image") {
          if (!isToolImage(item.type)) return null;
        }
        if (item.type === "DOWNLOAD") {
          return (
            <DownloadModel
              tool={item}
              url={type === "image" ? imageUrl : modelUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}-${index}`}
            />
          );
        }
        if (item.type === "GENERATE_NFT") {
          return (
            <ToolTipGenerateNft
              messageId={messageId}
              toolTipData={item}
              length={ChatToolTips.length}
              modelUrl={modelUrl}
              nftId={nftId}
              tokenized={tokenized}
              imageUrl={imageUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}-${index}`}
            />
          );
        }
        if (item.type === "EDIT_IMAGE") {
          return (
            <ToolTipRetryImage
              messageId={messageId}
              toolTipData={item}
              length={ChatToolTips.length}
              modelUrl={modelUrl}
              imageUrl={imageUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}-${index}`}
            />
          );
        }
        if (item.type === "GENERATE_MODEL") {
          return (
            <ToolTipRetryImage
              messageId={messageId}
              toolTipData={item}
              length={ChatToolTips.length}
              modelUrl={modelUrl}
              imageUrl={imageUrl}
              index={index}
              key={`tool-tip-contents-${item.content.trim()}-${index}`}
            />
          );
        }
        return null;
        // if (item.type === "GENERATE_NFT") {
        //   return (
        //     <ToolTipGenerateNft
        //       key={`tool-tip-contents-${item.content.trim()}-${index}`}
        //       index={index}
        //       length={ToolTips.length}
        //       subThreadId={subThreadId}
        //       toolTipData={item}
        //       tokenized={tokenized}
        //       imageUrl={imageUrl}
        //       modelUrl={modelUrl}
        //       modelId={modelId}
        //     />
        //   );
        // }
      })}
    </TooltipProvider>
  );
}
