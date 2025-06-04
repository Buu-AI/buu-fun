import { gql } from "graphql-request";

export const GetUserShareableBoardsQuery = gql`
  query GetUserShareableBoard(
    $filters: ShareableBoardFilter
    $pagination: Pagination
  ) {
    getUserShareableBoard(filters: $filters, pagination: $pagination) {
      ... on ShareableBoardPage {
        items {
          _id
          sessionId
          title
          teamId
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

export const GetShareableBoardQuery = gql`
  query GetShareableBoard($getShareableBoardId: String!) {
    getShareableBoard(id: $getShareableBoardId) {
      ... on ShareableBoard {
        _id
        sessionId
        title
        teamId
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
