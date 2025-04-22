import { Connection, PublicKey } from "@solana/web3.js";
import { getClusterUrl } from "./staking";

export async function getTokenBalance({ address }: { address: string }) {
  const publicKey = new PublicKey(address);
  const mint = new PublicKey(
    process?.env?.NEXT_PUBLIC_STREAMFLOW_STAKE_POOL_MINT ?? "",
  );

  const connection = new Connection(getClusterUrl(), "confirmed");

  const tokenAccount = await connection.getTokenAccountsByOwner(publicKey, {
    mint: mint,
  });

  const tokenBalance = await connection.getTokenAccountBalance(
    tokenAccount.value[0].pubkey,
  );

  //   console.log("Token Balance:", tokenBalance.value.uiAmount);
  return tokenBalance;
}
