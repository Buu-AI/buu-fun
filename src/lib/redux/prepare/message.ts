import { parseJson } from "@/lib/utils";
import {
  PromptPayload,
  TChatMessage,
  TMessageQueryData,
} from "@/types/chat/chat-types";
import { InfiniteData } from "@tanstack/react-query";

export function prepareMessagePayload(
  params: InfiniteData<TMessageQueryData>
): TChatMessage[] {
  return [
    ...new Map(
      params.pages
        .flatMap((page) => {
          return page.items.map((item) => {
            const { data: payload } = parseJson<PromptPayload>(
              item.toolRequest?.payload ?? ""
            );
            return {
              messageId: item._id,
              sessionId: item.sessionId,
              createdAt: item.createdAt,
              imageUrl: item.content?.model?.image.url,
              modelUrl: item.content?.model?.url,
              prompt: item.content?.text,
              role: item.role,
              status: item.status,
              teamId: item.teamId,
              payload,
            };
          });
        })
        .map((item) => [item.messageId, item]) // Use messageId as the key
    ).values(),
  ].sort(
    (a, b) =>
      new Date(a.createdAt as string).getTime() -
      new Date(b.createdAt as string).getTime()
  );
}
