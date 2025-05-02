import { PublicKey, Transaction } from "@solana/web3.js";
import { SolanaStakingClient } from "../streamflow/client";
import { TUserStakedCard } from "@/components/portfolio/your-earning-new/user-staked-card";
import { getClusterUrl } from "./staking";

export async function getClaimRewardsTransactions({
  address,
  staking,
}: {
  address: string;
  staking: TUserStakedCard;
}) {
  const publicKey = new PublicKey(address);
  const transaction = new Transaction();
  const solanaStakingClient = new SolanaStakingClient({
    clusterUrl: getClusterUrl(),
  });
  if (
    !staking.rewardEntry ||
    staking.rewardEntry.account.claimedAmount === "0"
  ) {
    const { ixs: createRewardEntryInstructions } =
      await solanaStakingClient.prepareCreateRewardEntryInstructions(
        {
          stakePool: staking.stakePool,
          stakePoolMint: staking.stakePoolMint,
          rewardPoolNonce: staking.rewardPoolNonce,
          depositNonce: staking.depositNonce,
          rewardMint: staking.rewardMint,
        },
        publicKey
      );
    transaction.add(...createRewardEntryInstructions);
  }

  const { ixs: claimInstructions } =
    await solanaStakingClient.prepareClaimRewardsInstructions(
      {
        rewardPoolNonce: staking.rewardPoolNonce,
        depositNonce: staking.depositNonce,
        stakePool: staking.stakePool,
        stakePoolMint: staking.stakePoolMint,
        rewardMint: staking.rewardMint,
      },
      publicKey
    );

  transaction.add(...claimInstructions);
  return transaction;
}
