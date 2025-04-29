"use client";
import { useSharableBoards } from "@/hooks/use-boards";
import { pluralize } from "@/lib/utils";

export default function NftButtonWrapper() {
  const { data } = useSharableBoards({});

  return (
    <div className="flex flex-col  items-center justify-center gap-1">
      <p className="text-5xl font-bold my-2 hero-gradient-text ">
        {data?.items.length} {pluralize(data?.items.length ?? 1, "Collectable")}
      </p>
      {/* <BoardsAddButton /> */}
    </div>
  );
}
