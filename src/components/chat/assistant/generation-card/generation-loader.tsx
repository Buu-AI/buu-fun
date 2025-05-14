import { MagicPenIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

type TGenerationLoader = {
  isGenerating: boolean;
};

export default function GenerationLoader({ isGenerating }: TGenerationLoader) {
  return (
    <div
      className={cn(
        "w-full  h-full bg-black/30 p-1 top-0 z-10 left-0 rounded-2xl absolute",
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
          Generating
        </p>
      </div>
    </div>
  );
}
