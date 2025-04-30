import { imageOne } from "@/assets/Image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type TNftCard = {
  id?: string;
  NftImageUrl?: string;
  title?: string;
  collectionName?: string;
};
export default function NFTCard({
  NftImageUrl = imageOne.src,
  title = "3D Cube",
  collectionName = "Name Collection.",
  id = "1",
}: TNftCard) {
  return (
    <Link href={`/app/nfts/${id}`}>
      <div className="w-48 h-64 bg-shadow-nft-cards rounded-3xl overflow-hidden">
        <div className="w-full relative overflow-hidden">
          <Image
            src={NftImageUrl}
            alt="3D Cube"
            className="w-full h-full object-cover aspect-square"
            width={500}
            height={500}
          />
        </div>
        {/* Text content */}
        <div className="px-4 pt-2 pb-4 ">
          <h3 className="text-xl font-medium line-clamp-1">{title}</h3>
          <p className="text-muted-foreground/90 font-medium line-clamp-2 text-sm">
            {collectionName}
          </p>
        </div>
      </div>
    </Link>
  );
}
