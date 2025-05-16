import BitRefillSheet from "@/components/bit-refill-dialog";
import BuuStakedSupply from "@/components/portfolio/buu-staked-supply";
import BuyBuuRedirectDialog from "@/components/portfolio/buy-buu-redirect-dialog";
import HeaderLogo from "@/components/portfolio/header-logo";
import OverviewContainer from "@/components/portfolio/overview-container";
import StreamFlowRedirectDialog from "@/components/portfolio/Streamflow-redirect-dialog";
import TokenBalance from "@/components/portfolio/token-balance";
import TokenStatistics from "@/components/portfolio/token-statistics";
import RoiStakingDialog from "@/components/portfolio/your-earning-new/roi-staking-dialog";
import YourEarnings from "@/components/portfolio/your-earning-new/your-earnings";
import Bounded from "@/components/ui/Bounded";

export default function PortfolioPage() {
  return (
    <Bounded className="h-full  max-w-screen-2xl px-0">
      {/* <StakingDataProvider
      > */}
      <div className="grid overflow-hidden h-full   relative 2xl:grid-cols-[65%_35%]   max-h-[calc(100dvh-90px)] overflow-y-scroll  scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded px-1 lg:px-24 lg:mt-9 pb-12">
        <div className="pb-12">
          <HeaderLogo />
          <TokenStatistics />
          <TokenBalance />
          <YourEarnings />

          {/* <div className="flex justify-center flex-wrap place-content-center place-items-center  md:grid md:grid-cols-2  gap-2"> */}
          <div className="w-full pt-6">
            <BuuStakedSupply />
          </div>
          {/* <BuuNetworkUtilization /> */}
          {/* </div> */}
          <BitRefillSheet />
        </div>
        <div className="2xl:px-8 py-8 2xl:py-0">
          <div className="sticky top-[0px] w-full ">
            <OverviewContainer />
          </div>
        </div>
      </div>
      <RoiStakingDialog />
      <StreamFlowRedirectDialog />
      <BuyBuuRedirectDialog />
      {/* </StakingDataProvider> */}
    </Bounded>
  );
}
