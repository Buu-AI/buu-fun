"use client";

import { useState, useEffect } from "react";
import globalData from "./global.json";

export type GlobalStakingData = {
  __typename: "GlobalStakingData";
  totalEffectiveAmount: string;
  totalRewardsPerDay: string;
  totalAmount: string;
  tokenMint: {
    __typename: "TokenMint";
    address: string;
    decimals: number;
    supply: string;
    isInitialized: boolean;
    freezeAuthority: string;
    mintAuthority: string;
    tlvData: {
      type: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any[];
    };
  };
  stakeEntries: Array<{
    __typename: "StakeEntry";
    account: {
      authority: string;
      amount: string;
      duration: string;
      effectiveAmount: string;
      stakePool: string;
      nonce: number;
      payer: string;
      createdTs: string;
      closedTs: string;
      unstakeTs: string;
      priorTotalEffectiveStake: string;
      buffer: number[];
    };
    publicKey: string;
  }>;
  rewardPools: Array<{
    __typename: "RewardPool";
    account: {
      authority: string;
      bump: number;
      buffer: number[];
      creator: string;
      claimedAmount: string;
      fundedAmount: string;
      lastClaimPeriod: string;
      lastRewardAmount: string;
      lastRewardPeriod: string;
      lastAmountUpdateTs: string;
      lastPeriodUpdateTs: string;
      permissionless: boolean;
      rewardAmount: string;
      rewardPeriod: string;
      stakePool: string;
      createdTs: string;
      mint: string;
      nonce: number;
      vault: string;
    };
    publicKey: string;
  }>;
  circulatingSupply: string;
  totalStakedByUsers: number;
};

export function useGlobalStaking() {
  const [data, setData] = useState<GlobalStakingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setData(globalData as GlobalStakingData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
