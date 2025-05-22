"use client";
import { RetryIcon } from "@/assets/icons";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { queryClient } from "@/lib/react-query/query-client";
import {
  editImageMutation,
  TGetMessagesReturn,
} from "@/lib/react-query/threads.v3";
import { setEditImage, setMaximizedViewer } from "@/lib/redux/features/chat";
import { isChatGenerating } from "@/lib/redux/selectors/chatMessages";
import { cn } from "@/lib/utils";
import {
  retryWithImageSchema,
  TRetryWithImageSchema,
} from "@/lib/zod/retry-modal";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfiniteData, useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

export default function RetryImageModal() {
  const { identityToken: accessToken, login } = useAuthentication();
  const chatRetryProps = useAppSelector(
    (state) => state.chat.chatMessageEditImage,
  );

  const isChatPending = useAppSelector(isChatGenerating);

  const { imageUrl, isOpened } = chatRetryProps;
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector((state) => state.chat.sessionId);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
    setValue,
  } = useForm<TRetryWithImageSchema>({
    resolver: zodResolver(retryWithImageSchema),
  });

  useEffect(() => {
    setValue("imageUrl", imageUrl ?? "");
  }, [imageUrl, setValue]);

  const { mutate, isPending } = useMutation({
    mutationKey: [imageUrl, sessionId, "edit-image"],
    mutationFn: editImageMutation,
    async onSuccess(data) {
      reset();
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
      // await queryClient.invalidateQueries({
      //   queryKey: ["get-messages", sessionId, accessToken],
      // });
      dispatch(
        setMaximizedViewer({
          isOpened: false,
          data: undefined,
        }),
      );
      dispatch(
        setEditImage({
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
  function handleRetryWithImage({ imageUrl, message }: TRetryWithImageSchema) {
    if (isChatPending) {
      toast.error(
        "AI is thinking, please try after current message is completed",
      );
    }
    if (!accessToken) {
      login();
      return;
    }
    if (!sessionId) {
      toast.error("invalid generation request");
      return;
    }
    mutate({
      accessToken,
      edit: message,
      imageUrl,
      sessionId,
    });
  }

  const descriptionLength = watch("message")?.length ?? 0;
  return (
    <Dialog
      key={`${imageUrl}`}
      open={isOpened}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(
            setEditImage({
              isOpened: false,
              imageUrl: null,
            }),
          );
          return;
        }
        dispatch(setEditImage({ isOpened: value }));
      }}
    >
      <DialogContent className="rounded-[20px] pt-6 lg:rounded-[20px] bg-nft-modal-card overflow-y-scroll max-h-[90dvh] scrollbar-w-hidden">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle>Edit Image</DialogTitle>
          <DialogDescription className="text-center text-pretty ">
            You can tell me what to edits to make...
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            "flex overflow-hidden rounded-lg w-full  mx-auto max-w-[50%]",
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
              className="overflow-hidden  rounded-lg h-full object-contain"
            />
          ) : null}
        </div>
        <form onSubmit={handleSubmit(handleRetryWithImage)}>
          <Input
            className="sr-only"
            {...register("imageUrl", {
              value: imageUrl ?? "",
            })}
          />
          <div className="w-full mt-2.5">
            <Label className="uppercase text-xs font-medium ">
              Instructions
            </Label>
            <Textarea
              key={`${imageUrl}`}
              {...register("message", { max: 500 })}
              className="py-2.5 text-lg h-auto border-gray-700 placeholder:font-medium placeholder:text-foreground/60"
              placeholder="Add Description (500 characters allowed)"
            />
            <p className="text-sm my-0.5 text-right">
              <span
                className={cn({
                  "text-red-500": descriptionLength > 500,
                })}
              >
                {" "}
                {descriptionLength}
              </span>
              /500 Characters
            </p>
          </div>
          <div className="my-3"></div>
          <div className="mt-4">
            <Button
              disabled={isPending || isSubmitting}
              className="h-[40px] w-full"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Editing Image...
                </>
              ) : (
                <>
                  <RetryIcon />
                  Submit
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
