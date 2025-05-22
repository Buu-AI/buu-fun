import { LightConfig } from "@/app/(dashboard)/app/stage/components/lights-item";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Payload } from "recharts/types/component/DefaultLegendContent";

type SelectedModel = {
  id: string;
  polygonCount?: number;
} | null;

type StageState = {
  polygonCount: number;
  selectedModel: SelectedModel | null;
  lights: LightConfig[];
};

const initialState: StageState = {
  selectedModel: null,
  polygonCount: 0,
  lights: [],
};

const StageSlice = createSlice({
  name: "Stage",
  initialState,
  reducers: {
    setPolygonCount(state, action: PayloadAction<number>) {
      state.polygonCount = action.payload;
    },
    setSelectedModel(state, action: PayloadAction<SelectedModel>) {
      state.selectedModel = action.payload;
    },
    addLights(state, action: PayloadAction<LightConfig>) {
      state.lights.push(action.payload);
    },
    removeLights(state, action: PayloadAction<string>) {
      const newLights = state.lights.filter((fv) => fv.id !== action.payload);
      state.lights = newLights;
    },
  },
});

export const { setPolygonCount, setSelectedModel, addLights, removeLights } =
  StageSlice.actions;

export default StageSlice.reducer;
