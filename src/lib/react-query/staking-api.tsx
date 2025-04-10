import { serverRequest } from "@/gql/client";
import { GetStakingGlobalDataQuery } from "@/gql/documents/creative-engine";
import {
  GetStakingGlobalDataQuery as TGetStakingGlobalDataQuery
} from "@/gql/types/graphql";
import { getAuthorization } from "../utils";

export async function getStakingGlobalDataQuery({
  accessToken,
}: {
  accessToken: string;
}) {
  const data = await serverRequest<TGetStakingGlobalDataQuery>(
    GetStakingGlobalDataQuery,
    {},
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getStakingGlobalData) {
    throw new Error(data.getStakingGlobalData.code, { cause: "INVALID_DATA" });
  }
  return data.getStakingGlobalData;
}
