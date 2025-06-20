import CrossFailed from "@/assets/icons/cross-failed";
import GreenCompleted from "@/assets/icons/green-completed";
import ChatProgressIcon from "@/assets/icons/utility/chat-progress-icon";
import { isToolCallCanceled } from "@/lib/helpers/status-checker";
import { TMessageStatus } from "@/types/chat/chat-types";
import { ReactNode } from "react";
import { TPillVariant } from "../elements/pill";
import ProgressCircle from "./assistant/tool-loader";

type TStatusPillDetails = {
  text: string;
  variant: TPillVariant["variant"];
  icon?: ReactNode;
};
type TChatStatus = {
  status?: TMessageStatus;
  prompt?: string;
  progress?: number;
};
/**
 * Add in the... Icon for each.
 */

export default function ChatStatus({ status, prompt, progress }: TChatStatus) {
  const details = getPillDetails(status, progress);
  const isStatusCanceled = isToolCallCanceled(status);

  if (isStatusCanceled) {
    prompt = "Request has Canceled";
  }

  return (
    <div className="flex gap-2 items-center">
      <div className="w-5 h-5 ">{details?.icon}</div>
      <p className="max-w-max font-medium text-sm">{prompt ?? details?.text}</p>
    </div>
  );
}
function getPillDetails(
  status?: TMessageStatus,
  progress?: number,
): TStatusPillDetails | null {
  switch (status) {
    case "FAILED": {
      return {
        icon: <CrossFailed />,
        text: "Failed",
        variant: "accent_destructive",
      };
    }
    case "IN_PROGRESS": {
      return {
        text: "In Progress",
        variant: "blue",
        icon: <ProgressCircle size={20} percentage={progress} />,
      };
    }
    case "IN_QUEUE": {
      return {
        text: "In Queue",
        variant: "gray",
      };
    }
    case "COMPLETED": {
      return {
        icon: (
          <div className="flex items-center justify-center w-5 h-5">
            <GreenCompleted />
          </div>
        ),
        text: "Completed",
        variant: "green",
      };
    }
    case "CANCELLED": {
      return {
        icon: <CrossFailed stroke="#FFFA78" />,
        text: "Request Cancelled",
        variant: "gray",
      };
    }
    case "PENDING": {
      return {
        text: "Approve this request to proceed",
        variant: "darkYellow",
        icon: <ChatProgressIcon />,
      };
    }
    default: {
      return null;
    }
  }
}
