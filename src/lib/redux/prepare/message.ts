import { Message } from "@/gql/types/graphql";
import { isRoleAssistant } from "@/lib/helpers/status-checker";
import { parseJson } from "@/lib/utils";
import {
  PromptPayload,
  TChatMessage,
  TMessageQueryData,
  TToolRequest,
} from "@/types/chat/chat-types";
import { InfiniteData } from "@tanstack/react-query";

export function prepareMessagePayload(
  params: InfiniteData<TMessageQueryData>
): TChatMessage[] {
  console.log("RECEIVED PARAMS:", params);
  const data = TransformMessages({ params }).sort(
    (a, b) =>
      new Date(a.createdAt as string).getTime() -
      new Date(b.createdAt as string).getTime()
  );
  const reversedArray = [...data];
  const lastAssistantMessage = reversedArray.findIndex((item) =>
    isRoleAssistant(item.role)
  );

  if (lastAssistantMessage !== -1) {
    const arrIndex = reversedArray.length - 1 - lastAssistantMessage;
    data[arrIndex]["isAssistantLastMessage"] = true;
  }
  console.log("SELECTED:", data);
  return data;
}

export function TransformMessages({
  params,
}: {
  params: InfiniteData<TMessageQueryData>;
}) {
  return [
    ...new Map(
      params.pages
        .flatMap((page) => {
          return page.items.map((item) => TransformMessage(item));
        })
        ?.map((item) => [item.messageId, item])
    ).values(),
  ];
}

export function TransformMessage(item: Message) {
  const { data: payload } = parseJson<PromptPayload>(
    item.toolRequest?.payload ?? ""
  );
  console.log("payload:", payload);
  const toolRequest: TToolRequest | undefined = item?.toolRequest
    ? {
        ...item?.toolRequest,
        payload: payload,
      }
    : undefined;

  const chatMessage: TChatMessage = {
    medias: item.content?.medias,
    isAssistantLastMessage: false,
    models: item.content?.models ?? [],
    messageId: item._id,
    sessionId: item.sessionId,
    createdAt: item.createdAt,
    prompt: item.content?.text,
    role: item.role,
    teamId: item.teamId,
    payload,
    toolRequest: toolRequest,
    credits: toolRequest?.credits,
    status: toolRequest?.status,
  };
  return chatMessage;
}
