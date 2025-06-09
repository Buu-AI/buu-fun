import { nanoid } from "@reduxjs/toolkit";
import { LightConfig, LightType } from "../components/lights-item";

export const createDefaultLight = (type: LightType): LightConfig => ({
  id: `${type}-${nanoid()}`,
  type,
  position: [0, 5, 5],
  target: [0, 0, 0],
  intensity: 1,
  color: "#ffffff",
  ...(type === "spot" ? { angle: 0.3 } : {}),
  visible: true,
});
