"use client";
import { getDefaultModelProps } from "@/app/(dashboard)/app/(without-top-navigation)/playground/modelUrls";
import { getModelBasedOnPriority } from "@/lib/helpers/chat/model";
import { setGenerateNFT, setViewModel } from "@/lib/redux/features/chat";
import { addModels } from "@/lib/redux/features/stage";
import { getModelById } from "@/lib/redux/selectors/chatMessages";
import { MaybeString } from "@/types";
import { nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "./redux";
import { useRouter } from "next/navigation";

type TUseToolBar = {
  modelId: MaybeString;
  toolCallId: MaybeString;
  selectedModelUrl: MaybeString;
};

export default function useToolBar({ modelId, selectedModelUrl }: TUseToolBar) {
  const model = useAppSelector((state) => getModelById(state, modelId));

  const dispatch = useAppDispatch();
  const router = useRouter();
  function handleGenerateNFT() {
    if (model?.nftId) {
      toast.error("NFT has been already generated");
      return;
    }
    if (!model?.texturedMesh?.url) {
      toast.error("Model hasn't completed generation.");
      return;
    }
    dispatch(
      setViewModel({
        isOpen: false,
      })
    );
    dispatch(
      setGenerateNFT({
        isGenNftOpen: true,
        imageUrl: undefined,
        modelUrl: model?.texturedMesh?.url,
        modelId: modelId,
      })
    );
  }

  function addModelToPlayground() {
    if (!model) {
      toast.error("Invalid model");
      return;
    }
    const texturedModel = getModelBasedOnPriority(model);
    const defaultModelParams = getDefaultModelProps({
      modelUrl: texturedModel,
      imageUrl: model.image.url,
      createdAt: new Date(model.createdAt).toISOString(),
    });
    if (!model.texturedMesh || !defaultModelParams) return null;
    dispatch(
      addModels({
        ...defaultModelParams,
        id: nanoid(),
      })
    );
    toast.success("Added to playground");
    router.push("/app/playground");
  }

  function downloadModel() {
    if (!selectedModelUrl) {
      toast.error("Please select a valid Url");
      return;
    }
    window.open(new URL(selectedModelUrl).toString(), "_blank");
  }

  function shareModel() {
    if (!selectedModelUrl) return;

    navigator.clipboard
      .writeText(selectedModelUrl)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy");
      });
  }

  return { downloadModel, shareModel, handleGenerateNFT, addModelToPlayground, tokenized: !!model?.nftId };
}
