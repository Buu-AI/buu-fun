import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import BN from "bn.js";
import { SolanaStakingClient } from "../streamflow/client";
import { getClusterUrl } from "./staking";

export async function executeStakingTransaction({
  address,
  amountToStake,
  isFirstTimeStaking,
}: {
  address: string;
  amountToStake: BN;
  isFirstTimeStaking: boolean;
}) {
  const publicKey = new PublicKey(address);

  const stakePool = new PublicKey(
    process?.env?.NEXT_PUBLIC_STREAMFLOW_STAKE_POOL ?? "",
  );
  const stakePoolMint = new PublicKey(
    process?.env?.NEXT_PUBLIC_STREAMFLOW_STAKE_POOL_MINT ?? "",
  );

  const solanaStakingClient = new SolanaStakingClient({
    clusterUrl: getClusterUrl(),
  });

  const nonce = Date.now() % 100000;

  const amount = new BN(amountToStake);
  const duration = new BN(60 * 60 * 24 * 1); // 30 days

  const { ixs } = await solanaStakingClient.prepareStakeInstructions(
    {
      nonce,
      amount,
      duration,
      stakePool,
      stakePoolMint,
    },
    publicKey,
    isFirstTimeStaking,
  );

  const transaction = new Transaction();
  transaction.add(...ixs);

  console.log("Transaction:", transaction);

  const connection = new Connection(getClusterUrl(), "confirmed");

  const { blockhash } = await connection.getLatestBlockhash();

  console.log("Blockhash:", blockhash);
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  return transaction;
}
