import { TGetSharableBoardQuery } from "@/lib/react-query/boards";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BoardsState = {
  SharedBoards: TGetSharableBoardQuery | null;
  currentIndex: number;
};

const initialState: BoardsState = {
  SharedBoards: null,
  currentIndex: 0,
};

const BoardsSlice = createSlice({
  name: "Boards",
  initialState,
  reducers: {
    initializeSharableBoards(
      state,
      actions: PayloadAction<TGetSharableBoardQuery>,
    ) {
      state.SharedBoards = actions.payload;
    },
    clearBoard(state) {
      state.SharedBoards = null;
      state.currentIndex = 0;
    },
    setIndex(state, action: PayloadAction<number>) {
      state.currentIndex = action.payload;
    },
  },
});

export const { initializeSharableBoards, setIndex, clearBoard } =
  BoardsSlice.actions;

export default BoardsSlice.reducer;
