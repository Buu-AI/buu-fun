"use client";
import { useAppStore } from "@/hooks/redux";
import { TGetSharableBoardQuery } from "@/lib/react-query/boards";
import {
  initializeSharableBoards,
  setIndex,
} from "@/lib/redux/features/boards";
import { useRef } from "react";
import BoardBackgroundModel from "./board-background-model-viewer";
import ViewBoardCarousal from "./view-board-carousal";

export default function ViewBoardContainer({
  board,
  currentUser,
}: {
  currentUser?: boolean;
  board: TGetSharableBoardQuery;
}) {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(initializeSharableBoards(board));
    store.dispatch(setIndex(0));
    initialized.current = true;
  }

  return (
    <div className="relative  h-full  w-full">
      <BoardBackgroundModel />
      {/* <div className="absolute w-full h-full top-0 left-0  backdrop-blur-3xl " /> */}
      <ViewBoardCarousal currentUser={currentUser} />
    </div>
  );
}
