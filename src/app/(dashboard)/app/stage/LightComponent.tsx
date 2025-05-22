import React, { useState, useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Environment, useHelper, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls, folder, button } from "leva";

// Types
type LightType = "directional" | "point" | "spot";

interface LightProps {
  id: string;
  type: LightType;
  position: [number, number, number];
  intensity: number;
  color: string;
  castShadow: boolean;
  shadowBias: number;
  shadowRadius: number;
  showHelper: boolean;
  angle?: number;
  penumbra?: number;
  decay?: number;
  distance?: number;
}

interface PresetProps {
  name: string;
  lights: Omit<LightProps, "id">[];
  environmentPreset?: string;
  environmentRotation?: number;
}

// Environment presets
const ENVIRONMENT_PRESETS = [
  "sunset",
  "dawn",
  "night",
  "warehouse",
  "forest",
  "apartment",
  "studio",
  "city",
  "park",
  "lobby",
];

// Lighting presets
const LIGHTING_PRESETS: Record<string, PresetProps> = {
  studio: {
    name: "Studio",
    environmentPreset: "studio",
    environmentRotation: 0,
    lights: [
      {
        type: "directional",
        position: [5, 5, 5],
        intensity: 1,
        color: "#ffffff",
        castShadow: true,
        shadowBias: -0.0005,
        shadowRadius: 10,
        showHelper: false,
      },
      {
        type: "directional",
        position: [-5, 3, -5],
        intensity: 0.5,
        color: "#b0c0ff",
        castShadow: false,
        shadowBias: 0,
        shadowRadius: 10,
        showHelper: false,
      },
      {
        type: "point",
        position: [0, 5, -5],
        intensity: 0.7,
        color: "#ffeecc",
        castShadow: false,
        shadowBias: 0,
        shadowRadius: 10,
        showHelper: false,
      },
    ],
  },
  sunset: {
    name: "Sunset",
    environmentPreset: "sunset",
    environmentRotation: Math.PI / 2,
    lights: [
      {
        type: "directional",
        position: [10, 3, 5],
        intensity: 1.5,
        color: "#ff7700",
        castShadow: true,
        shadowBias: -0.0005,
        shadowRadius: 10,
        showHelper: false,
      },
      {
        type: "point",
        position: [-5, 2, -2],
        intensity: 0.3,
        color: "#3355ff",
        castShadow: false,
        shadowBias: 0,
        shadowRadius: 8,
        showHelper: false,
      },
    ],
  },
  night: {
    name: "Night",
    environmentPreset: "night",
    environmentRotation: Math.PI,
    lights: [
      {
        type: "spot",
        position: [0, 5, 0],
        intensity: 0.8,
        color: "#aabbff",
        castShadow: true,
        shadowBias: -0.0004,
        shadowRadius: 15,
        showHelper: false,
        angle: 0.5,
        penumbra: 0.5,
        decay: 1.5,
        distance: 25,
      },
      {
        type: "point",
        position: [5, 1, 5],
        intensity: 0.4,
        color: "#ffaa44",
        castShadow: false,
        shadowBias: 0,
        shadowRadius: 5,
        showHelper: false,
        decay: 1.5,
        distance: 15,
      },
    ],
  },
};

