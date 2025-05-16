// import { SolanaStakingClient } from "../streamflow/client.js";
import { PublicKey, Transaction } from "@solana/web3.js";
import { BN } from "bn.js";
import { SolanaStakingClient } from "../streamflow/client";
import { getClusterUrl } from "./staking";

export async function getStakingTransaction({
  address,
  amountToStake,
}: {
  address: string;
  amountToStake: number;
}) {
  try {
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

    const nonce = 20;
    const amount = new BN(amountToStake);
    const duration = new BN(60 * 60 * 24 * 30); // 30 days

    const { ixs } = await solanaStakingClient.prepareStakeInstructions(
      {
        nonce,
        amount,
        duration,
        stakePool,
        stakePoolMint,
      },
      publicKey,
    );
    console.log("INSTRUCTIONS", ixs);
    const transaction = new Transaction();
    transaction.add(...ixs);
    return transaction;
  } catch (error) {
    console.log(error);
    return null;
  }
}
