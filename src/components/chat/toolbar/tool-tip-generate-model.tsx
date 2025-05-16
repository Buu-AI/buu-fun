"use client";
import { useAppDispatch } from "@/hooks/redux";
import { setGenerateModel } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { MaybeString } from "@/types";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { ToolTips } from "../../generation/handle-tool-calls";
import { buttonVariants } from "../../generation/tool-bar-tool-tips";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { TChatToolTips } from "./tool-bar-content";

type TToolTipGenerateModel = {
  toolTipData: TChatToolTips;
  index: number;
  length: number;
  open?: boolean;
  messageId: string;
  imageUrl: MaybeString;
  modelUrl: MaybeString;
};

export default function ToolTipGenerateModel({
  toolTipData,
  index,
  imageUrl,
}: TToolTipGenerateModel) {
  const dispatch = useAppDispatch();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {
          <motion.button
            onClick={() => {
              if (!imageUrl) {
                toast.loading("Image is being generated, Please wait", {
                  duration: 5000,
                });
                return;
              }
              dispatch(
                setGenerateModel({
                  isOpened: true,
                  imageUrl,
                }),
              );
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
              {toolTipData.Icon}
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
        <p>{toolTipData.content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
