"use client";
import { getDefaultModelProps } from "@/app/(dashboard)/app/(without-top-navigation)/playground/modelUrls";
import { getModelBasedOnPriority } from "@/lib/helpers/chat/model";
import { convertModel } from "@/lib/react-query/model";
import { queryClient } from "@/lib/react-query/query-client";
import { setGenerateNFT, setViewModel } from "@/lib/redux/features/chat";
import { addModels } from "@/lib/redux/features/stage";
import { getModelById } from "@/lib/redux/selectors/chatMessages";
import { useAuthentication } from "@/providers/account.context";
import { MaybeString } from "@/types";
import { nanoid } from "@reduxjs/toolkit";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "./redux";

type TUseToolBar = {
  modelId: MaybeString;
  toolCallId: MaybeString;
  selectedModelUrl: MaybeString;
};

export default function useToolBar({ modelId, selectedModelUrl }: TUseToolBar) {
  const model = useAppSelector((state) => getModelById(state, modelId));
  const { identityToken: accessToken } = useAuthentication();
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

  const { mutate } = useMutation({
    mutationFn: convertModel,
    onMutate: () => {
      router.prefetch("/app/editor");
      toast.loading("Preparing model...");
    },
    async onSuccess(data) {
      toast.dismiss();
      await queryClient.invalidateQueries({
        exact: false,
        queryKey: ["get-models"],
      });
      const modelUrl = data.obj?.optimizedMesh?.url ?? data.obj?.mesh?.url;
      if (!modelUrl) {
        toast.error("Failed to convert model");
        return;
      }
      toast.success("Model prepared successfully");
      const params = new URLSearchParams({ modelObjUrl: modelUrl });
      const url = `/app/editor?${params.toString()}`;
      router.push(url);
    },
    onError() {
      toast.dismiss();
      toast.error("Failed to convert model");
    },
  });
  function addToEditor() {
    if (!accessToken) {
      toast.error("Authentication failed, please signin again");
      return;
    }
    const modelId = model?._id;
    const modelUrl = model?.obj?.optimizedMesh?.url;
    if (!modelId) {
      toast.error("Failed to get model");
      return;
    }
    if (modelUrl) {
      const params = new URLSearchParams({ modelObjUrl: modelUrl });

      const url = `/app/editor?${params.toString()}`;
      router.push(url);
      return;
    }
    mutate({
      accessToken,
      opts: {
        mesh: "optimizedMesh",
        modelId: modelId,
        outputFormat: "obj",
      },
    });
  }

  function addToAnimator() {
    const modelUrl = model?.texturedMesh?.url;
    if (!modelUrl) {
      toast.error("textured model is not available");
      return;
    }
    const params = new URLSearchParams({ modelUrl: modelUrl });
    const url = `/app/animator?${params.toString()}`;

    router.push(url);
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

  return {
    downloadModel,
    shareModel,
    handleGenerateNFT,
    addModelToPlayground,
    tokenized: !!model?.nftId,
    addToAnimator,
    addToEditor,
  };
}
