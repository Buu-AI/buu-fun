"use client";
import { MagicPenIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { queryClient } from "@/lib/react-query/query-client";
import {
  generateModelFromImageMutation,
  TGetMessagesReturn,
} from "@/lib/react-query/threads.v3";
import { setGenerateModel } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { InfiniteData, useMutation } from "@tanstack/react-query";
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
import { isChatGenerating } from "@/lib/redux/selectors/chatMessages";

export default function ModelGenerationModal() {
  const { identityToken: accessToken, login } = useAuthentication();
  const generateModelModalState = useAppSelector(
    (state) => state.chat.genModelFromImage,
  );

  const { imageUrl, isOpened } = generateModelModalState;
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector((state) => state.chat.sessionId);

  const { mutate, isPending } = useMutation({
    mutationKey: [imageUrl, sessionId, "generate-model"],
    mutationFn: generateModelFromImageMutation,
    async onSuccess(data) {
      queryClient.setQueryData<InfiniteData<TGetMessagesReturn>>(
        ["get-messages", sessionId, accessToken],
        (old) => {
          if (!old) return old;
          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              __typename: page.__typename,
              items: [...page.items, ...data.items],
            })),
          };
        },
      );
      await queryClient.invalidateQueries({
        queryKey: ["get-messages", sessionId, accessToken],
      });
      dispatch(
        setGenerateModel({
          isOpened: false,
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
      key={`${imageUrl}`}
      open={isOpened}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(
            setGenerateModel({
              isOpened: false,
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
          <DialogTitle>Edit Image</DialogTitle>
          <DialogDescription className="text-center text-pretty ">
            You can tell me what edits to make...
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            "flex overflow-hidden rounded-lg w-full md:w-[50%] mx-auto aspect-square",
            {
              hidden: !imageUrl,
            },
          )}
        >
          {imageUrl ? (
            <Image
              key={imageUrl}
              src={imageUrl}
              alt="Retrying Image Url"
              width={720}
              height={720}
              className="aspect-square w-full overflow-hidden rounded-lg h-full object-cover"
            />
          ) : null}
        </div>
        <div>
          <div
            onClick={() => {
              handleModelGeneration();
            }}
            className="mt-4"
          >
            <Button disabled={isPending} className="h-[40px] w-full">
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating model...
                </>
              ) : (
                <>
                  <MagicPenIcon className="current-color" />
                  Generate Model
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
