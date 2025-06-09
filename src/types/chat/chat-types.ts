import {
  GetMessagesQuery,
  Media,
  MessageRole,
  Model,
  ToolRequest,
  ToolRequestStatus,
  ToolRequestType,
} from "@/gql/types/graphql";
import { TErrorTypeName } from "@/lib/redux/features/chat-types";
import { Maybe, MaybeString } from "..";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PromptPayload = any;
export type TMessageRole = `${MessageRole}`;
export type TMessageStatus = `${ToolRequestStatus}`;
export type TToolType = `${ToolRequestType}`;
export type TMessageQueryData = Exclude<
  GetMessagesQuery["getMessages"],
  TErrorTypeName
>;

export type TMessageItems = TMessageQueryData["items"];
export type TModels = {
  modelId: string;
  texturedMesh: TMessageStatus | undefined;
};
// export type Medias = {
//   _id: string;
//   alt: string | null | undefined;
//   url: string | null | undefined;
//   status: TMessageStatus | undefined;
//   type: string | null | undefined;
// };

export type TToolRequest = Omit<ToolRequest, "payload"> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export type TChatMessage = {
  sessionId: string;
  teamId: string;
  messageId: string;
  prompt: MaybeString;
  medias: Maybe<Media[]>;
  models: Model[];
  role: TMessageRole;
  payload: PromptPayload;
  isAssistantLastMessage: boolean;
  createdAt: string;
  toolRequest: TToolRequest | null | undefined;
  status?: TToolRequest["status"];
  credits?: TToolRequest["credits"];
  type?: TToolRequest["type"];
};
