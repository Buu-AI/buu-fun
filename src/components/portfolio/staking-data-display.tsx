"use client";

import { useStakingContext } from "@/hooks/use-staking-context";

export default function StakingDataDisplay() {
  const { data, loading, error } = useStakingContext();

  if (loading) {
    return <div>Loading staking data...</div>;
  }

  if (error) {
    return <div>Error loading staking data: {error.message}</div>;
  }

  if (!data) {
    return <div>No staking data available</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Your Staking Data</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm text-gray-500">Total Staked</p>
          <p className="font-medium">{data.yourTotalStaked}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Your Earnings</p>
          <p className="font-medium">{data.yourEarnings}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Available</p>
          <p className="font-medium">{data.available}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Share</p>
          <p className="font-medium">{data.share}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">APY</p>
          <p className="font-medium">{data.apy}%</p>
        </div>
      </div>
    </div>
  );
}
