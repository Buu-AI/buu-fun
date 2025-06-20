import "@google/model-viewer";
import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";

interface ModelViewerComponentProps {
  src: string;
  poster?: string | null;
  alt?: string;
  enableAR?: boolean;
  modelRef?: RefObject<HTMLElement | null>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function ModelViewer({
  src,
  poster,
  alt = "A 3D model",
  enableAR = true,
  modelRef,
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
        ref={modelRef}
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
        field-of-view={"90"}
        src={src}
        ios-src=""
        poster={poster ?? ""}
        alt={alt}
        rotation-per-second="12deg"
        auto-rotate-delay={2}
        loading="eager"
        camera-controls={true}
        min-camera-orbit="auto auto 200%"
        max-camera-orbit="auto auto 200%"
        auto-rotate
        interaction-prompt="none"
        ar={enableAR}
      >
        {/* <div className="lighting" slot="lighting">
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
        </div> */}
        {poster ? (
          <div
            id="lazy-load-poster"
            className="overflow-hidden w-full h-full"
            slot="poster"
          >
            <Image
              src={poster}
              alt="model preview image"
              width={720}
              height={720}
              className="w-full h-full object-cover blur-md"
            />
          </div>
        ) : null}
      </model-viewer>
    </div>
  );
}
