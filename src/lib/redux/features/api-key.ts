import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ApiKeyState = {
  isAPIKeyRetrieved: boolean;
  key: string | null;
  name: string | null;
  keyToDeleteData: {
    key: string;
    id: string;
    name: string;
  } | null;
  isDeleteModalOpen: boolean;
};

const initialState: ApiKeyState = {
  isAPIKeyRetrieved: false,
  key: null,
  name: null,
  keyToDeleteData: null,
  isDeleteModalOpen: false,
};

const ApiKeySlice = createSlice({
  name: "ApiKey",
  initialState,
  reducers: {
    clearState(state) {
      state.key = null;
      state.name = null;
      state.isAPIKeyRetrieved = false;
    },
    setApiKey(state, action: PayloadAction<{ key: string; name: string }>) {
      state.key = action.payload?.key;
      state.name = action.payload?.name;
    },
    isApiKeyRetrieved(state, action: PayloadAction<boolean>) {
      state.isAPIKeyRetrieved = action.payload;
    },
    setDeleteApiKeyData(
      state,
      action: PayloadAction<{ key: string; name: string; id: string } | null>,
    ) {
      state.keyToDeleteData = action.payload;
    },
    setIsDeleteModalOpen(state, action: PayloadAction<boolean>) {
      state.isDeleteModalOpen = action.payload;
    },
  },
});

export const {
  setApiKey,
  isApiKeyRetrieved,
  clearState,
  setDeleteApiKeyData,
  setIsDeleteModalOpen,
} = ApiKeySlice.actions;

export default ApiKeySlice.reducer;
