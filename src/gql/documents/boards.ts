import { gql } from "graphql-request";

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
