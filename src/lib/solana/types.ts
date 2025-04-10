// export type StakeEntryAccount = {
//   authority: string;
//   amount: string;
//   duration: string;
//   effectiveAmount: string;
//   stakePool: string;
//   nonce: number;
//   payer: string;
//   createdTs: string;
//   closedTs: string;
//   unstakeTs: string;
//   priorTotalEffectiveStake: string;
//   buffer: number[];
// };

// export type RewardPoolAccount = {
//   authority: string;
//   bump: number;
//   buffer: number[];
//   creator: string;
//   claimedAmount: string;
//   fundedAmount: string;
//   lastClaimPeriod: string;
//   lastRewardAmount: string;
//   lastRewardPeriod: string;
//   lastAmountUpdateTs: string;
//   lastPeriodUpdateTs: string;
//   permissionless: boolean;
//   rewardAmount: string;
//   rewardPeriod: string;
//   stakePool: string;
//   createdTs: string;
//   mint: string;
//   nonce: number;
//   vault: string;
// };

// export type StakeEntry = {
//   __typename: "StakeEntry";
//   publicKey: string;
//   account: StakeEntryAccount;
// };

// export type RewardPool = {
//   __typename: "RewardPool";
//   publicKey: string;
//   account: RewardPoolAccount;
// };

// export type TokenMint = {
//   __typename: "TokenMint";
//   address: string;
//   decimals: number;
//   supply: string;
//   isInitialized: boolean;
//   freezeAuthority?: string;
//   mintAuthority?: string;
// };
