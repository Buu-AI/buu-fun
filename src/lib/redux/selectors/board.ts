import { getModelBasedOnPriority } from "@/lib/helpers/chat/model";
import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

const Boards = (state: RootState) => state.boards.SharedBoards;

export const getBoards = createSelector([Boards], (state) => {
  const parsedData = state?.models.map((item) => {
    const modelUrl = getModelBasedOnPriority(item);
    return {
      GenId: item?._id,
      isPublic: state?.isPublic,
      modelUrl: modelUrl,
      modelAlt: item?.image.alt,
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
