import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type TToolTip = {
  open?: boolean;
  trigger: ReactNode;
  content: ReactNode;
};

export default function ToolTipWrapper({
  content,
  trigger,
}: Readonly<TToolTip>) {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="group" asChild>
          {trigger}
        </TooltipTrigger>
        <TooltipContent className={cn("bg-buu-button text-primary text-sm")}>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
