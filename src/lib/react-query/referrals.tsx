import { serverRequest } from "@/gql/client";
import {
  GetReferralAccountQuery,
  GetReferralRewardsQuery,
  LinkReferralAccountMutation,
} from "@/gql/documents/referrals";

import {
  OrderDirection,
  GetReferralRewardsQuery as TGetReferralRewardsQuery,
  GetReferralRewardsQueryVariables as TGetReferralRewardsQueryVariables,
  MutationLinkReferralAccountArgs as TMutationLinkReferralAccountArgs,
  GetReferralAccountQuery as TReferralAccount,
  ReferralAccountResult as TReferralAccountResult,
} from "@/gql/types/graphql";

import { getAuthorization } from "../utils";
import { AccessToken } from "./user";

export async function getUserReferral({ accessToken }: AccessToken) {
  const data = await serverRequest<TReferralAccount>(
    GetReferralAccountQuery,
    {},
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.getReferralAccount) {
    throw new Error(data.getReferralAccount.message, { cause: "INVALID_DATA" });
  }

  return data.getReferralAccount;
}

export async function linkReferralMutation({
  accessToken,
  code,
}: AccessToken & { code: string }) {
  const data = await serverRequest<
    TReferralAccountResult,
    TMutationLinkReferralAccountArgs
  >(
    LinkReferralAccountMutation,
    {
      code,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data) {
    throw new Error(data.message, { cause: "INVALID_DATA" });
  }
  return data;
}

export async function getUserReferralsData({ accessToken }: AccessToken) {
  const data = await serverRequest<
    TGetReferralRewardsQuery,
    TGetReferralRewardsQueryVariables
  >(
    GetReferralRewardsQuery,
    {
      pagination: {
        orderBy: "createdAt",
        orderDirection: OrderDirection.Desc,
      },
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getReferralRewards) {
    throw new Error(data.getReferralRewards.message, { cause: "INVALID_DATA" });
  }

  return data.getReferralRewards;
}
