import { buttonVariants } from "@/components/ui/button";
import { ONE_MINUTE_FORTY_FIVE_SECONDS } from "@/constants/time";
import { isToolCallGeneratingOrPending } from "@/lib/helpers/status-checker";
import { cn, hasDatePassedThreshold } from "@/lib/utils";
import { TChatMessage } from "@/types/chat/chat-types";
import { Loader2, X } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type TAssistantMessage = {
  prompt?: string | null;
  isLastMessage: boolean;
  createdAt: string;
} & TChatMessage;

export default function AssistantMessage({
  prompt,
  createdAt,
  status,
}: TAssistantMessage) {
  const isTimedOut = hasDatePassedThreshold(
    createdAt,
    ONE_MINUTE_FORTY_FIVE_SECONDS,
  );
  const isGenerating = isToolCallGeneratingOrPending(status);

  if (!prompt && isGenerating && !isTimedOut) {
    return (
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 flex  items-center">
          <Loader2 className="animate-spin text-[#78dbff] w-4 h-4" />
        </div>
        <p className="text-sm font-semibold blue-text-clip">Thinking</p>
      </div>
    );
  }

  if (!prompt && isGenerating && isTimedOut) {
    return (
      <div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 flex  items-center">
            <X className=" text-buu-destructive w-4 h-4" />
          </div>
          <p className="text-sm font-semibold text-buu-destructive">
            Chat has been crashed, Please start a new Chat
          </p>
        </div>
        <div className="mt-2">
          <Link
            className={buttonVariants({ variant: "default", size: "buu" })}
            href={"/app"}
          >
            Start a new Chat
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div>
        {prompt ? (
          <ReactMarkdown
            unwrapDisallowed={true}
            components={{
              code: ({ children }) => <p>{children}</p>,
              pre: ({ children }) => <p>{children}</p>,
            }}
            disallowedElements={["pre", "code"]}
            className={cn("prose prose-base all-white  text-white")}
            remarkPlugins={[remarkGfm]}
          >
            {prompt ?? ""}
          </ReactMarkdown>
        ) : isGenerating && !isTimedOut ? (
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex  items-center">
              <Loader2 className="animate-spin text-[#78dbff] w-4 h-4" />
            </div>
            <p className="text-sm font-semibold blue-text-clip">Thinking</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
