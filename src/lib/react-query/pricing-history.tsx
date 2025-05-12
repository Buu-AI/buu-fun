import {
  GetTokenHistoricalPriceResultQuery as TGetTokenHistoricalPriceResultQuery,
  GetTokenOverviewQuery as TGetTokenOverviewQuery,
  GetPricesQuery as TGetPricesQuery,
} from "@/gql/types/graphql";

import { serverRequest } from "@/gql/client";
import {
  GetTokenHistoricalPriceQuery,
  GetTokenOverviewQuery,
  GetPrices,
} from "@/gql/documents/creative-engine";
import { TBuuPricingTime } from "../redux/features/buu-pricing";

export async function getHistoricalPricingResult({
  time = "LAST_HOUR",
}: {
  time: TBuuPricingTime;
}) {
  const data = await serverRequest<TGetTokenHistoricalPriceResultQuery>(
    GetTokenHistoricalPriceQuery,
    {
      time,
    },
    // {
    //   Authorization: getAuthorization(accessToken),
    // },
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

export async function getBuuTokenOverview() {
  const data = await serverRequest<TGetTokenOverviewQuery>(
    GetTokenOverviewQuery,
    {},
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

export async function getPricing() {
  const data = await serverRequest<TGetPricesQuery>(GetPrices, {});

  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getPrices) {
    throw new Error(data.getPrices.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.getPrices;
}
