import { gql } from "graphql-request";

export const GenerateImageMutation = gql`
  mutation GenerateImage($subthreadId: String!) {
    generateImage(subthreadId: $subthreadId) {
      ... on GenRequest {
        _id
        subthreadId
        teamId
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
        teamId
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
          teamId
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
          teamId
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
        teamId
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
          teamId
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
          tokenized
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
        sessionId
        title
        teamId
        models {
          alt
          keyS3
          size
          type
          url
          image {
            alt
            keyS3
            size
            type
            url
          }
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
          sessionId
          title
          teamId
          models {
            alt
            keyS3
            size
            type
            url
            image {
              alt
              keyS3
              size
              type
              url
            }
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
  mutation CreateShareableBoard($sessionId: String!) {
    createShareableBoard(sessionId: $sessionId) {
      ... on ShareableBoard {
        _id
        sessionId
        title
        teamId
        models {
          alt
          keyS3
          size
          type
          url
          image {
            alt
            keyS3
            size
            type
            url
          }
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
        sessionId
        title
        teamId
        models {
          alt
          keyS3
          size
          type
          url
          image {
            alt
            keyS3
            size
            type
            url
          }
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
        sessionId
        title
        teamId
        models {
          alt
          keyS3
          size
          type
          url
          image {
            alt
            keyS3
            size
            type
            url
          }
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

export const GetTokenOverviewQuery = gql`
  query GetTokenOverview {
    getTokenOverview {
      ... on BirdeyeTokenOverviewResponse {
        address
        description
        price
        totalSupply
        marketCap
        fullyDilutedValue
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetTokenHistoricalPriceQuery = gql`
  query GetTokenHistoricalPriceResult($time: BirdeyeHistoricalDataTimeTypes!) {
    getTokenHistoricalPriceResult(time: $time) {
      ... on BirdeyeHistoricalPriceResponse {
        items {
          unixTime
          value
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetStakingGlobalDataQuery = gql`
  query GetStakingGlobalData {
    getStakingGlobalData {
      ... on GetStakingGlobalData {
        apr
        totalEffectiveAmount
        totalRewardsPerDay
        totalAmount
        tokenMint {
          address
          decimals
          supply
          isInitialized
          freezeAuthority
          mintAuthority
        }
        stakeEntries {
          publicKey
          account {
            authority
            amount
            duration
            effectiveAmount
            stakePool
            nonce
            payer
            createdTs
            closedTs
            unstakeTs
            priorTotalEffectiveStake
            buffer
          }
        }
        rewardPools {
          publicKey
          account {
            authority
            bump
            buffer
            creator
            claimedAmount
            fundedAmount
            lastClaimPeriod
            lastRewardAmount
            lastRewardPeriod
            lastAmountUpdateTs
            lastPeriodUpdateTs
            permissionless
            rewardAmount
            rewardPeriod
            stakePool
            createdTs
            mint
            nonce
            vault
          }
        }
        circulatingSupply
        totalStakedByUsers
        rewardEntries {
          publicKey
          account {
            rewardPool
            stakeEntry
            createdTs
            accountedAmount
            claimedAmount
            lastAccountedTs
            lastRewardAmount
            lastRewardPeriod
            buffer
          }
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetNftsQuery = gql`
  query GetNfts($pagination: Pagination, $filters: NftFilter) {
    getNfts(pagination: $pagination, filters: $filters) {
      ... on NftPage {
        items {
          _id
          teamId
          genRequestId
          messageId
          status
          metadata {
            name
            symbol
            description
            image
            external_url
            animation_url
            attributes {
              trait_type
              value
            }
            properties {
              files {
                uri
                type
                cdn
              }
              category
            }
          }
          mintAddress
          collectionAddress
          creator
          tokenAddress
          tokenStandard
          collectionRoyalties
          chain
          updatedAt
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

export const GenerateNftMutation = gql`
  mutation GenerateNft(
    $description: String!
    $name: String!
    $messageId: String!
  ) {
    generateNft(description: $description, name: $name, messageId: $messageId) {
      ... on Nft {
        _id
        teamId
        genRequestId
        messageId
        status
        metadata {
          name
          symbol
          description
          image
          external_url
          animation_url
          attributes {
            trait_type
            value
          }
          properties {
            files {
              uri
              type
              cdn
            }
            category
          }
        }
        mintAddress
        collectionAddress
        creator
        tokenAddress
        tokenStandard
        collectionRoyalties
        chain
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

export const GetNftQuery = gql`
  query GetNft($nftId: String!) {
    getNft(nftId: $nftId) {
      ... on Nft {
        _id
        teamId
        genRequestId
        messageId
        status
        metadata {
          name
          symbol
          description
          image
          external_url
          animation_url
          attributes {
            trait_type
            value
          }
          properties {
            files {
              uri
              type
              cdn
            }
            category
          }
        }
        mintAddress
        collectionAddress
        creator
        tokenAddress
        tokenStandard
        collectionRoyalties
        chain
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

export const GetPrices = gql`
  query GetPrices {
    getPrices {
      ... on Prices {
        buu
        sol
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetMessages = gql`
  query GetMessages(
    $sessionId: String!
    $filters: MessageFilter
    $pagination: Pagination
  ) {
    getMessages(
      sessionId: $sessionId
      filters: $filters
      pagination: $pagination
    ) {
      ... on MessagesPage {
        items {
          _id
          createdAt
          updatedAt
          teamId
          sessionId
          role
          status
          content {
            text
            model {
              alt
              keyS3
              size
              type
              url
              image {
                alt
                keyS3
                size
                type
                url
              }
            }
            images {
              alt
              keyS3
              size
              type
              url
            }
          }
          toolRequest {
            id
            type
            priority
            payload
          }
          nftId
          credits
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

export const GetSessions = gql`
  query GetSessions($pagination: Pagination, $filters: SessionFilter) {
    getSessions(pagination: $pagination, filters: $filters) {
      ... on SessionsPage {
        items {
          _id
          createdAt
          updatedAt
          teamId
          title
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

export const SendChatMessage = gql`
  mutation SendMessage(
    $content: String!
    $imageUrls: [String!]
    $sessionId: String
  ) {
    sendMessage(
      content: $content
      imageUrls: $imageUrls
      sessionId: $sessionId
    ) {
      ... on Messages {
        items {
          _id
          createdAt
          updatedAt
          teamId
          sessionId
          role
          status
          content {
            text
            model {
              alt
              keyS3
              size
              type
              url
              image {
                alt
                keyS3
                size
                type
                url
              }
            }
            images {
              alt
              keyS3
              size
              type
              url
            }
          }
          toolRequest {
            id
            type
            priority
            payload
          }
          nftId
          credits
        }
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const ConfirmToolMessage = gql`
  mutation ConfirmToolMessage($messageId: String!) {
    confirmToolMessage(messageId: $messageId) {
      ... on Message {
        _id
        createdAt
        updatedAt
        teamId
        sessionId
        role
        status
        content {
          text
          model {
            alt
            keyS3
            size
            type
            url
            image {
              alt
              keyS3
              size
              type
              url
            }
          }
          images {
            alt
            keyS3
            size
            type
            url
          }
        }
        toolRequest {
          id
          type
          priority
          payload
        }
        credits
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const CancelToolMessage = gql`
  mutation CancelToolMessage($messageId: String!) {
    cancelToolMessage(messageId: $messageId) {
      ... on Message {
        _id
        createdAt
        updatedAt
        teamId
        sessionId
        role
        status
        content {
          text
          model {
            alt
            keyS3
            size
            type
            url
            image {
              alt
              keyS3
              size
              type
              url
            }
          }
          images {
            alt
            keyS3
            size
            type
            url
          }
        }
        toolRequest {
          id
          type
          priority
          payload
        }
        nftId
        credits
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
