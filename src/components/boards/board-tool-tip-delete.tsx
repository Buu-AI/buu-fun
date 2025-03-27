import { DownloadIcon } from "@/assets/icons";
import { cn, getSharableUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  BoardToolTips,
  TBoardToolTipData,
  TBoardToolTipEvents,
} from "../generation/handle-tool-calls";
import { buttonVariants } from "../generation/tool-bar-tool-tips";
import toast from "react-hot-toast";
import { useAuthentication } from "@/providers/account.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBoard } from "@/lib/react-query/boards";
import { TypedAppError } from "@/class/error";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/redux";
import {
  clearBoard,
  initializeSharableBoards,
} from "@/lib/redux/features/boards";

type TToolTipModify = {
  boardId: string;
  toolTipData: TBoardToolTipData[number];
  index: number;
  length: number;
};

export default function BoardToolTipDelete({
  toolTipData,
  index,
  boardId,
}: TToolTipModify) {
  const { identityToken: accessToken, login } = useAuthentication();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const { mutate: deleteUserBoard } = useMutation({
    mutationFn: deleteBoard,
    onMutate() {
      toast.loading("Adding to boards...");
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user-shareable-boards"],
      });
      dispatch(clearBoard());
      router.push("/app/boards");
    },
    onError(error) {
      toast.dismiss();
      if (error instanceof TypedAppError) {
      }
      toast.error("Something went wrong, Please try again.");
    },
    onSettled() {
      toast.dismiss();
    },
  });

  function handleDelete() {
    if (!accessToken) {
      login();
      return;
    }
    deleteUserBoard({ accessToken, boardId });
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          onClick={() => handleDelete()}
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
