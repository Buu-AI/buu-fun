import {
  getBuuTokenOverview,
  getHistoricalPricingResult,
} from "@/lib/react-query/pricing-history";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "./redux";
import { getTokenBalance } from "@/lib/solana/getTokenBalance";

export function usePricingHistoricalPricing() {
  const buuPricingHistoryTime = useAppSelector(
    (state) => state.BuuPricing.buuPricingHistoryTime
  );
  return useQuery({
    queryKey: ["get-historical-pricing-result", buuPricingHistoryTime],
    refetchInterval: 150_000_00,
    queryFn: async () => {
      return await getHistoricalPricingResult({
        time: buuPricingHistoryTime,
      });
    },
  });
}

export function useBuuPricingData() {
  return useQuery({
    queryKey: ["get-token-overview"],
    refetchInterval: 150_000,
    queryFn: async () => {
      return await getBuuTokenOverview();
    },
  });
}

export function useTokenBalance() {
  const { identityToken, isAuthenticated, loading, address } =
    useAuthentication();

  return useQuery({
    queryKey: ["get-token-balance", "token-data", identityToken, address],
    enabled: !loading && isAuthenticated,
    queryFn: async () => {
      if (!address) return;
      return await getTokenBalance({
        address,
      });
    },
  });
}
