import { isToolCallGeneratingOrPending } from "@/lib/helpers/status-checker";
import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

const Messages = (state: RootState) => state.chat.messages;
export const isChatGenerating = createSelector([Messages], (messages) => {
  return messages.some((message) => {
    if (!message.status) return false;
    return isToolCallGeneratingOrPending(message.status);
  });
});
