import { serverRequest } from "@/gql/client";
// GeneratePresignedUrlMutationVariables
import {
  GenerateNftMutation,
  GetNftsQuery,
  GetNftQuery,
} from "@/gql/documents/nft";
import {
  GetNftsQuery as TGetNftsQuery,
  GetNftsQueryVariables,
  GenerateNftMutation as TGenerateNftMutation,
  GenerateNftMutationVariables,
  GetNftQuery as TGetNftQuery,
  GetNftQueryVariables,
  Pagination,
} from "@/gql/types/graphql";
import { getAuthorization } from "../utils";
import { TErrorTypeName } from "../redux/features/chat-types";
import { MaybeString } from "@/types";

export type TPagination = Omit<Pagination, "orderDirection"> & {
  orderDirection?: "asc" | "desc";
};

export type TGetNftsQueryVariables = Omit<
  GetNftsQueryVariables,
  "pagination"
> & {
  pagination: TPagination;
};

export async function getNftsQuery({
  accessToken,
  pagination,
}: {
  accessToken: string;
} & TGetNftsQueryVariables) {
  const data = await serverRequest<TGetNftsQuery, TGetNftsQueryVariables>(
    GetNftsQuery,
    {
      pagination,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getNfts) {
    throw new Error(data.getNfts.code, { cause: "INVALID_DATA" });
  }
  return data.getNfts;
}
export type TGetNftQueryData = Exclude<TGetNftQuery["getNft"], TErrorTypeName>;

export async function getNftQuery({
  id,
  accessToken,
}: {
  id: string;
  accessToken: string;
}) {
  const data = await serverRequest<TGetNftQuery, GetNftQueryVariables>(
    GetNftQuery,
    {
      nftId: id,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getNft) {
    throw new Error(data.getNft.code, { cause: "INVALID_DATA" });
  }
  return data.getNft;
}

export async function generateNFT({
  modelId,
  accessToken,
  description,
  name,
  sessionId,
}: {
  name: string;
  description: string;
  modelId: string;
  accessToken: string;
  sessionId: MaybeString;
}) {
  const data = await serverRequest<
    TGenerateNftMutation,
    GenerateNftMutationVariables
  >(
    GenerateNftMutation,
    {
      name,
      description,
      modelId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.generateNft) {
    throw new Error(data.generateNft.code, { cause: "INVALID_DATA" });
  }
  return data.generateNft;
}
