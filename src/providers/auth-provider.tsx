"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import * as React from "react";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
import "@/styles/solana-modal.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import { PRIVY_APP_ID } from "@/config";
import { AuthenticationProvider } from "./account.context";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID as string}
      config={{
        
        appearance: {
          theme: "dark",
          accentColor: "#1c20275c",
          // eslint-disable-next-line @next/next/no-img-element
          logo: <img src="/logo.png" className="w-12" alt="Buu.fun Logo" />,
        },
        externalWallets: {

          solana: {  
            connectors: toSolanaWalletConnectors({
              shouldAutoConnect: true,
            }),
          },
        },
        
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: "off",
          },
          solana: {

            createOnLogin: "users-without-wallets",
          },
          
          showWalletUIs: true,
        },
      }}
    >
      <AuthenticationProvider>{children}</AuthenticationProvider>
    </PrivyProvider>
  );
}
