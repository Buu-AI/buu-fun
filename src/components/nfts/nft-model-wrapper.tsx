"use client";
import { ToolRequestStatus } from "@/gql/types/graphql";
import { getNftQuery, TGetNftQueryData } from "@/lib/react-query/nfts";
import { useQuery } from "@tanstack/react-query";
import NFTModelViewer from "./nft-model-viewer";
import NFTOverViewContainer from "./nft-over-view-container";
import ViewNFTCarousal from "./nft-carousal";

export default function NFTModelWrapper({
  nft,
  accessToken,
}: {
  nft: TGetNftQueryData;
  accessToken?: string;
}) {
  const { data: nftData } = useQuery({
    queryKey: ["get-nft-query", nft._id],
    queryFn: async () => {
      return await getNftQuery({
        id: nft._id ?? "",
        accessToken: accessToken ?? "",
      });
    },
    initialData: nft,
    refetchInterval: (state) => {
      if (
        state.state.data?.status === ToolRequestStatus.Completed ||
        state.state.data?.status === ToolRequestStatus.Failed
      ) {
        return 0;
      }
      return 1500;
    },
  });
  console.log(nftData);
  return (
    <div className="flex xl:flex-row flex-col gap-x-5 overflow-hidden h-full relative px-1 lg:px-12 lg:mt-9 pb-12 ">
      {/* <NFTModelViewer
        key={nftData.metadata.animation_url}
        imageUrl={nftData.metadata.image}
        description={nftData.metadata.description}
        modelUrl={nftData.metadata.animation_url}
      /> */}
      <ViewNFTCarousal nfts={nftData.metadata.properties?.files ?? []} />
      <div className="basis-[60%] lg:mt-0 mt-4">
        <NFTOverViewContainer {...nftData} />
      </div>
    </div>
  );
}
