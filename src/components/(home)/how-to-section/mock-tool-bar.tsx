import {
  BoneIcon,
  DownloadIcon,
  FilterIcon,
  MagicPenIcon,
  MaximizeIcon,
  RetryIcon,
} from "@/assets/icons";
import ToolTipDownload from "@/components/generation/tool-tip-download";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
export const buttonVariants = {
  initial: { y: 0, scale: 1 },
  // hover: { y: -2, scale: 1.05 },
  tap: { y: 0, scale: 0.95 },
  drag: { scale: 1.1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" },
};

export const ToolTips = [
  {
    type: "TRY_AGAIN" as const,
    Icon: <RetryIcon />,
    content: "Try Again",
  },
  {
    type: "MODIFY" as const,
    Icon: <FilterIcon />,
    content: "Modify",
  },
  {
    type: "ANIMATE" as const,
    Icon: <MagicPenIcon className="fill-current" />,
    content: "Animate",
  },
  {
    type: "AUTO_RIGGING" as const,
    Icon: <BoneIcon />,
    content: "Auto-rigging",
  },
  {
    type: "MAXIMIZE" as const,
    Icon: <MaximizeIcon />,
    content: "Maximize",
  },
  {
    type: "DOWNLOAD" as const,
    Icon: <DownloadIcon />,
    content: "Download GBL",
  },
];
export type TToolTipsData = typeof ToolTips;
export type TToolTipEvents = TToolTipsData[number]["type"];

type TMockToolBar = {
  modelUrl?: string;
  isGenerating?: boolean;
};
export default function MockToolBar({ modelUrl, isGenerating }: TMockToolBar) {
  function handleEvent(events: TToolTipEvents) {
    if (events) {
      return;
    }
  }

  return (
    <TooltipProvider>
      {ToolTips.map((item, index) => {
        if (item.type === "DOWNLOAD") {
          // key={`tool-tip-contents-${item.content.trim()}-${index}`}
          return (
            <ToolTipDownload
              key={`tool-tip-contents-${item.content.trim()}-${index}`}
              modelUrl={modelUrl}
              index={index}
              length={ToolTips.length}
              subThreadId={"subThreadId"}
              toolTipData={item}
              open={isGenerating}
              // open={isGenerating}
            />
          );
        }

        return (
          <Tooltip key={`tool-tip-contents-${item.content.trim()}-${index}`}>
            <TooltipTrigger asChild>
              <motion.div
                onClick={() => handleEvent(item.type)}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                // group bg-buu-button  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5
                className="group bg-buu-button pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button min-w-[25px] rounded-md flex items-center justify-center p-1.5"
              >
                <motion.div
                  className="w-full h-full group-hover:text-black fill-white group-hover:fill-black"
                  transition={{ duration: 0.2 }}
                >
                  {item.Icon}
                </motion.div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent
              className={cn("bg-buu-button text-primary", {
                "ml-2": index === 0,
                "mr-2": index === ToolTips.length - 1,
              })}
            >
              <p>{item.content}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </TooltipProvider>
  );
}
