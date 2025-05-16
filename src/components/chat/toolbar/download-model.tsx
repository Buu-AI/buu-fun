import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { MaybeString } from "@/types";
import { motion } from "framer-motion";
import {
  buttonVariants,
  ChatToolTips,
  TChatToolTips,
} from "./tool-bar-content";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
type TDownloadModel = {
  url: MaybeString;
  open?: boolean;
  index: number;
  tool: TChatToolTips;
};

export default function DownloadModel({
  url,
  open,
  index,
  tool,
}: TDownloadModel) {
  return (
    <Tooltip open={open}>
      <TooltipTrigger asChild>
        {url ? (
          <motion.a
            download={true}
            href={url ?? ""}
            target="_blank"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group  pointer-events-auto  group  min-w-6 rounded-md flex items-center justify-center"
          >
            <motion.div
              className="w-full h-full group-hover:text-black group-hover:fill-black"
              transition={{ duration: 0.2 }}
            >
              {tool.Icon}
            </motion.div>
          </motion.a>
        ) : (
          <div className="group pointer-events-auto hover:bg-white hover:shadow-none group shadow-buu-button min-w-6 rounded-md flex items-center justify-center p-1">
            <div className="w-5 flex items-center justify-center h-5">
              <Loader2 className="animate-spin group-hover:text-black" />
            </div>
          </div>
        )}
      </TooltipTrigger>
      <TooltipContent
        className={cn("bg-buu-button text-primary", {
          "ml-2": index === 0,
          "mr-2": index === ChatToolTips.length - 1,
        })}
      >
        <p>{tool.content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
