import Resize from "@/assets/icons/utility/resize";
import Rotate from "@/assets/icons/utility/rotate";
import Translate from "@/assets/icons/utility/translate";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setTransformation } from "@/lib/redux/features/stage";
import { cn } from "@/lib/utils";

type TModelToggleTransformation = {};

export default function ModelToggleTransformation({}: TModelToggleTransformation) {
  const selectedModel = useAppSelector(
    (state) => state.stage.present.selectedModel,
  );
  const dispatch = useAppDispatch();
  if (!selectedModel) return;
  return (
    <div className="flex gap-4 items-center p-2 px-3 rounded-md bg-stage-modal">
      <button
        onClick={() => {
          dispatch(setTransformation("translate"));
        }}
        className={cn(
          "p-2 border border-white transition-all duration-300 ease-in-out rounded-md flex items-center justify-center",
          {
            "bg-white": selectedModel.transformModel === "translate",
          },
        )}
      >
        <div className="w-6 aspect-square flex items-center justify-center">
          <div
            className={cn("text-white", {
              "text-black": selectedModel.transformModel === "translate",
            })}
          >
            <Translate />
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          dispatch(setTransformation("rotate"));
        }}
        className={cn(
          "p-2 border border-white transition-all duration-300 ease-in-out rounded-md flex items-center justify-center",
          {
            "bg-white": selectedModel.transformModel === "rotate",
          },
        )}
      >
        <div className="w-6 aspect-square flex items-center justify-center">
          <div
            className={cn("text-white", {
              "text-black": selectedModel.transformModel === "rotate",
            })}
          >
            <Rotate />
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          dispatch(setTransformation("scale"));
        }}
        className={cn(
          "p-2 border border-white transition-all duration-300 ease-in-out rounded-md flex items-center justify-center",
          {
            "bg-white": selectedModel.transformModel === "scale",
          },
        )}
      >
        <div className="w-6 aspect-square flex items-center justify-center">
          <div
            className={cn("text-white", {
              "text-gray-700": selectedModel.transformModel === "scale",
            })}
          >
            <Resize />
          </div>
        </div>
      </button>
    </div>
  );
}
