import Pill, { TPillVariant } from "../elements/pill";
import { ToolRequestStatus } from "./types.temp";

type TStatusPillDetails = {
  text: string;
  variant: TPillVariant["variant"];
};
type TChatStatus = {
  status: ToolRequestStatus;
};
export default function ChatStatus({ status }: TChatStatus) {
  if (status === "CANCELED") return null;
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
function getPillDetails(status: ToolRequestStatus): TStatusPillDetails {
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
