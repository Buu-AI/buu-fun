import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { updateModel } from "@/lib/redux/features/stage";
import { TVector3 } from "@/types/stage/objects";

export function useModelPosition(modelId: string | null) {
  const dispatch = useAppDispatch();

  // Get the current model data
  const model = useAppSelector((state) =>
    modelId ? state.stage.present.models.find((m) => m.id === modelId) : null,
  );

  // Function to update model position (for external GUI)
  const updatePosition = useCallback(
    (newPosition: TVector3) => {
      if (!modelId) return;

      dispatch(
        updateModel({
          id: modelId,
          position: newPosition,
        }),
      );
    },
    [dispatch, modelId],
  );

  // Function to update model scale (for external GUI)
  const updateScale = useCallback(
    (newScale: TVector3) => {
      if (!modelId) return;

      dispatch(
        updateModel({
          id: modelId,
          scale: newScale,
        }),
      );
    },
    [dispatch, modelId],
  );

  // Function to update model rotation (for external GUI)
  const updateRotation = useCallback(
    (newRotation: TVector3) => {
      if (!modelId) return;

      dispatch(
        updateModel({
          id: modelId,
          rotation: newRotation,
        }),
      );
    },
    [dispatch, modelId],
  );

  // Function to update multiple properties at once
  const updateModelTransform = useCallback(
    (updates: {
      position?: TVector3;
      rotation?: TVector3;
      scale?: TVector3;
    }) => {
      if (!modelId) return;

      dispatch(
        updateModel({
          id: modelId,
          ...updates,
        }),
      );
    },
    [dispatch, modelId],
  );

  return {
    model,
    position: model?.position || ([0, 0, 0] as TVector3),
    scale: model?.scale || ([1, 1, 1] as TVector3),
    rotation: model?.rotation || ([0, 0, 0] as TVector3),
    updatePosition,
    updateScale,
    updateRotation,
    updateModelTransform,
  };
}
