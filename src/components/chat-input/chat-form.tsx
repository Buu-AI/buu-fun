"use client";
import { ArrowUp, ImageIcon } from "@/assets/icons";
import { TypedAppError } from "@/class/error";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getPresignedUrl } from "@/lib/react-query/image-upload";
import { sendChatMessage } from "@/lib/react-query/threads.v3";
import {
  clearInput,
  clearInputFile,
  clearMessages,
  removeImage,
  setInputFile,
  setInputQuery,
  setNewSession,
} from "@/lib/redux/features/chat";
import { TImageData } from "@/lib/redux/features/chat-types";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { isChatGenerating } from "@/lib/redux/selectors/chatMessages";
import { blobUrlToFile, cn, getAllowedContentTypeMaps } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { nanoid } from "@reduxjs/toolkit";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { TBottomBarContainer } from "./bottom-bar-container";
import ChatTextArea from "./chat-text-area";
import DragImageCard from "./drag-image-card";

export default function ChatForm({ action }: TBottomBarContainer) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { identityToken, login } = useAuthentication();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const inputFile = useAppSelector((state) => state.chat.inputFile);

  const isChatPending = useAppSelector(isChatGenerating);
  // Mutation for creating a new chat
  const { mutate: createNewChat, isPending: isCreatePending } = useMutation({
    mutationFn: sendChatMessage,

    onMutate(variables) {
      const sessionId = variables.sessionId;
      dispatch(setNewSession(sessionId));
      dispatch(clearMessages());
      dispatch(clearInput());
      router.push(`/app/chat/${sessionId}`);
    },
    onSuccess(data) {
      dispatch(clearInput());
      const sessionId = data.messages?.[0]?.sessionId;
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
  const {
    faces,
    ThreeDStyle,
    textureType,
    numberOfModels,
    numberOfModelsMode,
    isGameReady,
  } = useAppSelector((state) => state.settings);
  // const queryClient = useQueryClient();
  // mutation for existing chat
  const { mutate: createExistingChat, isPending: isExistingChatPending } =
    useMutation({
      mutationFn: sendChatMessage,
      onMutate() {
        dispatch(clearInput());
      },
      async onSuccess() {
        dispatch(clearInput());
      },
      onError(error, variables) {
        dispatch(setInputQuery(variables.prompt));
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
    accessToken: string
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
      toast.loading("Uploading image");
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
        return toast.error("Hold on!, Still generating your model");
      }

      let imageUrls: string[] | null = [];

      if (inputFile && inputFile?.length > 0) {
        const inputFileRequests = inputFile.map((item) =>
          handleImageUploadUrl(item, identityToken)
        );
        toast.loading("Preparing image for uploading", { duration: 1200 });

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
      const texture = textureType !== "definedByAI" ? textureType : undefined;
      const style = ThreeDStyle !== "definedByAI" ? ThreeDStyle : undefined;
      const numberOfFaces = faces !== "definedByAI" ? faces : undefined;
      const numberOfModel =
        numberOfModelsMode !== "definedByAI" ? numberOfModels : undefined;

      // Handle based on action type
      const options = {
        numberOfFaces,
        style,
        texture,
        numberOfModels: numberOfModel,
        isGameReady,
      };

      if (action === "new_chat") {
        const sessionId = uuid();
        createNewChat({
          sessionId,
          accessToken: identityToken ?? "",
          prompt: prompt,
          imageUrls,
          options,
        });
      } else if (typeof action !== "string") {
        createExistingChat({
          accessToken: identityToken ?? "",
          prompt,
          sessionId: action.sessionId,
          imageUrls,
          options,
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
        }
      )}
    >
      {!isGameReady ? (
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
      ) : null}

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
      <AnimatePresence mode="wait">
        {!isGameReady ? (
          <motion.div
            key="drag-card"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <DragImageCard className={""} onImageSelected={() => {}} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <ChatTextArea isChatLoading={isChatLoading} />
      <div
        className={cn("w-full flex justify-between", {
          "justify-end": isGameReady,
        })}
      >
        <AnimatePresence mode="wait">
          {!isGameReady ? (
            <motion.label
              key="file-input-label"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              htmlFor="file-input"
              className="cursor-pointer"
            >
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
                        toast.error(
                          `Image type ${file.type} is not supported yet`
                        );
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
              <motion.div
                className="w-6 h-6"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <ImageIcon />
              </motion.div>
            </motion.label>
          ) : null}
        </AnimatePresence>

        <motion.button
          disabled={isChatLoading}
          type="submit"
          whileHover={!isChatLoading ? { scale: 1.1 } : {}}
          whileTap={!isChatLoading ? { scale: 0.95 } : {}}
          transition={{ duration: 0.1 }}
          className={cn("bg-[#737984]     rounded-full border p-0.5", {
            "animate-pulse flex items-center justify-center cursor-not-allowed":
              isChatLoading,
          })}
        >
          <AnimatePresence mode="wait">
            {isChatLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Loader2 className="w-5 h-5 flex items-center  animate-spin justify-center   text-black" />
              </motion.div>
            ) : (
              <motion.div
                key="arrow"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUp className="w-5 h-5 " />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="sr-only"></span>
        </motion.button>
      </div>
    </form>
  );
}
