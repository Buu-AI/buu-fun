import {
  TModelType,
  TNumberOfFaces,
  TStyle,
  TTextureType,
} from "@/types/chat/chat-types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { disabledOptions } from "@/constants/settings-card";
import { textureDetailData } from "@/components/settings/options-data";
const MAX_MODELS = 4;
export const threeDStyles: SettingsState["ThreeDStyle"][] = [
  "clay",
  "cute",
  "environment",
  "fantasy",
  "isometric",
  "lowPoly",
  "metallic",
  "realistic",
  "sciFi",
  "stylized",
  "toon",
  "voxel",
  "weapons",
  "wireframe",
];

export type TThreeDStyles =
  | "clay"
  | "cute"
  | "environment"
  | "fantasy"
  | "isometric"
  | "lowPoly"
  | "metallic"
  | "realistic"
  | "sciFi"
  | "stylized"
  | "toon"
  | "voxel"
  | "weapons"
  | "wireframe";

export const contentModes: SettingsState["modes"][] = [
  "three_d_object",
  "rigging",
  "animation",
];

/**
 * Get the first valid texture option for a given model
 * @param model - The model type to check against
 * @returns The first valid texture key for the model
 */
function getFirstValidTexture(model: TModelType): TTextureType {
  const disabledTextures = disabledOptions.texture[model] ?? [];
  const availableTextures = Object.values(textureDetailData).filter(
    ({ value }) => !disabledTextures.includes(value)
  );

  // Return first available texture, or 'definedByAI' as fallback
  return availableTextures[0]?.value ?? "definedByAI";
}

export type SettingsState = {
  isPopoverOpen: boolean;
  autoApprove: boolean;
  isStyleBoxOpen: boolean;
  ThreeDStyle?: TStyle;
  modes: "three_d_object" | "rigging" | "animation";
  numberOfModels: number;
  numberOfModelsMode: "definedByAI" | "custom";
  faces: TNumberOfFaces;
  textureType: TTextureType;
  isGameReady: boolean;
  model: TModelType;
};

const initialState: SettingsState = {
  isStyleBoxOpen: false,
  isPopoverOpen: false,
  ThreeDStyle: "definedByAI",
  modes: "three_d_object",
  numberOfModels: 4,
  numberOfModelsMode: "definedByAI",
  faces: "definedByAI",
  textureType: "definedByAI",
  autoApprove: true,
  isGameReady: false,
  model: "buuV1",
};

const SettingsSlice = createSlice({
  name: "Settings",
  initialState,

  reducers: {
    setAutoApprove(state, action: PayloadAction<boolean>) {
      state.autoApprove = action.payload;
    },
    setSettingsPopoverChange(state, action: PayloadAction<boolean>) {
      state.isPopoverOpen = action.payload;
    },
    setStyleSelectChange(state, action: PayloadAction<boolean>) {
      state.isStyleBoxOpen = action.payload;
    },
    toggleStyleSelectChange(state) {
      state.isStyleBoxOpen = !state.isStyleBoxOpen;
    },
    toggleCreateTodoDrawerOpen(state) {
      state.isPopoverOpen = !state.isPopoverOpen;
    },
    changeThreeDStyles(
      state,
      action: PayloadAction<SettingsState["ThreeDStyle"] | undefined>,
    ) {
      state.ThreeDStyle = action.payload;
    },
    changeNumberOfModelMode(
      state,
      action: PayloadAction<"custom" | "definedByAI">,
    ) {
      const payload = action.payload;
      if (payload === "custom") {
        state.numberOfModels = 4;
        state.numberOfModelsMode = "custom";
      } else {
        state.numberOfModels = 4;
        state.numberOfModelsMode = "definedByAI";
      }
    },
    changeNumberOfModel(
      state,
      action: PayloadAction<"increment" | "decrement">,
    ) {
      const current = state.numberOfModels;
      const payload = action.payload;

      if (payload === "increment") {
        state.numberOfModels = Math.min(current + 1, MAX_MODELS);
      } else if (payload === "decrement") {
        state.numberOfModels = Math.max(current - 1, 1);
      }
    },
    changeModel(state, action: PayloadAction<TModelType>) {
      const newModel = action.payload;
      state.model = newModel;

      // Check if current texture is valid for the new model
      const currentTexture = state.textureType;
      const disabledTextures = disabledOptions.texture[newModel] ?? [];

      // If current texture is disabled for the new model, reset to first valid option
      if (currentTexture && disabledTextures.includes(currentTexture)) {
        state.textureType = getFirstValidTexture(newModel);
      }
    },
    changeModes(state, action: PayloadAction<SettingsState["modes"]>) {
      state.modes = action.payload;
    },
    changeFaces(state, action: PayloadAction<SettingsState["faces"]>) {
      state.faces = action.payload;
    },
    changeTexture(state, action: PayloadAction<SettingsState["textureType"]>) {
      state.textureType = action.payload;
    },
    switchGameReady(state, action: PayloadAction<{ isGameReady: boolean }>) {
      state.isGameReady = action.payload.isGameReady;
    },
  },
});

export const {
  toggleCreateTodoDrawerOpen,
  setSettingsPopoverChange,
  changeThreeDStyles,
  changeModes,
  setStyleSelectChange,
  toggleStyleSelectChange,
  changeNumberOfModel,
  changeNumberOfModelMode,
  changeFaces,
  changeTexture,
  setAutoApprove,
  switchGameReady,
  changeModel
} = SettingsSlice.actions;

export default SettingsSlice.reducer;
