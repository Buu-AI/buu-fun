import { MagicPenIcon } from "@/assets/icons";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState, memo } from "react";
import MockToolBar from "./mock-tool-bar";
// import "@google/model-viewer";

// Lazy load ModelViewer with explicit SSR: false
const ModelViewer = dynamic(() => import("../../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

type TMock3DCard = {
  isGenerating: boolean;
  isCurrent: boolean;
  modelUrl?: string;
  imageUrl?: string;
};

// Use memo to prevent unnecessary re-renders
const Mock3DCard = memo(function Mock3DCard({
  isGenerating,
  imageUrl,
  isCurrent,
  modelUrl,
}: TMock3DCard) {
  const [shouldShow3D, setShouldShow3D] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load the Google model viewer lazily and only when needed
  useEffect(() => {
    if (isCurrent && !isGenerating && modelUrl) {
      // Only import when needed
      import("@google/model-viewer").catch(console.error);
    }
  }, [isCurrent, isGenerating, modelUrl]);

  // Manage 3D model visibility
  useEffect(() => {
    // Clear any existing timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (isCurrent && !isGenerating && modelUrl) {
      // Delay showing the 3D model to allow animations to complete
      timerRef.current = setTimeout(() => {
        setShouldShow3D(true);
      }, 300);
    } else {
      setShouldShow3D(false);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isCurrent, isGenerating, modelUrl]);

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="w-full h-[290px] relative p-0 flex"
    >
      <div className="relative rounded-2xl w-full h-full overflow-hidden">
        <div className="w-[78px] h-[170px] top-0 right-[10%] absolute bg-overlay-card rounded-full rotate-[-10deg]" />

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: shouldShow3D ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className={cn(
              "w-full h-full hidden items-center bg-black/30 relative justify-center",
              {
                "z-20 flex bg-none absolute": isGenerating,
              },
            )}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="text-blue-400 w-6 h-6">
                <MagicPenIcon />
              </div>
              <p className="text-base tracking-tight text-white animate-pulse">
                Generating
              </p>
            </div>
          </div>

          {imageUrl ? (
            <Image
              src={imageUrl}
              width={1920}
              height={1080}
              alt="3D model preview"
              className={cn("w-full h-full object-cover", {
                "blur-md": isGenerating,
              })}
              priority={isCurrent} // Only prioritize current images
              loading={isCurrent ? "eager" : "lazy"} // Lazy load non-current images
            />
          ) : null}
        </motion.div>

        {/* Only render the 3D model when needed */}
        {!isGenerating && modelUrl && shouldShow3D && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              pointerEvents: shouldShow3D ? "auto" : "none",
            }}
            className="absolute inset-0 w-full h-full"
          >
            <ModelViewer src={modelUrl} alt="" poster={imageUrl} />
          </motion.div>
        )}
      </div>

      <div className="absolute -bottom-4 z-50 flex items-center gap-2 justify-center w-full">
        <MockToolBar isGenerating={!isGenerating} modelUrl={modelUrl} />
      </div>

      {isGenerating && (
        <BorderBeam
          containerClassName="rounded-2xl"
          initialOffset={0}
          size={250}
          colorFrom="rgba(119, 217, 253,1)"
          colorTo="rgba(119, 217, 253,1)"
          className="border-2 rounded-2xl z-50 relative"
        />
      )}
    </motion.div>
  );
});

export default Mock3DCard;
