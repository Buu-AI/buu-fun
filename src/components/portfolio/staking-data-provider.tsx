"use client";

import { useStakingData } from "@/hooks/use-staking-data";
import { StakingProvider } from "@/hooks/use-staking-context";
import { useGlobalStaking } from "@/hooks/use-global-staking";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { ReactNode } from "react";

type StakingDataProviderProps = {
  address: string;
  clusterUrl: string;
  children?: ReactNode;
};

export default function StakingDataProvider({
  address,
  clusterUrl,
  children,
}: StakingDataProviderProps) {
  const { data: globalData, loading: globalLoading, error: globalError } = useGlobalStaking();
  
  const stakingData = useStakingData(
    globalData
      ? {
          publicKey: new PublicKey(address),
          stakeEntries: globalData.stakeEntries,
          rewardPools: globalData.rewardPools,
          tokenMint: globalData.tokenMint,
          totalEffectiveAmount: new BN(globalData.totalEffectiveAmount),
          totalRewardsPerDay: new BN(globalData.totalRewardsPerDay),
          clusterUrl,
        }
      : null
  );
  
  const isLoading = globalLoading || stakingData.loading;
  const error = globalError || stakingData.error;

  console.log("globalData", globalData);
  console.log("stakingData", stakingData);

  return (
    <StakingProvider 
      value={{
        data: stakingData.data,
        loading: isLoading,
        error: error
      }}
    >
      {children}
    </StakingProvider>
  );
}
