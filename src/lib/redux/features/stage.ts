// @libs/redux/features/stage.ts
import { INITIAL_STAGING_MODELS } from "@/app/(dashboard)/app/(without-top-navigation)/playground/modelUrls";
import undoable from "redux-undo";
import {
  LightInteractionMode,
  TCamera,
  TLightConfig,
  TModelState,
  TVector3,
} from "@/types/stage/objects";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type TTransformation = "scale" | "rotate" | "translate";

type UIModes = "camera" | "object" | "lights";

type SelectedModel = {
  id: string;
  polygonCount?: number;
  transformModel: TTransformation;
} | null;

type SelectedLights = {
  id: string;
  interactionMode: LightInteractionMode;
} | null;

type StageState = {
  camera: TCamera;
  selectedModel: SelectedModel | null;
  models: TModelState[];
  lights: TLightConfig[];
  selectedLights: SelectedLights | null;
  uiModes: UIModes | null;
  openLightsPopover: boolean;
};

export const INITIAL_CAMERA_STATE: TCamera = {
  fov: 60,
  position: [10, 10, 15],
};

const initialState: StageState = {
  camera: INITIAL_CAMERA_STATE,
  selectedModel: null,
  models: INITIAL_STAGING_MODELS,
  lights: [],
  selectedLights: null,
  uiModes: null,
  openLightsPopover: false,
};

const StageSlice = createSlice({
  name: "Stage",
  initialState,
  reducers: {
    setLightsPopover(state, action: PayloadAction<boolean>) {
      state.openLightsPopover = action.payload;
    },
    setUIMode(state, action: PayloadAction<UIModes | null>) {
      state.uiModes = action.payload;
    },
    updateFov(state, action: PayloadAction<number>) {
      state.camera.fov = action.payload;
    },
    updateCamera(state, action: PayloadAction<{ position: TVector3 }>) {
      state.camera.position = action.payload.position;
    },
    addModels(state, action: PayloadAction<TModelState>) {
      state.models.push(action.payload);
    },
    removeModel(state, action: PayloadAction<string>) {
      const index = state.models.findIndex(
        (model) => model.id === action.payload,
      );
      if (index !== -1) {
        state.models.splice(index, 1);
      }
    },
    toggleModelVisibility(state, action: PayloadAction<string>) {
      const model = state.models.find((m) => m.id === action.payload);
      if (model) {
        model.visible = !model.visible;
      }
    },
    setTransformation(state, action: PayloadAction<TTransformation>) {
      if (state.selectedModel) {
        console.log("changed:selected model rotation");
        state.selectedModel.transformModel = action.payload;
      }
    },
    updateModel(
      state,
      action: PayloadAction<{
        id: string;
        position?: TVector3;
        rotation?: TVector3;
        scale?: TVector3;
      }>,
    ) {
      const model = state.models.find((m) => m.id === action.payload.id);
      if (model) {
        if (action.payload.position) {
          model.position = action.payload.position;
        }
        if (action.payload?.rotation) {
          model.rotation = action.payload.rotation;
        }
        if (action.payload.scale) {
          model.scale = action.payload.scale;
        }
      }
    },

    setSelectedModel(state, action: PayloadAction<SelectedModel>) {
      state.selectedModel = action.payload;
    },

    setSelectedLights(state, action: PayloadAction<SelectedLights>) {
      state.selectedLights = action.payload;
    },

    addLights(state, action: PayloadAction<TLightConfig>) {
      // Ensure unique IDs and valid properties
      const newLight = {
        ...action.payload,
        position: action.payload.position || [0, 5, 0],
        intensity: Math.max(0, action.payload.intensity || 1),
        color: action.payload.color || "#ffffff",
        visible: action.payload.visible !== false,
      };
      state.lights.push(newLight);
    },
    updateLights(
      state,
      action: PayloadAction<{
        id: string;
        position?: TVector3;
        rotation?: TVector3;
        target?: TVector3;
        scale?: TVector3;
        angle?: number;
        penumbra?: number;
        distance?: number;
        decay?: number;
        intensity?: number;
        color?: string;
        castShadow?: boolean;
        helper?: boolean;
      }>,
    ) {
      const light = state.lights.find((l) => l.id === action.payload.id);
      if (light) {
        if (action.payload.position) {
          light.position = action.payload.position;
        }
        if (action.payload.rotation) {
          light.rotation = action.payload.rotation;
        }
        if (action.payload.target) {
          light.target = action.payload.target;
        }
        if (action.payload.angle !== undefined) {
          light.angle = Math.max(0, Math.min(Math.PI, action.payload.angle));
        }
        if (action.payload.penumbra !== undefined) {
          light.penumbra = Math.max(0, Math.min(1, action.payload.penumbra));
        }
        if (action.payload.scale !== undefined) {
          light.scale = action.payload.scale;
        }
        if (action.payload.distance !== undefined) {
          light.distance = Math.max(0, action.payload.distance);
        }
        if (action.payload.decay !== undefined) {
          light.decay = Math.max(0, action.payload.decay);
        }
        if (action.payload.intensity !== undefined) {
          light.intensity = Math.max(0, action.payload.intensity);
        }
        if (action.payload.color) {
          light.color = action.payload.color;
        }
        if (action.payload.castShadow !== undefined) {
          light.castShadow = action.payload.castShadow;
        }
        if (action.payload.helper !== undefined) {
          light.helper = action.payload.helper;
        }
      }
    },
    removeLights(state, action: PayloadAction<string>) {
      const index = state.lights.findIndex(
        (light) => light.id === action.payload,
      );
      if (index !== -1) {
        state.lights.splice(index, 1);
        // Clear selection if deleted light was selected
        if (state.selectedLights?.id === action.payload) {
          state.selectedLights = null;
        }
      }
    },
    toggleLightVisibility(state, action: PayloadAction<string>) {
      const light = state.lights.find((l) => l.id === action.payload);
      if (light) {
        light.visible = !light.visible;
      }
    },
    setLightInteractionMode(
      state,
      action: PayloadAction<{ lightId: string; mode: LightInteractionMode }>,
    ) {
      if (state.selectedLights?.id === action.payload.lightId) {
        state.selectedLights.interactionMode = action.payload.mode;
      }
    },
    duplicateLight(state, action: PayloadAction<string>) {
      const light = state.lights.find((l) => l.id === action.payload);
      if (light) {
        const newLight: TLightConfig = {
          ...light,
          id: `${light.id}_copy_${Date.now()}`,
          position: [
            light.position[0] + 2,
            light.position[1],
            light.position[2],
          ] as TVector3,
        };
        state.lights.push(newLight);
      }
    },
  },
});

export const {
  setSelectedModel,
  addLights,
  removeLights,
  addModels,
  removeModel,
  toggleModelVisibility,
  updateModel,
  updateCamera,
  updateFov,
  setTransformation,
  setSelectedLights,
  toggleLightVisibility,
  updateLights,
  setLightInteractionMode,
  duplicateLight,
  setUIMode,
  setLightsPopover,
} = StageSlice.actions;

export default undoable(StageSlice.reducer, {
  debug: true,
});
