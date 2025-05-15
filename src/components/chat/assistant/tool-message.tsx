import { MaybeString } from "@/types";
import { PromptPayload } from "../types.temp";
import GeneratedModelCard from "./generated-model-card";
import AssistantToolCallContainer from "./tool-call-container";
import { TMessageStatus } from "@/types/chat/chat-types";
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
};
export default function AssistantToolMessage({
  status,
  prompt,
  payload,
  imageUrl,
  modelUrl,
  messageId,
  nftId,
  tokenized,
  credits,
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
      <GeneratedModelCard
        messageId={messageId}
        imageUrl={imageUrl}
        nftId={nftId}
        tokenized={tokenized}
        modelUrl={modelUrl}
        status={status}
      />
    </div>
  );
}
