import { Connection, PublicKey } from "@solana/web3.js";
import { getClusterUrl } from "./staking";
import { formatUnits } from "../utils";
export type TToken = "BUU" | "SOLANA";

export async function getTokenBalance({
  address,
  token,
}: {
  address: string;
  token: TToken;
}) {
  const publicKey = new PublicKey(address);
  const tokenAddress = getTokenAddress(token);
  console.log("TOKEN ADDRESS", tokenAddress);
  if (!tokenAddress) {
    throw new Error("failed to retrieve token address");
  }
  const mint = new PublicKey(tokenAddress);

  const connection = new Connection(getClusterUrl());
  if (token === "SOLANA") {
    const lamports = await connection.getBalance(publicKey);
    return {
      value: {
        uiAmount: parseFloat(formatUnits(lamports.toString(), 9)) ?? 0, // Convert to SOL
        amount: lamports.toString(),
        decimals: 9,
      },
    };
  }
  const tokenAccount = await connection.getTokenAccountsByOwner(publicKey, {
    mint: mint,
  });

  const tokenBalance = await connection.getTokenAccountBalance(
    tokenAccount.value[0].pubkey,
  );

  //   console.log("Token Balance:", tokenBalance.value.uiAmount);
  return tokenBalance;
}

export function getTokenAddress(token: TToken) {
  if (token === "SOLANA") {
    return `${process?.env?.NEXT_PUBLIC_SOLANA_ADDRESS}`;
  }
  return `${process?.env?.NEXT_PUBLIC_STREAMFLOW_STAKE_POOL_MINT}`;
}
