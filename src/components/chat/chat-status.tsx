import { TMessageStatus } from "@/types/chat/chat-types";
import Pill, { TPillVariant } from "../elements/pill";


type TStatusPillDetails = {
  text: string;
  variant: TPillVariant["variant"];
};
type TChatStatus = {
  status: TMessageStatus;
};
export default function ChatStatus({ status }: TChatStatus) {
  if (status === "CANCELLED") return null;
  const details = getPillDetails(status);
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
function getPillDetails(status: TMessageStatus): TStatusPillDetails {
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
    default: {
      return {
        text: "Pending",
        variant: "darkYellow",
      };
    }
  }
}
