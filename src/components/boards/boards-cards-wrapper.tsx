"use client";
import { useSharableBoards } from "@/hooks/use-boards";
import { useRouter } from "next/navigation";
import { BoardCardsSkeleton } from "./boards-card";
import BoardsCardMapper from "./boards-card-mapper";
// import { useRouter } from "navi";
export default function BoardsCardWrapper() {
  const { data, isLoading } = useSharableBoards({});
  const router = useRouter();

  return (
    <div className="flex gap-3 items-center flex-wrap justify-center mt-6">
      {!isLoading && data
        ? data?.items.map((item) => {
            return (
              <button
                key={`boards-card-${item._id}`}
                onClick={() => {
                  router.push(`/app/boards/${item._id}`);
                }}
              >
                <BoardsCardMapper ideas={item} title={item.title} />
              </button>
            );
          })
        : new Array(4).fill(null).map((item, index) => {
            if (item) {
            }
            return <BoardCardsSkeleton key={`Board-cards-skeleton-${index}`} />;
          })}

      {/* <BoardCards idea={2} images={TwoColumnImage} title="Fantasy Manga" />
      <BoardCards idea={3} images={ThreeColumnImage} title="Car in fog" /> */}
    </div>
  );
}
