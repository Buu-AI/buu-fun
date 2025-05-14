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
};
export default function AssistantToolMessage({
  status,
  prompt,
  payload,
  imageUrl,
  modelUrl,
  messageId,
}: TAssistantMessage) {
  return (
    <div className="">
      <AssistantToolCallContainer
        payload={payload}
        messageId={messageId}
        prompt={prompt}
        status={status}
      />
      <GeneratedModelCard
        messageId={messageId}
        imageUrl={imageUrl}
        modelUrl={modelUrl}
        status={status}
      />
    </div>
  );
}
