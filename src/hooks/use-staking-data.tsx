"use client";

import { getUserStakingData } from "@/lib/solana/staking";
import { useAuthentication } from "@/providers/account.context";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import BN from "bn.js";
import { useGlobalStakingData } from "./use-global-staking";

export type StakingData = {
  decimals: number;
  yourTotalStaked: string;
  yourEarnings: string;
  available: string;
  share: number;
  apy: number;
};

export type UseStakingDataProps = {
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

export function useUserStakingData() {
  const { address } = useAuthentication();
  const globalStaking = useGlobalStakingData();
  const { data, isFetched } = globalStaking;

  const userStaking = useQuery({
    queryKey: ["get-global-staking-data", isFetched, address],
    enabled: isFetched,
    staleTime: 10000,
    queryFn: async () => {
      if (!data) return null;
      return await getUserStakingData({
        publicKey: new PublicKey(address ?? ""),
        stakeEntries: data.stakeEntries,
        rewardPools: data.rewardPools,
        rewardEntries: data.rewardEntries,
        tokenMint: data.tokenMint,
        totalEffectiveAmount: new BN(data.totalEffectiveAmount),
      });
    },
  });
  return {
    userStaking,
    globalStaking,
  };
}
