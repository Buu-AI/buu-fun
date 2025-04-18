import BuuLogo from "@/components/elements/logo";
import React from "react";
import StakingClaimAndRestakeButton from "../staking-claim-restake-button";
import StakingClaimAndRestake from "../staking-claim-restake-button";
import UnstakeButton from "./unstake-button";
import RestakeRewardButton from "./restake-rewards-button";
import { useUserStakingData } from "@/hooks/use-staking-data";
import { formatNumber, formatUnits } from "@/lib/utils";
import { Duration } from "luxon";
import prettyMs from "pretty-ms";

type TUserStakedCard = {
  staked: number | string;
};
export default function UserStakedCard() {
  const {
    userStaking: { data: userStakingData },
  } = useUserStakingData();
  const staking = userStakingData?.userStakes[0]!;
  const duration = prettyMs(Number(staking.duration ?? "0") * 1000, {verbose: true, compact: true});

  const staked = formatUnits(
    staking?.staked ?? "0",
    userStakingData?.decimals ?? 0
  );

  return (
    <div className="border-2 bg-buu  rounded-2xl px-2 md:px-5 py-4 md:py-6">
      <div className="grid grid-cols-2 gap-y-5">
        <div>
          <p className="text-muted-foreground/60 font-medium">Staked</p>
          <div className="flex items-center gap-1 mt-3">
            <div className="">
              <div className="flex  w-9 h-9">
                <BuuLogo />
              </div>
            </div>
            <span className="text-2xl font-medium leading-none">
              {formatNumber(Number(staked))}
            </span>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground/60 font-medium">Duration</p>
          <div className="flex items-center gap-1 mt-3">
            <p className="text-2xl font-medium leading-none">{duration}</p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground/60 font-medium">Stake Locked</p>
          <div className="flex items-center gap-1 mt-3">
            <p className="text-2xl font-medium leading-none">
              Apr 3, 2025, 6:41 PM
            </p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground/60 font-medium">Stake Unlocked</p>
          <div className="flex items-center gap-1 mt-3">
            <p className="text-2xl font-medium leading-none">
              Apr 3, 2025, 6:41 PM
            </p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground/60 font-medium">
            Next Claim Available On
          </p>
          <div className="flex items-center gap-1 mt-3">
            <p className="text-2xl font-medium leading-none">
              Apr 11, 2025, 6:41 PM
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-muted-foreground/60 font-medium">Rewards</p>
        <div className="flex items-center gap-1 mt-3">
          <div className="">
            <div className="flex  w-9 h-9">
              <BuuLogo />
            </div>
          </div>
          <span className="text-2xl font-medium leading-none">3,500K BUU</span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <UnstakeButton />
        <RestakeRewardButton />
      </div>
    </div>
  );
}
