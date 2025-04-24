"use client";
import React from "react";
import BoardsAddButton from "./boards-add-button";
import { useSharableBoards } from "@/hooks/use-boards";
import { pluralize } from "@/lib/utils";

export default function BoardsButtonWrapper() {
  const { data } = useSharableBoards({});

  return (
    <div className="flex flex-col  items-center justify-center gap-1">
      <p className="text-5xl font-bold my-2 hero-gradient-text ">
        {data?.items.length} {pluralize(data?.items.length ?? 1, "Board")}
      </p>
      <BoardsAddButton />
    </div>
  );
}
