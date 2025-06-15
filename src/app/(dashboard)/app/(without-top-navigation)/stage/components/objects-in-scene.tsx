"use client";
import { useAppSelector } from "@/hooks/redux";
import { cn } from "@/lib/utils";
import ObjectsViewer from "./objects-viewer";

type TObjectsInScene = {};

export default function ObjectsInScene({}: TObjectsInScene) {
  const isPaidUser = true;
  const lights = useAppSelector((state) => state.stage.present.selectedLights);
  if (lights?.id) return null;
  return (
    <div
      className={cn(
        "absolute max-w-sm w-full   bg-stage-modal rounded-lg  bottom-2 right-3",
        {
          "bottom-12": isPaidUser,
        },
      )}
    >
      <ObjectsViewer />
    </div>
  );
}
