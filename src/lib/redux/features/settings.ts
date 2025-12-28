import { TNumberOfFaces, TStyle, TTextureType } from "@/types/chat/chat-types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
      action: PayloadAction<SettingsState["ThreeDStyle"] | undefined>
    ) {
      state.ThreeDStyle = action.payload;
    },
    changeNumberOfModelMode(
      state,
      action: PayloadAction<"custom" | "definedByAI">
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
      action: PayloadAction<"increment" | "decrement">
    ) {
      const current = state.numberOfModels;
      const payload = action.payload;

      if (payload === "increment") {
        state.numberOfModels = Math.min(current + 1, MAX_MODELS);
      } else if (payload === "decrement") {
        state.numberOfModels = Math.max(current - 1, 1);
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
  switchGameReady
} = SettingsSlice.actions;

export default SettingsSlice.reducer;
