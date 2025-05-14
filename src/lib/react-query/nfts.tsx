import { serverRequest } from "@/gql/client";
// GeneratePresignedUrlMutationVariables
import {
  GenerateNftMutation,
  GetNftsQuery,
  GetNftQuery,
} from "@/gql/documents/creative-engine";
import {
  GetNftsQuery as TGetNftsQuery,
  GetNftsQueryVariables,
  GenerateNftMutation as TGenerateNftMutation,
  GenerateNftMutationVariables,
  GetNftQuery as TGetNftQuery,
  GetNftQueryVariables,
} from "@/gql/types/graphql";
import { getAuthorization } from "../utils";
import { TErrorTypeName } from "../redux/features/chat-types";

export async function getNftsQuery({
  address,
  accessToken,
}: {
  address: string;
  accessToken: string;
}) {
  const data = await serverRequest<TGetNftsQuery, GetNftsQueryVariables>(
    GetNftsQuery,
    {
      filters: {
        creator_eq: address,
      },
    },
    {
      Authorization: getAuthorization(accessToken),
    }
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
    }
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
  messageId,
  accessToken,
  description,
  name,
}: {
  name: string;
  description: string;
  messageId: string;
  accessToken: string;
}) {
  const data = await serverRequest<
    TGenerateNftMutation,
    GenerateNftMutationVariables
  >(
    GenerateNftMutation,
    {
      name,
      description,
      messageId,
    },
    {
      Authorization: getAuthorization(accessToken),
    }
  );

  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.generateNft) {
    throw new Error(data.generateNft.code, { cause: "INVALID_DATA" });
  }
  return data.generateNft;
}
