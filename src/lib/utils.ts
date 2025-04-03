import { AllowedContentType } from "@/constants/content-type.config";
import {
  MAXIMUM_REQUEST_LIMIT,
  MAXIMUM_RETRY_ALLOWED,
  SHARE_LINK_CONFIG,
} from "@/constants/request.config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DataMuseError } from "./class/data-muse-error";
import { TDataMuseWord } from "./fetcher/query/query-suggestion-api";
import { Plans } from "@/constants/subscription/subscription-plans";
import { StripeSubscriptionPlanKeys } from "@/gql/types/graphql";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isPlural = (num: number) => Math.abs(num) !== 1;
const simplePlural = (word: string) => `${word}s`;
export function isLocalMode() {
  return (
    process?.env?.NODE_ENV === "development" ||
    process?.env?.APP_ENV === "local"
  );
}
export function pluralize(
  num: number,
  word: string,
  plural: (value: string) => string = simplePlural,
) {
  return isPlural(num) ? plural(word) : word;
}

export async function handleResponse(
  response: Response,
): Promise<TDataMuseWord[]> {
  if (!response.ok) {
    // add other generic messages later for api backends.
    throw new DataMuseError(
      `API request failed: ${response.statusText}`,
      response.status,
    );
  }
  return response.json();
}

export function getRandomInteger(length: number) {
  return Math.floor(Math.random() * (length + 1));
}

export function getAuthorization(accessToken: string) {
  return `Bearer ${accessToken}`;
}

export function isOverAllRequestLimitReached(limits: number) {
  return limits >= MAXIMUM_REQUEST_LIMIT;
}

export function getFixedCredits(credits = 0.0) {
  return credits.toFixed(2);
}

export function isRetryExceeded(totalGenerations: number) {
  return totalGenerations >= MAXIMUM_RETRY_ALLOWED;
}

export function isHttpUrl(value: string | undefined | null) {
  if (!value) return undefined;
  return value.startsWith("http") ? value : undefined;
}

export function isDataUri(value: string | null | undefined) {
  if (!value) return undefined;
  // console.log(value);
  return value.trim().startsWith("data") ? value : undefined;
}

export function isImageUrl(value: string | null | undefined) {
  if (!isHttpUrl(value) && !isDataUri(value)) return undefined;
  return {
    imageUrl: isHttpUrl(value),
    imageUri: isDataUri(value),
  };
}

export async function blobUrlToFile(
  blobUrl: string,
  fileName: string,
): Promise<File | null> {
  try {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
  } catch (error) {
    if (error) {
      return null;
    }
    return null;
  }
}

export function getAllowedContentTypeMaps(key: string) {
  return AllowedContentType[key] ? AllowedContentType[key] : null;
}

export function truncateString(
  value: string,
  startEnd: number = 4,
  endStartAt: number = 4,
): string {
  if (value.length <= startEnd + endStartAt) {
    return value;
  }

  return `${value.slice(0, startEnd)}...${value.slice(-endStartAt)}`;
}

export function formatNumber(value: number) {
  return value;
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(value);
}

export function getPlanEnum(planKey: Plans) {
  switch (planKey) {
    case "FREE": {
      return StripeSubscriptionPlanKeys.Free;
    }
    // case "ENTERPRISE": {
    //   return StripeSubscriptionPlanKeys.Enterprise;
    // }
    case "BASIC": {
      return StripeSubscriptionPlanKeys.Basic;
    }
    case "PRO": {
      return StripeSubscriptionPlanKeys.Pro;
    }
    case "UNLIMITED": {
      return StripeSubscriptionPlanKeys.Unlimited;
    }
  }
}

export function formatUnits(tokens: string, decimals: number): string {
  const num = Number(tokens);
  const divisor = Math.pow(10, decimals);
  const formatted = (num / divisor).toString();
  return formatted;
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getSharableUrl(boardId: string) {
  return `${SHARE_LINK_CONFIG}/${boardId}`;
}
