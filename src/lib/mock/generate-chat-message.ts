import { mockData } from "./chat-message";
import { GetMessagesQuery } from "@/gql/types/graphql";

export function getChatMessages() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = mockData.data as any as GetMessagesQuery;
  return data;
}
