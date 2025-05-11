import FailedCross from "@/assets/icons/failed-cross";
import { imageOne } from "@/assets/Image";
import { NftStatus } from "@/gql/types/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type TNftCard = {
  id?: string;
  NftImageUrl?: string;
  title?: string;
  collectionName?: string;
  nftStatus: NftStatus;
};
export default function NFTCard({
  NftImageUrl = imageOne.src,
  title = "3D Cube",
  collectionName = "Name Collection.",
  id = "1",
  nftStatus,
}: TNftCard) {
  const isFailed = nftStatus === NftStatus.Failed;
  return (
    <Link href={`/app/nfts/${id}`}>
      <div className="w-48 h-[280px]   bg-shadow-nft-cards transition-colors duration-500 ease-in-out rounded-3xl overflow-hidden relative ">
        <div
          className={cn(
            "absolute top-0 flex items-center justify-center h-full left-0 w-full nft-failed-card z-10",
            {
              hidden: !isFailed,
            }
          )}
        >
          <div className="flex flex-col items-center gap-2 justify-center">
            <div className="w-10 h-10">
              <FailedCross />
            </div>
            <p className="font-medium">Failed</p>
          </div>
        </div>
        <div className="w-full relative overflow-hidden">
          <Image
            src={NftImageUrl}
            alt="3D Cube"
            className={cn("w-full h-full  object-cover aspect-square", {
              "blur-lg": isFailed,
            })}
            width={500}
            height={500}
          />
        </div>
        {/* Text content */}
        <div className="px-4 pt-2 pb-2 ">
          <h3 className="text-xl font-medium line-clamp-1">{title}</h3>
          <p className="text-muted-foreground/90 font-medium line-clamp-2 text-sm">
            {collectionName}
          </p>
        </div>
      </div>
    </Link>
  );
}
