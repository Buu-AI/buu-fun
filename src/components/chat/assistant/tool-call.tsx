import InfoIcon from "@/assets/icons/info-icon";
import { getPayloadInformation, isValidPayload } from "@/lib/helpers/chat/tool";
import { cn } from "@/lib/utils";
import { MaybeString } from "@/types";
import { PromptPayload } from "@/types/chat/chat-types";
import ToolCallApproveButton from "./tool-call-approve-button";
import ToolCallCancelButton from "./tool-call-cancel-button";
import AssistantMessageShowDetailToolCall from "./tool-show-detail";

type TAssistantToolCall = {
  messageId: string;
  payload?: PromptPayload | string;
  credits?: number;
  toolRequestId: MaybeString;
};

export default function AssistantToolCall({
  payload,
  credits,
  toolRequestId,
}: TAssistantToolCall) {
  const parsedPayload = getPayloadInformation(payload);

  const shouldDisplayDetails = isValidPayload(parsedPayload);
  if (!toolRequestId) return;
  return (
    <div>
      {shouldDisplayDetails ? (
        <AssistantMessageShowDetailToolCall payload={parsedPayload} />
      ) : null}
      <div>
        <div className="mt-3">
          <div
            className={cn("flex gap-1 items-center", {
              hidden: !credits,
            })}
          >
            <div className="w-3 h-3">
              <InfoIcon />
            </div>

            <p
              className={cn(
                "text-xs font-bold uppercase text-muted-foreground/60",
              )}
            >
              This request will cost {credits} credits
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-4">
          <ToolCallApproveButton requestId={toolRequestId} />
          <ToolCallCancelButton requestId={toolRequestId} />
        </div>
      </div>
    </div>
  );
}
