import CrossFailed from "@/assets/icons/cross-failed";
import GreenCompleted from "@/assets/icons/green-completed";
import { isToolCallPending } from "@/lib/helpers/status-checker";
import { cn } from "@/lib/utils";
import { Maybe, MaybeString } from "@/types";
import { TMessageStatus } from "@/types/chat/chat-types";
import ProgressCircle from "./tool-loader";

type TModelToolHeader = {
  message: MaybeString;
  persentage: number;
  status?: TMessageStatus;
  isGenerating: boolean;
};

export default function ModelToolHeader({
  message,
  persentage,
  status,
  isGenerating,
}: TModelToolHeader) {
  const {
    logo,
    persentage: ToolPercentage,
    message: toolMessage,
  } = getLogoByStatusAndPercentage(status, persentage, message);
  const isPending = isToolCallPending(status);
  // const isNotFailed = isToolCallFailed(status);

  if (isPending) return null;
  return (
    <div className="bg-[#1C202761] rounded-t-2xl  py-3 px-3 max-w-[clamp(250px,100%,320px)] w-full">
      <div className="flex item-center justify-between  font-medium ">
        <div className="flex items-center justify-center gap-1">
          <div className="w-4  h-4">{logo}</div>
          <p
            className={cn("line-clamp-1 leading-none text-sm mt-0.5", {
              "animate-pulse": isGenerating,
            })}
          >
            {toolMessage}
          </p>
        </div>
        <div className="blue-text-clip">{ToolPercentage}</div>
      </div>
    </div>
  );
}

export function getLogoByStatusAndPercentage(
  status: Maybe<TMessageStatus>,
  persentage: number,
  message: Maybe<string>,
) {
  switch (status) {
    case "COMPLETED": {
      return {
        logo: <GreenCompleted />,
        persentage: null,
        message: <span className="text-green-500 leading-none">{message}</span>,
      };
    }

    case "FAILED": {
      return {
        logo: <CrossFailed />,
        persentage: null,
        message: (
          <span className="text-red-500 leading-none">
            Failed to generate model.
          </span>
        ),
      };
    }
    default: {
      return {
        logo: <ProgressCircle percentage={persentage} />,
        persentage: `${persentage}%`,
        message,
      };
    }
  }
}
