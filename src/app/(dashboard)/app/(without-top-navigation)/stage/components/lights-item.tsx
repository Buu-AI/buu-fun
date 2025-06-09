import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useDebounce } from "@/hooks/use-debouce";
import { updateLights } from "@/lib/redux/features/stage";
import { useThree } from "@react-three/fiber";
import { RefObject, useEffect, useRef, useState } from "react";
import {
  DirectionalLight,
  DirectionalLightHelper,
  SpotLight,
  SpotLightHelper,
} from "three";
import { LightControl } from "./light-control";

export type LightType = "directional" | "spot";

export interface LightConfig {
  id: string;
  type: LightType;
  position: [number, number, number];
  target: [number, number, number];
  intensity: number;
  angle?: number;
  color: string;
  visible: boolean;
}

interface Props {
  light: LightConfig;
}

export function LightItem({ light }: Props) {
  const directionalLightRef = useRef<DirectionalLight>(null);
  const spotLightRef = useRef<SpotLight>(null);
  const { scene } = useThree();
  const dispatch = useAppDispatch();

  // Get selected lights from Redux store
  const selectedLights = useAppSelector(
    (state) => state.stage.present.selectedLights,
  );

  // Check if this light is selected (show helper when selected)
  const isSelected = selectedLights?.id === light.id || false;

  const [currentPosition, setCurrentPosition] = useState<
    [number, number, number]
  >(light.position);
  const [currentTarget, setCurrentTarget] = useState<[number, number, number]>(
    light.target,
  );

  // Debounced dispatch functions
  const debouncedUpdatePosition = useDebounce(
    (id: string, position: [number, number, number]) => {
      dispatch(updateLights({ id, position }));
    },
    300,
  );

  const debouncedUpdateTarget = useDebounce(
    (id: string, target: [number, number, number]) => {
      dispatch(updateLights({ id, target }));
    },
    300,
  );
  //---------------DO NOT REMOVE----
  // const debouncedUpdateIntensity = useDebounce(
  //   (id: string, intensity: number) => {
  //     dispatch(updateLights({ id, intensity }));
  //   },
  //   300
  // );

  // const debouncedUpdateAngle = useDebounce((id: string, angle: number) => {
  //   dispatch(updateLights({ id, angle }));
  // }, 300);

  // const debouncedUpdateColor = useDebounce((id: string, color: string) => {
  //   dispatch(updateLights({ id, color }));
  // }, 300);
  //---------------DO NOT REMOVE----

  // Sync local state with props when light config changes
  useEffect(() => {
    setCurrentPosition(light.position);
  }, [light.position]);

  useEffect(() => {
    setCurrentTarget(light.target);
  }, [light.target]);

  // Sync light.target position
  useEffect(() => {
    const currentLight =
      light.type === "directional"
        ? directionalLightRef.current
        : spotLightRef.current;
    if (currentLight) {
      currentLight.target.position.set(
        currentTarget[0],
        currentTarget[1],
        currentTarget[2],
      );
      scene.add(currentLight.target);
    }
  }, [currentTarget, scene, light.type]);

  // Helper update effect
  useEffect(() => {
    // This causes the helpers to refresh when needed
    const currentLight =
      light.type === "directional"
        ? directionalLightRef.current
        : spotLightRef.current;
    if (currentLight) {
      currentLight.updateMatrixWorld();
    }
  }, [currentPosition, currentTarget, isSelected, light.type]);

  // Handle position changes from transform controls
  const handlePositionChange = (newPosition: [number, number, number]) => {
    setCurrentPosition(newPosition);
    debouncedUpdatePosition(light.id, newPosition);
  };

  // Handle target changes from transform controls
  const handleTargetChange = (newTarget: [number, number, number]) => {
    setCurrentTarget(newTarget);
    debouncedUpdateTarget(light.id, newTarget);
  };
  // ---------------DO NOT REMOVE-----------------------
  // // Handle intensity changes
  // const handleIntensityChange = (newIntensity: number) => {
  //   debouncedUpdateIntensity(light.id, newIntensity);
  // };

  // // Handle angle changes (for spot lights)
  // const handleAngleChange = (newAngle: number) => {
  //   debouncedUpdateAngle(light.id, newAngle);
  // };

  // // Handle color changes
  // const handleColorChange = (newColor: string) => {
  //   debouncedUpdateColor(light.id, newColor);
  // };
  // ---------------DO NOT REMOVE-----------------------

  // Don't render if light is not visible
  if (!light.visible) {
    return null;
  }

  if (light.type === "directional") {
    return (
      <>
        <directionalLight
          ref={directionalLightRef}
          position={currentPosition}
          intensity={light.intensity}
          color={light.color}
          castShadow
        />
        {isSelected &&
          directionalLightRef.current &&
          directionalLightRef.current !== null && (
            <LightControl
              light={light}
              lightRef={directionalLightRef as RefObject<DirectionalLight>}
              onPositionChange={handlePositionChange}
              onTargetChange={handleTargetChange}
            />
          )}
        {isSelected && directionalLightRef.current && (
          <primitive
            object={
              new DirectionalLightHelper(directionalLightRef.current, 1, "red")
            }
          />
        )}
      </>
    );
  }

  if (light.type === "spot") {
    return (
      <>
        <spotLight
          ref={spotLightRef}
          position={currentPosition}
          intensity={light.intensity}
          angle={light.angle || 0.3}
          color={light.color}
          decay={0}
          distance={0}
          penumbra={0.5} // You might want to make this configurable too
          castShadow
        />
        {isSelected && spotLightRef.current && (
          <LightControl
            light={light}
            lightRef={spotLightRef as RefObject<SpotLight>}
            onPositionChange={handlePositionChange}
            onTargetChange={handleTargetChange}
          />
        )}
        {isSelected && spotLightRef.current && (
          <primitive object={new SpotLightHelper(spotLightRef.current)} />
        )}
      </>
    );
  }

  return null;
}
