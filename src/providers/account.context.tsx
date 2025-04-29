"use client";
import {
  ConnectedSolanaWallet,
  LoginModalOptions,
  useIdentityToken,
  usePrivy,
  User,
  useSolanaWallets,
} from "@privy-io/react-auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface WalletInfo {
  address?: string;
  id: string;
  name: string;
  icon?: string;
  chainType?: "ethereum" | "solana";
  walletData?: ConnectedSolanaWallet | undefined;
}

interface AuthenticationContextType {
  loading: boolean;
  isAuthenticated: boolean;
  identityToken: string | null;
  user: User | null;
  address?: string;
  wallet?: WalletInfo;
  wallets: WalletInfo[];
  exportSolWallet: (options?: { address: string }) => Promise<void>;
  isPrivyOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: (options?: LoginModalOptions | React.MouseEvent<any, any>) => void;
  logout: () => Promise<void>;
}

const AuthenticationContext = createContext<
  AuthenticationContextType | undefined
>(undefined);

// Helper function to get wallet icon
const getWalletIcon = (connector: string): string => {
  const walletIcons: Record<string, string> = {
    metamask: "https://avatars.githubusercontent.com/u/11744586?s=200&v=4",
    walletconnect: "https://avatars.githubusercontent.com/u/37784886?s=200&v=4",
    coinbase: "https://avatars.githubusercontent.com/u/1885080?s=200&v=4",
    phantom: "https://avatars.githubusercontent.com/u/78782331?s=200&v=4",
  };

  return walletIcons[connector.toLowerCase()] || "";
};

export const AuthenticationProvider = ({ children }: Props) => {
  const [activeWallet, setActiveWallet] = useState<WalletInfo | undefined>();

  const [allWallets, setAllWallets] = useState<WalletInfo[]>([]);
  const [isProcessingWallets, setIsProcessingWallets] = useState(false);

  const { ready, authenticated, user, login, logout, isModalOpen } = usePrivy();

  const { identityToken } = useIdentityToken();
  const {
    wallets: solanaWallets,
    ready: isSolanaReady,
    exportWallet,
  } = useSolanaWallets();

  const SolanaWalletsDep = solanaWallets.length > 0 ? isSolanaReady : null;

  // Process wallets and set them in state
  useEffect(() => {
    if (isProcessingWallets) return;

    // Only process when Privy is ready
    if (!ready) return;

    setIsProcessingWallets(true);

    try {
      if (!authenticated) {
        setAllWallets([]);
        setActiveWallet(undefined);
        return;
      }

      const processedWallets: WalletInfo[] = [];

      // Add user's primary wallet if available
      if (user?.wallet?.address) {
        processedWallets.push({
          address: user.wallet?.address,
          id: `primary-${user.wallet.address.slice(0, 8)}`,
          name: user.wallet.walletClientType ?? "Privy",
          chainType: user.wallet.chainType,
          icon: getWalletIcon(user.wallet.walletClientType || ""),
        });
      }

      // Process Solana wallets if ready
      if (isSolanaReady && solanaWallets.length > 0) {
        solanaWallets.forEach((wallet) => {
          if (wallet?.address) {
            processedWallets.push({
              walletData: wallet,
              address: wallet.address,
              id: wallet.meta?.id || `solana-${wallet.address.slice(0, 8)}`,
              name: wallet.meta?.name || "Solana Wallet",
              icon:
                wallet.meta?.icon ||
                getWalletIcon(wallet.meta?.name?.toLowerCase() || ""),
              chainType: "solana",
            });
          }
        });
      }

      // Remove duplicates
      const uniqueWallets = Array.from(
        new Map(
          processedWallets.map((wallet) => [wallet.address, wallet])
        ).values()
      );

      setAllWallets(uniqueWallets);

      // Set active wallet based on user preference or first available wallet
      if (uniqueWallets.length > 0) {
        // Try to find the wallet that matches user's primary wallet
        const userPrimaryWallet = uniqueWallets.find(
          (w) => w.address === user?.wallet?.address
        );

        if (userPrimaryWallet) {
          setActiveWallet(userPrimaryWallet);
        } else {
          // Default to first wallet if no match found
          setActiveWallet(uniqueWallets[0]);
        }
      } else {
        setActiveWallet(undefined);
      }
    } finally {
      // Always clear the processing flag
      setIsProcessingWallets(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    ready,
    authenticated,
    user?.wallet?.address,
    // Only include isEVMReady, isSolanaReady if they have wallets to process
    SolanaWalletsDep,
    solanaWallets.length,
  ]);

  // Define loading state based only on Privy readiness
  const isLoading = !ready;

  // Get the address from the active wallet
  const address = activeWallet?.address || user?.wallet?.address;

  const value = useMemo(
    () => ({
      address,
      loading: isLoading,
      exportSolWallet: exportWallet,
      isAuthenticated: authenticated,
      identityToken,
      user,
      wallet: activeWallet,
      wallets: allWallets,
      login,
      isPrivyOpen: isModalOpen,
      logout,
    }),
    [
      exportWallet,
      isModalOpen,
      address,
      isLoading,
      authenticated,
      identityToken,
      user,
      activeWallet,
      allWallets,
      login,
      logout,
    ]
  );

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      `useAuthentication must be used within a AuthenticationProvider`
    );
  }
  return context;
}
