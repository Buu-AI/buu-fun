import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import HeroHeader from "@/components/headers/boards/hero-header";
import HeaderQuickSelectCard from "@/components/headers/home/quickselect-card-button";
import ReferralVerifierHook from "@/components/referral/referral-verifier-hook";
import { constructMetadata } from "@/lib/construct-metadata";
export type THomePage = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export const metadata = constructMetadata({});

export default async function HomePage({ searchParams }: THomePage) {
  const search = await searchParams;

  return (
    <main className="flex flex-col relative h-full w-full">
      <ReferralVerifierHook search={search} />
      {/* Background blur effect that stays at bottom nearby chat */}

      {/* Centered main content with Help cards */}
      <div className="flex-1  flex item-center pt-[10%] mr-[0.15vw] flex-col">
        <div className="">
          <HeroHeader />
          <HeaderQuickSelectCard />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl z-[50]    lg:mr-[0.15vw]">
          <BottomBarContainer action={"new_chat"} />
        </div>
      </div>
    </main>
  );
}
