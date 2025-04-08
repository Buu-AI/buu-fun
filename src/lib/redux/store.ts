import ChatSlice from "@/lib/redux/features/chat";
import SettingsSlice from "@/lib/redux/features/settings";
import SubscriptionSlice from "@/lib/redux/features/subscription";
import boardSlice from "@/lib/redux/features/boards";
import apiKeySlice from "@/lib/redux/features/api-key";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    devTools: true,
    reducer: {
      boards: boardSlice,
      settings: SettingsSlice,
      chat: ChatSlice,
      subscription: SubscriptionSlice,
      apiKey: apiKeySlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
