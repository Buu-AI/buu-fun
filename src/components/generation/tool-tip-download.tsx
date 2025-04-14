import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ToolTips, TToolTipsData } from "./handle-tool-calls";
import { buttonVariants } from "./tool-bar-tool-tips";

type TToolTipModify = {
  subThreadId?: string;
  modelUrl?: string | null;
  toolTipData: TToolTipsData[number];
  index: number;
  length: number;
  open?: boolean;
};

export default function ToolTipDownload({
  modelUrl,
  toolTipData,
  index,
  open,
}: TToolTipModify) {
  return (
    <Tooltip  open={open}>
      <TooltipTrigger asChild>
        {modelUrl ? (
          <motion.a
            download={true}
            href={modelUrl ?? ""}
            target="_blank"
            //   onClick={() => handleEvent(item.type)}
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
          </motion.a>
        ) : (
          <div className="group bg-buu-button pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button min-w-[30px] rounded-md flex items-center justify-center p-1.5">
            <div className="w-4 flex items-center justify-center h-4">
              <Loader2 className="animate-spin group-hover:text-black" />
            </div>
          </div>
        )}
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

{
  /* <Tooltip>
      <TooltipTrigger asChild>
        <Popover>
          <PopoverTrigger asChild>
            <motion.div
              //   onClick={() => handleEvent(item.type)}
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
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="max-w-[130px] bg-buu-50 px-1 py-1 rounded-md border-buu"
          >
            {modelUrl ? (
              <a
                download={true}
                href={modelUrl}
                target="_blank"
                className="flex w-full justify-between items-center gap-1.5 hover:opacity-70 bg-buu-secondary py-1.5 rounded-sm px-2 font-medium   "
              >
                <p className="text-xs">To .glb file</p>
                <div className="w-4 h-4">
                  <DownloadIcon />
                </div>
              </a>
            ) : (
              <div className="flex w-full justify-between items-center gap-1.5 hover:opacity-70 bg-buu-secondary py-1.5 rounded-sm px-2 font-medium   ">
                <p className="text-xs">To .glb file</p>
                <div className="w-4 flex items-center justify-center h-4">
                  <Loader2 className="animate-spin" />
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
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
//  */
}
