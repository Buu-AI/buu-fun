import HeroHeader from "@/components/headers/boards/hero-header";
import NftButtonWrapper from "@/components/nfts/nft-button-wrapper";
import NFTCardsWrapper from "@/components/nfts/nft-cards-wrapper";
export default function NftsPagePage() {
  return (
    <main className="flex flex-col max-h-[calc(100dvh-110px)]  overflow-y-scroll  relative h-full w-full scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded">
      {/* flex border-2 items-center justify-center mr-[0.25vw] flex-col */}
      <div className="mt-6">
        <HeroHeader
          title="View your NFTs"
          heroDescription={<NftButtonWrapper />}
        />
        {/* <HeaderQuickSelectCard /> */}
        <div className="flex items-center justify-center">
          <NFTCardsWrapper />
        </div>
      </div>
      {/* Bottom input section */}
    </main>
  );
}
