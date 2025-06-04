"use client";
import { isToolCallInProgress } from "@/lib/helpers/status-checker";
import { cn } from "@/lib/utils";
import { TChatMessage, TMessageStatus } from "@/types/chat/chat-types";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageToolbar from "./toolbar/user-tool-bar";
import { useAppDispatch } from "@/hooks/redux";
import { setMaximizedViewer } from "@/lib/redux/features/chat";
type TImageRenderer = {
  role: "user" | "assistant";
  medias: TChatMessage["medias"];
  prompt?: string;
  className?: string;
  messageId: string;
  containerClassName?: string;
  status?: TMessageStatus;
};
export default function ImageRenderer({
  prompt,
  className,
  containerClassName,
  role = "user",
  messageId,
  status,
  medias,
}: TImageRenderer) {
  const isGenerating = isToolCallInProgress(status);
  const dispatch = useAppDispatch();
  return (
    <motion.div
      className={cn(
        "flex mt-2 justify-end gap-2 flex-wrap",
        containerClassName,
      )}
    >
      {medias && medias.length > 0
        ? medias.map((item, index) => {
            return (
              <motion.div
                key={`${prompt}-${item}`}
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
                <button
                  onClick={() => {
                    dispatch(
                      setMaximizedViewer({
                        isOpened: true,
                        data: {
                          type: "image",
                          imageUrl: item.url ?? "",
                          modelUrl: "",
                          imageId: item._id,
                        },
                      }),
                    );
                  }}
                  className="rounded-md overflow-hidden gap-2"
                >
                  <Image
                    src={item.url ?? "/background.png"}
                    alt={`${prompt ?? ""}`}
                    width={250}
                    height={250}
                    className={cn(
                      "object-cover w-40 aspect-square",
                      className,
                      {
                        "blur-md": isGenerating,
                      },
                    )}
                  />
                </button>
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
                    <ImageToolbar
                      imageId={item._id}
                      imageUrl={item.url}
                      messageId={messageId}
                      role={role}
                      disabled={{
                        EDIT_IMAGE: true,
                      }}
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
