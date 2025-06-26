import {
  GetMessagesQuery,
  Media,
  MessageRole,
  Model,
  NumberOfFaces,
  Style,
  TextureType,
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

export type TMessage = TMessageItems[number];

export type TModels = {
  modelId: string;
  texturedMesh: TMessageStatus | undefined;
};

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

export type TNumberOfFaces = `${NumberOfFaces}` | "definedByAI";
export type TStyle = `${Style}` | "definedByAI";

export type TTextureType = `${TextureType}` | "definedByAI";

