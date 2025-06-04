import { gql } from "graphql-request";

export const GetReferralRewardsQuery = gql`
  query GetReferralRewards(
    $pagination: Pagination
    $filters: ReferralRewardFilter
  ) {
    getReferralRewards(pagination: $pagination, filters: $filters) {
      ... on ReferralRewardPage {
        items {
          _id
          referral
          referralName
          referee
          creditsPurchaseId
          tokens
          decimals
          transactionHash
          createdAt
        }
        metadata {
          limit
          offset
          orderBy
          orderDirection
          numElements
          total
          page
          pages
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetReferralAccountQuery = gql`
  query GetReferralAccount {
    getReferralAccount {
      ... on ReferralAccount {
        _id
        referralCode
        refereeCode
        referee {
          _id
          referralCode
          refereeCode
          linkedAt
          createdAt
        }
        linkedAt
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const LinkReferralAccountMutation = gql`
  mutation LinkReferralAccount($code: String!) {
    linkReferralAccount(code: $code) {
      ... on ReferralAccount {
        _id
        referralCode
        refereeCode
        referee {
          _id
          referralCode
          refereeCode
          linkedAt
          createdAt
        }
        linkedAt
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
