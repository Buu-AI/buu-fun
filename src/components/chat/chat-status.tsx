import { TMessageStatus } from "@/types/chat/chat-types";
import Pill, { TPillVariant } from "../elements/pill";
import {
  isToolCallCanceled,
  isToolCallPending,
} from "@/lib/helpers/status-checker";

type TStatusPillDetails = {
  text: string;
  variant: TPillVariant["variant"];
};
type TChatStatus = {
  status?: TMessageStatus;
};
export default function ChatStatus({ status }: TChatStatus) {
  const details = getPillDetails(status);
  const isStatusPending = isToolCallPending(status);
  const isStatusCanceled = isToolCallCanceled(status);
  if (!details) return;
  // Only pending is showing in the UI other cases are deprecated
  if (!isStatusPending && !isStatusCanceled) return null;

  return (
    <Pill
      size={"md"}
      className="max-w-max font-medium rounded-lg "
      variant={details.variant}
    >
      {details.text}
    </Pill>
  );
}
function getPillDetails(status?: TMessageStatus): TStatusPillDetails | null {
  switch (status) {
    case "FAILED": {
      return {
        text: "Failed",
        variant: "accent_destructive",
      };
    }
    case "IN_PROGRESS": {
      return {
        text: "In Progress",
        variant: "blue",
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
        text: "Completed",
        variant: "green",
      };
    }
    case "CANCELLED": {
      return {
        text: "Cancelled",
        variant: "gray",
      };
    }
    case "PENDING": {
      return {
        text: "Pending",
        variant: "darkYellow",
      };
    }
    default: {
      return null;
    }
  }
}
