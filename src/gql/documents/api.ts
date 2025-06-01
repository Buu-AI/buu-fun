import { gql } from "graphql-request";

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
