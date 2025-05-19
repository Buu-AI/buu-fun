// import { setRetryWithImage } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import ImageRenderer from "../image-renderer";
import { TMessageStatus } from "@/types/chat/chat-types";
type TMessages = {
  text?: string;
  imageUrls?: string[];
  messageId: string;
  status: TMessageStatus;
};
export default function UserChatMessage({
  text = "Create a 3D model of a cube",
  imageUrls,
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
        {text}
      </p>
      <AnimatePresence mode="popLayout">
        {imageUrls && imageUrls.length > 0 ? (
          <ImageRenderer
            status={status}
            messageId={messageId}
            role="user"
            imageUrls={imageUrls}
            text={text}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
