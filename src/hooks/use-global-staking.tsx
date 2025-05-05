"use client";

import { getStakingGlobalDataQuery } from "@/lib/react-query/staking-api";
import { useQuery } from "@tanstack/react-query";

export function useGlobalStakingData() {
  return useQuery({
    queryKey: ["get-global-staking-data", "token-data"],
    queryFn: async () => {
      return await getStakingGlobalDataQuery();
    },
  });
}
