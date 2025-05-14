import { parseJson } from "@/lib/utils";
import { PromptPayload, TChatMessage } from "@/types/chat/chat-types";
import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

const Messages = (state: RootState) => state.chat.chatMessages;

export const getMessagesFromStore = createSelector(
  [Messages],
  (messages): TChatMessage[] => {
    return [
      ...new Map(
        messages.pages
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
);
