import { PublicKey, Transaction } from "@solana/web3.js";
import { SolanaStakingClient } from "../streamflow/client";
import { getClusterUrl } from "./staking";

type TGetUnStakingTransactions = {
  address: string;
  depositNonce: number;
};
export async function getUnStakingTransactions({
  address,
  depositNonce,
}: TGetUnStakingTransactions) {
  const publicKey = new PublicKey(address);

  const stakePool = new PublicKey(
    process.env.NEXT_PUBLIC_STREAMFLOW_STAKE_POOL ?? "",
  );
  const stakePoolMint = new PublicKey(
    process.env.NEXT_PUBLIC_STREAMFLOW_STAKE_POOL_MINT ?? "",
  );

  const solanaStakingClient = new SolanaStakingClient({
    clusterUrl: getClusterUrl(),
  });

  const nonce = depositNonce;

  const { ixs } = await solanaStakingClient.prepareUnstakeInstructions(
    {
      nonce,
      stakePool,
      stakePoolMint,
    },
    publicKey,
  );
  console.log("[TRANSACTION:]", ixs);
  console.log("[PARAMETER:]", {
    nonce,
    stakePool,
    stakePoolMint,
    publicKey,
  });
  const transaction = new Transaction();
  transaction.add(...ixs);
  return transaction;
}
