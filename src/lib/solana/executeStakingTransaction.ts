import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction
} from "@solana/web3.js";
import { BN } from "bn.js";
import { SolanaStakingClient } from "../streamflow/client";

export async function executeStakingTransaction({
  address,
  amountToStake,
}: {
  address: string;
  amountToStake: number;
}) {
  //   const wallet = Keypair.fromSecretKey(Uint8Array.from(bs58.decode(address)));
  const publicKey = new PublicKey(address);

  const stakePool = new PublicKey(
    "3gv93VfCiwJEsyC1qxPKabcyeudVSqYboif7vF6PZkra"
  );
  const stakePoolMint = new PublicKey(
    "FaJY4pmNLk3y6c82KXXuDrivw7jQ5CgyyEyV68g684hu"
  );

  const solanaStakingClient = new SolanaStakingClient({
    clusterUrl: "https://api.devnet.solana.com",
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
    publicKey
  );

  const transaction = new Transaction();
  transaction.add(...ixs);

  console.log("Transaction:", transaction);

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const { blockhash } = await connection.getLatestBlockhash();

  console.log("Blockhash:", blockhash);
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  return transaction;
}
