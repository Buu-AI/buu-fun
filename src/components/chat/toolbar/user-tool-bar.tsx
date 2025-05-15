import { cn } from "@/lib/utils";
import ToolBarWrapper from "./tool-bar-wrapper";
import { MaybeString } from "@/types";

type TImageToolbar = {
  role: "user" | "assistant";
  imageUrl?: MaybeString;
  messageId: string;
  modelUrl?: MaybeString;
};

export default function ImageToolbar({
  role = "user",
  imageUrl,
  messageId,
  modelUrl,
}: TImageToolbar) {
  return (
    <div
      className={cn("flex gap-2 h-6 mt-2 justify-end", {
        "justify-normal": role !== "user",
      })}
    >
      <ToolBarWrapper
        role="user"
        type="image"
        imageUrl={imageUrl}
        messageId={messageId}
        modelUrl={modelUrl}
        nftId={null}
      />
    </div>
  );
}
