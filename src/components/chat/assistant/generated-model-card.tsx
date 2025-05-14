import { BorderBeam } from "@/components/ui/border-beam";
import {
  isToolCallPending,
  isToolCallPendingOrInProgress,
} from "@/lib/helpers/status-checker";
import { cn } from "@/lib/utils";
import { MaybeString } from "@/types";
import { TMessageStatus } from "@/types/chat/chat-types";
import GenerationLoader from "./generation-card/generation-loader";
import ImageViewLoader from "./generation-card/image-view-loader";
import ModelViewWrapper from "./generation-card/model-view-wrapper";
import ToolBarWrapper from "@/components/chat/toolbar/tool-bar-wrapper";
type TGeneratedModelCard = {
  imageUrl: MaybeString;
  modelUrl: MaybeString;
  status: TMessageStatus;
  messageId: string;
  nftId: MaybeString;
  tokenized: boolean;
};

export default function GeneratedModelCard({
  imageUrl,
  modelUrl,
  status,
  messageId,
  nftId,
  tokenized,
}: TGeneratedModelCard) {
  const isPending = isToolCallPending(status);
  const isGenerating = isToolCallPendingOrInProgress(status);
  if (isPending) {
    return null;
  }
  return (
    <div className="">
      <div className="max-w-[clamp(250px,100%,320px)] w-full aspect-square rounded-2xl relative justify-center">
        <GenerationLoader isGenerating={isGenerating} />
        <ImageViewLoader imageUrl={imageUrl} isGenerating={isGenerating} />
        <ModelViewWrapper imageUrl={imageUrl} modelUrl={modelUrl} />
        <BorderBeam
          transition={{
            velocity: 1,
          }}
          containerClassName={cn("border-2 rounded-2xl", {
            hidden: !isGenerating,
          })}
          initialOffset={0}
          size={270}
          colorFrom="rgba(119, 217, 253,1)"
          colorTo="rgba(119, 217, 253,1)"
          className="border-2 rounded-2xl z-50 relative"
        />
      </div>
      <div className={cn("flex mt-2 gap-2 pl-3", { hidden: isGenerating })}>
        <ToolBarWrapper
          imageUrl={imageUrl}
          messageId={messageId}
          nftId={nftId}
          tokenized={tokenized}
          modelUrl={modelUrl}
        />
      </div>
    </div>
  );
}
