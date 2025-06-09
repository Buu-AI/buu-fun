import { useAppDispatch } from "@/hooks/redux";
import { setGenerateNFT } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { TChatToolTips } from "./tool-bar-content";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { ToolTips } from "../../generation/handle-tool-calls";
import { buttonVariants } from "../../generation/tool-tip-button-variant";
import { MaybeString } from "@/types";
import { useRouter } from "next/navigation";

type TToolTipGenerateNFT = {
  subThreadId?: string;
  toolTipData: TChatToolTips;
  index: number;
  length: number;
  open?: boolean;
  messageId?: string;
  imageUrl: MaybeString;
  modelUrl: MaybeString;
  nftId: MaybeString;
  tokenized?: boolean;
  modelId: MaybeString;
};

export default function ToolTipGenerateNft({
  toolTipData,
  index,
  messageId,
  imageUrl,
  modelUrl,
  nftId,
  tokenized,
  modelId,
}: TToolTipGenerateNFT) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <Tooltip>
      <TooltipTrigger disabled={tokenized} asChild>
        {
          <motion.button
            disabled={tokenized}
            onClick={() => {
              if (tokenized) {
                toast.success(`NFT has already been generated `);
                if (nftId) {
                  router.push(`/nfts/${nftId}`);
                  return;
                }
                return;
              }
              if (!modelUrl) {
                toast.loading("Model is being generated, Please wait", {
                  duration: 5000,
                });
                return;
              }
              if (!messageId) {
                toast.success(
                  `NFT Generation requires it to be a valid Message`,
                );
                return;
              }
              if (!modelId) {
                toast.success(
                  `NFT Generation requires it to be a valid Models`,
                );
                return;
              }
              dispatch(
                setGenerateNFT({
                  isGenNftOpen: true,
                  messageId,
                  imageUrl,
                  modelUrl,
                  modelId,
                }),
              );
            }}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(
              "group bg-svg-button pointer-events-auto  group  min-w-[24px] rounded-[4px] border-buu  flex items-center justify-center",
              {
                "hover:bg-white hover:shadow-none": !tokenized,
              },
            )}
          >
            <motion.div
              className={cn("w-full h-full", {
                "group-hover:text-black group-hover:fill-black group-hover:stroke-black":
                  !tokenized,
              })}
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
        <p>{!tokenized ? toolTipData.content : "Collectible Generated"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
