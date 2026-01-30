import { isToolCallGeneratingOrPending } from "@/lib/helpers/status-checker";
import { MaybeString } from "@/types";
import { RootState } from "@/types/reduxStore";
import { createSelector } from "@reduxjs/toolkit";

const Messages = (state: RootState) => state.chat.messages;
export const isChatGenerating = createSelector([Messages], (messages) => {
  return messages.some((message) => {
    if (!message.status) return false;
    return isToolCallGeneratingOrPending(message.status);
  });
});

export const getModelById = createSelector(
  [Messages, (_, id?: MaybeString) => id],
  (messages, id) => {
    if (!id) return null;
    for (const message of messages) {
      for (const model of message.models) {
        if (model._id === id) {
          return model; // Return immediately when found
        }
      }
    }
    return null; // Return null if not found
  },
);

export const getToolById = createSelector(
  [Messages, (_, id?: MaybeString) => id],
  (messages, id) => {
    if (!id) return null;
    for (const message of messages) {
      if (message.toolRequest?._id === id) {
        return message.toolRequest;
      }
    }
    return null;
  },
);

export const getWorldById = createSelector(
  [Messages, (_, id?: MaybeString) => id],
  (messages, id) => {
    if (!id) return null;
    for (const message of messages) {
      const worlds = message.worlds;
      if (!worlds) continue;
      for (const world of worlds) {
        if (world._id === id) {
          return world;
        }
      }
    }
    return null;
  },
);
