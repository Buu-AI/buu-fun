import { isToolCallInProgressOrCompleted } from "@/lib/helpers/status-checker";
import { PromptPayload, ToolRequestStatus } from "../types.temp";
import AssistantToolCallContainer from "./tool-call-container";
import GeneratedModelCard from "./generated-model-card";
import { MaybeString } from "@/types";
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
  const isInProgressOrCompleted = isToolCallInProgressOrCompleted(status);

  return (
    <div className="">
      <AssistantToolCallContainer
        payload={payload}
        messageId={messageId}
        prompt={prompt}
        status={status}
      />
      <GeneratedModelCard
        imageUrl={imageUrl}
        modelUrl={modelUrl}
        status={status}
      />
    </div>
  );
}
