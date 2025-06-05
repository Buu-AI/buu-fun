import { Model, ToolRequest } from "@/gql/types/graphql";
import { Maybe } from "@/types";

export function getModelBasedOnPriority(item: Model) {
  const texturedModel = item.texturedMesh?.url;
  const optimizedModel = item.optimizedMesh?.url;
  const basicMesh = item.mesh?.url;

  if (texturedModel) return texturedModel;

  if (optimizedModel) return optimizedModel;

  if (basicMesh) return basicMesh;
}

export function getModelMessagesAndPercentage(
  toolRequest?: Maybe<ToolRequest>,
) {
  return {
    percentage: toolRequest?.percentage,
    message: toolRequest?.message,
    status: toolRequest?.status,
  };
}
