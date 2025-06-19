import InfoIcon from "@/assets/icons/info-icon";
import { getPayloadInformation, isValidPayload } from "@/lib/helpers/chat/tool";
import { cn } from "@/lib/utils";
import { Maybe, MaybeString } from "@/types";
import { PromptPayload, TToolRequest } from "@/types/chat/chat-types";
import ToolCallApproveButton from "./tool-call-approve-button";
import ToolCallCancelButton from "./tool-call-cancel-button";
import AssistantMessageShowDetailToolCall from "./tool-show-detail";
import { isToolCallPending } from "@/lib/helpers/status-checker";

type TAssistantToolCall = {
  messageId: string;
  payload?: PromptPayload | string;
  credits?: number;
  toolRequestId: MaybeString;
  toolRequest: Maybe<TToolRequest>;
};

export default function AssistantToolCall({
  payload,
  credits,
  toolRequestId,
  toolRequest,
}: TAssistantToolCall) {
  const parsedPayload = getPayloadInformation(payload);
  const shouldDisplayDetails = isValidPayload(parsedPayload) || toolRequest;

  const isToolPending = isToolCallPending(toolRequest?.status);

  if (!toolRequestId || !toolRequest) return;

  return (
    <div className="">
      {shouldDisplayDetails ? (
        <AssistantMessageShowDetailToolCall
          toolRequest={toolRequest}
          payload={parsedPayload}
        />
      ) : null}
      {isToolPending ? (
        <div>
          <div className="mt-3 flex w-full gap-4">
            <ToolCallCancelButton requestId={toolRequestId} />
            <ToolCallApproveButton requestId={toolRequestId} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
