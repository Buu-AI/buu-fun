import { cn, hasDatePassedThreshold } from "@/lib/utils";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { gsap } from "gsap";
import { Loader2, X } from "lucide-react";
import BuuLogoSvg from "@/assets/icons/logo/buu-logo";
import { ONE_MINUTE_FORTY_FIVE_SECONDS } from "@/constants/time";
import { TMessageStatus } from "@/types/chat/chat-types";
import { isToolCallGeneratingOrPending } from "@/lib/helpers/status-checker";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type TAssistantMessage = {
  prompt?: string | null;
  isLastMessage: boolean;
  createdAt: string;
  status: TMessageStatus;
};

export default function AssistantMessage({
  prompt,
  isLastMessage = false,
  createdAt,
  status,
}: TAssistantMessage) {
  const isTimedOut = hasDatePassedThreshold(createdAt, ONE_MINUTE_FORTY_FIVE_SECONDS);
  const isGenerating = isToolCallGeneratingOrPending(status);

  if (!prompt && isGenerating && !isTimedOut) {
    return (
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 flex  items-center">
          <Loader2 className="animate-spin text-[#78dbff] w-4 h-4" />
        </div>
        <p className="text-sm font-semibold blue-text-clip">
          AI is Thinking...
        </p>
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
            <p className="text-sm font-semibold blue-text-clip">
              AI is Thinking...
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
