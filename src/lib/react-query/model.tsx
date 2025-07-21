import { serverRequest } from "@/gql/client";
import { GetModels } from "@/gql/documents/messages";
import { ConvertModel } from "@/gql/documents/model";
import {
  ConvertMesh,
  ConvertMutation,
  ConvertOutputFormat,
  GetModelsQuery,
  ModelFilter,
  Pagination,
  GetModelsQueryVariables as TGetModelsQueryVariables,
} from "@/gql/types/graphql";
import { TErrorTypeName } from "../redux/features/chat-types";
import { getAuthorization } from "../utils";
import { AccessToken } from "./user";

export type Filters = ModelFilter;
export type TPagination = Omit<Pagination, "orderDirection"> & {
  orderDirection?: "asc" | "desc";
};

export type TGetModels = Omit<TGetModelsQueryVariables, "pagination"> & {
  pagination: TPagination;
};

export type TModels = Exclude<GetModelsQuery["getModels"], TErrorTypeName>;
export type TModel = TModels["items"][number];
export async function getModels({
  pagination = {
    limit: 100,
    offset: 0,
    orderDirection: "desc",
    orderBy: "createdAt",
  },
  accessToken,
  filters,
}: TGetModels & AccessToken) {
  const data = await serverRequest<GetModelsQuery>(
    GetModels,
    {
      filters: {
        ...filters,
      },
      pagination,
    },
    { Authorization: getAuthorization(accessToken) },
  );

  if (!data) {
    throw new Error("Internal server error NO DATA AVAILABLE");
  }

  if ("code" in data.getModels) {
    throw new Error("Failed to fetch data");
  }
  console.log("GET:MESSAGES:", data);
  return data.getModels;
}
type TConvertModelVariable = {
  outputFormat: `${ConvertOutputFormat}`;
  mesh: `${ConvertMesh}`;
  modelId: string;
};
export async function convertModel({
  accessToken,
  opts,
}: {
  accessToken: string;
  opts: TConvertModelVariable;
}) {
  const data = await serverRequest<ConvertMutation, TConvertModelVariable>(
    ConvertModel,
    {
      ...opts,
    },
    { Authorization: getAuthorization(accessToken) },
  );

  if (!data) {
    throw new Error("Internal server error NO DATA AVAILABLE");
  }

  if ("code" in data.convert) {
    throw new Error("Failed to fetch data");
  }
  console.log("GET:MESSAGES:", data);
  return data.convert;
}
