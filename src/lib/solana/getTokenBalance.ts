import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";

export async function getTokenBalance({ address }: { address: string }) {
  const publicKey = new PublicKey(address);
  const mint = new PublicKey("FaJY4pmNLk3y6c82KXXuDrivw7jQ5CgyyEyV68g684hu");

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const tokenAccount = await connection.getTokenAccountsByOwner(publicKey, {
    mint: mint,
  });

  const tokenBalance = await connection.getTokenAccountBalance(
    tokenAccount.value[0].pubkey
  );

  //   console.log("Token Balance:", tokenBalance.value.uiAmount);
  return tokenBalance
}
