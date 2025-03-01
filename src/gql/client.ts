/* eslint-disable */
import { SERVER_URL } from "@/config";
import { GraphQLClient, type RequestDocument } from "graphql-request";

// const ponderClient = new GraphQLClient(PONDER_URL);
const serverClient = new GraphQLClient(`${SERVER_URL}/graphql`, {
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },

});

export type TCommonHeaders = {
  [key: string]: string | undefined;
  Authorization?: string;
} & HeadersInit;

export const serverRequest = async <T = any, S = any>(
  query: RequestDocument,
  variables?: S & { [key: string]: any },
  headers?: TCommonHeaders,
  forceResultIfFail?: any,
): Promise<T> => {
  try {
    return await serverClient?.request<T>(query, variables, headers);
  } catch (error) {
    console.error("Error realizando la solicitud GraphQL:", error);
    if (!forceResultIfFail) {
      return forceResultIfFail;
    }
    throw error;
  }
};
