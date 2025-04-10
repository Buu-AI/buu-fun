import {
  getUserReferral,
  getUserReferralsData,
} from "@/lib/react-query/referrals";
import { useAuthentication } from "@/providers/account.context";
import { useQuery } from "@tanstack/react-query";

export function useUserReferral() {
  const { identityToken } = useAuthentication();
  return useQuery({
    queryKey: ["auth", identityToken],
    queryFn: () => {
      if (!identityToken) return;
      return getUserReferral({ accessToken: identityToken });
    },
  });
}

export function useAllReferrals() {
  const { identityToken } = useAuthentication();

  return useQuery({
    queryKey: ["get-user-referrals", identityToken],
    queryFn: () => {
      if (!identityToken) return;
      return getUserReferralsData({ accessToken: identityToken });
    },
  });
}

// export function used() {
//   const { identityToken, address, isAuthenticated, loading } =
//     useAuthentication();
//   return useQuery({
//     queryKey: ["auth", identityToken],
//     queryFn: () => {
//       if (!identityToken) return;
//       return getUserReferral({ accessToken: identityToken });
//     },
//   });
// }
