import { NFT_QUERY_LIMIT } from "@/constants/infinity.config";
import { getNftsQuery } from "@/lib/react-query/nfts";
import { useAuthentication } from "@/providers/account.context";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useUserNfts({
  limit = NFT_QUERY_LIMIT,
}: {
  limit?: number;
}) {
  const { identityToken, address, isAuthenticated, loading } =
    useAuthentication();

  return useInfiniteQuery({
    queryKey: ["get-user-nfts-infinity", limit],
    enabled: !loading && isAuthenticated,
    queryFn: async ({ pageParam }) => {
      if (!identityToken || !address) return;
      return await getNftsQuery({
        accessToken: identityToken ?? "",
        pagination: {
          limit,
          offset: pageParam,
          orderBy: "createdAt",
          orderDirection: "asc",
        },
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const metadata = lastPage?.metadata;
      const totalItems = metadata?.numElements ?? 1;
      const currentOffset = metadata?.offset ?? 0;
      const currentLimit = metadata?.limit ?? NFT_QUERY_LIMIT;

      // Calculate if there are more items to fetch
      const nextOffset = currentOffset + currentLimit;

      // If we've fetched all items, return undefined to stop pagination
      if (nextOffset >= totalItems) {
        return undefined;
      }
      // Return the next offset
      return nextOffset;
    },
  });
}
