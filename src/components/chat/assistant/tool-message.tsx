import { MaybeString } from "@/types";
import GeneratedModelCard from "./generated-model-card";
import AssistantToolCallContainer from "./tool-call-container";
import {
  PromptPayload,
  TMessageStatus,
  TToolType,
} from "@/types/chat/chat-types";
import ImageRenderer from "../image-renderer";
type TAssistantMessage = {
  messageId: string;
  status: TMessageStatus;
  prompt: MaybeString;
  payload: PromptPayload;
  modelUrl: MaybeString;
  imageUrl: MaybeString;
  nftId: MaybeString;
  tokenized: boolean;
  credits: number;
  type?: TToolType;
  imageUrls: string[];
};
export default function AssistantToolMessage({
  status,
  prompt,
  payload,
  imageUrl,
  imageUrls,
  modelUrl,
  messageId,
  nftId,
  tokenized,
  credits,
  type,
}: TAssistantMessage) {
  return (
    <div className="">
      <AssistantToolCallContainer
        payload={payload}
        messageId={messageId}
        prompt={prompt}
        status={status}
        credits={credits}
      />
      <div className="">
        <div className="">
          {imageUrls && imageUrls.length > 0 ? (
            <ImageRenderer
              messageId={messageId}
              role="assistant"
              status={status}
              imageUrls={imageUrls}
              containerClassName="justify-normal"
            />
          ) : null}
        </div>
      </div>
      <GeneratedModelCard
        messageId={messageId}
        imageUrl={imageUrl}
        nftId={nftId}
        tokenized={tokenized}
        modelUrl={modelUrl}
        imageUrls={imageUrls}
        status={status}
        type={type}
      />
    </div>
  );
}
