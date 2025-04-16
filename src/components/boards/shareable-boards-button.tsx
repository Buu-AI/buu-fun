import ShareAndSaveIcon from "@/assets/icons/share-and-save";
import ShareIcon from "@/assets/icons/share-icon";
import { TypedAppError } from "@/class/error";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useSharableBoards } from "@/hooks/use-boards";
import {
  createNewBoardsMutation,
  updateBoardsVisibility,
} from "@/lib/react-query/boards";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { cn, getSharableUrl } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CopyBoardLink from "./copy-board-link";
import { useUserSubscription } from "@/hooks/use-credits";
import { isFreePlan } from "@/lib/helpers/status-checker";
import { setShareableModalOpen } from "@/lib/redux/features/boards";

export default function ShareableBoardsButton() {
  const path = usePathname();
  const { data: userSubScription } = useUserSubscription();
  const threadId = useAppSelector((state) => state.chat.threads.threadId);

  // const subThreads = useAppSelector((state) => state.chat.subThreads);

  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.boards.isShareModalOpen);
  const { identityToken: accessToken, login } = useAuthentication();

  // const { data: userSubscription } = useUserSubscription();

  const queryClient = useQueryClient();

  const { data: SharableBoard } = useSharableBoards({
    threadId,
    count: 1,
  });

  const {
    mutate: createNewBoard,
    isPending: isCreateNewBoardPending,
    data,
  } = useMutation({
    mutationFn: createNewBoardsMutation,
    onMutate() {
      toast.loading("Adding to boards...", {
        duration: 3000,
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user-shareable-boards", threadId],
      });
    },
    onError(error) {
      toast.dismiss();
      if (error instanceof TypedAppError) {
        console.log("TYPE ERROR", error.code);
        switch (error.code) {
          case "FAILED_TO_CREATE_SHAREABLE_BOARD": {
            toast.error("Failed to create board");
            return;
          }
          case "UNKNOWN_ERROR": {
            toast.error(error.message);
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

  const {
    mutate: mutateBoardVisibility,
    isPending: isUpdatingBoardVisibility,
  } = useMutation({
    mutationFn: updateBoardsVisibility,
    onMutate() {
      toast.loading("Adding to boards...");
    },
    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ["user-shareable-boards", threadId],
      });
      const link = getSharableUrl(data._id);
      window.navigator.clipboard.writeText(link);
      toast.success("Successfully copied to your clipboard");
    },
    onError(error) {
      toast.dismiss();
      console.log(error);
      if (error instanceof TypedAppError) {
        switch (error.code) {
          case "CREDIT_NOT_FOUND": {
            dispatch(setSubscriptionModel(true));
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
    onSettled() {
      toast.dismiss();
    },
  });

  const isGenerationPage = path.startsWith("/app/generation");

  function handleConfirm() {
    if (!accessToken) {
      login();
      return;
    }
    if (isFreePlan(userSubScription?.planKey)) {
      dispatch(setSubscriptionModel(true));
      return;
    }
    createNewBoard({
      accessToken,
      threadId,
    });
  }

  function handleBoardsVisibility() {
    if (!accessToken) {
      login();
      return;
    }

    mutateBoardVisibility({
      accessToken,
      boardId: SharableBoard?.items[0]?._id ?? "",
      isPublic: !SharableBoard?.items[0]?.isPublic,
    });
  }

  if (!isGenerationPage) {
    return null;
  }
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(value) => {
        dispatch(setShareableModalOpen(value));
      }}
    >
      {/* <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="px-3 flex items-center hover:bg-buu-button justify-center gap-1 text-base h-[40px] group  py-2  rounded-[10px]"
        >
          <div className="w-4 h-4">
            <ShareIcon />
          </div>
          <span className="hidden lg:block">Share</span>
        </Button>
      </DialogTrigger> */}
      <DialogContent className="bg-referral-modal px-6 py-8">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Share Board</DialogTitle>
          <DialogDescription className="text-center">
            People with link will be able to view conversations and ideas in
            this board. Changes you make after creating the link will remain
            private.
          </DialogDescription>
        </DialogHeader>

        <div
          className={cn("hidden", {
            block: SharableBoard?.items[0]?._id,
          })}
        >
          <CopyBoardLink boardId={SharableBoard?.items[0]?._id ?? ""} />
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            variant={"muted"}
            size={"buu"}
            className={cn("bg-buu-button-muted", {
              hidden: !SharableBoard?.items[0]?._id,
            })}
            onClick={() => {
              handleBoardsVisibility();
            }}
          >
            {SharableBoard?.items[0]?.isPublic || data?.isPublic
              ? "Stop Share"
              : "Make public"}
          </Button>
          <Button
            disabled={isCreateNewBoardPending || isUpdatingBoardVisibility}
            size={"buu"}
            // className="bg-buu-button-muted"
            onClick={() => {
              handleConfirm();
            }}
          >
            <ShareAndSaveIcon />
            {!SharableBoard?.items.length ? (
              <>
                {!isCreateNewBoardPending
                  ? "Add to Boards & Copy Link"
                  : "adding..."}
              </>
            ) : (
              <>
                {!isCreateNewBoardPending
                  ? "Update & Copy Link"
                  : "updating..."}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
