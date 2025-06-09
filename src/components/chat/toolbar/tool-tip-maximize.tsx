"use client";
import { useAppDispatch } from "@/hooks/redux";
import { setMaximizedViewer } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { MaybeString } from "@/types";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { ToolTips } from "../../generation/handle-tool-calls";
import { buttonVariants } from "../../generation/tool-tip-button-variant";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { TChatToolTips } from "./tool-bar-content";

type TToolTipMaximize = {
  tool: TChatToolTips;
  index: number;
  length: number;
  open?: boolean;
  imageUrl: MaybeString;
  modelUrl: MaybeString;
  type: "image" | "model";
  messageId?: string;
  nftId?: MaybeString;
  tokenized?: boolean;
  modelId: MaybeString;
  imageId: MaybeString;
  isTexturedMesh?: boolean;
};

export default function ToolTipMaximize({
  tool,
  index,
  imageUrl,
  modelUrl,
  type,
  messageId,
  nftId,
  tokenized = false,
  modelId,
  imageId,
  isTexturedMesh,
}: TToolTipMaximize) {
  const dispatch = useAppDispatch();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {
          <motion.button
            onClick={() => {
              if (!imageUrl && !modelUrl) {
                toast.loading("Please wait until the generation are finished", {
                  duration: 5000,
                });
                return;
              }
              if (type === "image") {
                dispatch(
                  setMaximizedViewer({
                    isOpened: true,
                    data: {
                      type: "image",
                      imageUrl: imageUrl ?? "",
                      imageId: imageId,
                      modelUrl: "",
                    },
                  }),
                );
              }
              if (type === "model") {
                dispatch(
                  setMaximizedViewer({
                    isOpened: true,
                    data: {
                      type: "model",
                      nftId: nftId,
                      imageUrl: imageUrl ?? null,
                      messageId: messageId ?? "",
                      modelUrl: modelUrl ?? "",
                      tokenized: tokenized,
                      isTexturedMesh: isTexturedMesh ?? false,
                      modelId,
                    },
                  }),
                );
                // const data =
              }
            }}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(
              "group hover:bg-white hover:shadow-none bg-svg-button pointer-events-auto  group p-0.5  min-w-[24px] rounded-[4px] border-buu  flex items-center justify-center",
            )}
          >
            <motion.div
              className={cn(
                "w-full h-full group-hover:fill-gray-800 group-hover:text-gray-800 ",
              )}
              transition={{ duration: 0.2 }}
            >
              {tool.Icon}
            </motion.div>
          </motion.button>
        }
      </TooltipTrigger>
      <TooltipContent
        className={cn("bg-buu-button text-primary", {
          "ml-2": index === 0,
          "mr-2": index === ToolTips.length - 1,
        })}
      >
        <p>{tool.content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
