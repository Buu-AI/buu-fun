"use client";

import { getStakingGlobalDataQuery } from "@/lib/react-query/staking-api";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";

export function useGlobalStakingData() {
  const { identityToken, isAuthenticated, loading } = useAuthentication();
  return useQuery({
    queryKey: ["get-user-staking-data", identityToken],
    enabled: !loading && isAuthenticated,
    queryFn: async () => {
      if (!identityToken) return;
      return await getStakingGlobalDataQuery({
        accessToken: identityToken ?? "",
      });
    },
  });
}
