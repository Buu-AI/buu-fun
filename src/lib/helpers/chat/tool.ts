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
