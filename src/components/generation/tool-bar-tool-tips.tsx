import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { mutateGenerateNewImage } from "@/lib/react-query/threads";
import {
  setNewGenRequest,
  setRetryModalOpen,
  setRetrySubthreadId,
} from "@/lib/redux/features/chat";
import { cn, isRetryExceeded } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { ToolTips, TToolTipEvents } from "./handle-tool-calls";
// import ToolTipModify from "./tool-tip-modify";
import { isSubThreadGenerating } from "@/lib/redux/selectors/chat";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ToolTipDownload from "./tool-tip-download";
import { useLocalStorage } from "@mantine/hooks";
import { RETRY_ALLOWED_VERIFIED_STORAGE_KEY } from "@/constants/request.config";

type TToolBarToolTips = {
  subThreadId: string;
  imageUrl: string | null;
  modelUrl?: string | null;
  totalGenerations: number;
};
export const buttonVariants = {
  initial: { y: 0, scale: 1 },
  // hover: { y: -2, scale: 1.05 },
  tap: { y: 0, scale: 0.95 },
  drag: { scale: 1.1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" },
};

export default function ToolBarToolTips({
  subThreadId,
  // imageUrl,
  modelUrl,
  totalGenerations,
}: TToolBarToolTips) {
  const dispatch = useAppDispatch();
  const { identityToken, login } = useAuthentication();

  const queryClient = useQueryClient();
  const [acknowledgedRetry] = useLocalStorage({
    key: RETRY_ALLOWED_VERIFIED_STORAGE_KEY,
    defaultValue: false,
  });

  const { mutate: generateNewImage, isPending } = useMutation({
    mutationFn: mutateGenerateNewImage,
    onSuccess(data) {
      toast.loading("Generating new model...", { duration: 8000 });
      dispatch(setNewGenRequest(data));
      queryClient.invalidateQueries({
        queryKey: [data.subthreadId, "get-all-sub-threads"],
      });
    },
    onError(error) {
      console.log(error);
    },
  });

  const isChatPending = useAppSelector(isSubThreadGenerating);

  function handleEvent(events: TToolTipEvents) {
    const accessToken = identityToken;
    if (!accessToken) {
      login();
      return;
    }
    switch (events) {
      case "TRY_AGAIN": {
        if (isRetryExceeded(totalGenerations)) {
          toast.error("You have exceeded total number of retries.");
          return;
        }
        if (isPending) {
          return;
        }
        if (isPending || isChatPending?.isLimitReached) {
          toast.error(
            "Whoa, you're on fire! You've hit the limit of 4 creations."
          );
          return;
        }
        // if (!acknowledgedRetry) {
        //   dispatch(setRetryModalOpen(true));
        //   dispatch(setRetrySubthreadId(subThreadId));
        //   return;
        // }
        generateNewImage({
          subthreadId: subThreadId,
          accessToken,
        });
        return;
        break;
      }
      default: {
        console.log("NOT FOUND");
      }
    }
  }

  // Define button hover animation variants

  return (
    <TooltipProvider>
      {ToolTips.map((item, index) => {
        // if (item.type === "MODIFY" && imageUrl) {
        //   return (
        //     <ToolTipModify
        //       key={`tool-tip-contents-${item.content.trim()}-${subThreadId}-${index}`}
        //       index={index}
        //       length={ToolTips.length}
        //       subThreadId={subThreadId}
        //       toolTipData={item}
        //       imageUrl={imageUrl}
        //     />
        //   );
        // }

        if (item.type === "DOWNLOAD") {
          // key={`tool-tip-contents-${item.content.trim()}-${index}`}
          return (
            <ToolTipDownload
              key={`tool-tip-contents-${item.content.trim()}-${index}`}
              modelUrl={modelUrl}
              index={index}
              length={ToolTips.length}
              subThreadId={subThreadId}
              toolTipData={item}
            />
          );
        }

        return (
          <Tooltip key={`tool-tip-contents-${item.content.trim()}-${index}`}>
            <TooltipTrigger
              disabled={(() => {
                if (
                  item.type === "TRY_AGAIN" &&
                  isRetryExceeded(totalGenerations)
                ) {
                  return true;
                }
                return false;
              })()}
              asChild
            >
              <motion.div
                onClick={() => handleEvent(item.type)}
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
