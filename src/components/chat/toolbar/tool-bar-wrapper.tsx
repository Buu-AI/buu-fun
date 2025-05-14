import ToolTipGenerateNft from "@/components/generation/tool-tip-generate-nft";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MaybeString } from "@/types";
import DownloadModel from "./download-model";
import { ChatToolTips } from "./tool-bar-content";

type TToolBarWrapper = {
  modelUrl: MaybeString;
  messageId: string;
  imageUrl: MaybeString;
};

export default function ToolBarWrapper({
  modelUrl,
  messageId,
  imageUrl,
}: TToolBarWrapper) {
  return (
    <TooltipProvider>
      {ChatToolTips.map((item, index) => {
        if (item.type === "DOWNLOAD") {
          return (
            <DownloadModel
              tool={item}
              modelUrl={modelUrl}
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
