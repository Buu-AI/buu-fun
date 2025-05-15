"use client";
import { RetryIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setEditImage } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import {
  retryWithImageSchema,
  TRetryWithImageSchema,
} from "@/lib/zod/retry-modal";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
    (state) => state.chat.chatMessageEditImage
  );

  const { imageUrl, isOpened } = chatRetryProps;
  const dispatch = useAppDispatch();
  const sessionId = useAppSelector((state) => state.chat.sessionId);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<TRetryWithImageSchema>({
    resolver: zodResolver(retryWithImageSchema),
    defaultValues: {
      imageUrl: imageUrl ?? undefined,
    },
  });
  const router = useRouter();
  const query = useQueryClient();
  const isPending = false;
  //   const { mutate, isPending } = useMutation({
  //     mutationFn: generateNFT,
  //     async onSuccess(data) {
  //       await query.invalidateQueries({
  //         queryKey: ["get-sub-thread-requests"],
  //       });
  //       dispatch(
  //         setRetryWithImage({
  //           modalOpened: false,
  //           imageUrl: null,
  //           modelUrl: null,
  //         })
  //       );
  //     },
  //     onError(error) {
  //       if (error.message) {
  //         toast.error(error.message);
  //       }
  //     },
  //   });
  function handleRetryWithImage({ imageUrl, message }: TRetryWithImageSchema) {
    if (!accessToken) {
      login();
      return;
    }
    if (!sessionId) {
      toast.error("invalid generation request");
      return;
    }
    // mutate({
    //   name,
    //   description,
    //   messageId,
    //   accessToken,
    // });
  }
  const descriptionLength = watch("message")?.length ?? 0;
  return (
    <Dialog
      open={isOpened}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(
            setEditImage({
              isOpened: false,
              imageUrl: null,
            })
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
            "flex overflow-hidden w-full md:w-[50%] mx-auto aspect-square",
            {
              hidden: !imageUrl,
            }
          )}
        >
          {imageUrl ? (
            <Image
              key={imageUrl}
              src={imageUrl}
              alt="Retrying Image Url"
              width={720}
              height={720}
              className="aspect-square w-full h-full object-cover"
            />
          ) : null}
        </div>
        <form onSubmit={handleSubmit(handleRetryWithImage)}>
          <div className="w-full mt-2.5">
            <Label className="uppercase text-xs font-medium ">
              Instructions
            </Label>
            <Textarea
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
          <div className="my-3">
            {/* <div className="flex justify-start items-start gap-2 pl-1  ">
              <Checkbox
                checked={checked}
                onCheckedChange={(value) => {
                  if (typeof value === "undefined") return;
                  if (typeof value === "boolean") {
                    setChecked(value);
                  }
                }}
                id="acknowledge-credits"
                className="rounded-[4px] data-[state=checked]:bg-buu mt-0.5 data-[state=checked]:text-primary border border-gray-500"
              />
              <Label
                htmlFor="acknowledge-credits"
                className="text-sm font-medium"
              >
                This NFT will cost you 3 credits, would you like to
                proceed?{" "}
              </Label>
            </div> */}
          </div>
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
