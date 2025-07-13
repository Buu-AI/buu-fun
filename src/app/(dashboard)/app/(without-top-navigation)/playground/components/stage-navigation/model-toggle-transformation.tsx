import Resize from "@/assets/icons/utility/resize";
import Rotate from "@/assets/icons/utility/rotate";
import Translate from "@/assets/icons/utility/translate";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setTransformation } from "@/lib/redux/features/stage";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type TModelToggleTransformation = {};

export default function ModelToggleTransformation({}: TModelToggleTransformation) {
  const selectedModel = useAppSelector(
    (state) => state.stage.present.selectedModel,
  );
  const dispatch = useAppDispatch();
  
  if (!selectedModel) return;

  const transformationButtons = [
    {
      type: "translate",
      icon: <Translate />,
      tooltip: "Translate",
    },
    {
      type: "rotate",
      icon: <Rotate />,
      tooltip: "Rotate",
    },
    {
      type: "scale",
      icon: <Resize />,
      tooltip: "Scale",
    },
  ];

  return (
    <TooltipProvider>
      <div className="flex gap-4 items-center p-2 px-3 rounded-md bg-stage-modal">
        {transformationButtons.map(({ type, icon, tooltip }) => (
          <Tooltip key={type}>
            <TooltipTrigger asChild>
              <button
                onClick={() => {
                  dispatch(setTransformation(type as any));
                }}
                className={cn(
                  "p-2 border border-white transition-all duration-300 ease-in-out rounded-md flex items-center justify-center",
                  {
                    "bg-white": selectedModel.transformModel === type,
                  },
                )}
              >
                <div className="w-6 aspect-square flex items-center justify-center">
                  <div
                    className={cn("text-white", {
                      "text-black": selectedModel.transformModel === type && type !== "scale",
                      "text-gray-700": selectedModel.transformModel === type && type === "scale",
                    })}
                  >
                    {icon}
                  </div>
                </div>
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}