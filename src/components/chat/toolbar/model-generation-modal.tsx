"use client";
import { MagicPenIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { generateModelFromImageMutation } from "@/lib/react-query/threads.v3";
import {
  setGenerateModel,
  setMaximizedViewer,
} from "@/lib/redux/features/chat";
import { isChatGenerating } from "@/lib/redux/selectors/chatMessages";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

export default function ModelGenerationModal() {
  const { identityToken: accessToken, login } = useAuthentication();
  const generateModelModalState = useAppSelector(
    (state) => state.chat.genModelFromImage,
  );

  const { imageId, isOpened, imageUrl } = generateModelModalState;
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector((state) => state.chat.sessionId);

  const { mutate, isPending } = useMutation({
    mutationKey: [imageId, sessionId, "generate-model"],
    mutationFn: generateModelFromImageMutation,
    onMutate() {
      dispatch(
        setMaximizedViewer({
          isOpened: false,
          data: undefined,
        }),
      );
      dispatch(
        setGenerateModel({
          isOpened: false,
          imageId: null,
          imageUrl: null,
        }),
      );
    },
    onError(error) {
      if (error.message) {
        toast.error(error.message);
      }
    },
  });
  const isChatPending = useAppSelector(isChatGenerating);

  function handleModelGeneration() {
    if (isChatPending) {
      toast.error(
        "AI is thinking, please try after current message is completed",
      );
    }

    if (!accessToken) {
      login();
      return;
    }

    if (!imageUrl) {
      toast.error("Please select a valid Image");
      return;
    }
    if (!sessionId) {
      toast.error("invalid generation request");
      return;
    }
    mutate({
      accessToken,
      sessionId,
      imageUrl,
    });
  }
  return (
    <Dialog
      key={`${imageId}`}
      open={isOpened}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(
            setGenerateModel({
              isOpened: false,
              imageId: null,
              imageUrl: null,
            }),
          );
          return;
        }
        dispatch(setGenerateModel({ isOpened: value }));
      }}
    >
      <DialogContent className="rounded-[20px] pt-6 lg:rounded-[20px] bg-nft-modal-card overflow-y-scroll max-h-[90dvh] scrollbar-w-hidden">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle>Generate model</DialogTitle>
          <DialogDescription className="text-center text-pretty ">
            This request will generate a 3D model from this image{" "}
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn("flex overflow-hidden rounded-lg w-full  mx-auto", {
            hidden: !imageId,
          })}
        >
          {imageUrl ? (
            <Image
              key={imageUrl}
              src={imageUrl}
              alt="Retrying Image Url"
              width={720}
              height={720}
              className="overflow-hidden  rounded-lg h-full object-contain"
            />
          ) : null}
        </div>
        <div className="">
          <div className="mt-4">
            <Button
              onClick={() => {
                handleModelGeneration();
              }}
              disabled={isPending}
              className="h-[40px] w-full"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating
                </>
              ) : (
                <>
                  <MagicPenIcon className="current-color" />
                  Generate
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
