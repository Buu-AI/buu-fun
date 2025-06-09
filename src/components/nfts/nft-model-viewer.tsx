"use client";
import dynamic from "next/dynamic";
const ModelViewer = dynamic(() => import("../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

import React from "react";
type TNFTModelViewer = {
  modelUrl?: string | null;
  imageUrl?: string | null;
  description?: string | null;
};
export default function NFTModelViewer({
  description,
  imageUrl,
  modelUrl,
}: TNFTModelViewer) {
  return (
    <div className=" flex h-full basis-[60%]  items-center justify-center">
      <div className="flex max-h-[calc(100vh-200px)] overflow-hidden w-full border rounded-2xl  aspect-[14/16] max-auto">
        <ModelViewer
          src={modelUrl ?? ""}
          alt={description ?? ""}
          poster={imageUrl ?? "/logo.png"}
        />
      </div>
    </div>
  );
}
