import { Plans } from "@/constants/subscription/subscription-plans";
import { serverRequest } from "@/gql/client";
import {
  GetSubscriptionPaymentLinkQuery,
  GenerateCustomPortalSessionQuery,
} from "@/gql/documents/stripe";
import {
  GenerateSubscriptionPaymentLinkQuery,
  GenerateSubscriptionPaymentLinkQueryVariables,
  GenerateCustomerPortalSessionQuery as TGenerateCustomerPortalSessionQuery,
  GenerateCustomerPortalSessionQueryVariables as TGenerateCustomerPortalSessionQueryVariables,
} from "@/gql/types/graphql";
import { getAuthorization, getPlanEnum } from "../utils";
import { AccessToken } from "./user";

export async function getPaymentLinkUrl({
  accessToken,
  planKey,
}: AccessToken & { planKey: Plans }) {
  const data = await serverRequest<
    GenerateSubscriptionPaymentLinkQuery,
    GenerateSubscriptionPaymentLinkQueryVariables
  >(
    GetSubscriptionPaymentLinkQuery,
    {
      planKey: getPlanEnum(planKey),
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.generateSubscriptionPaymentLink) {
    throw new Error(data.generateSubscriptionPaymentLink.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.generateSubscriptionPaymentLink;
}

export async function manageUserSubscription({ accessToken }: AccessToken) {
  const data = await serverRequest<
    TGenerateCustomerPortalSessionQuery,
    TGenerateCustomerPortalSessionQueryVariables
  >(
    GenerateCustomPortalSessionQuery,
    {},
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if (!data.generateCustomerPortalSession.planKey) {
    throw new Error("Failed to get the plan Key", {
      cause: "INVALID_DATA",
    });
  }

  return data.generateCustomerPortalSession;
}
