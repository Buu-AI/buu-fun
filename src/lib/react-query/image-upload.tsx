import { serverRequest } from "@/gql/client";
import { GeneratePresignedUrlQuery } from "@/gql/documents/creative-engine";
import { GeneratePresignedUrlMutation } from "@/gql/types/graphql";
import { getAuthorization } from "../utils";

export async function getPresignedUrl({
  contentType,
  accessToken,
}: {
  contentType: "ImageJpeg" | "ImagePng";
  accessToken: string;
}) {
  const data = await serverRequest<GeneratePresignedUrlMutation>(
    GeneratePresignedUrlQuery,
    {
      input: {
        contentType,
      },
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.generatePresignedUrl) {
    throw new Error(data.generatePresignedUrl.code, { cause: "INVALID_DATA" });
  }
  return data.generatePresignedUrl;
}
