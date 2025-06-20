import { Maybe, MaybeString } from "@/types";
import {
  PromptPayload,
  TMessageStatus,
  TToolRequest,
} from "@/types/chat/chat-types";
import ChatStatus from "../chat-status";
import AssistantToolCall from "./tool-call";

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
  credits,
  messageId,
  status,
  payload,
  toolRequestId,
  toolRequest,
}: TAssistantToolCallContainer) {
  return (
    <div className="">
      <ChatStatus
        status={status}
        progress={toolRequest?.percentage}
        prompt={toolRequest?.message}
      />
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
