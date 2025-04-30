"use client";

import { CTAImages } from "@/assets/Image";
import Image from "next/image";
import NFTCard from "./nft-card";

// import { useRouter } from "navi";

export default function NFTCardsWrapper() {
  const [imageOne] = CTAImages;
  return (
    <div className="flex gap-3  items-center flex-wrap justify-center mt-6">
      <div className="grid grid-cols-3 gap-4">
        <NFTCard collectionName="coding bro 1 2 3" />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </div>
    </div>
  );
}
