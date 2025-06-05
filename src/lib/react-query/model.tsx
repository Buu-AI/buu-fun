import { serverRequest } from "@/gql/client";
import { GetModels } from "@/gql/documents/messages";
import {
  GetModelsQueryVariables as TGetModelsQueryVariables,
  GetModelsQuery as GetModelsQuery,
  ModelFilter,
  Pagination,
} from "@/gql/types/graphql";
import { getAuthorization } from "../utils";
import { AccessToken } from "./user";

export type Filters = ModelFilter;
export type TPagination = Omit<Pagination, "orderDirection"> & {
  orderDirection?: "asc" | "desc";
};

export type TGetModels = Omit<TGetModelsQueryVariables, "pagination"> & {
  pagination: TPagination;
};

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
    { Authorization: getAuthorization(accessToken) }
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
