import BuuLogo from "@/components/elements/logo";
import { RewardEntry } from "@/gql/types/graphql";
import { formatNumber, formatUnits } from "@/lib/utils";
import { format } from "date-fns";
import prettyMs from "pretty-ms";
// import ClaimRewardButton from "./restake-rewards-button";
import UnstakeButton from "./unstake-button";
import ClaimRewardButton from "./claim-rewards-button";

export type TUserStakedCard = {
  staked: string;
  duration: string;
  stakeLockedTs: Date;
  stakeUnlockedTs: Date;
  nextClaimAvailableOn: Date;
  rewards: string;
  rewardPoolNonce: number;
  depositNonce: number;
  stakePool: string;
  stakePoolMint: string;
  rewardMint: string;
  rewardEntry: RewardEntry | undefined;
};

export default function UserStakedCard({
  staking,
  decimals,
}: {
  staking: TUserStakedCard;
  decimals?: number;
}) {
  const duration = prettyMs(Number(staking?.duration ?? "0") * 1000, {
    verbose: true,
    compact: true,
  });

  const staked = formatUnits(staking?.staked ?? "0", decimals ?? 0);
  const rewards = formatUnits(staking?.rewards ?? "0", decimals ?? 0);
  // const depositNonce = staking.depositNonce;
  // const rewardPoolNonce = staking.rewardPoolNonce;

  return (
    <div className="border-2 bg-buu  rounded-2xl px-2 md:px-5 py-4 md:py-6">
      <div className="grid sm:grid-cols-2 gap-y-5">
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
              {format(
                staking?.stakeLockedTs ?? Date.now(),
                "MMM, d, yyyy, hh:MM aa"
              )}
            </p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground/60 font-medium">Stake Unlocked</p>
          <div className="flex items-center gap-1 mt-3">
            <p className="text-2xl font-medium leading-none">
              {format(
                staking?.stakeUnlockedTs ?? Date.now(),
                "MMM, d, yyyy, hh:MM aa"
              )}
            </p>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground/60 font-medium">
            Next Claim Available On
          </p>
          <div className="flex items-center gap-1 mt-3">
            <p className="text-2xl font-medium leading-none">
              {format(
                staking?.nextClaimAvailableOn ?? Date.now(),
                "MMM, d, yyyy, hh:MM aa"
              )}
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
          <span className="text-2xl font-medium leading-none">
            {formatNumber(Number(rewards))} BUU
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <UnstakeButton depositNonce={staking.depositNonce} />
        <ClaimRewardButton {...staking} />
      </div>
    </div>
  );
}
