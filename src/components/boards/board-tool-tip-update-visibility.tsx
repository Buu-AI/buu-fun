import { TypedAppError } from "@/class/error";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateBoardsVisibility } from "@/lib/react-query/boards";
import { initializeSharableBoards } from "@/lib/redux/features/boards";
import { getBoards } from "@/lib/redux/selectors/board";
import { cn, getSharableUrl } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import {
  BoardToolTips,
  TBoardToolTipData,
} from "../generation/handle-tool-calls";
import { buttonVariants } from "../generation/tool-tip-button-variant";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type TToolTipModify = {
  boardId: string;
  toolTipData: TBoardToolTipData[number];
  index: number;
  length: number;
};

export default function BoardToolTipUpdateVisibility({
  index,
  boardId,
}: TToolTipModify) {
  const boards = useAppSelector((state) => getBoards(state));
  const dispatch = useAppDispatch();
  const { identityToken: accessToken, login } = useAuthentication();
  const { mutate: mutateBoardVisibility } = useMutation({
    mutationFn: updateBoardsVisibility,
    onMutate() {
      toast.loading("Enabling for public view", {
        duration: 3000,
      });
    },
    onSuccess(data) {
      toast.dismiss();
      if (data) {
        dispatch(initializeSharableBoards(data));
      }
      if (data.isPublic) {
        const link = getSharableUrl(data._id);
        window.navigator.clipboard.writeText(link);
        toast.success("Successfully copied board to your clipboard");
      } else {
        toast.success("This board is now private");
      }
    },
    onError(error) {
      toast.dismiss();
      console.log(error);
      if (error instanceof TypedAppError) {
        switch (error.code) {
          case "CREDIT_NOT_FOUND": {
            // dispatch(setSubscriptionModel(true));
            toast.error("Insufficient credits");
            return;
          }
          default: {
            toast.error("Something went wrong");
            return;
          }
        }
      }
      toast.error("Something went wrong, Please try again.");
    },
  });

  function handleShare() {
    if (!accessToken) {
      login();
      return;
    }
    mutateBoardVisibility({
      isPublic: boards?.isPublic ? false : true,
      accessToken,
      boardId,
    });
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
            {boards.isPublic ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </motion.div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent
        className={cn("bg-buu-button text-primary", {
          "ml-2": index === 0,
          "mr-2": index === BoardToolTips?.length - 1,
        })}
      >
        <p>{boards.isPublic ? "Make Private" : "Make Public"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
