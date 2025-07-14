import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

const Lights = (state: RootState) => state.stage.present.lights;

export const getSelectedLights = createSelector(
  [Lights, (_, id: string) => id],
  (state, id) => {
    const selectedLight = state.findIndex((item) => item.id === id);
    if (selectedLight === -1) return null;

    return {
      index: selectedLight,
      light: state[selectedLight],
    };
  },
);

const Models = (state: RootState) => state.stage.present.models;
export const getStageModel = createSelector(
  [Models, (_, id?: string) => id],
  (state, id) => {
    if (!id) return null;
    const selectedModel = state.findIndex((item) => item.id === id);
    if (selectedModel === -1) return null;
    return {
      index: selectedModel,
      model: state[selectedModel],
    };
  },
);
