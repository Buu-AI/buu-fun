// import { GetMyCreditsQuery } from "@/gql/documents/creative-engine";

import { serverRequest } from "@/gql/client";
import {
  GetMyCreditsQuery,
  RedeemVoucherMutation,
} from "@/gql/documents/boards";

import {
  GetMyCreditsQueryVariables,
  GetMyCreditsQuery as TGetMyCreditsQuery,
  RedeemVoucherMutation as TRedeemVoucherMutation,
  RedeemVoucherMutationVariables as TRedeemVoucherMutationVariables,
} from "@/gql/types/graphql";

import { getAuthorization } from "../utils";

// import {GetMyCreditsQuery} from '@/gql/types'
export type AccessToken = {
  accessToken: string;
};
export async function getUserCredits({ accessToken }: AccessToken) {
  const data = await serverRequest<
    TGetMyCreditsQuery,
    GetMyCreditsQueryVariables
  >(
    GetMyCreditsQuery,
    {},
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getMyCredits) {
    throw new Error(data.getMyCredits.message, { cause: "INVALID_DATA" });
  }
  return data.getMyCredits;
}

export async function addCreditsMutation({
  accessToken,
  code,
}: AccessToken & { code: string }) {
  const data = await serverRequest<
    TRedeemVoucherMutation,
    TRedeemVoucherMutationVariables
  >(
    RedeemVoucherMutation,
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

  if ("code" in data?.redeemVoucher) {
    throw new Error(data.redeemVoucher.message, { cause: "INVALID_DATA" });
  }
  return data.redeemVoucher;
}
