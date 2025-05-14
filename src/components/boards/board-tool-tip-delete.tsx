import { TypedAppError } from "@/class/error";
import { useAppDispatch } from "@/hooks/redux";
import { deleteBoard } from "@/lib/react-query/boards";
import { clearBoard } from "@/lib/redux/features/boards";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  BoardToolTips,
  TBoardToolTipData,
} from "../generation/handle-tool-calls";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
export const buttonVariants = {
  initial: { y: 0, scale: 1 },
  // hover: { y: -2, scale: 1.05 },
  tap: { y: 0, scale: 0.95 },
  drag: { scale: 1.1, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" },
};

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
    async onSuccess() {
      await queryClient.invalidateQueries({
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
