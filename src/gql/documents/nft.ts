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
                createdAt
                updatedAt
              }
              views {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
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
              createdAt
              updatedAt
            }
            nfts {
              _id
              teamId
              modelId
              status
              metadata {
                name
                symbol
                description
                image
                external_url
                animation_url
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
            references
            details {
              ... on GenerateModelsDetails {
                texture
                numberOfFaces
                numberOfModels
              }
              ... on GenerateModelsFromPromptDetails {
                texture
                numberOfFaces
                numberOfModels
                prompt
                style
              }
              ... on GenerateModelsFromImageDetails {
                texture
                numberOfFaces
                numberOfModels
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
                  createdAt
                  updatedAt
                }
              }
              ... on GenerateModelsFromReferencesDetails {
                texture
                numberOfFaces
                numberOfModels
                images {
                  alt
                  keyS3
                  size
                  type
                  url
                  _id
                  teamId
                  sessionId
                  messageId
                  createdAt
                  updatedAt
                }
                instructions
              }
              ... on GenerateModelsFromEditDetails {
                texture
                numberOfFaces
                numberOfModels
                edit
                model {
                  _id
                  teamId
                  sessionId
                  messageId
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
                    createdAt
                    updatedAt
                  }
                  views {
                    alt
                    keyS3
                    size
                    type
                    url
                    _id
                    teamId
                    sessionId
                    messageId
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
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                  prompt
                  style
                  nftId
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
                    message
                    percentage
                  }
                }
              }
              ... on GenerateNftDetails {
                name
                description
                symbol
                attributes {
                  trait_type
                  value
                }
              }
            }
            credits
            status
            createdAt
            updatedAt
            message
            percentage
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
          references
          details {
            ... on GenerateModelsDetails {
              texture
              numberOfFaces
              numberOfModels
            }
            ... on GenerateModelsFromPromptDetails {
              texture
              numberOfFaces
              numberOfModels
              prompt
              style
            }
            ... on GenerateModelsFromImageDetails {
              texture
              numberOfFaces
              numberOfModels
            }
            ... on GenerateModelsFromReferencesDetails {
              texture
              numberOfFaces
              numberOfModels
              images {
                alt
                keyS3
                size
                type
                url
                _id
                teamId
                sessionId
                messageId
                createdAt
                updatedAt
              }
              instructions
            }
            ... on GenerateModelsFromEditDetails {
              texture
              numberOfFaces
              numberOfModels
              edit
              model {
                _id
                teamId
                sessionId
                messageId
                createdAt
                updatedAt
                prompt
                style
                nftId
              }
            }
            ... on GenerateNftDetails {
              name
              description
              symbol
              attributes {
                trait_type
                value
              }
            }
          }
          credits
          status
          createdAt
          updatedAt
          message
          percentage
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
      ... on HandledError {
        code
        message
      }
    }
  }
`;
