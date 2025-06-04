import { MagicPenIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { MaybeNumber } from "@/types";

type TGenerationLoader = {
  isGenerating: boolean;
  imagePersentage: MaybeNumber;
  isImageGenerating: boolean;
  modelPersentage: MaybeNumber;
};

export default function GenerationLoader({
  isGenerating,
  imagePersentage,
  isImageGenerating,
  modelPersentage,
}: TGenerationLoader) {
  return (
    <div
      className={cn(
        "w-full  h-full bg-black/30 p-1 top-0 z-10 left-0 rounded-b-2xl absolute",
        {
          hidden: !isGenerating,
        },
      )}
    >
      <div className="flex items-center w-full h-full justify-center gap-2 ">
        <div className=" w-6 h-6">
          <MagicPenIcon className=" text-[#78DBFF]" />
        </div>
        <p className="text-base tracking-tight text-white  animate-pulse">
          {getGenerationText({
            isGenerating,
            imagePersentage,
            isImageGenerating,
            modelPersentage,
          })}
        </p>
      </div>
    </div>
  );
}

function getGenerationText({
  isImageGenerating,
  isGenerating,
  imagePersentage,
  modelPersentage,
}: TGenerationLoader) {
  const baseText = "Generating";
  if (isImageGenerating && imagePersentage && imagePersentage <= 100) {
    return baseText + ` Image ${imagePersentage}%`;
  }
  if (isGenerating && modelPersentage && modelPersentage <= 100) {
    return baseText + ` Model ${modelPersentage}%`;
  }
  return baseText;
}
