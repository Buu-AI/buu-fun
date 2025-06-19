import apiKeySlice from "@/lib/redux/features/api-key";
import boardSlice from "@/lib/redux/features/boards";
import ChatSlice from "@/lib/redux/features/chat";
import SettingsSlice from "@/lib/redux/features/settings";
import SubscriptionSlice from "@/lib/redux/features/subscription";

import BuuPricingSlice from "@/lib/redux/features/buu-pricing";
import StageSlice from "@/lib/redux/features/stage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistedStageReducer = persistReducer(
  {
    key: "stage",
    storage: storage,
  },
  StageSlice
);

export const makeStore = () => {
  return configureStore({
    devTools: true,
    reducer: {
      boards: boardSlice,
      settings: SettingsSlice,
      chat: ChatSlice,
      subscription: SubscriptionSlice,
      apiKey: apiKeySlice,
      BuuPricing: BuuPricingSlice,
      stage: persistedStageReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
