import ToolBarWrapper from "@/components/chat/toolbar/tool-bar-wrapper";
import {
  isToolCallCanceled,
  isToolCallGenerating,
  isToolCallPending,
} from "@/lib/helpers/status-checker";
import { cn } from "@/lib/utils";
import { Maybe, MaybeString } from "@/types";
import { TMessageStatus, TToolRequest, TToolType } from "@/types/chat/chat-types";
import MagicLoaderWand from "../magic-loader-wand";
import ImageViewLoader from "./generation-card/image-view-loader";
import ModelViewWrapper from "./generation-card/model-view-wrapper";
import ModelToolHeader from "./model-tool-header";
import LoaderCircle from "../Loader-circle";
import { Search, ZoomIn } from "lucide-react";
import ViewModelTrigger from "./view-model-trigger";
import { Model } from "@/gql/types/graphql";
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
  index?: number;
  model: Model;
  toolRequest: Maybe<TToolRequest>;
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
  index,
}: TGeneratedModelCard) {
  const isGenerating = isToolCallGenerating(status);
  const isPending = isToolCallPending(status);
  const isCanceledMessage = isToolCallCanceled(status);
  return (
    <div className=" w-full aspect-square overflow-hidden rounded-2xl  relative justify-center">
      <div className="w-6 h-6 text-gray-400 absolute top-2 z-20 right-2">
        <ViewModelTrigger />{" "}
      </div>
      <div
        className={cn(
          " w-full h-full   image-model-generation transition-all duration-300 ease-in-out  absolute top-0 left-0 ",
          {
            "image-loader": isPending,
          }
        )}
      />
      {!modelUrl ? (
        <div className="w-full h-full  absolute top-0 left-0 z-20">
          <div className="flex items-center justify-center w-full h-full  ">
            {isPending ? (
              <p className="text-2xl text-center ">
                Approval
                <br />
                Pending
              </p>
            ) : (
              <div className="h-32 w-32 ">
                <LoaderCircle index={index} />
              </div>
            )}
          </div>
        </div>
      ) : null}
      <ImageViewLoader imageUrl={null} isGenerating={isGenerating} />

      <ModelViewWrapper imageUrl={null} modelUrl={modelUrl} />
    </div>
  );
}
