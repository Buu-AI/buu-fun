import { gql } from "graphql-request";

export const ConvertModel = gql`
  mutation Convert(
    $outputFormat: ConvertOutputFormat!
    $mesh: ConvertMesh!
    $modelId: String!
  ) {
    convert(outputFormat: $outputFormat, mesh: $mesh, modelId: $modelId) {
      ... on Model {
        _id
        teamId
        createdAt
        updatedAt
        obj {
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
        }
        messageId
      }
      ... on HandledError {
        code
        message
      }
    }
  }
`;
