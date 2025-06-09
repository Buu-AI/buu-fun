import { gql } from "graphql-request";

export const GenerateCustomPortalSessionQuery = gql`
  query GenerateCustomerPortalSession {
    generateCustomerPortalSession {
      customerPortalLink
      planKey
    }
  }
`;

export const GetSubscriptionPaymentLinkQuery = gql`
  query GenerateSubscriptionPaymentLink($planKey: StripeSubscriptionPlanKeys!) {
    generateSubscriptionPaymentLink(planKey: $planKey) {
      ... on SuscriptionPaymentLinkOutput {
        url
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GenerateCreditsPackagePaymentLinkQuery = gql`
  query GenerateCreditsPackagePaymentLink($pkg: CreditsPackageKeys!) {
    generateCreditsPackagePaymentLink(pkg: $pkg) {
      ... on Url {
        url
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
