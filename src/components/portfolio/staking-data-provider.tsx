// "use client";

// import { useGlobalStakingData } from "@/hooks/use-global-staking";
// import { StakingProvider } from "@/hooks/use-staking-context";
// import { useStakingData, useUserStakingData } from "@/hooks/use-staking-data";
// import { getClusterUrl } from "@/lib/solana/staking";
// import { useAuthentication } from "@/providers/account.context";
// import { PublicKey } from "@solana/web3.js";
// import BN from "bn.js";
// import { ReactNode } from "react";

// type StakingDataProviderProps = {
//   children?: ReactNode;
// };

// export default function StakingDataProvider({
//   children,
// }: StakingDataProviderProps) {
//   const { globalStaking, userStaking } = useUserStakingData();
//   // const { address } = useAuthentication();
//   // const {
//   //   data: globalData,
//   //   isPending: globalLoading,
//   //   error: globalError,
//   // } = useGlobalStakingData();

//   // const stakingData = useStakingData(
//   //   globalData
//   //     ? {
//   //         publicKey: new PublicKey(address ?? ""),
//   //         stakeEntries: globalData.stakeEntries,
//   //         rewardPools: globalData.rewardPools,
//   //         tokenMint: globalData.tokenMint,
//   //         totalEffectiveAmount: new BN(globalData.totalEffectiveAmount),
//   //         totalRewardsPerDay: new BN(globalData.totalRewardsPerDay),
//   //         clusterUrl: getClusterUrl(),
//   //       }
//   //     : null
//   // );

//   // const isLoading = globalLoading || stakingData.loading;
//   // const error = globalError || stakingData.error;

//   return (
//     <StakingProvider
//       value={{
//         data: userStaking.data,
//         loading: isLoading,
//         error: error,
//       }}
//     >
//       {children}
//     </StakingProvider>
//   );
// }
