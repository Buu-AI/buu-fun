import { SolanaStakingClient } from "../streamflow/client.js";
import { PublicKey, Transaction } from "@solana/web3.js";

type TGetUnStakingTransactions = {
  address: string;
};
export async function getUnStakingTransactions({
  address,
}: TGetUnStakingTransactions) {
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

  const nonce = 0;

  const { ixs } = await solanaStakingClient.prepareUnstakeInstructions(
    {
      nonce,
      stakePool,
      stakePoolMint,
    },
    publicKey
  );

  const transaction = new Transaction();
  transaction.add(...ixs);

  console.log("Transaction:", transaction);
}
