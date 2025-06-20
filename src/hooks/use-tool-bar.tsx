"use client";
import { setGenerateNFT, setViewModel } from "@/lib/redux/features/chat";
import { getModelById } from "@/lib/redux/selectors/chatMessages";
import { MaybeString } from "@/types";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "./redux";

type TUseToolBar = {
  modelId: MaybeString;
  toolCallId: MaybeString;
  selectedModelUrl: MaybeString;
};

export default function useToolBar({ modelId, selectedModelUrl }: TUseToolBar) {
  const model = useAppSelector((state) => getModelById(state, modelId));
  const dispatch = useAppDispatch();

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
      }),
    );
    dispatch(
      setGenerateNFT({
        isGenNftOpen: true,
        imageUrl: undefined,
        modelUrl: model?.texturedMesh?.url,
        modelId: modelId,
      }),
    );
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

  return { downloadModel, shareModel, handleGenerateNFT };
}
