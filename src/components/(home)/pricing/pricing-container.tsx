import PricingHeaderIcon from "@/assets/icons/pricing-header-icon";
import PricingWrapper from "./pricing-wrapper";
import OverlayColor from "@/app/(landing)/overlay";
import EnterprisePricingContainer from "./enterprise-pricing-container";

export default function HomePagePricingContainer() {
  return (
    <div className=" w-full flex items-center mt-12 px-1 pb-24 flex-col relative">
      <OverlayColor
        purpleClassName="top-[2%]"
        trigger=".trigger-pricing-color"
      />

      <div className="flex justify-center items-center transition-all duration-300 ease-in-out mb-6">
        <div className="w-6 h-6">
          <PricingHeaderIcon />
        </div>
        <p className="blue-text-clip text-xl">Select a plan</p>
      </div>
      <div className="flex items-center justify-center flex-col mb-9">
        <h1 className="text-6xl font-medium grayish-text-gradient">Pricing</h1>
        <p className="font-medium max-md:text-center ">
          Get access to more generation hours and priority queue
        </p>
      </div>
      <div className="">
        <PricingWrapper />
        <EnterprisePricingContainer />
      </div>
    </div>
  );
}
