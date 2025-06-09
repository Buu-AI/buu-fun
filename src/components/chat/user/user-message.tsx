// import { setRetryWithImage } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { TChatMessage } from "@/types/chat/chat-types";
import { AnimatePresence } from "framer-motion";
import ImageRenderer from "../image-renderer";
type TMessages = {} & TChatMessage;
export default function UserChatMessage({
  prompt,
  medias,
  messageId,
  status,
}: TMessages) {
  return (
    <div className={cn("flex flex-col items-end w-full first-of-type:pt-[0%]")}>
      <p
        className={cn(
          " max-w-max p-2  px-3 max-md:text-sm bg-user-chat-message text-white font-medium  md:w-1/2 rounded-lg",
        )}
      >
        {prompt}
      </p>
      <AnimatePresence mode="popLayout">
        {medias && medias.length > 0 ? (
          <ImageRenderer
            status={status}
            messageId={messageId}
            role="user"
            // imageUrls={media}
            medias={medias}
            prompt={prompt ?? "-"}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
