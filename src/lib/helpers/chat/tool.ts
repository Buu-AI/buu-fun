import { NumberOfFaces } from "@/gql/types/graphql";
import { parseJson } from "@/lib/utils";
import { PromptPayload } from "@/types/chat/chat-types";

export function getPayloadInformation(payload: string | PromptPayload) {
  if (typeof payload === "string") {
    const { data } = parseJson<PromptPayload>(payload);
    return data;
  }
  return payload;
}

export function isValidPayload(payload?: PromptPayload) {
  if (payload && typeof payload === "object") return true;
  return false;
}

export function getNumberOfFaces(numberOfFaces: NumberOfFaces): string | null {
  switch (numberOfFaces) {
    case NumberOfFaces.TenKey:
      return "10k";
    case NumberOfFaces.TwentyKey:
      return "20k";
    case NumberOfFaces.FiftyKey:
      return "50k";
    case NumberOfFaces.OneHundredKey:
      return "100k";
    default:
      return null;
  }
}
