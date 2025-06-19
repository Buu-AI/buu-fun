import TrashIcon from "@/assets/icons/trash-icon";
import VisibleEye from "@/assets/icons/utility/visible-eye";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  removeLights,
  setLightsPopover,
  setSelectedLights,
  toggleLightVisibility,
} from "@/lib/redux/features/stage";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { TLightType } from "@/types/stage/objects";
import Image from "next/image";

type TLightsInScene = {};

export default function LightsInScene({}: TLightsInScene) {
  const lights = useAppSelector((state) => state.stage.present.lights);

  return (
    <>
      {lights && lights.length > 0 ? (
        <div className=" bg-black/30 h-0.5 rounded-lg my-2" />
      ) : null}

      <div className="flex items-center flex-col gap-2 ">
        {lights.map((item, index) => {
          return (
            <LightsCard
              key={`light-card-light-id-${item.id}`}
              type={item.type}
              id={item.id}
              visible={item.visible}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

function LightsCard({
  id,
  visible,
  index,
  imageUrl,
  type,
}: {
  imageUrl?: string;
  id: string;
  visible: boolean;
  index: number;
  type: TLightType;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full bg-stage-modal  rounded-xl overflow-hidden">
      <div className="flex items-center justify-between  h-[54px]">
        <div className="flex gap-2 items-center justify-center h-full">
          <button
            onClick={() => {
              dispatch(toggleLightVisibility(id));
            }}
            className=" flex items-center justify-center px-3 h-full bg-visible-eye"
          >
            <div
              className={cn("w-5 h-5 flex text-white/20 stroke-white/20", {
                "text-white stroke-white": visible,
              })}
            >
              <VisibleEye />
            </div>
          </button>
          <button
            onClick={() => {
              dispatch(setSelectedLights({ id, interactionMode: "translate" }));
              dispatch(setLightsPopover(false));
            }}
            className="flex items-center gap-3"
          >
            <div className="h-full   flex items-center ">
              <div className=" bg-white/20 rounded-sm w-10 overflow-hidden">
                <Image
                  className="w-full h-full aspect-square"
                  src={imageUrl ?? "/logo.png"}
                  width={250}
                  height={250}
                  alt="Object-Model-1"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium uppercase text-muted-foreground/80">
                {capitalizeFirstLetter(type)} Light {index + 1}
              </p>
            </div>
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(removeLights(id));
          }}
          className="px-2 mr-3"
        >
          <div className="w-5 h-5">
            <TrashIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