// Generate a unique ID for new lights
const generateLightId = (): string => {
  return `light_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

// Helper component to display light gizmos/helpers
const LightHelper: React.FC<{
  light: React.RefObject<THREE.Light>;
  type: LightType;
  show: boolean;
}> = ({ light, type, show }) => {
  if (!show || !light.current) return null;

  if (type === "directional") {
    useHelper(
      light as React.RefObject<THREE.DirectionalLight>,
      THREE.DirectionalLightHelper,
      1,
      "#ffff00"
    );
  } else if (type === "point") {
    useHelper(
      light as React.RefObject<THREE.PointLight>,
      THREE.PointLightHelper,
      0.5,
      "#ffff00"
    );
  } else if (type === "spot") {
    useHelper(
      light as React.RefObject<THREE.SpotLight>,
      THREE.SpotLightHelper,
      "#ffff00"
    );
  }

  return null;
};

// Individual Light component
const Light: React.FC<
  LightProps & { onUpdate: (id: string, props: Partial<LightProps>) => void }
> = ({
  id,
  type,
  position,
  intensity,
  color,
  castShadow,
  shadowBias,
  shadowRadius,
  showHelper,
  angle = 0.5,
  penumbra = 0.5,
  decay = 1,
  distance = 0,
  onUpdate,
}) => {
  const lightRef = useRef<THREE.Light>(null);

  // Common props for all lights
  const commonProps = {
    position,
    intensity,
    color,
    castShadow,
    "shadow-bias": shadowBias,
    "shadow-radius": shadowRadius,
  };

  // Render light based on type
  const renderLight = () => {
    switch (type) {
      case "directional":
        return <directionalLight ref={lightRef} {...commonProps} />;
      case "point":
        return (
          <pointLight
            ref={lightRef}
            {...commonProps}
            decay={decay}
            distance={distance}
          />
        );
      case "spot":
        return (
          <spotLight
            ref={lightRef}
            {...commonProps}
            angle={angle}
            penumbra={penumbra}
            decay={decay}
            distance={distance}
          />
        );
      default:
        return <directionalLight ref={lightRef} {...commonProps} />;
    }
  };

  return (
    <>
      {renderLight()}
      <LightHelper light={lightRef} type={type} show={showHelper} />
    </>
  );
};

// Main LightingManager component
const LightingManager: React.FC = () => {
  const { scene } = useThree();
  const [lights, setLights] = useState<LightProps[]>([]);
  const [useEnvironment, setUseEnvironment] = useState<boolean>(true);
  const [environmentPreset, setEnvironmentPreset] = useState<string>("studio");
  const [environmentRotation, setEnvironmentRotation] = useState<number>(0);

  // Initialize with default lighting
  useEffect(() => {
    applyPreset("studio");
  }, []);

  // Apply a preset lighting configuration
  const applyPreset = (presetName: string) => {
    const preset = LIGHTING_PRESETS[presetName];
    if (preset) {
      const newLights = preset.lights.map((light) => ({
        ...light,
        id: generateLightId(),
      }));

      setLights(newLights);

      if (preset.environmentPreset) {
        setEnvironmentPreset(preset.environmentPreset);
      }

      if (preset.environmentRotation !== undefined) {
        setEnvironmentRotation(preset.environmentRotation);
      }
    }
  };

  // Handle updating a light
  const updateLight = (id: string, props: Partial<LightProps>) => {
    setLights((currentLights) =>
      currentLights.map((light) =>
        light.id === id ? { ...light, ...props } : light
      )
    );
  };

  // Add a new light
  const addLight = (type: LightType) => {
    const newLight: LightProps = {
      id: generateLightId(),
      type,
      position: [0, 5, 0],
      intensity: 1,
      color: "#ffffff",
      castShadow: true,
      shadowBias: -0.0005,
      shadowRadius: 10,
      showHelper: true,
      ...(type === "spot" && { angle: 0.5, penumbra: 0.5 }),
      ...(type !== "directional" && { decay: 1, distance: 0 }),
    };

    setLights((currentLights) => [...currentLights, newLight]);
  };

  // Remove a light
  const removeLight = (id: string) => {
    setLights((currentLights) =>
      currentLights.filter((light) => light.id !== id)
    );
  };

  // Main UI controls using leva
  const presetsControls = useControls({
    Presets: folder({
      preset: {
        options: Object.keys(LIGHTING_PRESETS),
        value: "studio",
        onChange: (v) => applyPreset(v),
      },
      "Apply Preset": button(() => applyPreset(presetsControls.preset)),
    }),
  });

  const environmentControls = useControls({
    Environment: folder({
      useEnvironment: {
        value: true,
        onChange: setUseEnvironment,
      },
      environmentPreset: {
        value: environmentPreset,
        options: ENVIRONMENT_PRESETS,
        onChange: setEnvironmentPreset,
        disabled: !useEnvironment,
      },
      environmentRotation: {
        value: environmentRotation,
        min: 0,
        max: Math.PI * 2,
        step: 0.1,
        onChange: setEnvironmentRotation,
        disabled: !useEnvironment,
      },
    }),
  });

  const lightControls = useControls({
    "Add Light": folder({
      "Add Directional Light": button(() => addLight("directional")),
      "Add Point Light": button(() => addLight("point")),
      "Add Spot Light": button(() => addLight("spot")),
    }),
  });

  // Generate individual controls for each light
  lights.forEach((light) => {
    const lightControls = useControls(
      `Light ${light.id.split("_")[1]}`,
      {
        type: {
          value: light.type,
          options: ["directional", "point", "spot"],
          onChange: (v) => updateLight(light.id, { type: v as LightType }),
        },
        intensity: {
          value: light.intensity,
          min: 0,
          max: 5,
          step: 0.1,
          onChange: (v) => updateLight(light.id, { intensity: v }),
        },
        color: {
          value: light.color,
          onChange: (v) => updateLight(light.id, { color: v }),
        },
        "position x": {
          value: light.position[0],
          min: -20,
          max: 20,
          step: 0.1,
          onChange: (v) =>
            updateLight(light.id, {
              position: [v, light.position[1], light.position[2]],
            }),
        },
        "position y": {
          value: light.position[1],
          min: -20,
          max: 20,
          step: 0.1,
          onChange: (v) =>
            updateLight(light.id, {
              position: [light.position[0], v, light.position[2]],
            }),
        },
        "position z": {
          value: light.position[2],
          min: -20,
          max: 20,
          step: 0.1,
          onChange: (v) =>
            updateLight(light.id, {
              position: [light.position[0], light.position[1], v],
            }),
        },
        castShadow: {
          value: light.castShadow,
          onChange: (v) => updateLight(light.id, { castShadow: v }),
        },
        showHelper: {
          value: light.showHelper,
          onChange: (v) => updateLight(light.id, { showHelper: v }),
        },
        shadowBias: {
          value: light.shadowBias,
          min: -0.01,
          max: 0.01,
          step: 0.0001,
          onChange: (v) => updateLight(light.id, { shadowBias: v }),
        },
        shadowRadius: {
          value: light.shadowRadius,
          min: 0,
          max: 20,
          step: 0.1,
          onChange: (v) => updateLight(light.id, { shadowRadius: v }),
        },
        ...(light.type === "spot" && {
          angle: {
            value: light.angle || 0.5,
            min: 0,
            max: Math.PI / 2,
            step: 0.01,
            onChange: (v) => updateLight(light.id, { angle: v }),
          },
          penumbra: {
            value: light.penumbra || 0,
            min: 0,
            max: 1,
            step: 0.01,
            onChange: (v) => updateLight(light.id, { penumbra: v }),
          },
        }),
        ...(light.type !== "directional" && {
          decay: {
            value: light.decay || 1,
            min: 0,
            max: 2,
            step: 0.01,
            onChange: (v) => updateLight(light.id, { decay: v }),
          },
          distance: {
            value: light.distance || 0,
            min: 0,
            max: 100,
            step: 1,
            onChange: (v) => updateLight(light.id, { distance: v }),
          },
        }),
        "Remove Light": button(() => removeLight(light.id)),
      },
      { collapsed: true }
    );
  });

  return (
    <>
      {lights.map((light) => (
        <Light key={light.id} {...light} onUpdate={updateLight} />
      ))}

      {useEnvironment && (
        <Environment
          preset={environmentPreset as any}
          rotation={[0, environmentRotation, 0]}
        />
      )}
    </>
  );
};

export default LightingManager;
