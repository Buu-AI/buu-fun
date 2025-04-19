import { PublicKey, Transaction } from "@solana/web3.js";
import { SolanaStakingClient } from "../streamflow/client";
import { TUserStakedCard } from "@/components/portfolio/your-earning-new/user-staked-card";

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
    clusterUrl: "https://api.devnet.solana.com",
  });
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
  transaction.add(...createRewardEntryInstructions, ...claimInstructions);
  return transaction;
}
