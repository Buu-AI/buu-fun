import { OrderDirection, SearchPaginatedApiKeysQueryVariables as TSearchPaginatedApiKeysQueryVariables } from "@/gql/types/graphql";
import { getApiKeys } from "@/lib/react-query/api-key";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";

export function useRetrieveApikeys(
  input: TSearchPaginatedApiKeysQueryVariables = {
    pagination: {
      orderBy: "createdAt",
      orderDirection: OrderDirection.Desc,
    },
  },
) {
  const { identityToken: accessToken } = useAuthentication();
  return useQuery({
    queryKey: ["retrieve-api-keys", JSON.stringify(input)],
    enabled: accessToken !== null,
    queryFn: () => {
      if (!accessToken) return;
      return getApiKeys({ accessToken, input: input });
    },
  });
}
