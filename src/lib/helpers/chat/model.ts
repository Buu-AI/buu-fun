import { Model } from "@/gql/types/graphql";

export function getModelBasedOnPriority(item: Model) {
  const texturedModel = item.texturedMesh?.url;
  const optimizedModel = item.optimizedMesh?.url;
  const basicMesh = item.mesh?.url;
  if (texturedModel) return texturedModel;
  if (optimizedModel) return optimizedModel;
  if (basicMesh) return basicMesh;
}

export function getModelMessagesAndPersentage(item: Model) {
  return {
    persentage: item.toolRequest.percentage,
    message: item.toolRequest.message,
    status: item.toolRequest.status,
  };
}
