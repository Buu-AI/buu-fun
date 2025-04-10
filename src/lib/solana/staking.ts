import { PublicKey } from "@solana/web3.js";
import { SolanaStakingClient } from "@/lib/streamflow/client";
import BN from "bn.js";
import { calcRewards } from "@/lib/streamflow/lib/rewards";
import { RewardPool, StakeEntry, TokenMint } from "@/gql/types/graphql";

export async function getUserStakingData({
  publicKey,
  stakeEntries,
  rewardPools,
  tokenMint,
  totalEffectiveAmount,
  totalRewardsPerDay,
  clusterUrl = "https://api.devnet.solana.com",
}: {
  publicKey: PublicKey;
  stakeEntries: StakeEntry[];
  rewardPools: RewardPool[];
  tokenMint: TokenMint;
  totalEffectiveAmount: BN;
  totalRewardsPerDay: BN;
  tokenPublicKey?: PublicKey;
  stakePool?: PublicKey;
  clusterUrl?: string; // Solana cluster URL
}) {
  try {
    const solanaStakingClient = new SolanaStakingClient({
      clusterUrl,
    });
    const userStakeEntries = stakeEntries.filter((stakeEntry) =>
      new PublicKey(stakeEntry.account.payer).equals(new PublicKey(publicKey))
    );
    const rewardEntriesByStakeEntryPromises = stakeEntries.map(
      async (stakeEntry) => {
        return solanaStakingClient.searchRewardEntries({
          stakeEntry: new PublicKey(stakeEntry.publicKey),
        });
      }
    );
    const rewardEntriesByStakeEntry = await Promise.all(
      rewardEntriesByStakeEntryPromises
    );
    const rewardEntries = rewardEntriesByStakeEntry.reduce(
      (acc, innerRewardEntries) => {
        return acc.concat(innerRewardEntries);
      },
      []
    );
    const totalClaimableRewards = userStakeEntries.reduce(
      (acc1, stakeEntry) => {
        return rewardPools.reduce((acc2, rewardPool) => {
          const rewardEntry = rewardEntries.find(
            (rewardEntry) =>
              rewardEntry.account.stakeEntry.equals(
                new PublicKey(stakeEntry.publicKey)
              ) &&
              rewardEntry.account.rewardPool.equals(
                new PublicKey(rewardPool.publicKey)
              )
          );
          return calcRewards(
            rewardEntry ?? undefined,
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
                  stakeEntry.account.priorTotalEffectiveStake
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
                lastAmountUpdateTs: new BN(
                  rewardPool.account.lastAmountUpdateTs
                ),
                lastPeriodUpdateTs: new BN(
                  rewardPool.account.lastPeriodUpdateTs
                ),
                claimedAmount: new BN(rewardPool.account.claimedAmount),
                fundedAmount: new BN(rewardPool.account.fundedAmount),
                rewardAmount: new BN(rewardPool.account.rewardAmount),
                rewardPeriod: new BN(rewardPool.account.rewardPeriod),
              },
            }
          ).add(acc2);
        }, acc1);
      },
      new BN(0)
    );
    const {
      totalAmount: totalUserAmount,
      totalEffectiveAmount: totalUserEffectiveAmount,
    } = userStakeEntries.reduce(
      (acc, entry) => {
        const { effectiveAmount, amount } = entry.account;
        acc.totalEffectiveAmount = acc.totalEffectiveAmount.add(
          new BN(effectiveAmount)
        );
        acc.totalAmount = acc.totalAmount.add(new BN(amount));
        return acc;
      },
      {
        totalEffectiveAmount: new BN(0),
        totalAmount: new BN(0),
      }
    );
    const share = new BN(totalUserEffectiveAmount)
      .mul(new BN(10000))
      .div(new BN(totalEffectiveAmount));
    const { totalClaimedAmount } = rewardEntries.reduce(
      (acc, entry) => {
        const { claimedAmount } = entry.account;
        const claimedAmountBN = new BN(claimedAmount);

        acc.totalClaimedAmount = acc.totalClaimedAmount.add(claimedAmountBN);

        return acc;
      },
      {
        totalClaimedAmount: new BN(0),
      }
    );
    const apy = totalRewardsPerDay
      .mul(new BN(365))
      .mul(new BN(10000))
      .mul(totalUserEffectiveAmount)
      .div(totalEffectiveAmount)
      .div(new BN(10 ** tokenMint.decimals));

    return {
      decimals: tokenMint.decimals,
      yourTotalStaked: totalUserAmount.toString(),
      yourEarnings: totalClaimedAmount.toString(),
      available: totalClaimableRewards.toString(),
      share: share.toNumber() / 100,
      apy: apy.toNumber() / 100,
    };
  } catch (error) {
    return null;
  }
}

export function getClusterUrl() {
  return `${process.env.NEXT_PUBLIC_CLUSTER_URL}/?api-key=${process.env.NEXT_PUBLIC_CLUSTER_API_KEY}`;
}
