import { gql } from "graphql-request";

export const GenerateSubthreadMutation = gql`
  mutation GenerateSubthread(
    $prompt: String!
    $style: SubthreadStyle
    $threadId: String
    $imageUrl: String
    $numImages: Float
    $strength: Float
  ) {
    generateSubthread(
      prompt: $prompt
      style: $style
      threadId: $threadId
      imageUrl: $imageUrl
      numImages: $numImages
      strength: $strength
    ) {
      ... on Subthread {
        _id
        address
        createdAt
        updatedAt
        threadId
        prompt
        style
        imageUrl
        strength
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GenerateImageMutation = gql`
  mutation GenerateImage($subthreadId: String!) {
    generateImage(subthreadId: $subthreadId) {
      ... on GenRequest {
        _id
        subthreadId
        address
        status
        metadata
        type
        images {
          alt
          keyS3
          size
          type
          url
        }
        model_mesh {
          alt
          keyS3
          size
          type
          url
        }
        timings {
          inference
        }
        credits
        createdAt
        updatedAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GenerateModelMutation = gql`
  mutation GenerateModel(
    $subthreadId: String!
    $imageRequestId: String
    $imageUrl: String!
  ) {
    generateModel(
      subthreadId: $subthreadId
      imageRequestId: $imageRequestId
      imageUrl: $imageUrl
    ) {
      ... on GenRequest {
        _id
        subthreadId
        address
        status
        metadata
        type
        images {
          alt
          keyS3
          size
          type
          url
        }
        model_mesh {
          alt
          keyS3
          size
          type
          url
        }
        timings {
          inference
        }
        credits
        createdAt
        updatedAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetThreadsQuery = gql`
  query GetThreads($pagination: Pagination, $filters: ThreadFilter) {
    getThreads(pagination: $pagination, filters: $filters) {
      ... on ThreadsPage {
        items {
          _id
          createdAt
          updatedAt
          address
          title
          style
        }
        metadata {
          limit
          offset
          orderBy
          orderDirection
          numElements
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

export const GetSubthreadsQuery = gql`
  query GetSubthreads($pagination: Pagination, $filters: SubthreadFilter) {
    getSubthreads(pagination: $pagination, filters: $filters) {
      ... on HandledError {
        code
        message
      }
      ... on SubthreadsPage {
        items {
          _id
          address
          createdAt
          updatedAt
          address
          threadId
          prompt
          style
          imageUrl
          strength
        }
        metadata {
          limit
          offset
          orderBy
          orderDirection
          numElements
          page
          pages
        }
      }
    }
  }
`;

export const GetSubthreadQuery = gql`
  query GetSubthread($subthreadId: String!) {
    getSubthread(subthreadId: $subthreadId) {
      ... on Subthread {
        _id
        address
        createdAt
        updatedAt
        threadId
        prompt
        style
        imageUrl
        strength
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetSubthreadGenRequestsQuery = gql`
  query GetSubthreadGenRequests($subthreadId: String!) {
    getSubthreadGenRequests(subthreadId: $subthreadId) {
      ... on GenRequestsPage {
        items {
          _id
          subthreadId
          address
          status
          metadata
          type
          images {
            alt
            keyS3
            size
            type
            url
          }
          model_mesh {
            alt
            keyS3
            size
            type
            url
          }
          timings {
            inference
          }
          credits
          createdAt
          updatedAt
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

export const GeneratePresignedUrlQuery = gql`
  mutation GeneratePresignedUrl($input: GeneratePresignedUrlInput!) {
    generatePresignedUrl(input: $input) {
      ... on GeneratePresignedUrl {
        presignedUrl
        url
        key
        expiresIn
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

export const LinkReferralAccountMutation = gql`
  mutation LinkReferralAccount($code: String!) {
    linkReferralAccount(code: $code) {
      ... on ReferralAccount {
        _id
        referralCode
        refereeCode
        referee {
          _id
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

export const GetShareableBoardQuery = gql`
  query GetShareableBoard($getShareableBoardId: String!) {
    getShareableBoard(id: $getShareableBoardId) {
      ... on ShareableBoard {
        _id
        threadId
        title
        creator
        ideas {
          subthreadId
          prompt
          style
          genRequests {
            genRequestId
            type
            images {
              alt
              keyS3
              size
              type
              url
            }
            model_mesh {
              alt
              keyS3
              size
              type
              url
            }
            createdAt
            metadata
          }
          createdAt
        }
        isPublic
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetUserShareableBoardsQuery = gql`
  query GetUserShareableBoard(
    $pagination: Pagination
    $filters: ShareableBoardFilter
  ) {
    getUserShareableBoard(pagination: $pagination, filters: $filters) {
      ... on ShareableBoardPage {
        items {
          _id
          threadId
          title
          creator
          ideas {
            subthreadId
            prompt
            style
            genRequests {
              genRequestId
              type
              images {
                alt
                keyS3
                size
                type
                url
              }
              model_mesh {
                alt
                keyS3
                size
                type
                url
              }
              createdAt
              metadata
            }
            createdAt
          }
          isPublic
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

export const CreateShareableBoardMutation = gql`
  mutation CreateShareableBoard($threadId: String!) {
    createShareableBoard(threadId: $threadId) {
      ... on ShareableBoard {
        _id
        threadId
        title
        creator
        ideas {
          subthreadId
          prompt
          style
          genRequests {
            genRequestId
            type
            images {
              alt
              keyS3
              size
              type
              url
            }
            model_mesh {
              alt
              keyS3
              size
              type
              url
            }
            createdAt
            metadata
          }
          createdAt
        }
        isPublic
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const UpdateShareableBoardVisibilityMutation = gql`
  mutation UpdateShareableBoardVisibility(
    $isPublic: Boolean!
    $shareableBoardId: String!
  ) {
    updateShareableBoardVisibility(
      isPublic: $isPublic
      shareableBoardId: $shareableBoardId
    ) {
      ... on ShareableBoard {
        _id
        threadId
        title
        creator
        ideas {
          subthreadId
          prompt
          style
          genRequests {
            genRequestId
            type
            images {
              alt
              keyS3
              size
              type
              url
            }
            model_mesh {
              alt
              keyS3
              size
              type
              url
            }
            createdAt
            metadata
          }
          createdAt
        }
        isPublic
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const DeleteShareableBoardMutation = gql`
  mutation DeleteShareableBoard($shareableBoardId: String!) {
    deleteShareableBoard(shareableBoardId: $shareableBoardId) {
      ... on ShareableBoard {
        _id
        threadId
        title
        creator
        ideas {
          subthreadId
          prompt
          style
          genRequests {
            genRequestId
            type
            images {
              alt
              keyS3
              size
              type
              url
            }
            model_mesh {
              alt
              keyS3
              size
              type
              url
            }
            createdAt
            metadata
          }
          createdAt
        }
        isPublic
        createdAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const CreateApiKeyMutation = gql`
  mutation CreateApiKey($name: String!, $expiresIn: ExpirationInput) {
    createApiKey(name: $name, expiresIn: $expiresIn) {
      ... on ApiKey {
        _id
        teamId
        name
        key
        permissions
        createdAt
        updatedAt
        expiresAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const SearchPaginatedApiKeysQuery = gql`
  query SearchPaginatedApiKeys(
    $pagination: Pagination
    $filters: ApiKeyFilter
  ) {
    searchPaginatedApiKeys(pagination: $pagination, filters: $filters) {
      ... on ApiKeyPage {
        items {
          _id
          teamId
          name
          key
          permissions
          createdAt
          updatedAt
          expiresAt
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

export const DeleteApiKeyMutation = gql`
  mutation DeleteApiKey($deleteApiKeyId: String!) {
    deleteApiKey(id: $deleteApiKeyId) {
      ... on ApiKey {
        _id
        teamId
        name
        key
        permissions
        createdAt
        updatedAt
        expiresAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const RotateApiKeyMutation = gql`
  mutation RotateApiKey($rotateApiKeyId: String!) {
    rotateApiKey(id: $rotateApiKeyId) {
      ... on ApiKey {
        _id
        teamId
        name
        key
        permissions
        createdAt
        updatedAt
        expiresAt
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
