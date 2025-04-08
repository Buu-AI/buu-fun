import {
  GetTokenHistoricalPriceResultQuery as TGetTokenHistoricalPriceResultQuery,
  GetTokenOverviewQuery as TGetTokenOverviewQuery,
} from "@/gql/types/graphql";

import { serverRequest } from "@/gql/client";
import {
  GetTokenHistoricalPriceQuery,
  GetTokenOverviewQuery,
} from "@/gql/documents/creative-engine";
import { TBuuPricingTime } from "../redux/features/buu-pricing";
import { getAuthorization } from "../utils";
import { AccessToken } from "./user";

export async function getHistoricalPricingResult({
  accessToken,
  time = "LAST_HOUR",
}: AccessToken & { time: TBuuPricingTime }) {
  const data = await serverRequest<TGetTokenHistoricalPriceResultQuery>(
    GetTokenHistoricalPriceQuery,
    {
      time,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.getTokenHistoricalPriceResult) {
    throw new Error(data.getTokenHistoricalPriceResult.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.getTokenHistoricalPriceResult;
}

export async function getBuuTokenOverview({ accessToken }: AccessToken) {
  const data = await serverRequest<TGetTokenOverviewQuery>(
    GetTokenOverviewQuery,
    {},
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getTokenOverview) {
    throw new Error(data.getTokenOverview.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.getTokenOverview;
}
