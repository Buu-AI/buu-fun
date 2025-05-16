import { motion } from "framer-motion";
import Image from "next/image";
import UserToolBar from "./toolbar/user-tool-bar";
import { cn } from "@/lib/utils";
import { TMessageStatus } from "@/types/chat/chat-types";
import { isToolCallInProgress } from "@/lib/helpers/status-checker";
type TImageRenderer = {
  role: "user" | "assistant";
  imageUrls: string[];
  text?: string;
  className?: string;
  messageId: string;
  containerClassName?: string;
  status: TMessageStatus;
};
export default function ImageRenderer({
  imageUrls,
  text,
  className,
  containerClassName,
  role = "user",
  messageId,
  status,
}: TImageRenderer) {
  const isGenerating = isToolCallInProgress(status);
  return (
    <motion.div
      className={cn(
        "flex mt-2 justify-end gap-2 flex-wrap",
        containerClassName
      )}
    >
      {imageUrls && imageUrls.length > 0
        ? imageUrls.map((item, index) => {
            return (
              <motion.div
                key={`${text}-${item}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1,
                  },
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                layout
                className=""
              >
                <div className="rounded-md border border-muted-foreground/60 overflow-hidden gap-2">
                  <Image
                    src={item}
                    alt={`${text}-${item}`}
                    width={250}
                    height={250}
                    className={cn(
                      "object-cover w-40 aspect-square",
                      className,
                      {
                        "blur-md": isGenerating,
                      }
                    )}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.2,
                    },
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                  className=""
                >
                  {isToolCallInProgress(status) ? null : (
                    <UserToolBar
                      imageUrl={item}
                      messageId={messageId}
                      role={role}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })
        : null}
    </motion.div>
  );
}
