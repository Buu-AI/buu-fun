import BoardsButtonWrapper from "@/components/boards/boards-button-wrapper";
import BoardsCardWrapper from "@/components/boards/boards-cards-wrapper";
import HeroHeader from "@/components/headers/boards/hero-header";
import NftButtonWrapper from "@/components/nfts/nft-button-wrapper";
import OpenPricingEffect from "@/components/subscriptions/OpenPricingEffect";
export default function BoardsPage() {
  return (
    <main className="flex flex-col items-center justify-center  relative h-full w-full   ">
      <div className="flex-1 flex items-center justify-center mr-[0.25vw] flex-col">
        <HeroHeader
          title="View your NFTs"
          heroDescription={<NftButtonWrapper/>}
        />
        {/* <HeaderQuickSelectCard /> */}
        <BoardsCardWrapper />
      </div>
      {/* Bottom input section */}
    </main>
  );
}
