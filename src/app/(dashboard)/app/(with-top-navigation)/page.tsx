import BottomBarContainer from "@/components/chat-input/bottom-bar-container";
import HeroHeader from "@/components/headers/boards/hero-header";
import HeaderQuickSelectCard from "@/components/headers/home/quickselect-card-button";
import ReferralVerifierHook from "@/components/referral/referral-verifier-hook";
export type THomePage = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function HomePage({ searchParams }: THomePage) {
  const search = await searchParams;

  return (
    <main className="flex flex-col relative h-full w-full">
      <ReferralVerifierHook search={search} />
      {/* Background blur effect that stays at bottom nearby chat */}

      {/* Centered main content with Help cards */}
      <div className="flex-1 flex items-center justify-center mr-[0.15vw] flex-col">
        <HeroHeader />
        <HeaderQuickSelectCard />
      </div>

      {/* Bottom input section */}
      <div className="lg:mr-[0.15vw]">
        <BottomBarContainer action={"new_chat"} />
      </div>
    </main>
  );
}
