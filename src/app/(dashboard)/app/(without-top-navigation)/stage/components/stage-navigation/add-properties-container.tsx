import SelectObjectIcon from "@/assets/icons/select-object-icon";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSelectedModel } from "@/lib/redux/features/stage";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import CameraAdjustButton from "./camera-adjust-button";

type TAddPropertiesContainer = {};

export default function AddPropertiesContainer({}: TAddPropertiesContainer) {
  const isModelSelected = useAppSelector(
    (state) => state.stage.present.selectedModel,
  );
  const models = useAppSelector((state) => state.stage.present.models);
  const dispatch = useAppDispatch();
  return (
    <div className="py-2 px-2">
      <div className="flex gap-2">
        <CameraAdjustButton />
        <button
          onClick={() => {
            const lastModel = models.pop();
            if (lastModel) {
              dispatch(
                setSelectedModel({
                  id: lastModel.id,
                  transformModel: "translate",
                }),
              );
            } else {
              toast.error("no models presented at the scene");
            }
          }}
          className={cn("flex items-center rounded-lg py-2 px-2.5 h-10 ", {
            "bg-white text-black": isModelSelected?.id,
          })}
        >
          <div
            className={cn("text-white", {
              "text-[#515761]": isModelSelected?.id,
            })}
          >
            <SelectObjectIcon />
          </div>
          <p>Object</p>
        </button>
        {/* <button className="flex items-center rounded-lg py-2 px-2.5 h-10 bg-white text-black">
          <div className="text-[#515761]">
            <CameraIcon />
          </div>
          <p>Camera</p>
        </button> */}
        {/* <button className="flex items-center rounded-lg py-2 px-2.5 h-10  text-">
          <div className="text-white ">
            <SelectObjectIcon />
          </div>
          <p>Lights</p>
        </button> */}
      </div>
    </div>
  );
}
