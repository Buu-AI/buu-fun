import { gql } from "graphql-request";

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
