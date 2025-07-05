"use client";
import CubeTexture from "@/assets/icons/cube-texture";
import MeshIcon from "@/assets/icons/mesh-icon";
import TexturedMesh from "@/assets/icons/textured-mesh";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getModelBasedOnPriority } from "@/lib/helpers/chat/model";
import { setViewModel } from "@/lib/redux/features/chat";
import { getModelById, getToolById } from "@/lib/redux/selectors/chatMessages";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import LoaderCircle from "../Loader-circle";
import ViewModelToolbar from "../toolbar/view-model-toolbar";
import NftTokenButton from "./nft-token-button";
import useModelAnalysis from "@/hooks/use-model-analysis";
import ChangeModelToolTip from "./change-model-tool-tip";

const ModelViewer = dynamic(
  () => import("@/components/generation/model-viewer"),
  {
    ssr: false,
  }
);

export default function ViewModelModal() {
  const isOpen = useAppSelector((state) => state.chat.viewModel.isOpen);
  const dispatch = useAppDispatch();
  const modelId = useAppSelector((state) => state.chat.viewModel.model?.id);
  const toolCallId = useAppSelector(
    (state) => state.chat.viewModel.toolRequest?.id
  );
  const model = useAppSelector((state) => getModelById(state, modelId));

  const toolCall = useAppSelector((state) => getToolById(state, toolCallId));

  const modelRef = useRef<HTMLElement>(null);
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const [progress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  const modelAnalysis = useModelAnalysis(modelUrl);
  const faces = modelAnalysis.geometry?.faces;
  const vertices = modelAnalysis.geometry?.vertices;
  useEffect(() => {
    if (model) {
      const modelUrl = getModelBasedOnPriority(model);
      setModelUrl(modelUrl ?? null);
    }
  }, [model]);

  useEffect(() => {
    const modelReference = modelRef.current;
    if (!modelReference) return;

    function loadedData() {
      toast.dismiss();
      setIsLoaded(true);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function loading(event: any) {
      const progress = event.detail.totalProgress;
      if (progress === 0) {
        setIsLoaded(false);
      }
      setLoadingProgress(progress * 100);
    }

    modelReference.addEventListener("load", loadedData);
    modelReference.addEventListener("progress", loading);
    return () => {
      if (!modelReference) return;
      modelReference.removeEventListener("load", loading);
      modelReference.removeEventListener("progress", loadedData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelRef.current]);

  const meshUrl = model?.mesh?.url;
  const optimizedMesh = model?.optimizedMesh?.url;
  const texturedMesh = model?.texturedMesh?.url;
  return (
    <Dialog
      modal
      open={isOpen}
      onOpenChange={(value) => {
        dispatch(
          setViewModel({
            isOpen: value,
          })
        );
      }}
    >
      <DialogHeader>
        <DialogTitle className="sr-only">Model viewer</DialogTitle>
        <DialogDescription className="sr-only">
          {model?.prompt}
        </DialogDescription>
      </DialogHeader>
      <DialogContent
        closeIconContainer="w-5 h-5"
        closeButtonContainer="bg-white p-0.5 rounded-full opacity-100 text-black"
        className="w-full p-0  overflow-hidden  rounded-lg  h-full bg-model-viewer max-w-[99%] md:max-w-[90%] max-h-[90%]"
      >
        <div className="w-full h-full relative">
          <button />
          <div className="absolute top-2 left-5 z-[100] ">
            <div className="flex gap-4">
              <div className="flex items-center flex-col justify-center gap-3">
                {meshUrl ? (
                  <ChangeModelToolTip
                    content="Mesh"
                    onClickCallback={() => {
                      setModelUrl(meshUrl);
                    }}
                    buttonIcon={
                      <div className="w-6 h-6 text-gray-100 group-hover:text-gray-300">
                        <MeshIcon />
                      </div>
                    }
                  />
                ) : null}
                {optimizedMesh ? (
                  <ChangeModelToolTip
                    content="Optimized mesh"
                    onClickCallback={() => {
                      setModelUrl(optimizedMesh);
                    }}
                    buttonIcon={
                      <div className="w-6 h-6 text-gray-100 group-hover:text-gray-300">
                        <CubeTexture />
                      </div>
                    }
                  />
                ) : null}
                {texturedMesh ? (
                  <ChangeModelToolTip
                    content="Textured mesh"
                    onClickCallback={() => {
                      setModelUrl(texturedMesh);
                    }}
                    buttonIcon={
                      <div className="w-6 h-6 text-gray-100 group-hover:text-gray-300">
                        <TexturedMesh />
                      </div>
                    }
                  />
                ) : null}
              </div>
              <div></div>
            </div>
          </div>
          {!isLoaded ? (
            <div className="absolute bg-buu inset-0 flex items-center justify-center z-[99]">
              <div className="h-32 w-32 relative flex items-center justify-center">
                <LoaderCircle />
                <p className="absolute inset-0 flex items-center justify-center z-50 text-white font-semibold">
                  {progress.toFixed(0)}%
                </p>
              </div>
            </div>
          ) : null}
          <div className=" w-full h-full ">
            {modelUrl ? (
              <ModelViewer
                modelRef={modelRef}
                enableAR={false}
                poster={null}
                src={modelUrl}
              />
            ) : null}
          </div>
          <div className="absolute  bottom-[5rem] right-6  z-[99] ">
            <NftTokenButton nftId={model?.nftId} />
          </div>
          <div className="bottom-[5rem] left-6 absolute">
            <p className="uppercase font-medium  text-xs">
              <span className="text-muted-foreground/60">VERTEX:</span>
              <span className="tracking-wide"> {vertices ?? 0}</span>
            </p>
            <p className="uppercase font-medium  text-xs">
              <span className="text-muted-foreground/60">Faces:</span>
              <span className="tracking-wide"> {faces ?? 0}</span>
            </p>{" "}
          </div>
          <div className="absolute bottom-0 w-full h-16 bg-buu-view-modal-footer">
            <ViewModelToolbar
              modelId={modelId}
              selectedModelUrl={modelUrl}
              toolCallId={toolCall?._id}
              model={model}
              toolCall={toolCall}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
