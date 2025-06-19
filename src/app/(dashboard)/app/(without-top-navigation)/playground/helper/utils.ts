import { TLightConfig, TLightType, TVector3 } from "@/types/stage/objects";
import { nanoid } from "@reduxjs/toolkit";

// export const createDefaultLight = (type: TLightType): TLightConfig => ({
//   id: `${type}-${nanoid()}`,
//   type,
//   position: [0, 5, 5],
//   target: [0, 0, 0],
//   intensity: 1,
//   color: "#ffffff",
//   ...(type === "spot" ? { angle: 0.3 } : {}),
//   visible: true,
// });

export const createDefaultLightConfig = (type: TLightType): TLightConfig => {
  const baseConfig = {
    id: generateLightId(type),
    type,
    rotation: [0, 0, 0] as TVector3,
    scale: [1, 1, 1] as TVector3,
    color: "#ffffff",
    visible: true,
    castShadow: true,
    helper: false,
  };

  switch (type) {
    case "directional":
      return {
        ...baseConfig,
        position: [5, 10, 5] as TVector3,
        // target: [0, 0, 0] as TVector3,
        intensity: 1,
      };

    case "spot":
      return {
        ...baseConfig,
        position: [0, 10, 5] as TVector3,
        // target: [0, 0, 0] as TVector3,
        intensity: 1,
        angle: Math.PI / 6, // 30 degrees in radians
        penumbra: 0.1,
        distance: 50,
        decay: 2,
      };

    case "point":
      return {
        ...baseConfig,
        position: [0, 5, 0] as TVector3,
        intensity: 1,
        distance: 30,
        decay: 2,
      };

    default:
      throw new Error(`Unknown light type: ${type}`);
  }
};

export const generateLightId = (type: TLightType): string => {
  return `${type}-light-${nanoid()}`;
};
