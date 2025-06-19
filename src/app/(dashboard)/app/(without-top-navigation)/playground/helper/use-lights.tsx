// hooks/useDebouncedLightUpdate.ts
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { TVector3 } from "@/types/stage/objects";
import { updateLights } from "@/lib/redux/features/stage";

type LightUpdateParams = {
  id: string;
  position?: TVector3;
  target?: TVector3;
  angle?: number;
  penumbra?: number;
  distance?: number;
  decay?: number;
  intensity?: number;
  color?: string;
  castShadow?: boolean;
  helper?: boolean;
};

export const useDebouncedLightUpdate = (delay: number = 100) => {
  const dispatch = useDispatch();
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const pendingUpdatesRef = useRef<Map<string, LightUpdateParams>>(new Map());

  const debouncedUpdate = useCallback(
    (params: LightUpdateParams) => {
      // Store the latest update for this light
      pendingUpdatesRef.current.set(params.id, {
        ...pendingUpdatesRef.current.get(params.id),
        ...params,
      });

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        // Dispatch all pending updates
        pendingUpdatesRef.current.forEach((updateParams) => {
          dispatch(updateLights(updateParams));
        });

        // Clear pending updates
        pendingUpdatesRef.current.clear();
      }, delay);
    },
    [dispatch, delay],
  );

  const immediateUpdate = useCallback(
    (params: LightUpdateParams) => {
      // Clear any pending debounced updates for this light
      pendingUpdatesRef.current.delete(params.id);

      // Dispatch immediately
      dispatch(updateLights(params));
    },
    [dispatch],
  );

  const cancelPendingUpdates = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    pendingUpdatesRef.current.clear();
  }, []);

  return {
    debouncedUpdate,
    immediateUpdate,
    cancelPendingUpdates,
  };
};

// Custom hook for handling light interactions
export const useLightInteraction = () => {
  const { debouncedUpdate, immediateUpdate } = useDebouncedLightUpdate(150);

  const updateLightPosition = useCallback(
    (id: string, position: TVector3) => {
      debouncedUpdate({ id, position });
    },
    [debouncedUpdate],
  );

  const updateLightTarget = useCallback(
    (id: string, target: TVector3) => {
      debouncedUpdate({ id, target });
    },
    [debouncedUpdate],
  );

  const updateLightProperties = useCallback(
    (id: string, properties: Omit<LightUpdateParams, "id">) => {
      debouncedUpdate({ id, ...properties });
    },
    [debouncedUpdate],
  );

  const finalizeLightUpdate = useCallback(
    (id: string, finalParams: Omit<LightUpdateParams, "id">) => {
      immediateUpdate({ id, ...finalParams });
    },
    [immediateUpdate],
  );

  return {
    updateLightPosition,
    updateLightTarget,
    updateLightProperties,
    finalizeLightUpdate,
  };
};
