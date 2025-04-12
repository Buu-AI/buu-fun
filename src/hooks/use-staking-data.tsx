"use client";

import { getClusterUrl, getUserStakingData } from "@/lib/solana/staking";
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

// export function useStakingData(props: UseStakingDataProps | null) {
//   const [data, setData] = useState<StakingData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);
//   useEffect(() => {
//     if (!props) {
//       setLoading(true);
//       return;
//     }
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const result = await getUserStakingData(props);
//         setData(result);
//       } catch (err) {
//         setError(err instanceof Error ? err : new Error(String(err)));
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [
//     props?.publicKey?.toString(),
//     props?.totalEffectiveAmount?.toString(),
//     props?.totalRewardsPerDay?.toString(),
//     props?.clusterUrl,
//   ]);
//   return { data, loading, error };
// }

export function useUserStakingData() {
  const { address } = useAuthentication();
  const globalStaking = useGlobalStakingData();
  const { data, isFetched } = globalStaking;

  const userStaking = useQuery({
    queryKey: ["get-global-staking-data"],
    enabled: isFetched,
    staleTime: 10000,
    queryFn: async () => {
      if (!data) return null;
      return await getUserStakingData({
        publicKey: new PublicKey(address ?? ""),
        stakeEntries: data.stakeEntries,
        rewardPools: data.rewardPools,
        tokenMint: data.tokenMint,
        totalEffectiveAmount: new BN(data.totalEffectiveAmount),
        totalRewardsPerDay: new BN(data.totalRewardsPerDay),
        clusterUrl: getClusterUrl(),
      });
    },
  });

  return {
    userStaking,
    globalStaking,
  };
}
