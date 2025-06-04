import { isToolCallPending } from "@/lib/helpers/status-checker";
import { PromptPayload, TMessageStatus } from "@/types/chat/chat-types";
import ChatStatus from "../chat-status";
import AssistantToolCall from "./tool-call";
import ToolCallHeaderMessage from "./tool-call-header-message";
import { MaybeString } from "@/types";

type TAssistantToolCallContainer = {
  prompt?: string | null;
  messageId: string;
  status?: TMessageStatus;
  payload: PromptPayload;
  credits: number;
  toolRequestId: MaybeString;
};

export default function AssistantToolCallContainer({
  prompt,
  credits,
  messageId,
  status,
  payload,
  toolRequestId,
}: TAssistantToolCallContainer) {
  const isPending = isToolCallPending(status);
  return (
    <div className="">
      <ChatStatus status={status} />
      <ToolCallHeaderMessage prompt={prompt} status={status} />
      {isPending ? (
        <AssistantToolCall
          credits={credits}
          payload={payload}
          messageId={messageId}
          toolRequestId={toolRequestId}
        />
      ) : null}
    </div>
  );
}
