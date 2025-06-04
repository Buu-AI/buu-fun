import { TChatMessage } from "@/types/chat/chat-types";
import ImageRenderer from "../image-renderer";
import GeneratedModelCard from "./generated-model-card";
import AssistantToolCallContainer from "./tool-call-container";
import {
  getModelBasedOnPriority,
  getModelMessagesAndPersentage,
} from "@/lib/helpers/chat/model";
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
  return (
    <div className="">
      <AssistantToolCallContainer
        payload={payload}
        messageId={messageId}
        toolRequestId={toolRequest?._id}
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
      {models.map((item) => {
        const modelUrl = getModelBasedOnPriority(item);
        const { message, persentage, status } =
          getModelMessagesAndPersentage(item);
        return (
          <GeneratedModelCard
            modelId={item._id}
            message={message}
            key={`${item._id}-${item.messageId}`}
            messageId={messageId}
            nftId={item.nftId}
            tokenized={
              item.nftId && typeof item.nftId === "string" ? true : false
            }
            modelUrl={modelUrl}
            toolPersentage={persentage}
            imageUrl={item.image.url}
            status={status}
            type={type}
          />
        );
      })}
    </div>
  );
}

{
  /* <GeneratedModelCard
  messageId={messageId}
  imageUrl={imageUrl}
  nftId={nftId}
  tokenized={tokenized}
  modelUrl={modelUrl}
  imageUrls={imageUrls}
  status={status}
  type={type}
/>; */
}
