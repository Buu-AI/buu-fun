"use client";
import React from "react";
import NFTModelViewer from "./nft-model-viewer";
import { Nft, NftStatus } from "@/gql/types/graphql";
import { useQuery } from "@tanstack/react-query";
import { getNftQuery } from "@/lib/react-query/nfts";
import NFTOverViewContainer from "./nft-over-view-container";

export default function NFTModelWrapper({
  nft,
  accessToken,
}: {
  nft: Nft;
  accessToken?: string;
}) {
  const { data: nftData } = useQuery({
    queryKey: ["get-nft-query"],
    queryFn: async () => {
      return await getNftQuery({
        id: nft._id ?? "",
        accessToken: accessToken ?? "",
      });
    },
    initialData: nft,
    refetchInterval: (state) => {
      if (
        state.state.data?.status === NftStatus.Completed ||
        state.state.data?.status === NftStatus.Failed
      ) {
        return 0;
      }
      return 1500;
    },
  });
  return (
    <div className="flex lg:flex-row flex-col gap-x-5 overflow-hidden h-full relative px-1 lg:px-12 lg:mt-9 pb-12">
      <NFTModelViewer
        imageUrl={nftData.metadata.image}
        description={nftData.metadata.description}
        modelUrl={nftData.metadata.animation_url}
      />
      <div className="basis-[40%] lg:mt-0 mt-4">
        <NFTOverViewContainer {...nftData} />
      </div>
    </div>
  );
}
