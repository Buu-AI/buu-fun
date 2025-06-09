import { useAppSelector } from "@/hooks/redux";
import { cn, getSharableUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  BoardToolTips,
  TBoardToolTipData,
} from "../generation/handle-tool-calls";
import { buttonVariants } from "../generation/tool-tip-button-variant";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type TToolTipModify = {
  subThreadId?: string;
  modelUrl?: string | null;
  boardId: string;
  toolTipData: TBoardToolTipData[number];
  index: number;
  length: number;
};

export default function BoardToolTipShare({
  toolTipData,
  index,
  boardId,
}: TToolTipModify) {
  const isPublic = useAppSelector(
    (state) => state.boards.SharedBoards?.isPublic,
  );

  function handleShare() {
    if (!isPublic) {
      toast.error("Please make the board public to be shared");
      return;
    }
    const link = getSharableUrl(boardId);
    window.navigator.clipboard.writeText(link);
    toast.success("Copied");
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          onClick={() => handleShare()}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          // group bg-buu-button  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5
          className="group bg-buu-button pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button min-w-[30px] rounded-md flex items-center justify-center p-1.5"
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
