"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { clearViewWorld, setViewWorld } from "@/lib/redux/features/chat";
import { getWorldById } from "@/lib/redux/selectors/chatMessages";
import { useProgressiveSplatLoader } from "@/hooks/use-progressive-splat-loader";
import SplatRenderer from "@/components/world/splat-renderer";
import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useState } from "react";
import LoaderCircle from "../Loader-circle";

export default function ViewWorldModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.chat.viewWorld.isOpen);
  const worldId = useAppSelector((state) => state.chat.viewWorld.world?.id);
  const world = useAppSelector((state) => getWorldById(state, worldId));

  const [error, setError] = useState<string | null>(null);

  const preview100kUrl = world?.splatFiles?.lowRes?.url ?? "";
  const fullResUrl = world?.splatFiles?.highRes?.url ?? "";

  const {
    previewProgress,
    previewSplat,
    fullResProgress,
    fullResSplat,
    stage,
    error: loaderError,
  } = useProgressiveSplatLoader({
    preview100kUrl,
    fullResUrl,
  });

  // Reset error when world changes
  useEffect(() => {
    setError(null);
  }, [worldId]);

  useEffect(() => {
    if (loaderError && !error) {
      setError(
        "Failed to load Gaussian Splat. Please check your connection and try again.",
      );
    }
  }, [loaderError, error]);

  useEffect(() => {
    return () => {
      dispatch(clearViewWorld());
    };
  }, [dispatch]);

  const handleRetry = useCallback(() => {
    setError(null);
    window.location.reload();
  }, []);

  const handleOpenChange = useCallback(
    (value: boolean) => {
      if (!value) {
        setError(null);
        dispatch(setViewWorld({ isOpen: false }));
      }
    },
    [dispatch],
  );

  const showProgressOverlay =
    stage === "idle" ||
    stage === "loading_preview" ||
    stage === "loading_fullres";
  const currentProgress =
    stage === "loading_preview" ? previewProgress : fullResProgress;
  const progressText =
    stage === "idle"
      ? "Initializing..."
      : stage === "loading_preview"
        ? "Loading Preview..."
        : stage === "loading_fullres"
          ? "Loading Full Quality..."
          : "";

  if (!world) return null;

  return (
    <Dialog
      key={`world-viewer-${world._id}`}
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <DialogHeader>
        <DialogTitle className="sr-only">World Viewer</DialogTitle>
        <DialogDescription className="sr-only">
          {world.textPrompt}
        </DialogDescription>
      </DialogHeader>
      <DialogContent
        closeIconContainer="w-5 h-5"
        closeButtonContainer="bg-white p-0.5 rounded-full opacity-100 text-black"
        overlayClassName="bg-black/30 backdrop-blur-[3px]"
        className="!gap-0 p-0 w-[95dvw] h-[95dvh] max-w-full max-h-full bg-transparent border-none outline-none ring-0 shadow-none rounded-[20px] !grid-cols-1 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="w-full h-full relative rounded-2xl overflow-hidden bg-balance-card focus:outline-none focus-visible:outline-none">
          {error ? (
            <div
              key="error"
              className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl z-10"
            >
              <div className="text-center p-6 bg-buu rounded-xl max-w-md mx-4">
                <p className="text-red-400 mb-4">{error}</p>
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 bg-buu-blue rounded-lg text-white hover:bg-buu-blue/80 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <div key="renderer" className="w-full h-full relative">
              <Canvas
                className="border-2 border-white"
                camera={{
                  position: [0, 0, 0],
                  // fov: 60,
                  // near: 0.01,
                  // far: 1000,
                }}
                // gl={{
                //   antialias: true,
                //   alpha: true,
                //   powerPreference: "low-power",
                //   preserveDrawingBuffer: true,
                // }}
                // dpr={[1, 2]}
                // resize={{ scroll: false, debounce: 20, }}
                // style={{
                //   background: "transparent",
                //   width: "100%",
                //   height: "100%",
                //   position: "absolute",
                //   top: 0,
                //   left: 0,
                // }}
              >
                <SplatRenderer
                  lowResSplat={previewSplat}
                  highResSplat={fullResSplat}
                />
              </Canvas>

              {showProgressOverlay && (
                <div className="absolute inset-0 flex items-center justify-center bg-buu/80 z-[99]">
                  <div className="h-32 w-32 relative flex items-center justify-center">
                    <LoaderCircle />
                    <p className="absolute inset-0 flex items-center justify-center z-50 text-white font-semibold">
                      {Math.round(currentProgress * 100)}%
                    </p>
                  </div>
                  <p className="absolute bottom-8 text-white/80 text-sm">
                    {progressText}
                  </p>
                </div>
              )}
            </div>
          )}

          {stage === "complete" && (
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-buu/80 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                <span className="text-white text-sm font-medium">
                  {world.textPrompt ?? "World"}
                </span>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
