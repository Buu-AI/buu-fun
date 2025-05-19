import NFTModelWrapper from "@/components/nfts/nft-model-wrapper";
import { getNftQuery } from "@/lib/react-query/nfts";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type TNFTPage = {
  params: Promise<{
    id: string;
  }>;
};
export default async function NftPage({ params }: TNFTPage) {
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
      <NFTModelWrapper accessToken={accessToken} nft={nft} />
    </div>
  );
}
