import {
  RewardEntry,
  RewardPool,
  StakeEntry,
  TokenMint,
} from "@/gql/types/graphql";
import { calcRewards } from "@/lib/streamflow/lib/rewards";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";

export async function getUserStakingData({
  publicKey,
  stakeEntries,
  rewardPools,
  rewardEntries,
  tokenMint,
  totalEffectiveAmount,
}: {
  publicKey: PublicKey;
  stakeEntries: StakeEntry[];
  rewardEntries: RewardEntry[];
  rewardPools: RewardPool[];
  tokenMint: TokenMint;
  totalEffectiveAmount: BN;
  tokenPublicKey?: PublicKey;
  stakePool?: PublicKey;
}) {
  const rewardPool = rewardPools[0];
  const userStakeEntries = stakeEntries.filter((stakeEntry) =>
    new PublicKey(stakeEntry.account.payer).equals(new PublicKey(publicKey)),
  );
  const rewardEntriesByStakeEntry = userStakeEntries.map((stakeEntry) => {
    return rewardEntries.filter(
      (rewardEntry) => rewardEntry.account.stakeEntry === stakeEntry.publicKey,
    );
  });
  const userRewardEntries = rewardEntriesByStakeEntry.reduce(
    (acc, innerRewardEntries) => {
      return acc.concat(innerRewardEntries);
    },
    [],
  );

  let totalClaimableRewards = new BN(0);
  const userStakes = userStakeEntries.map((stakeEntry) => {
    const rewardEntry = userRewardEntries.find(
      (rewardEntry) =>
        rewardEntry.account.stakeEntry === stakeEntry.publicKey &&
        rewardEntry.account.rewardPool === rewardPool.publicKey,
    );
    const rewardEntryProgram = rewardEntry
      ? {
          publicKey: new PublicKey(rewardEntry.publicKey),
          account: {
            rewardPool: new PublicKey(rewardEntry.account.rewardPool),
            stakeEntry: new PublicKey(rewardEntry.account.stakeEntry),
            createdTs: new BN(rewardEntry.account.createdTs),
            accountedAmount: new BN(rewardEntry.account.accountedAmount),
            claimedAmount: new BN(rewardEntry.account.claimedAmount),
            lastAccountedTs: new BN(rewardEntry.account.lastAccountedTs),
            lastRewardAmount: new BN(rewardEntry.account.lastRewardAmount),
            lastRewardPeriod: new BN(rewardEntry.account.lastRewardPeriod),
            buffer: rewardEntry.account.buffer,
          },
        }
      : undefined;
    const rewards = calcRewards(
      rewardEntryProgram,
      {
        ...stakeEntry,
        publicKey: new PublicKey(stakeEntry.publicKey),
        account: {
          ...stakeEntry.account,
          authority: new PublicKey(stakeEntry.account.authority),
          stakePool: new PublicKey(stakeEntry.account.stakePool),
          payer: new PublicKey(stakeEntry.account.payer),
          createdTs: new BN(stakeEntry.account.createdTs),
          closedTs: new BN(stakeEntry.account.closedTs),
          unstakeTs: new BN(stakeEntry.account.unstakeTs),
          priorTotalEffectiveStake: new BN(
            stakeEntry.account.priorTotalEffectiveStake,
          ),
          effectiveAmount: new BN(stakeEntry.account.effectiveAmount),
          amount: new BN(stakeEntry.account.amount),
          duration: new BN(stakeEntry.account.duration),
        },
      },
      {
        ...rewardPool,
        publicKey: new PublicKey(rewardPool.publicKey),
        account: {
          ...rewardPool.account,
          createdTs: new BN(rewardPool.account.createdTs),
          authority: new PublicKey(rewardPool.account.authority),
          stakePool: new PublicKey(rewardPool.account.stakePool),
          mint: new PublicKey(rewardPool.account.mint),
          vault: new PublicKey(rewardPool.account.vault),
          creator: new PublicKey(rewardPool.account.creator),
          lastClaimPeriod: new BN(rewardPool.account.lastClaimPeriod),
          lastRewardAmount: new BN(rewardPool.account.lastRewardAmount),
          lastRewardPeriod: new BN(rewardPool.account.lastRewardPeriod),
          lastAmountUpdateTs: new BN(rewardPool.account.lastAmountUpdateTs),
          lastPeriodUpdateTs: new BN(rewardPool.account.lastPeriodUpdateTs),
          claimedAmount: new BN(rewardPool.account.claimedAmount),
          fundedAmount: new BN(rewardPool.account.fundedAmount),
          rewardAmount: new BN(rewardPool.account.rewardAmount),
          rewardPeriod: new BN(rewardPool.account.rewardPeriod),
        },
      },
    );
    totalClaimableRewards = totalClaimableRewards.add(rewards.amount);

    const stakeLockedTs = new Date(Number(stakeEntry.account.createdTs) * 1000);
    const stakeUnlockedTs = new Date(
      stakeLockedTs.getTime() + Number(stakeEntry.account.duration) * 1000,
    );

    return {
      staked: stakeEntry.account.amount.toString(),
      duration: stakeEntry.account.duration.toString(),
      stakeLockedTs,
      stakeUnlockedTs,
      nextClaimAvailableOn: rewards.nextClaimAvailableOn,
      rewards: rewards.amount.toString(),
      rewardPoolNonce: rewardPool.account.nonce,
      depositNonce: stakeEntry.account.nonce,
      stakePool: stakeEntry.account.stakePool,
      stakePoolMint: tokenMint.address,
      rewardMint: rewardPool.account.mint,
      rewardEntry: rewardEntry,
    };
  });
  const {
    totalAmount: totalUserAmount,
    totalEffectiveAmount: totalUserEffectiveAmount,
  } = userStakeEntries.reduce(
    (acc, entry) => {
      const { effectiveAmount, amount } = entry.account;
      acc.totalEffectiveAmount = acc.totalEffectiveAmount.add(
        new BN(effectiveAmount),
      );
      acc.totalAmount = acc.totalAmount.add(new BN(amount));
      return acc;
    },
    {
      totalEffectiveAmount: new BN(0),
      totalAmount: new BN(0),
    },
  );
  const share = new BN(totalUserEffectiveAmount)
    .mul(new BN(10000))
    .div(new BN(totalEffectiveAmount));
  const { totalClaimedAmount } = userRewardEntries.reduce(
    (acc, entry) => {
      const { claimedAmount } = entry.account;
      const claimedAmountBN = new BN(claimedAmount);

      acc.totalClaimedAmount = acc.totalClaimedAmount.add(claimedAmountBN);

      return acc;
    },
    {
      totalClaimedAmount: new BN(0),
    },
  );

  return {
    decimals: tokenMint.decimals,
    yourTotalStaked: totalUserAmount.toString(),
    yourEarnings: totalClaimedAmount.toString(),
    available: totalClaimableRewards.toString(),
    share: share.toNumber() / 100,
    userStakeEntries,
    userStakes,
  };
}

export function getClusterUrl() {
  return `${process.env.NEXT_PUBLIC_CLUSTER_URL}/?api-key=${process.env.NEXT_PUBLIC_CLUSTER_API_KEY}`;
}
