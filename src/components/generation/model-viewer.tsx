import { ThreeDCubeOne } from "@/assets/Image";
import "@google/model-viewer";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ModelViewerComponentProps {
  src: string;
  poster?: string | null;
  alt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function ModelViewer({
  src,
  poster,
  alt = "A 3D model",
}: ModelViewerComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const modelContainer = ref.current;
    if (!modelContainer) return;
    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };
    modelContainer.addEventListener("mousedown", stopPropagation);
    modelContainer.addEventListener("touchcancel", stopPropagation);
    modelContainer.addEventListener("touchend", stopPropagation);
    modelContainer.addEventListener("touchmove", stopPropagation);
    modelContainer.addEventListener("wheel", stopPropagation);
    modelContainer.addEventListener("touchstart", stopPropagation);
    return () => {
      if (!modelContainer) return;
      modelContainer.removeEventListener("mousedown", stopPropagation);
      modelContainer.removeEventListener("touchcancel", stopPropagation);
      modelContainer.removeEventListener("touchend", stopPropagation);
      modelContainer.removeEventListener("touchmove", stopPropagation);
      modelContainer.removeEventListener("wheel", stopPropagation);
      modelContainer.removeEventListener("touchstart", stopPropagation);
    };
  }, [ref]);
  return (
    <div
      // onTouch
      ref={ref}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      onTouchCancel={(e) => {
        e.stopPropagation();
      }}
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
      onWheel={(e) => {
        e.stopPropagation();
      }}
      className="w-full h-full "
    >
      <model-viewer
        auto-play
        style={
          {
            width: "100%",
            height: "100%",
            display: "block",
            "--poster-size": "cover",
            "--poster-color": "transparent",
            "--progress-mask": "none",
            "--progress-bar-height": "0px",
            pointerEvents: "auto",
          } as React.CSSProperties
        }
        src={src}
        ios-src=""
        poster={poster ?? ""}
        alt={alt}
        rotation-per-second="12deg"
        auto-rotate-delay={2}
        // shadow-intensity={5}
        loading="eager"
        // exposure={1}
        camera-controls
        auto-rotate
        // touch-action="pan-y"
        interaction-prompt="none"
        ar
      >
        <div className="lighting" slot="lighting">
          <div
            className="lighting-point"
            // style="transform: translate3d(10m, 10m, 10m)"
            style={{
              transform: "translate3d(10m, 10m, 10m)",
            }}
          ></div>
          <div
            className="lighting-point"
            // style="transform: translate3d(-10m, -10m, -10m)"
            style={{
              transform: "translate3d(-10m, -10m, -10m)",
            }}
          ></div>
          <div
            className="lighting-point"
            style={{
              transform: "translate3d(-10m, 10m, -10m)",
            }}
            // style="transform: translate3d(-10m, 10m, -10m)"
          ></div>
        </div>
        <div
          id="lazy-load-poster"
          className="overflow-hidden w-full h-full"
          slot="poster"
        >
          <Image
            src={poster ?? ThreeDCubeOne.src}
            alt="model preview image"
            width={720}
            height={720}
            className="w-full h-full object-cover blur-md"
          />
        </div>
      </model-viewer>
    </div>
  );
}
