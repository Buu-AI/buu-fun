import { cn } from "@/lib/utils";
import { MaybeString } from "@/types";
import ToolBarWrapper, { TDisabledToolbar } from "./tool-bar-wrapper";

type TImageToolbar = {
  role: "user" | "assistant";
  imageUrl?: MaybeString;
  messageId?: string;
  modelUrl?: MaybeString;
  disabled?: TDisabledToolbar;
  className?: string;
};

export default function ImageToolbar({
  role = "user",
  imageUrl,
  modelUrl,
  disabled,
  className,
  messageId,
}: TImageToolbar) {
  return (
    <div
      className={cn(
        "flex gap-2 h-6 mt-2 justify-end",
        {
          "justify-normal": role !== "user",
        },
        className,
      )}
    >
      <ToolBarWrapper
        role="user"
        type="image"
        messageId={messageId}
        imageUrl={imageUrl}
        modelUrl={modelUrl}
        nftId={null}
        disabled={disabled}
      />
    </div>
  );
}
