"use client";
import TrashIcon from "@/assets/icons/trash-icon";
import VisibleEye from "@/assets/icons/utility/visible-eye";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  removeModel,
  setSelectedModel,
  toggleModelVisibility,
} from "@/lib/redux/features/stage";
import { cn } from "@/lib/utils";
import { TModelState } from "@/types/stage/objects";
import { GhostIcon } from "lucide-react";
import Image from "next/image";
import HistoryModels from "./history-models";

type TObjectsInScene = {};

export default function ObjectsInScene({}: TObjectsInScene) {
  const isPaidUser = true;
  const models = useAppSelector((state) => state.stage.present.models);
  return (
    <div
      className={cn(
        "absolute max-w-sm w-full   bg-stage-modal rounded-lg  bottom-2 right-3",
        {
          "bottom-12": isPaidUser,
        },
      )}
    >
      <div className="flex   relative w-full h-full">
        <div className="absolute bottom-10 -left-[100px] max-w-max h-4">
          <div className="flex flex-col gap-2 ">
            <HistoryModels />
            {/* <Button
              size={"special"}
              variant={"ghost"}
              className="bg-stage-modal"
            >
              <StagingHistoryIcon />
              History
            </Button> */}
          </div>
        </div>
        <div className="px-5 py-3 w-full overflow-hidden">
          <p className="uppercase text-sm font-semibold ">Objects</p>
          <div className="mt-2.5 w-full space-y-2 max-h-[35dvh] pr-3 overflow-y-scroll scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-white scrollbar-thumb-rounded h-full">
            {models && models.length > 0 ? (
              models.map((item, index) => {
                return (
                  <ObjectInSceneCard
                    key={`${item.id}-${item.modelUrl}`}
                    {...item}
                    index={index + 1}
                  />
                );
              })
            ) : (
              <div className="flex items-center justify-center flex-col">
                <div>
                  <GhostIcon />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground/80 text-pretty max-w-xs text-center">
                    No Models Found, Please add models to The scene
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type TObjectInSceneCard = {
  index: number;
};

export function ObjectInSceneCard({
  visible,
  imageUrl,
  index,
  id,
}: TModelState & TObjectInSceneCard) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full bg-stage-modal  rounded-xl overflow-hidden">
      <div className="flex items-center justify-between  h-[54px]">
        <div className="flex gap-2 items-center justify-center h-full">
          <button
            onClick={() => {
              dispatch(toggleModelVisibility(id));
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
              dispatch(setSelectedModel({ id, transformModel: "translate" }));
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
                Object {index}
              </p>
            </div>
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(removeModel(id));
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
