import { Model } from "@/gql/types/graphql";
import {
  isToolCallFailed,
  isToolCallGenerating,
  isToolCallPending,
} from "@/lib/helpers/status-checker";
import { cn, isPastInMinutes } from "@/lib/utils";
import { Maybe, MaybeString } from "@/types";
import {
  TMessageStatus,
  TToolRequest,
  TToolType,
} from "@/types/chat/chat-types";
import LoaderCircle from "../Loader-circle";
import ImageViewLoader from "./generation-card/image-view-loader";
import ModelViewWrapper from "./generation-card/model-view-wrapper";
import ViewModelTrigger from "./view-model-trigger";
import FailedCross from "@/assets/icons/failed-cross";
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
  modelId: string;
  isTexturedMesh: boolean;
  index?: number;
  model: Model;
  updatedAt?: any;
  toolRequest: Maybe<TToolRequest>;
};

export default function GeneratedModelCard({
  modelUrl,
  status,
  modelId,
  index,
  toolRequest,
}: TGeneratedModelCard) {
  const isGenerating = isToolCallGenerating(status);
  const isPending = isToolCallPending(status);
  const isFailed = isToolCallFailed(status);
  const isPastFourMinute = isPastInMinutes(toolRequest?.updatedAt);
  return (
    <div className=" w-full aspect-square overflow-hidden rounded-2xl  relative justify-center">
      <div className="w-6 h-6 text-gray-400 absolute top-2 z-20 right-2">
        {modelUrl ? (
          <ViewModelTrigger
            modelId={modelId}
            toolRequestId={toolRequest?._id}
          />
        ) : null}
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
        <div className="w-full h-full absolute top-0 left-0 z-20">
          <div className="flex items-center justify-center w-full h-full">
            {isPending ? (
              <p className="text-2xl text-center">
                Approval
                <br />
                Pending
              </p>
            ) : isFailed ? (
              <div className="h-32 w-32">
                <FailedCross />
              </div>
            ) : (
              <div className="h-32 w-32">
                <LoaderCircle disableSpin={isPastFourMinute} index={index} />
              </div>
            )}
          </div>
        </div>
      ) : null}
      <ImageViewLoader imageUrl={null} isGenerating={isGenerating} />

      <ModelViewWrapper key={modelUrl} imageUrl={null} modelUrl={modelUrl} />
    </div>
  );
}
