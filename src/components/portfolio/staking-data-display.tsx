"use client";

import { useStakingContext } from "@/hooks/use-staking-context";
import { useUserStakingData } from "@/hooks/use-staking-data";
import { formatUnits } from "@/lib/utils";

export default function StakingDataDisplay() {
  const {
    globalStaking: { data: globalStakingData, isPending: isLoading },
    userStaking: { data: userStakingData },
  } = useUserStakingData();

  if (isLoading) {
    return <div>Loading staking data...</div>;
  }

  if (!globalStakingData) {
    return <div>No staking data available</div>;
  }

  return (
    <div className="p-4 bg-gray-700 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Your Staking Data</h3>
      {JSON.stringify(userStakingData)}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm ">Total Staked</p>
          <p className="font-medium">{userStakingData?.yourTotalStaked}</p>
        </div>
        <div>
          <p className="text-sm ">Your Earnings</p>
          <p className="font-medium">
            {formatUnits(
              userStakingData?.yourEarnings ?? "0",
              userStakingData?.decimals ?? 0
            )}
          </p>
        </div>
        <div>
          <p className="text-sm ">Available</p>
          <p className="font-medium">{userStakingData?.available}</p>
        </div>
        <div>
          <p className="text-sm ">Share</p>
          <p className="font-medium">{userStakingData?.share}%</p>
        </div>
        <div>
          <p className="text-sm ">APY</p>
          <p className="font-medium">{userStakingData?.apy}%</p>
        </div>
      </div>
    </div>
  );
}
