import InfoIcon from "@/assets/icons/info-icon";
import ToolCallApproveButton from "./tool-call-approve-button";
import ToolCallCancelButton from "./tool-call-cancel-button";
import AssistantMessageShowDetailToolCall from "./tool-show-detail";
import { PromptPayload } from "@/types/chat/chat-types";
import { cn } from "@/lib/utils";

type TAssistantToolCall = {
  messageId: string;
  payload?: PromptPayload;
  credits?: number;
};

export default function AssistantToolCall({
  messageId,
  payload,
  credits,
}: TAssistantToolCall) {
  const shouldDisplayDetails = payload && typeof payload === "object";
  return (
    <div>
      {shouldDisplayDetails ? (
        <AssistantMessageShowDetailToolCall payload={payload} />
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
          <ToolCallApproveButton messageId={messageId} />
          <ToolCallCancelButton messageId={messageId} />
        </div>
      </div>
    </div>
  );
}
