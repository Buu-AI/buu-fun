import { serverRequest } from "@/gql/client";
import {
  CreateApiKeyMutation as TCreateApiKeyMutation,
  CreateApiKeyMutationVariables as TCreateApiKeyMutationVariables,
  DeleteApiKeyMutationVariables as TDeleteApiKeyMutationVariables,
  DeleteApiKeyMutation as TDeleteApiKeyMutation,
  RotateApiKeyMutation as TRotateApiKeyMutation,
  RotateApiKeyMutationVariables as TRotateApiKeyMutationVariables,
  SearchPaginatedApiKeysQuery as TSearchPaginatedApiKeysQuery,
  SearchPaginatedApiKeysQueryVariables as TSearchPaginatedApiKeysQueryVariables,
} from "@/gql/types/graphql";
import { AccessToken } from "./user";
import {
  CreateApiKeyMutation,
  DeleteApiKeyMutation,
  RotateApiKeyMutation,
  SearchPaginatedApiKeysQuery,
} from "@/gql/documents/creative-engine";
import { getAuthorization } from "../utils";

export async function createApiKey({
  accessToken,
  input,
}: AccessToken & { input: TCreateApiKeyMutationVariables }) {
  const data = await serverRequest<
    TCreateApiKeyMutation,
    TCreateApiKeyMutationVariables
  >(CreateApiKeyMutation, input, {
    Authorization: getAuthorization(accessToken),
  });
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.createApiKey) {
    throw new Error(data.createApiKey.message, { cause: "INVALID_DATA" });
  }

  return data.createApiKey;
}

export async function deleteAPIKey({
  accessToken,
  input,
}: AccessToken & { input: TDeleteApiKeyMutationVariables }) {
  const data = await serverRequest<
    TDeleteApiKeyMutation,
    TDeleteApiKeyMutationVariables
  >(DeleteApiKeyMutation, input, {
    Authorization: getAuthorization(accessToken),
  });
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.deleteApiKey) {
    throw new Error(data.deleteApiKey.message, { cause: "INVALID_DATA" });
  }

  return data.deleteApiKey;
}

export async function rotateAPIKey({
  accessToken,
  input,
}: AccessToken & { input: TRotateApiKeyMutationVariables }) {
  const data = await serverRequest<
    TRotateApiKeyMutation,
    TRotateApiKeyMutationVariables
  >(RotateApiKeyMutation, input, {
    Authorization: getAuthorization(accessToken),
  });
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.rotateApiKey) {
    throw new Error(data.rotateApiKey.message, { cause: "INVALID_DATA" });
  }

  return data.rotateApiKey;
}

export async function getApiKeys({
  accessToken,
  input,
}: AccessToken & { input: TSearchPaginatedApiKeysQueryVariables }) {
  const data = await serverRequest<
    TSearchPaginatedApiKeysQuery,
    TSearchPaginatedApiKeysQueryVariables
  >(SearchPaginatedApiKeysQuery, input, {
    Authorization: getAuthorization(accessToken),
  });
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.searchPaginatedApiKeys) {
    throw new Error(data.searchPaginatedApiKeys.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.searchPaginatedApiKeys;
}
