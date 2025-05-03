"use client";

import useUserNfts from "@/hooks/use-nft";
import NFTCard from "./nft-card";

// import { useRouter } from "navi";

export default function NFTCardsWrapper() {
  const { data } = useUserNfts();
  return (
    <div className="flex gap-3 items-center flex-wrap justify-center mt-6">
      {data?.items.map((item) => {
        return (
          <NFTCard
            key={`nft-card-${item._id}`}
            id={item._id}
            title={item.metadata.name}
            NftImageUrl={item.metadata.image ?? undefined}
            collectionName={item.metadata.description ?? ""}
          />
        );
      })}
    </div>
  );
}
