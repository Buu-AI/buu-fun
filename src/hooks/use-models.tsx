import { MODEL_QUERY_LIMIT } from "@/constants/infinity.config";
import { getModels } from "@/lib/react-query/model";
import { useAuthentication } from "@/providers/account.context";
import { useInfiniteQuery } from "@tanstack/react-query";

export const GRACE_PERIOD_MS = 9500;
export function useModels({ limit = MODEL_QUERY_LIMIT }: { limit?: number }) {
  const { identityToken } = useAuthentication();

  return useInfiniteQuery({
    queryKey: ["get-models", identityToken],
    enabled: () => {
      if (!identityToken) return false;
      return identityToken?.length > 0;
    },
    queryFn: ({ pageParam = 0 }) => {
      return getModels({
        accessToken: identityToken ?? "",
        pagination: {
          limit,
          offset: pageParam,
          orderBy: "createdAt",
          orderDirection: "desc",
        },
      });
    },
    getNextPageParam: (lastPage) => {
      const { metadata } = lastPage;
      const totalItems = metadata.numElements ?? 1;
      const currentOffset = metadata.offset ?? 0;
      const currentLimit = metadata.limit ?? 10;
      // Calculate if there are more items to fetch
      const nextOffset = currentOffset + currentLimit;
      // If we've fetched all items, return undefined to stop pagination
      if (nextOffset >= totalItems) {
        return undefined;
      }
      // Return the next offset
      return nextOffset;
    },
    initialPageParam: 0,
  });
}
