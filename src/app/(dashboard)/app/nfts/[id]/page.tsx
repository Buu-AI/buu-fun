import { CTAImages } from "@/assets/Image";
import NFTModelViewer from "@/components/nfts/nft-model-viewer";
import NFTOverViewContainer from "@/components/nfts/nft-over-view-container";
import { getNftQuery } from "@/lib/react-query/nfts";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type TNFTPage = {
  params: Promise<{
    id: string;
  }>;
};
export default async function NftPagePage({ params }: TNFTPage) {
  const id = (await params).id;
  const cookie = await cookies();

  const accessToken = cookie.get("privy-id-token")?.value;
  if (!accessToken || !id) {
    redirect("/");
    return;
  }

  const nft = await getNftQuery({
    id,
    accessToken,
  });
  return (
    <div className="overflow-y-scroll max-h-[calc(100vh-100px)] scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded">
      <div className="flex lg:flex-row flex-col gap-x-5 overflow-hidden h-full relative px-1 lg:px-12 lg:mt-9 pb-12">
        <NFTModelViewer
          imageUrl={nft.metadata.image}
          description={nft.metadata.description}
          modelUrl={nft.metadata.animation_url}
        />
        <div className="basis-[40%] lg:mt-0 mt-4">
          <NFTOverViewContainer {...nft} />
        </div>
      </div>
    </div>
  );
}
