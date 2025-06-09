import { LightConfig } from "@/app/(dashboard)/app/(without-top-navigation)/stage/components/lights-item";
import { INITIAL_STAGING_MODELS } from "@/app/(dashboard)/app/(without-top-navigation)/stage/modelUrls";
import {
  TCamera,
  TLightConfig,
  TModelState,
  TVector3,
} from "@/types/stage/objects";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import undoable from "redux-undo";
type TTransformation = "scale" | "rotate" | "translate";
type SelectedModel = {
  id: string;
  polygonCount?: number;
  transformModel: TTransformation;
} | null;

type SelectedLights = {
  id: string;
};

type StageState = {
  camera: TCamera;
  selectedModel: SelectedModel | null;
  models: TModelState[];
  lights: TLightConfig[];
  selectedLights: SelectedLights | null;
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
};

const StageSlice = createSlice({
  name: "Stage",
  initialState,
  reducers: {
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
    addLights(state, action: PayloadAction<LightConfig>) {
      state.lights.push(action.payload);
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
        intensity?: number;
        color?: string;
      }>,
    ) {
      const lights = state.lights.find((m) => m.id === action.payload.id);
      if (lights) {
        if (action.payload.position) {
          lights.position = action.payload.position;
        }
        if (action.payload?.angle) {
          lights.angle = action.payload?.angle;
        }
        if (action.payload.intensity) {
          lights.intensity = action.payload.intensity;
        }
        if (action.payload.color) {
          lights.color = action.payload.color;
        }
        if (action.payload.target) {
          lights.target = action.payload.target;
        }
      }
    },
    removeLights(state, action: PayloadAction<string>) {
      const index = state.lights.findIndex((fv) => fv.id === action.payload);
      if (index !== -1) {
        state.lights.splice(index, 1);
      }
    },
    toggleLightVisibility(state, action: PayloadAction<string>) {
      const lights = state.lights.find((m) => m.id === action.payload);
      if (lights) {
        lights.visible = !lights.visible;
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
} = StageSlice.actions;

export default undoable(StageSlice.reducer, {
  debug: true,
});
