import { Model, ToolRequest } from "@/gql/types/graphql";
import { TModel } from "@/lib/react-query/model";
import { Maybe } from "@/types";

export function getModelBasedOnPriority(item: Model | TModel) {
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

export function isTexturedMeshReady(item: Model) {
  if (item.texturedMesh?.url) return true;
  return false;
}
