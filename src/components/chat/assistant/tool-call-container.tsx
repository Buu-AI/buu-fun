import { isToolCallPending } from "@/lib/helpers/status-checker";
import {
  PromptPayload,
  TMessageStatus,
  TToolRequest,
} from "@/types/chat/chat-types";
import ChatStatus from "../chat-status";
import AssistantToolCall from "./tool-call";
import ToolCallHeaderMessage from "./tool-call-header-message";
import { Maybe, MaybeString } from "@/types";

type TAssistantToolCallContainer = {
  prompt?: string | null;
  messageId: string;
  status?: TMessageStatus;
  payload: PromptPayload;
  credits: number;
  toolRequestId: MaybeString;
  toolRequest: Maybe<TToolRequest>;
};

export default function AssistantToolCallContainer({
  prompt,
  credits,
  messageId,
  status,
  payload,
  toolRequestId,
  toolRequest,
}: TAssistantToolCallContainer) {
  const isPending = isToolCallPending(status);
  return (
    <div className="">
      <ChatStatus
        status={status}
        progress={toolRequest?.percentage}
        prompt={toolRequest?.message}
      />
      {/* <ToolCallHeaderMessage prompt={prompt} status={status} /> */}
      <AssistantToolCall
        credits={credits}
        toolRequest={toolRequest}
        payload={payload}
        messageId={messageId}
        toolRequestId={toolRequestId}
      />
    </div>
  );
}
