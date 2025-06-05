import { gql } from "graphql-request";

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
            message
            percentage
          }
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

export const CancelToolRequest = gql`
  mutation CancelToolRequest($requestId: String!) {
    cancelToolRequest(requestId: $requestId) {
      ... on ToolRequest {
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
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GenerateModelFromImageMutation = gql`
  mutation GenerateModelFromImage(
    $sessionId: String
    $numberOfModels: Float
    $imageId: String!
    $texturized: Boolean
  ) {
    generateModelFromImage(
      sessionId: $sessionId
      numberOfModels: $numberOfModels
      imageId: $imageId
      texturized: $texturized
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

export const EditModelMutation = gql`
  mutation EditModel(
    $modelId: String!
    $edit: String!
    $sessionId: String
    $numberOfModels: Float
    $texturized: Boolean
  ) {
    editModel(
      modelId: $modelId
      edit: $edit
      sessionId: $sessionId
      numberOfModels: $numberOfModels
      texturized: $texturized
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

export const SendChatMessage = gql`
  mutation SendMessage(
    $sessionId: String!
    $content: String!
    $imageUrls: [String!]
  ) {
    sendMessage(
      sessionId: $sessionId
      content: $content
      imageUrls: $imageUrls
    ) {
      ... on Messages {
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
            message
            percentage
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

export const ConfirmToolRequest = gql`
  mutation ConfirmToolRequest($requestId: String!) {
    confirmToolRequest(requestId: $requestId) {
      ... on ToolRequest {
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
      ... on HandledError {
        code
        message
      }
    }
  }
`;

export const GetModels = gql`
  query GetModels($pagination: Pagination, $filters: ModelFilter) {
    getModels(pagination: $pagination, filters: $filters) {
      ... on ModelPage {
        items {
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
