import { isInProgress } from "@/lib/helpers/status-checker";
import { getSubThreadRequests } from "@/lib/react-query/threads-v2";
import { useAuthentication } from "@/providers/account.context";
import { useWallet } from "@/providers/wallet.context";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "./redux";
import { getSubThreadsMedia } from "@/lib/redux/selectors/chat";

export default function useMediaResponse({
  subThreadId,
}: {
  subThreadId: string;
}) {
  const { getAccessToken } = useAuthentication();
  const { address } = useWallet();
  const MediaData = useAppSelector((state) =>
    getSubThreadsMedia(state, state.chat.genRequest, subThreadId),
  );
  const accessToken = getAccessToken(address ?? "");

  return useQuery({
    queryKey: [subThreadId, "get-sub-thread-requests"],
    queryFn: async () => {
      return await getSubThreadRequests({
        accessToken: accessToken ?? "",
        subThreadId,
      });
    },
    refetchInterval(query) {
      if (!query.state.data || !query.state.data?.length) return 3500;
      const inProgressFoundInQueryState = query.state.data?.find((item) =>
        isInProgress(item.status),
      );

      const isProgressFoundInReduxState = MediaData.find(
        (item) => item.isGenerating,
      );
      return isProgressFoundInReduxState || inProgressFoundInQueryState
        ? 4500
        : false;
    },
  });
}
