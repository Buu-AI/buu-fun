import { TChatMessage } from "@/types/chat/chat-types";
import { MessageUpdatedEvent } from "@/types/chat/event-source";
import { v4 as uuid } from "uuid";
import { TransformMessage } from "./message";
export const optimisticUserMessages = (
  text: string,
  sessionId: string,
): TChatMessage => {
  return {
    credits: 0,
    isAssistantLastMessage: false,
    messageId: uuid(),
    payload: null,
    prompt: text,
    role: "user",
    sessionId,
    medias: [],
    models: [],
    teamId: "",
    toolRequest: null,
    createdAt: new Date(Date.now()).toISOString(),
  };
};

export const AiChatStreamMessage = (
  prompt: string,
  messageId: string,
  sessionId: string
): TChatMessage => {
  return {
    isAssistantLastMessage: true,
    medias: [],
    messageId,
    models: [],
    payload: null,
    prompt: prompt,
    role: "assistant",
    sessionId,
    teamId: "",
    toolRequest: null,
    credits: 0,

    createdAt: new Date(Date.now()).toISOString(),
  };
};

export const handleMessageUpdate = (
  data: MessageUpdatedEvent["payload"]
): TChatMessage => {
  return TransformMessage(data);
};
