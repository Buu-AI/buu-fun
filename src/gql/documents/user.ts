import { gql } from "graphql-request";

export const GetMyCreditsQuery = gql`
  query GetMyCredits {
    getMyCredits {
      ... on Credit {
        _id
        available
        pending
        confirmed
        updatedAt
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const RedeemVoucherMutation = gql`
  mutation RedeemVoucher($code: String!) {
    redeemVoucher(code: $code) {
      ... on Credit {
        _id
        available
        pending
        confirmed
        updatedAt
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
