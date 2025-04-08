import {
  getBuuTokenOverview,
  getHistoricalPricingResult,
} from "@/lib/react-query/pricing-history";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "./redux";

export function usePricingHistoricalPricing() {
  const { identityToken, isAuthenticated, loading } = useAuthentication();
  const buuPricingHistoryTime = useAppSelector(
    (state) => state.BuuPricing.buuPricingHistoryTime,
  );
  return useQuery({
    queryKey: [
      "get-historical-pricing-result",
      identityToken,
      buuPricingHistoryTime,
    ],
    enabled: !loading && isAuthenticated,
    refetchInterval: 150_000_00,
    queryFn: async () => {
      if (!identityToken) return;
      return await getHistoricalPricingResult({
        accessToken: identityToken ?? "",
        time: buuPricingHistoryTime,
      });
    },
  });
}

export function useBuuPricingData() {
  const { identityToken, isAuthenticated, loading } = useAuthentication();

  return useQuery({
    queryKey: ["get-token-overview", identityToken],
    enabled: !loading && isAuthenticated,
    refetchInterval: 150_000,
    queryFn: async () => {
      if (!identityToken) return;
      return await getBuuTokenOverview({
        accessToken: identityToken ?? "",
      });
    },
  });
}
