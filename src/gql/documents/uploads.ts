import { gql } from "graphql-request";

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
