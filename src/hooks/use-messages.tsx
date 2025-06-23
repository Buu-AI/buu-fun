import { MESSAGE_QUERY_LIMIT } from "@/constants/infinity.config";
import { getMessages } from "@/lib/react-query/threads.v3";
import { useAuthentication } from "@/providers/account.context";
import { useInfiniteQuery } from "@tanstack/react-query";

export const GRACE_PERIOD_MS = 9500;
export function useChatMessage({
  sessionId,
  limit = MESSAGE_QUERY_LIMIT,
}: {
  sessionId: string;
  limit?: number;
}) {
  const { identityToken } = useAuthentication();

  return useInfiniteQuery({
    queryKey: ["get-messages", sessionId, identityToken],
    enabled: () => {
      if (!identityToken) return false;
      return identityToken?.length > 0;
    },
    queryFn: ({ pageParam = 0 }) => {
      return getMessages({
        accessToken: identityToken ?? "",
        sessionId,
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
