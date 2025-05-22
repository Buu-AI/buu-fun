"use client";
import {
  gradientBluePurpleImage,
  gradientBlueyRedImage,
  gradientRainbowImage,
} from "@/assets/Image/gradients";
import {
  Create3DLayout,
  CreateComicLayout,
  CreateVideoLayout,
} from "./image-layouts";
import QuickSelectCard from "./quick-select-card";
import { sendChatMessage } from "@/lib/react-query/threads.v3";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import {
  clearInput,
  clearMessages,
  setNewSession,
} from "@/lib/redux/features/chat";
import { useAppDispatch } from "@/hooks/redux";
import { useRouter } from "next/navigation";
import { TypedAppError } from "@/class/error";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import toast from "react-hot-toast";
import { getRandomElement } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { prompts } from "@/constants/prompt";
export default function HeaderQuickSelectButton() {
  const { identityToken: accessToken, login } = useAuthentication();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { mutate: createNewChat, isPending: isCreatePending } = useMutation({
    mutationFn: sendChatMessage,

    onMutate(variables) {
      const sessionId = variables.sessionId;
      dispatch(setNewSession(sessionId));
      dispatch(clearMessages());
      dispatch(clearInput());
      const imageUrls = variables.imageUrls;
      const urls = imageUrls
        ? Array.isArray(imageUrls)
          ? imageUrls
          : [imageUrls]
        : undefined;
      // dispatch(appendUserChatMessage(prompt, sessionId, urls));
      router.push(`/app/chat/${sessionId}`);
    },

    onSuccess(data) {
      dispatch(clearInput());
      const sessionId = data?.items[0].sessionId;
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
  function helpMeGenerate3DObject() {
    if (!accessToken) {
      login();
      return;
    }
    const prompt = getRandomElement(prompts);
    const sessionId = uuid();
    createNewChat({
      accessToken,
      prompt,
      sessionId,
    });
  }
  return (
    <section className="hidden lg:block">
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => {
            helpMeGenerate3DObject();
          }}
        >
          <QuickSelectCard
            key={"quick-select-card-3d-layout"}
            backgroundImage={<Create3DLayout />}
            gradient={gradientBluePurpleImage.src}
            title={
              <>
                Help me to create <br /> 3D object
              </>
            }
          />
        </button>
        <QuickSelectCard
          key={"quick-select-card-comic"}
          released={false}
          backgroundImage={<CreateComicLayout />}
          gradient={gradientBlueyRedImage.src}
          title={
            <>
              Make a 3D model <br />
              game-production <br />
              ready
            </>
          }
        />
        <QuickSelectCard
          key={"quick-select-card-video"}
          released={false}
          backgroundImage={<CreateVideoLayout />}
          gradient={gradientRainbowImage.src}
          title={"Help me Rig & Animate a 3D model"}
        />
      </div>
    </section>
  );
}
