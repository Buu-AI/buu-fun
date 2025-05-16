import { MESSAGE_QUERY_LIMIT } from "@/constants/infinity.config";
import { isToolCallGenerating } from "@/lib/helpers/status-checker";
import { getMessages } from "@/lib/react-query/threads.v3";
import { useAuthentication } from "@/providers/account.context";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";

const GRACE_PERIOD_MS = 9500;
export function useChatMessage({
  sessionId,
  limit = MESSAGE_QUERY_LIMIT,
}: {
  sessionId: string;
  limit?: number;
}) {
  const { identityToken } = useAuthentication();
  const lastJobActiveTimestamp = useRef<number | null>(null);

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
    refetchInterval({ state }) {
      const currentTime = Date.now();

      // Check if we have any active jobs
      const hasActiveJob = state.data?.pages.some((page) =>
        page.items.some((item) => isToolCallGenerating(item.status)),
      );

      if (hasActiveJob) {
        // If we have an active job, update the timestamp
        lastJobActiveTimestamp.current = currentTime;
        console.log("refetching period 5sec - active job");
        return 5000;
      }

      // If no active jobs, check if we're within the grace period
      if (
        lastJobActiveTimestamp.current &&
        currentTime - lastJobActiveTimestamp.current < GRACE_PERIOD_MS
      ) {
        console.log("refetching period 1sec - grace period");
        return 3000; // Stay at 5 second intervals during grace period
      }

      // If we're outside the grace period, revert to slower interval
      console.log("refetching period 15sec");
      return 15000;
    },
  });
}
