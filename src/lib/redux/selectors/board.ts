import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

const Boards = (state: RootState) => state.boards.SharedBoards;

export const getBoards = createSelector([Boards], (state) => {
  const parsedData = state?.models.map((item) => {
    return {
      GenId: item.alt,
      isPublic: state?.isPublic,
      modelUrl: item?.url,
      modelAlt: item?.alt,
      ImageUrl: item?.image.url,
      imageAlt: item?.image.alt,
    };
  });

  return {
    boardId: state?._id,
    title: state?.title,
    isPublic: state?.isPublic,
    board: parsedData ?? [],
  };
});
