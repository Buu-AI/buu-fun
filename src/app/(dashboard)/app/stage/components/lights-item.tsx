import { useControls, folder } from "leva";
import { useRef, useEffect, useState } from "react";
import { SpotLight, DirectionalLight } from "three";
import { useThree } from "@react-three/fiber";
import { SpotLightHelper, DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";
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
}

interface Props {
  light: LightConfig;
  showHelper?: boolean;
}

export function LightItem({ light, showHelper = true }: Props) {
  const lightRef = useRef<SpotLight | DirectionalLight>(null);
  const { scene } = useThree();
  const [currentPosition, setCurrentPosition] = useState<
    [number, number, number]
  >(light.position);
  const [currentTarget, setCurrentTarget] = useState<[number, number, number]>(
    light.target
  );

  const controlKey = `light-${light.id}`;

  const [controls, set] = useControls(controlKey, () => ({
    settings: folder({
      position: {
        value: {
          x: light.position[0],
          y: light.position[1],
          z: light.position[2],
        },
        step: 0.1,
      },
      target: {
        value: { x: light.target[0], y: light.target[1], z: light.target[2] },
        step: 0.1,
      },
      intensity: { value: light.intensity, min: 0, max: 10, step: 0.1 },
      color: { value: light.color },
      ...(light.type === "spot" && {
        penumbra: {
          value: 0.5,
          min: 0,
          max: 1,
        },
        angle: {
          value: light.angle || 0.3,
          min: 0,
          //   max: Math.PI / 2,
          step: 0.01,
        },
      }),
      showHelpers: { value: showHelper },
    }),
  }));

  // Sync transform controls with leva UI
  useEffect(() => {
    setCurrentPosition([
      controls.position.x,
      controls.position.y,
      controls.position.z,
    ]);
  }, [controls.position]);

  useEffect(() => {
    setCurrentTarget([controls.target.x, controls.target.y, controls.target.z]);
  }, [controls.target]);

  // Sync light.target position
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.target.position.set(
        currentTarget[0],
        currentTarget[1],
        currentTarget[2]
      );
      scene.add(lightRef.current.target);
    }
  }, [currentTarget, scene]);

  // Helper update effect
  useEffect(() => {
    // This causes the helpers to refresh when needed
    if (lightRef.current) {
      lightRef.current.updateMatrixWorld();
    }
  }, [currentPosition, currentTarget, controls.showHelpers]);

  // Handle position changes from transform controls
  const handlePositionChange = (newPosition: [number, number, number]) => {
    set({
      settings: {
        position: {
          x: newPosition[0],
          y: newPosition[1],
          z: newPosition[2],
        },
      },
    });
  };

  // Handle target changes from transform controls
  const handleTargetChange = (newTarget: [number, number, number]) => {
    set({
      settings: {
        target: {
          x: newTarget[0],
          y: newTarget[1],
          z: newTarget[2],
        },
      },
    });
  };

  if (light.type === "directional") {
    return (
      <>
        <directionalLight
          ref={lightRef as React.RefObject<DirectionalLight>}
          position={currentPosition}
          intensity={controls.intensity}
          color={controls.color}
          castShadow
        />
        {controls.showHelpers && (
          <LightControl
            light={light}
            lightRef={lightRef}
            onPositionChange={handlePositionChange}
            onTargetChange={handleTargetChange}
          />
        )}
        {controls.showHelpers && lightRef.current && (
          <primitive
            object={new DirectionalLightHelper(lightRef.current, 1, "red")}
          />
        )}
      </>
    );
  }

  if (light.type === "spot") {
    return (
      <>
        <spotLight
          ref={lightRef as React.RefObject<SpotLight>}
          position={currentPosition}
          intensity={controls.intensity}
          angle={controls.angle}
          color={controls.color}
          decay={0}
          distance={0}
          penumbra={controls.penumbra}
          castShadow
        />
        {controls.showHelpers && (
          <LightControl
            light={light}
            lightRef={lightRef}
            onPositionChange={handlePositionChange}
            onTargetChange={handleTargetChange}
          />
        )}
        {controls.showHelpers && lightRef.current && (
          <primitive
            object={new SpotLightHelper(lightRef.current as SpotLight)}
          />
        )}
      </>
    );
  }

  return null;
}
