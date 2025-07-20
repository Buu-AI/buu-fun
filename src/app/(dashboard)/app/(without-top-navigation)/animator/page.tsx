"use client";
import { ANIMATOR_URL } from "@/config";
import useSendModels from "@/hooks/useSendModels";
import { useRef } from "react";
import LibraryModels from "../editor/component/library";
import toast from "react-hot-toast";

export default function AnimatorPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { loadGLB } = useSendModels({
    iframeRef,
  });

  return (
    <main className="relative h-full w-full">
      <div className="absolute bottom-14 left-[10px] max-w-max h-4">
        <div className="flex flex-col gap-2 ">
          <LibraryModels
            loaderCallback={(modelUrl) => {
              if (!modelUrl) {
                toast.error("Failed to load model, please try again");
                return;
              }
              loadGLB(modelUrl);
            }}
          />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden rounded-lg">
        <iframe ref={iframeRef} className="w-full h-full" src={ANIMATOR_URL} />
      </div>
    </main>
  );
}
