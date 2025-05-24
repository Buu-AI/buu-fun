import { ToolRequest } from "@/gql/types/graphql";
import { MaybeString } from "..";
import { TMessageStatus } from "./chat-types";

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
  sessionId: string;
  emittedAt: string;
  payload: {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
    sessionId: string;
    teamId: string;
    role: "assistant" | "user" | "tool";
    content?: {
      text?: string;
      images?: { url: MaybeString }[];
      model?: {
        alt: MaybeString;
        keyS3: MaybeString;
        size: number | null | undefined;
        type: MaybeString;
        url: MaybeString;
        image?: {
          url?: MaybeString;
        };
      };
    };
    toolRequest?: ToolRequest | null;
    toolCalls?: [];
    credits?: null | number;
    nftId?: null | string;
    status: TMessageStatus;
  };
};

export type ChatEvents = MessageNewTokenEvent | MessageUpdatedEvent;

type ChatEventMap = {
  [E in ChatEvents as E["type"]]: E;
};

// Updated handler type to accept extended parameters per event
export type TChatEventHandler<
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  ExtendedParams extends Partial<Record<keyof ChatEventMap, object>> = {},
> = {
  [K in keyof ChatEventMap]?: (
    data: ChatEventMap[K] &
      // eslint-disable-next-line @typescript-eslint/no-empty-object-type
      (K extends keyof ExtendedParams ? ExtendedParams[K] : {}),
  ) => void | unknown;
};
