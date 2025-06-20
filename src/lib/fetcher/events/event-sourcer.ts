import { SERVER_URL } from "@/config";
import { EventSourcePolyfill } from "event-source-polyfill";

export const getEventSource = (
  {
    slug,
    version = "/v1",
    prefix = "",
  }: {
    slug: string;
    version?: string;
    prefix?: string;
  },
  {
    accessToken,
  }: {
    accessToken: string;
  },
) => {
  const url = SERVER_URL + prefix + version + slug;
  return new EventSourcePolyfill(url, {
    headers: {
      Authorization: accessToken,
    },
  });
};
