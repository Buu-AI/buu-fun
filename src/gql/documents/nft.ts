import { gql } from "graphql-request";

export const GenerateNftMutation = gql`
  mutation GenerateNft(
    $description: String!
    $name: String!
    $modelId: String!
    $attributes: [NftAttributeInput!]
    $sessionId: String
    $symbol: String
  ) {
    generateNft(
      description: $description
      name: $name
      modelId: $modelId
      attributes: $attributes
      sessionId: $sessionId
      symbol: $symbol
    ) {
      ... on ToolRequestConfirmation {
        messages {
          _id
          createdAt
          updatedAt
          teamId
          sessionId
          role
          content {
            text
            models {
              _id
              teamId
              sessionId
              messageId
              image {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                status
                percentage
                createdAt
                updatedAt
              }
              mesh {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                status
                percentage
                createdAt
                updatedAt
              }
              optimizedMesh {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                status
                percentage
                createdAt
                updatedAt
              }
              multiview {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                status
                percentage
                createdAt
                updatedAt
              }
              transformedMultiview {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                status
                percentage
                createdAt
                updatedAt
              }
              texturedMesh {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                status
                percentage
                createdAt
                updatedAt
              }
              texture {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                status
                percentage
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              prompt
              style
              nftId
            }
            medias {
              alt
              keyS3
              size
              type
              url
              _id
              teamId
              sessionId
              messageId
              status
              percentage
              createdAt
              updatedAt
            }
            nfts {
              _id
              teamId
              genRequestId
              messageId
              modelId
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
          }
          toolRequest {
            _id
            teamId
            sessionId
            messageId
            type
            priority
            payload
            credits
            status
            createdAt
            updatedAt
          }
        }
        toolRequest {
          _id
          teamId
          sessionId
          messageId
          type
          priority
          payload
          credits
          status
          createdAt
          updatedAt
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
