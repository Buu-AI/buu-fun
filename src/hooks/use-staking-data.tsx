"use client";

import { getUserStakingData } from "@/lib/solana/staking";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { useEffect, useState } from "react";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stakeEntries: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rewardPools: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
