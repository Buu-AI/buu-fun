import { Message, Model, ToolRequest } from "@/gql/types/graphql";

type BaseEvent = {
  sessionId: string;
  emittedAt: string;
  type: string;
};

type MessageNewTokenEvent = BaseEvent & {
  type: "message-new-token";
  payload: {
    messageId: string;
    token: string;
  };
};

export type MessageUpdatedEvent = BaseEvent & {
  type: "message-updated";
  payload: Message;
};

export type MessageModelUpdatedEvent = BaseEvent & {
  type: "model-updated";
  payload: Model;
};

export type ToolRequestUpdatedEvent = BaseEvent & {
  type: "tool-request-updated";
  payload: ToolRequest;
};

export type ChatEvents =
  | MessageNewTokenEvent
  | MessageUpdatedEvent
  | MessageModelUpdatedEvent
  | ToolRequestUpdatedEvent;

type ChatEventMap = {
  [E in ChatEvents as E["type"]]: E;
};

// Updated handler type to accept extended parameters per event
export type TChatEventHandler<
  ExtendedParams extends Partial<Record<keyof ChatEventMap, object>> = {},
> = {
  [K in keyof ChatEventMap]?: (
    data: ChatEventMap[K] &
      (K extends keyof ExtendedParams ? ExtendedParams[K] : {}),
  ) => void | unknown;
};
