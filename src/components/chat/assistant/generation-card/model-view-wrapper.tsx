import { MaybeString } from "@/types";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("../../../generation/model-viewer"), {
  // loading: () => <p>Loading...</p>,
  ssr: false,
});

type TModelViewWrapper = {
  modelUrl: MaybeString;
  imageUrl: MaybeString;
};

export default function ModelViewWrapper({
  modelUrl,
  imageUrl,
}: TModelViewWrapper) {
  if (!modelUrl) return null;
  return (
    <div className="w-full h-full relative">
      <div className="bg-balance-card w-full h-full absolute top-0 left-0" />
      <div className="w-full h-full  backdrop-blur-xl overflow-hidden relative rounded-b-3xl">
        <ModelViewer key={modelUrl} poster={imageUrl} src={modelUrl} />
      </div>
    </div>
  );
}
