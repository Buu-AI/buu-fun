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
};

export default function TooltipWrapper({
  buttonProps,
  btnClassName,
  buttonIcon,
  onClickCallback,
  hoverState,
  content,
  align,
  IconClassName,
}: TTooltipWrapper) {
  const tokenized = true;
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClickCallback}
            className={cn(
              "group bg-svg-button pointer-events-auto  group p-1 aspect-square   min-w-[32px] rounded-[4px] border-buu  flex items-center justify-center",
              {
                "hover:bg-white hover:shadow-none": !hoverState,
              },
              btnClassName,
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
        <TooltipContent align={align}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
