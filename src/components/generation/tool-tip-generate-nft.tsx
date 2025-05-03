import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ToolTips, TToolTipsData } from "./handle-tool-calls";
import { buttonVariants } from "./tool-bar-tool-tips";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "@/hooks/redux";
import { setGenerateNFT } from "@/lib/redux/features/chat";
import toast from "react-hot-toast";

type TToolTipGenerateNFT = {
  subThreadId?: string;
  toolTipData: TToolTipsData[number];
  index: number;
  length: number;
  open?: boolean;
  modelId?: string | null;
};

export default function ToolTipGenerateNft({
  toolTipData,
  index,
  length,
  modelId,
}: TToolTipGenerateNFT) {
  const dispatch = useAppDispatch();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {
          <motion.button
            onClick={() => {
              if (!modelId) {
                toast.loading("Model is being generated, Please wait");
                return;
              }
              dispatch(
                setGenerateNFT({ isGenNftOpen: true, genRequestId: modelId }),
              );
            }}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group bg-buu-button pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button min-w-[30px] rounded-md flex items-center justify-center p-1.5"
          >
            <motion.div
              className="w-full h-full group-hover:text-black group-hover:fill-black"
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
