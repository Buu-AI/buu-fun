"use client";

import { CTAImages } from "@/assets/Image";
import Image from "next/image";
import NFTCard from "./nft-card";
import useUserNfts from "@/hooks/use-nft";

// import { useRouter } from "navi";

export default function NFTCardsWrapper() {
  const { data } = useUserNfts();
  return (
    <div className="flex gap-3 items-center flex-wrap justify-center mt-6">
      {data?.items.map((item) => {
        return (
          <NFTCard
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
