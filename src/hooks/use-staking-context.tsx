"use client";

import { createContext, useContext, ReactNode } from "react";

type StakingData = {
  decimals: number;
  yourTotalStaked: string;
  yourEarnings: string;
  available: string;
  share: number;
  apy: number;
} | null;

type StakingContextType = {
  data: StakingData;
  loading: boolean;
  error: Error | null;
};

const StakingContext = createContext<StakingContextType | undefined>(undefined);

export function StakingProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: StakingContextType;
}) {
  return (
    <StakingContext.Provider value={value}>
      {children}
    </StakingContext.Provider>
  );
}

export function useStakingContext() {
  const context = useContext(StakingContext);
  if (context === undefined) {
    throw new Error("useStakingContext must be used within a StakingProvider");
  }
  return context;
}
