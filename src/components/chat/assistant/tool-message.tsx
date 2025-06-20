import {
  getModelBasedOnPriority,
  getModelMessagesAndPercentage,
  isTexturedMeshReady,
} from "@/lib/helpers/chat/model";
import { isToolCallCanceled } from "@/lib/helpers/status-checker";
import { TChatMessage } from "@/types/chat/chat-types";
import ImageRenderer from "../image-renderer";
import GeneratedModelCard from "./generated-model-card";
import AssistantToolCallContainer from "./tool-call-container";
type TAssistantMessage = {} & TChatMessage;
export default function AssistantToolMessage({
  status,
  prompt,
  payload,
  messageId,
  credits,
  type,
  medias,
  models,
  toolRequest,
}: TAssistantMessage) {
  const isCanceled = isToolCallCanceled(toolRequest?.status);
  return (
    <div className="chat-pending-container max-w-md  lg:max-w-lg px-4 py-4">
      <AssistantToolCallContainer
        payload={payload}
        messageId={messageId}
        toolRequestId={toolRequest?._id}
        toolRequest={toolRequest}
        prompt={prompt}
        status={status}
        credits={credits ?? 0}
      />
      <div className="">
        <div className="">
          {medias && medias.length > 0 ? (
            <ImageRenderer
              messageId={messageId}
              role="assistant"
              status={status}
              medias={medias}
              containerClassName="justify-normal"
            />
          ) : null}
        </div>
      </div>
      {/*  */}
      {!isCanceled && models.length ? (
        <div className="h-0.5 w-full bg-white/10 rounded-full my-6 px-2" />
      ) : null}
      <div className="grid grid-cols-2  gap-4 justify-around flex-wrap w-full  ">
        {!isCanceled
          ? models.map((item, index) => {
              const modelUrl = getModelBasedOnPriority(item);

              const { message, percentage, status } =
                getModelMessagesAndPercentage(toolRequest);

              const isTexturedMesh = isTexturedMeshReady(item);
              return (
                <GeneratedModelCard
                  model={item}
                  updatedAt={item.updatedAt}
                  toolRequest={toolRequest}
                  index={index}
                  isTexturedMesh={isTexturedMesh}
                  modelId={item._id}
                  message={message}
                  key={`generate-model-card-${item._id}-${item.messageId}-${modelUrl}-${item._id}`}
                  messageId={messageId}
                  nftId={item.nftId}
                  tokenized={
                    item.nftId && typeof item.nftId === "string" ? true : false
                  }
                  modelUrl={modelUrl}
                  toolPercentage={percentage}
                  imageUrl={item.image.url}
                  status={status}
                  type={type}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
