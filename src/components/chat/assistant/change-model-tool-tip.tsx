import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MouseEvent, ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

type TTooltipWrapper = {
  buttonProps?: Partial<Omit<ButtonProps, "ref">>;
  btnClassName?: string;
  IconClassName?: string;
  buttonIcon: ReactNode;
  hoverState?: boolean;
  onClickCallback: (e: MouseEvent<HTMLButtonElement>) => void;
  content: ReactNode;
  align?: "center" | "start" | "end" | undefined;
  side?: "right" | "top" | "bottom" | "left" | undefined;
};

export default function ChangeModelToolTip({
  buttonProps,
  btnClassName,
  buttonIcon,
  onClickCallback,
  content,
  align,
  IconClassName,
  side = "right",
}: TTooltipWrapper) {
  const tokenized = true;
  return (
    <TooltipProvider 

    delayDuration={100}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger  asChild>
          <button
            onClick={onClickCallback}
            className={cn(
              "w-12 h-12 bg-buu  group flex items-center justify-center rounded-lg",
              btnClassName
            )}
            {...buttonProps}
          >
            <div
              className={cn("w-full flex items-center justify-center h-full", {
                "group-hover:text-black group-hover:fill-black group-hover:stroke-black":
                  !tokenized,
                IconClassName,
              })}
            >
              {buttonIcon}
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
