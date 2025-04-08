"use client";

import { useState, useEffect } from "react";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { getUserStakingData } from "@/lib/solana/staking";
import { RewardPool, StakeEntry, TokenMint } from "@/lib/solana/types";

type StakingData = {
  decimals: number;
  yourTotalStaked: string;
  yourEarnings: string;
  available: string;
  share: number;
  apy: number;
};

type UseStakingDataProps = {
  publicKey: PublicKey;
  stakeEntries: any[];
  rewardPools: any[];
  tokenMint: any;
  totalEffectiveAmount: BN;
  totalRewardsPerDay: BN;
  tokenPublicKey?: PublicKey;
  stakePool?: PublicKey;
  clusterUrl?: string;
};

export function useStakingData(props: UseStakingDataProps | null) {
  const [data, setData] = useState<StakingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!props) {
      setLoading(true);
      return;
    }
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getUserStakingData(props);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    props?.publicKey?.toString(),
    props?.totalEffectiveAmount?.toString(),
    props?.totalRewardsPerDay?.toString(),
    props?.clusterUrl,
  ]);

  return { data, loading, error };
}
