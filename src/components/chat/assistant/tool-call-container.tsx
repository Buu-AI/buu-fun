import { isToolCallPending } from "@/lib/helpers/status-checker";
import ChatStatus from "../chat-status";
import { PromptPayload, ToolRequestStatus } from "../types.temp";
import AssistantToolCall from "./tool-call";
import ToolCallHeaderMessage from "./tool-call-header-message";

type TAssistantToolCallContainer = {
  prompt?: string | null;
  messageId: string;
  status: ToolRequestStatus;
  payload: PromptPayload;
};

export default function AssistantToolCallContainer({
  prompt,
  messageId,
  status,
  payload,
}: TAssistantToolCallContainer) {
  const isPending = isToolCallPending(status);
  return (
    <div className="">
      <ChatStatus status={status} />
      <ToolCallHeaderMessage prompt={prompt} status={status} />
      {isPending ? (
        <AssistantToolCall payload={payload} messageId={messageId} />
      ) : null}
    </div>
  );
}
