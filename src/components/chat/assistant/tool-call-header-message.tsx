import { cn } from "@/lib/utils";
import { TMessageStatus } from "@/types/chat/chat-types";

type TToolCallHeaderMessage = {
  status: TMessageStatus;
  prompt?: string | null;
};

export default function ToolCallHeaderMessage({
  status,
  prompt,
}: TToolCallHeaderMessage) {
  const headerDetails = getToolMessage(status);
  return (
    <p
      className={cn(
        "max-w-max p-2 px-3 text-muted-foreground/50 text-base font-medium rounded-lg",
        {
          "text-buu-destructive": headerDetails?.isFailed,
          "text-white": headerDetails.isSuccess,
        },
      )}
    >
      {prompt ?? headerDetails?.text}
    </p>
  );
}
type TGetToolMessage = {
  text: string;
  isFailed?: boolean;
  isCanceled?: boolean;
  isSuccess?: boolean;
};
function getToolMessage(status: TMessageStatus): TGetToolMessage {
  switch (status) {
    case "IN_QUEUE": {
      return {
        text: "The request is in queue...",
      };
    }
    case "PENDING": {
      return {
        text: "I'm gonna generate a 3D Model...",
      };
    }
    case "IN_PROGRESS": {
      return {
        text: "Approve request to generate your model",
      };
    }
    case "FAILED": {
      return {
        // text: "The request for generating the 3D Model has been failed.",
        text: "",
        isFailed: true,
      };
    }
    case "COMPLETED": {
      return {
        text: "3D model generated",
        isSuccess: true,
      };
    }
    case "CANCELLED": {
      return {
        text: "User has canceled the request",
        isCanceled: true,
      };
    }
    default: {
      return {
        text: "I'm gonna generate a 3D Model...",
      };
    }
  }
}
