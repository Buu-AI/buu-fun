"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setMaximizedViewer } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import ImageToolbar from "./user-tool-bar";
import ToolBarWrapper from "./tool-bar-wrapper";
const ModelViewer = dynamic(() => import("../../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

export default function MaximizeViewModel() {
  const maximizedContainer = useAppSelector(
    (state) => state.chat.maximizedContainer,
  );
  const { isOpened, data } = maximizedContainer;

  const dispatch = useAppDispatch();

  return (
    <Dialog
      key={`maximize-view-model-${data?.type}-${data?.modelUrl}-${data?.imageUrl}`}
      open={isOpened}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(
            setMaximizedViewer({
              isOpened: false,
            }),
          );
          return;
        }
        dispatch(setMaximizedViewer({ isOpened: value }));
      }}
    >
      <DialogContent
        closeButtonContainer="p-1 bg-buu ring-none"
        overlayClassName="bg-black/30"
        className="p-0 h-full max-w-fit aspect-square bg-transparent max-md:max-w-lg border-none w-full max-h-[80dvh] max-md:max-h-max scrollbar-w-hidden rounded-[20px]"
      >
        <DialogHeader className="flex items-center justify-center sr-only">
          <DialogTitle>Generate model</DialogTitle>
          <DialogDescription className="text-center text-pretty ">
            This request will generate a 3D model from this image.
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn(
            "flex   max-md:max-h-max   rounded-lg w-full h-full  mx-auto max-w-[100%]",
          )}
        >
          {data?.type === "image" ? (
            <div className="h-full w-full max-h-[90dvh]">
              <Image
                key={data.imageUrl}
                src={data.imageUrl}
                alt="Retrying Image Url"
                width={720}
                height={720}
                className="rounded-lg w-full  max-h-[80dvh] object-contain"
              />
              <div className="flex pl-4  pb-2">
                <ImageToolbar
                  className="w-full justify-center"
                  imageUrl={data.imageUrl}
                  messageId=""
                  imageId={data.imageId}
                  // messageId={"messageId"}
                  modelUrl={data.modelUrl}
                  role={"assistant"}
                  disabled={{
                    MAXIMIZE_VIEW: true,
                    EDIT_IMAGE: true,
                    GENERATE_NFT: true,
                  }}
                />
              </div>
            </div>
          ) : data?.type === "model" ? (
            <div className="w-full max-md:max-h-max md:h-full">
              <div className="flex items-center justify-center  rounded-2xl bg-balance-card flex-wrap text-wrap w-full md:w-[100%] mx-auto aspect-square">
                <ModelViewer
                  src={data?.modelUrl ?? ""}
                  alt=""
                  poster={data?.imageUrl ?? ""}
                />
              </div>
              <div className="h-6 w-full flex justify-center gap-2 mt-2">
                <ToolBarWrapper
                  type="model"
                  imageUrl={data?.imageUrl}
                  modelUrl={data?.modelUrl}
                  imageId={null}
                  modelId={data.modelId}
                  messageId={data?.messageId ?? ""}
                  nftId={data?.nftId}
                  tokenized={data?.tokenized}
                  disabled={{
                    MAXIMIZE_VIEW: true,
                    GENERATE_NFT: true,
                  }}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
