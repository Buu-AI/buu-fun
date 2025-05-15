import { isRoleAssistant } from "@/lib/helpers/status-checker";
import { parseJson } from "@/lib/utils";
import {
  PromptPayload,
  TChatMessage,
  TMessageQueryData,
} from "@/types/chat/chat-types";
import { InfiniteData } from "@tanstack/react-query";

export function prepareMessagePayload(
  params: InfiniteData<TMessageQueryData>,
): TChatMessage[] {
  const data = [
    ...new Map(
      params.pages
        .flatMap((page) => {
          return page.items.map((item) => {
            const { data: payload } = parseJson<PromptPayload>(
              item.toolRequest?.payload ?? "",
            );
            const imageUrls =
              item.content?.images
                ?.map((item) => item.url)
                .filter((item) => typeof item === "string") ?? [];
            return {
              isAssistantLastMessage: false,
              messageId: item._id,
              sessionId: item.sessionId,
              createdAt: item.createdAt,
              imageUrl: item.content?.model?.image.url,
              imageUrls: imageUrls,
              modelUrl: item.content?.model?.url,
              nftId: item.nftId,
              prompt: item.content?.text,
              role: item.role,
              status: item.status,
              teamId: item.teamId,
              payload,
            };
          });
        })
        .map((item) => [item.messageId, item]), // Use messageId as the key
    ).values(),
  ].sort(
    (a, b) =>
      new Date(a.createdAt as string).getTime() -
      new Date(b.createdAt as string).getTime(),
  );

  const reversedArray = [...data];
  const lastAssistantMessage = reversedArray.findIndex((item) =>
    isRoleAssistant(item.role),
  );
  if (lastAssistantMessage !== -1) {
    const arrIndex = reversedArray.length - 1 - lastAssistantMessage;
    data[arrIndex]["isAssistantLastMessage"] = true;
  }
  return data;
}
