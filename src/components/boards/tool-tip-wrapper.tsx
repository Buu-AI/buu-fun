import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  BoardToolTips,
  TBoardToolTipData,
} from "../generation/handle-tool-calls";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { buttonVariants } from "./board-tool-tip-delete";

type TToolTipPlayGround = {
  subThreadId?: string;
  modelUrl?: string | null;
  toolTipData: TBoardToolTipData[number];
  imageUrl: string | null | undefined;
  index: number;
  length: number;
  open?: boolean;
  callBack: () => void;
};

export default function ToolTipWrapper({
  toolTipData,
  index,
  callBack,
}: Readonly<TToolTipPlayGround>) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          onClick={callBack}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="hidden md:flex group bg-buu-button pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button max-w-[30px] w-full aspect-square rounded-md flex items-center justify-center p-1.5"
        >
          <motion.div
            className="w-full h-full group-hover:text-black group-hover:fill-black"
            transition={{ duration: 0.2 }}
          >
            {toolTipData.Icon}
          </motion.div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent
        className={cn("bg-buu-button text-primary", {
          "ml-2": index === 0,
          "mr-2": index === BoardToolTips?.length - 1,
        })}
      >
        <p>{toolTipData.content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
