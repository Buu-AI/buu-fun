"use client";
import { ArrowUp, ImageIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getPresignedUrl } from "@/lib/react-query/image-upload";
import { motion } from "framer-motion";
// import { generateSubThreads } from "@/lib/react-query/threads";
import { TypedAppError } from "@/class/error";
import {
  sendChatMessage,
  TGetMessagesReturn,
} from "@/lib/react-query/threads.v3";
import {
  clearInput,
  clearInputFile,
  removeImage,
  setInputFile,
  setNewSession,
} from "@/lib/redux/features/chat";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { blobUrlToFile, cn, getAllowedContentTypeMaps } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TBottomBarContainer } from "./bottom-bar-container";
import ChatTextArea from "./chat-text-area";
import DragImageCard from "./drag-image-card";
import { isChatGenerating } from "@/lib/redux/selectors/chatMessages";
import { nanoid } from "@reduxjs/toolkit";
import { TImageData } from "@/lib/redux/features/chat-types";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

export default function ChatForm({ action }: TBottomBarContainer) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { identityToken, login } = useAuthentication();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const style = useAppSelector((state) => state.settings.ThreeDStyle);
  const inputFile = useAppSelector((state) => state.chat.inputFile);

  const isChatPending = useAppSelector(isChatGenerating);
  // Mutation for creating a new chat
  const { mutate: createNewChat, isPending: isCreatePending } = useMutation({
    onMutate() {
      toast.loading("Generating model...", { duration: 2000 });
      toast.dismiss();
    },
    mutationFn: sendChatMessage,
    onSuccess(data) {
      dispatch(clearInput());
      const sessionId = data?.items[0].sessionId;
      dispatch(setNewSession(sessionId));
      router.push(`/app/chat/${sessionId}`);
    },
    onError(error) {
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
  });

  const fileCount = useAppSelector((state) => state.chat.inputFile.length);

  const queryClient = useQueryClient();
  // mutation for existing chat
  const { mutate: createExistingChat, isPending: isExistingChatPending } =
    useMutation({
      mutationFn: sendChatMessage,
      async onSuccess(data) {
        dispatch(clearInput());
        const sessionId = data.items[0].sessionId;
        queryClient.setQueryData<InfiniteData<TGetMessagesReturn>>(
          ["get-messages", sessionId, identityToken],
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
          queryKey: ["get-messages", sessionId, identityToken],
        });
      },
      onError(error) {
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
    });

  const isChatLoading =
    isCreatePending ||
    isExistingChatPending ||
    (action !== "new_chat" && isChatPending) ||
    isChatPending ||
    isSubmitting;

  // isOverAllRequestLimitReached(isChatPending.totalRequest);

  const { mutateAsync: getImagePresignedUrl } = useMutation({
    mutationFn: getPresignedUrl,
    async onSuccess() {
      toast.loading("Uploading image..");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleImageUploadUrl = async (
    ImageData: TImageData,
    accessToken: string,
  ) => {
    try {
      const file = await blobUrlToFile(ImageData.url, ImageData.name);
      if (!file?.name) {
        toast.dismiss();
        toast.error("Failed to retrieve file");
        return null;
      }

      const contentType = getAllowedContentTypeMaps(file.type);
      if (!contentType) {
        toast.dismiss();
        toast.error("This Content type is not supported yet");
        return null;
      }

      const data = await getImagePresignedUrl({
        contentType: contentType,
        accessToken,
      });
      if (!data) {
        toast.dismiss();
        toast.error("Failed to upload the image");
        return null;
      }
      toast.dismiss();
      toast.loading("Uploading file...");
      const uploadFile = await fetch(data.presignedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      if (uploadFile.status !== 200) {
        toast.dismiss();
        toast.error("Failed to upload the image");
        return null;
      }
      return {
        uploadUrl: data.url,
        nativeUrl: ImageData.url,
      };
    } catch (error) {
      if (error) {
      }
      toast.error("Failed to upload the image");
      return null;
    } finally {
      toast.dismiss();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      if (!identityToken) {
        login();
        return;
      }
      // Don't submit if there's no prompt
      if (!prompt || prompt.trim() === "") {
        return;
      }

      if (isChatLoading) {
        return toast.error("Hold on!, Still generating your model...");
      }

      let imageUrls: string[] | null = [];

      if (inputFile && inputFile?.length > 0) {
        const inputFileRequests = inputFile.map((item) =>
          handleImageUploadUrl(item, identityToken),
        );
        toast.loading("Preparing image for uploading....", { duration: 1200 });

        const uploadedImages = await Promise.all(inputFileRequests);
        imageUrls = uploadedImages
          .map((item) => item?.uploadUrl)
          .filter((fv) => typeof fv === "string");

        if (imageUrls.length !== inputFile.length) {
          throw new Error("Failed to upload Image, Please try again");
        }

        dispatch(clearInputFile());

        uploadedImages.forEach((item) => {
          if (item && item.nativeUrl) {
            URL.revokeObjectURL(item.nativeUrl);
          }
        });
        if (!imageUrls) {
          // stopper condition, because error message is done in `handleImageUploadUrl` already
          return;
        }
      }

      // Handle based on action type
      if (action === "new_chat") {
        createNewChat({
          accessToken: identityToken ?? "",
          prompt: prompt,
          style: style,
          imageUrls,
        });
      } else if (typeof action !== "string") {
        createExistingChat({
          accessToken: identityToken ?? "",
          prompt,
          style,
          sessionId: action.sessionId,
          imageUrls,
        });
      }
    } catch (error) {
      if (error) {
        toast.error(`${error}`);
      }
      toast.error("Failed to send message, Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveImage = (imageToRemove: TImageData) => {
    // Revoke the object URL to free up memory
    URL.revokeObjectURL(imageToRemove.url);
    dispatch(removeImage(imageToRemove.id));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative flex-col gap-1 flex items-start w-full p-4  mb-2  rounded-[20px]  shadow-buu-inner bg-buu",
        {
          // "p-0": !inputFile?.url.length
        },
      )}
    >
      <AnimatePresence mode="popLayout">
        <div className="flex gap-2 items-center   w-full overflow-hidden">
          {inputFile.map((item, index) => {
            return (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1,
                  },
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                layout
                key={item.id}
                type="button"
                onClick={() => handleRemoveImage(item)}
                className="w-14 h-14 relative rounded-xl overflow-hidden"
              >
                <div
                  className={
                    "pointer-events-auto absolute top-1 right-1  bg-white text-black  rounded-full animate-pulse w-4 h-4  flex items-center justify-center text-xs transition-opacity z-50"
                  }
                >
                  ✕
                </div>{" "}
                <Image
                  className=""
                  src={item.url}
                  alt="user input file"
                  width={200}
                  height={200}
                />
              </motion.button>
            );
          })}
        </div>
      </AnimatePresence>

      {/* <button
        disabled={isChatLoading}
        className={cn(
          "bg-buu-button     shadow-buu-button rounded-xl left-0 absolute w-full h-full top-0",
          {
            hidden: !inputFile?..length,
          }
        )}
      >
        <div className="flex   gap-2 items-center justify-center">
          <p className="font-medium animate-pulse text-white/60">
            Continue with image
          </p>
          <div className="w-5  h-5 ">
            <ImageIcon />
          </div>
        </div>
      </button> */}
      {/* Other components */}
      <DragImageCard className={""} onImageSelected={() => {}} />
      <ChatTextArea isChatLoading={isChatLoading} />
      <div className="w-full  flex justify-between">
        <label htmlFor="file-input" className="cursor-pointer">
          <input
            multiple
            id="file-input"
            className="hidden"
            type="file"
            accept="image/png, image/jpeg"
            // capture="user"
            onChange={(e) => {
              const files = e.target?.files;
              if (files) {
                for (const file of files) {
                  if (!getAllowedContentTypeMaps(file.type)) {
                    toast.error(`Image type ${file.type} is not supported yet`);
                    return;
                  }
                  if (fileCount > 4) {
                    toast.error(`Maximum file count is 4`);
                    return;
                  }

                  const imageUrl = URL.createObjectURL(file);
                  const imageData = {
                    id: nanoid(),
                    url: imageUrl,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                  };
                  dispatch(setInputFile(imageData));
                }
              }
            }}
          />
          <div className="w-6 h-6">
            <ImageIcon />
          </div>
        </label>

        <button
          disabled={isChatLoading}
          type="submit"
          className={cn("bg-[#737984]  rounded-full border p-0.5", {
            "animate-pulse flex items-center justify-center cursor-not-allowed":
              isChatLoading,
          })}
        >
          {isChatLoading ? (
            <Loader2 className="w-5 h-5 flex items-center  animate-spin justify-center   text-black" />
          ) : (
            <ArrowUp className="w-5 h-5 " />
          )}
          <span className="sr-only"></span>
        </button>
      </div>
    </form>
  );
}
