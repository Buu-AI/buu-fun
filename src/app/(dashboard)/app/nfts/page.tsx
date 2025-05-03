import HeroHeader from "@/components/headers/boards/hero-header";
import NftButtonWrapper from "@/components/nfts/nft-button-wrapper";
import NFTCardsWrapper from "@/components/nfts/nft-cards-wrapper";
export default function NftsPagePage() {
  return (
    <main className="flex flex-col items-center justify-center  relative h-full w-full   ">
      <div className="flex-1 flex items-center justify-center mr-[0.25vw] flex-col">
        <HeroHeader
          title="View your NFTs"
          heroDescription={<NftButtonWrapper />}
        />
        {/* <HeaderQuickSelectCard /> */}
        <NFTCardsWrapper />
      </div>
      {/* Bottom input section */}
    </main>
  );
}
