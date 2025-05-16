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

const ModelViewer = dynamic(() => import("../../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

export default function MaximizeViewModel() {
  const maximizedContainer = useAppSelector(
    (state) => state.chat.maximizedContainer
  );
  const sessionId = useAppSelector((state) => state.chat.sessionId);
  const { imageUrl, isOpened, modelUrl } = maximizedContainer;
  const dispatch = useAppDispatch();

  return (
    <Dialog
      key={`maximize-view-model-${imageUrl}-${modelUrl}`}
      open={isOpened}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(
            setMaximizedViewer({
              isOpened: false,
              imageUrl: null,
              modelUrl: null,
            })
          );
          return;
        }
        dispatch(setMaximizedViewer({ isOpened: value }));
      }}
    >
      <DialogContent
        closeButtonContainer="p-1 bg-buu ring-none"
        overlayClassName="bg-black/30"
        className="rounded-[20px] p-0 lg:rounded-[20px] bg-transparent border-none overflow-y-scroll max-h-[90dvh] scrollbar-w-hidden"
      >
        <DialogHeader className="flex items-center justify-center sr-only">
          <DialogTitle>Generate model</DialogTitle>
          <DialogDescription className="text-center text-pretty ">
            This request will generate a 3D model from this image{" "}
          </DialogDescription>
        </DialogHeader>
        <div className={cn("flex  rounded-lg w-full  mx-auto max-w-[100%]")}>
          {imageUrl ? (
            <div className="">
              <Image
                key={imageUrl}
                src={imageUrl}
                alt="Retrying Image Url"
                width={720}
                height={720}
                className="rounded-lg  object-contain"
              />
              <div className="flex pl-4  pb-2">
                <ImageToolbar
                  className="w-full justify-center"
                  imageUrl={imageUrl}
                  messageId={"messageId"}
                  modelUrl={modelUrl}
                  role={"assistant"}
                  disabled={{
                    MAXIMIZE_VIEW: true,
                  }}
                />
              </div>
            </div>
          ) : modelUrl ? (
            <div className="flex flex-wrap text-wrap w-full md:w-[100%] mx-auto aspect-square">
              {/* {modelUrl} */}
              <ModelViewer src={modelUrl ?? ""} alt="" poster={imageUrl} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
