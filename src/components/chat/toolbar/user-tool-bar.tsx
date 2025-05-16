import { cn } from "@/lib/utils";
import ToolBarWrapper, { TDisabledToolbar } from "./tool-bar-wrapper";
import { MaybeString } from "@/types";

type TImageToolbar = {
  role: "user" | "assistant";
  imageUrl?: MaybeString;
  messageId: string;
  modelUrl?: MaybeString;
  disabled?: TDisabledToolbar;
  className?: string;
};

export default function ImageToolbar({
  role = "user",
  imageUrl,
  messageId,
  modelUrl,
  disabled,
  className
}: TImageToolbar) {
  return (
    <div
      className={cn(
        "flex gap-2 h-6 mt-2 justify-end",
        {
          "justify-normal": role !== "user",
        },
        className
      )}
    >
      <ToolBarWrapper
        role="user"
        type="image"
        imageUrl={imageUrl}
        messageId={messageId}
        modelUrl={modelUrl}
        nftId={null}
        disabled={disabled}
      />
    </div>
  );
}
