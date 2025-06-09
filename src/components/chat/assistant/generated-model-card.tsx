import ToolBarWrapper from "@/components/chat/toolbar/tool-bar-wrapper";
import {
  isToolCallCanceled,
  isToolCallGenerating,
  isToolCallPending,
} from "@/lib/helpers/status-checker";
import { cn } from "@/lib/utils";
import { MaybeString } from "@/types";
import { TMessageStatus, TToolType } from "@/types/chat/chat-types";
import MagicLoaderWand from "../magic-loader-wand";
import ImageViewLoader from "./generation-card/image-view-loader";
import ModelViewWrapper from "./generation-card/model-view-wrapper";
import ModelToolHeader from "./model-tool-header";
type TGeneratedModelCard = {
  imageUrl: MaybeString;
  modelUrl: MaybeString;
  status?: TMessageStatus;
  messageId: string;
  nftId: MaybeString;
  tokenized: boolean;
  type?: TToolType;
  message: MaybeString;
  toolPercentage?: number;
  modelId: MaybeString;
  isTexturedMesh: boolean;
};

export default function GeneratedModelCard({
  imageUrl,
  modelUrl,
  status,
  messageId,
  nftId,
  tokenized,
  message,
  toolPercentage,
  modelId,
  isTexturedMesh,
}: TGeneratedModelCard) {
  const isGenerating = isToolCallGenerating(status);
  const isPending = isToolCallPending(status);
  const isCanceledMessage = isToolCallCanceled(status);

  if (isPending || isCanceledMessage) return null;

  return (
    <div className="mt-3">
      <ModelToolHeader
        message={message}
        percentage={toolPercentage}
        status={status}
        isGenerating={isGenerating}
      />
      <div className="max-w-[clamp(250px,100%,320px)] bg-balance-card overflow-hidden  w-full aspect-square rounded-b-2xl relative justify-center">
        {!modelUrl ? (
          <div className="w-full h-full  absolute top-0 left-0 z-20">
            <div className="flex items-center justify-center  h-full w-full">
              <MagicLoaderWand />
            </div>
          </div>
        ) : null}
        <ImageViewLoader imageUrl={null} isGenerating={isGenerating} />

        <ModelViewWrapper imageUrl={null} modelUrl={modelUrl} />
      </div>
      <div className="h-[20px]">
        <div
          className={cn("flex mt-2 gap-2 pl-3", {
            hidden: isGenerating || !modelUrl,
          })}
        >
          <ToolBarWrapper
            type="model"
            imageId={null}
            imageUrl={imageUrl}
            modelUrl={modelUrl}
            messageId={messageId}
            nftId={nftId}
            tokenized={tokenized}
            modelId={modelId}
            disabled={{
              GENERATE_MODEL: true,
              GENERATE_NFT: !isTexturedMesh,
            }}
          />
        </div>
      </div>
    </div>
  );
}
