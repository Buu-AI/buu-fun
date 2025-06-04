import { cn } from "@/lib/utils";
import { MaybeString } from "@/types";
import Image from "next/image";

type TImageViewLoader = {
  imageUrl: MaybeString;
  isGenerating: boolean;
};

export default function ImageViewLoader({
  imageUrl,
  isGenerating,
}: TImageViewLoader) {
  if (!imageUrl) return null;
  if (!isGenerating && imageUrl) return null;
  return (
    <div className="w-full h-full relative">
      <Image
        src={imageUrl}
        width={1920}
        height={1080}
        alt="3D model preview"
        className={cn("w-full h-full p-1  object-cover", {
          "blur-md": isGenerating,
        })}
        priority
      />
    </div>
  );
}
