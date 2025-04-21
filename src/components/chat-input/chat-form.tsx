"use client";
import { ArrowUp, ImageIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getPresignedUrl } from "@/lib/react-query/image-upload";
import { queryClient } from "@/lib/react-query/query-client";
import { generateSubThreads } from "@/lib/react-query/threads";
import {
  clearInput,
  pushNewSubThreads,
  setInputFile,
  setNewThreadId,
} from "@/lib/redux/features/chat";
import { isSubThreadGenerating } from "@/lib/redux/selectors/chat";
import {
  blobUrlToFile,
  cn,
  getAllowedContentTypeMaps,
  isOverAllRequestLimitReached,
} from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { TBottomBarContainer } from "./bottom-bar-container";
import ChatTextArea from "./chat-text-area";
import DragImageCard, { ImageData } from "./drag-image-card";
import { TypedAppError } from "@/class/error";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";

export default function ChatForm({ action }: TBottomBarContainer) {
  const { identityToken, login } = useAuthentication();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const prompt = useAppSelector((state) => state.chat.inputQuery);
  const style = useAppSelector((state) => state.settings.ThreeDStyle);
  const inputFile = useAppSelector((state) => state.chat.inputFile);

  const isChatPending = useAppSelector(isSubThreadGenerating);
  // Mutation for creating a new chat
  const { mutate: createNewChat, isPending: isCreatePending } = useMutation({
    onMutate() {
      toast.dismiss();
      toast.loading("Generating model...", { duration: 2000 });
    },
    mutationFn: generateSubThreads,
    onSuccess(data) {
      dispatch(setNewThreadId(data?.threadId));
      router.push(`/app/generation/${data?.threadId}`);
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

  // mutation for existing chat
  const { mutate: createExistingChat, isPending: isExistingChatPending } =
    useMutation({
      mutationFn: generateSubThreads,
      onSuccess(data) {
        toast.loading("Generating your model...", { duration: 8000 });
        dispatch(pushNewSubThreads(data));
        dispatch(clearInput());
        queryClient.invalidateQueries({
          queryKey: [data.threadId, "get-sub-threads"],
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
    (action !== "new_chat" && isChatPending.isJustStarted) ||
    isOverAllRequestLimitReached(isChatPending.totalRequest);

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
    ImageData: ImageData,
    accessToken: string
  ) => {
    try {
      toast.loading("Preparing image for uploading....");
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
      dispatch(setInputFile(null));
      URL.revokeObjectURL(ImageData.url);
      return data.url;
    } catch (error) {
      toast.error("Failed to upload the image");
      return null;
    } finally {
      toast.dismiss();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Don't submit if there's no prompt
    if ((!prompt || prompt.trim() === "") && !inputFile?.url) {
      return;
    }

    if (isChatLoading) {
      if (isOverAllRequestLimitReached(isChatPending.totalRequest)) {
        return toast.error(
          "Whoa, you're on fire 🔥. You've hit the limit of 4 creations."
        );
      }
      return toast.error("Hold on!, Still generating your model...");
    }
    if (!identityToken) {
      login();
      return;
    }
    let imageUrl: string | null = null;
    if (inputFile?.url) {
      imageUrl = await handleImageUploadUrl(inputFile, identityToken);
      // stopper condition, because error message is done in `handleImageUploadUrl` already
      if (!imageUrl) {
        return;
      }
    }

    // Handle based on action type
    if (action === "new_chat") {
      createNewChat({
        accessToken: identityToken ?? "",
        prompt: prompt,
        style: style,
        imageUrl,
      });
    } else if (typeof action !== "string") {
      createExistingChat({
        accessToken: identityToken ?? "",
        prompt,
        style,
        threadId: action.threadId,
        imageUrl,
      });
    }
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
      <button
        disabled={isChatLoading}
        className={cn(
          "bg-buu-button     shadow-buu-button rounded-xl left-0 absolute w-full h-full top-0",
          {
            hidden: !inputFile?.url.length,
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
      </button>
      {/* Other components */}
      <DragImageCard className={""} onImageSelected={() => {}} />
      <ChatTextArea />
      <div className="w-full  flex justify-between">
        <label htmlFor="file-input" className="cursor-pointer">
          <input
            id="file-input"
            className="hidden"
            type="file"
            accept="image/png, image/jpeg"
            // capture="user"
            onChange={(e) => {
              const file = e.target?.files && e.target?.files[0];
              if (file) {
                if (!getAllowedContentTypeMaps(file.type)) {
                  toast.error(`Image type ${file.type} is not supported yet`);
                  return;
                }
                const imageUrl = URL.createObjectURL(file);
                const imageData = {
                  url: imageUrl,
                  name: file.name,
                  size: file.size,
                  type: file.type,
                };
                dispatch(setInputFile(imageData));
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
