import { SERVER_URL } from "@/config";

export const getEventSource = (
  slug: string,
  version: string = "/v1",
  prefix: string = "/core/api",
) => {
  const url = SERVER_URL + prefix + version + slug;
  return new EventSource(url, {
    withCredentials: true,
  });
};
