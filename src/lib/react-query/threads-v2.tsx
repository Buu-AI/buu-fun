import { serverRequest } from "@/gql/client";
import {
  GetSubthreadGenRequestsQuery,
  GetSubthreadsQuery,
} from "@/gql/documents/creative-engine";
import {
  GetSubthreadsQueryVariables,
  Pagination,
  SubthreadFilter,
  GetSubthreadsQuery as TGetSubthreadsQuery,
  GetSubthreadGenRequestsQuery as TGetSubthreadGenRequestsQuery,
  GetSubthreadGenRequestsQueryVariables,
} from "@/gql/types/graphql";
import { getAuthorization } from "../utils";

export type TGetSubThreadsTQ = {
  threadId: string;
  accessToken: string;
  pagination?: TPagination;
  filters?: Filters;
};

export type Filters = SubthreadFilter;
export type TPagination = Omit<Pagination, "orderDirection"> & {
  orderDirection?: "asc" | "desc";
};

export async function getSubThreads({
  accessToken,
  threadId,
  pagination = { limit: 10, offset: 0, orderDirection: "desc" },
  filters = {},
}: TGetSubThreadsTQ) {
  const data = await serverRequest<
    TGetSubthreadsQuery,
    Omit<GetSubthreadsQueryVariables, "pagination"> & {
      pagination: TPagination;
    }
  >(
    GetSubthreadsQuery,
    {
      filters: {
        threadId_eq: threadId,
        ...filters,
      },
      pagination,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.getSubthreads) {
    console.log(data);
    throw new Error("Failed to fetch data");
  }

  return data.getSubthreads;
}

export async function getSubThreadRequests({
  subThreadId,
  accessToken,
}: {
  subThreadId: string;
  accessToken: string;
}) {
  const data = await serverRequest<
    TGetSubthreadGenRequestsQuery,
    GetSubthreadGenRequestsQueryVariables
  >(
    GetSubthreadGenRequestsQuery,
    {
      subthreadId: subThreadId,
    },
    { Authorization: getAuthorization(accessToken) },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getSubthreadGenRequests) {
    console.log(data);
    throw new Error("Failed to fetch data");
  }

  return data.getSubthreadGenRequests.items;
}
