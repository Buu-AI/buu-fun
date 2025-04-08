"use client";
import ReferralHeaderIcon from "@/assets/icons/refferal-header-icon";
import ProfileSkeleton from "@/components/profile/profile-skeleton";
import CopyReferralWrapper from "@/components/referral/copy-refferal-wrapper";
import HowExportWorks from "@/components/referral/how-export-works";
import ReferralEarnings from "@/components/referral/referral-earnings";
import ReferralShowcaseTable from "@/components/referral/refferal-show-case-table";
import ProtectedWrapper from "@/components/wrapper/protected-wrapper";

export default function ReferralPage() {
  return (
    <main className="h-[100dvh]">
      <ProtectedWrapper Fallback={<ProfileSkeleton />} fallbackUrl="/app/">
        <div className="w-10 mx-auto h-10 mt-5">
          <ReferralHeaderIcon />
        </div>
        <div className="flex items-center justify-center gap-6 flex-col pt-9">
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-xs lg:text-base">
              Get
              <span className="blue-text-clip"> 20% </span>
              of your referrals spending in $BUU!
            </p>
            <h2 className="grayish-text-gradient font-medium text-2xl lg:text-5xl tracking-tighter">
              Welcome to Referral Program
            </h2>
          </div>
          <ReferralEarnings />
          <CopyReferralWrapper />
          <HowExportWorks />
        </div>
        <div className="flex items-center flex-col justify-center  pt-10">
          <h4 className="text-xl font-medium tracking-tight ">
            Your Referrals
          </h4>
          <ReferralShowcaseTable />
        </div>
      </ProtectedWrapper>
    </main>
  );
}
