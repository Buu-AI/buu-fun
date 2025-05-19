import { getNftsQuery } from "@/lib/react-query/nfts";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";

export default function useUserNfts() {
  const { identityToken, address, isAuthenticated, loading } =
    useAuthentication();
  return useQuery({
    queryKey: ["get-user-nfts", address],
    enabled: !loading && isAuthenticated,
    queryFn: async () => {
      if (!identityToken || !address) return;
      return await getNftsQuery({
        address: address,
        accessToken: identityToken ?? "",
      });
    },
    refetchInterval: 150_000,
  });
}
