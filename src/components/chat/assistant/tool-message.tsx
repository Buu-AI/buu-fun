import { MaybeString } from "@/types";
import { PromptPayload, ToolRequestStatus } from "../types.temp";
import GeneratedModelCard from "./generated-model-card";
import AssistantToolCallContainer from "./tool-call-container";
type TAssistantMessage = {
  messageId: string;
  status: ToolRequestStatus;
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
