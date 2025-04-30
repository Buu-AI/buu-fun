import { CTAImages } from "@/assets/Image";
import NFTOverViewContainer from "@/components/nfts/nft-over-view-container";
import Image from "next/image";
import React from "react";
type TNFTPage = {
  params: Promise<{
    id: string;
  }>;
};
export default async function NftPagePage({ params }: TNFTPage) {
  const id = (await params).id;
  console.log(id);
  const [imageOne] = CTAImages;

  return (
    <div className=" overflow-y-scroll scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded">
      <div className="flex overflow-hidden h-full relative px-1 lg:px-24 lg:mt-9 pb-12">
        <div className=" flex h-full basis-[60%] items-center justify-center">
          <div className="flex max-h-[633px] aspect-[14/16] max-auto">
            <Image
              alt="alt camera"
              className="rounded-2xl"
              src={imageOne}
              width={1920}
              height={1080}
            />
          </div>
        </div>
        <div className="basis-[40%]">
          <NFTOverViewContainer />
        </div>
      </div>
      {id}
    </div>
  );
}
