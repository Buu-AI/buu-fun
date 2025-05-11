"use client";

import useUserNfts from "@/hooks/use-nft";
import NFTCard from "./nft-card";
import { Ghost } from "lucide-react";

export default function NFTCardsWrapper() {
  let { data } = useUserNfts();

  return (
    <div className="flex gap-3 items-center max-w-2xl flex-wrap justify-center mt-6">
      {data?.items && data?.items.length ? (
        data?.items.map((item) => {
          return (
            <NFTCard
              key={`nft-card-${item._id}`}
              id={item._id}
              title={item.metadata.name}
              NftImageUrl={item.metadata.image ?? undefined}
              collectionName={item.metadata.description ?? ""}
            />
          );
        })
      ) : (
        <div className="flex items-center gap-2 justify-center flex-col">
          <div className="">
            <Ghost className="w-10 text-blue-300 animate-pulse h-10" />
          </div>
          <h4 className="font-semibold text-xl">No collectibles yet</h4>
        </div>
      )}
    </div>
  );
}
