// import { SolanaStakingClient } from "../streamflow/client.js";
import { PublicKey, Transaction } from "@solana/web3.js";
import { BN } from "bn.js";
import { SolanaStakingClient } from "../streamflow/client";

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
      "3gv93VfCiwJEsyC1qxPKabcyeudVSqYboif7vF6PZkra",
    );
    const stakePoolMint = new PublicKey(
      "FaJY4pmNLk3y6c82KXXuDrivw7jQ5CgyyEyV68g684hu",
    );
    const solanaStakingClient = new SolanaStakingClient({
      clusterUrl: "https://api.devnet.solana.com",
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
