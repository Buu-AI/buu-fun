import {
  GetMessagesQuery,
  MessageRole,
  ToolRequestStatus,
} from "@/gql/types/graphql";
import { TErrorTypeName } from "@/lib/redux/features/chat-types";
import { MaybeString } from "..";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PromptPayload = any;
export type TMessageRole = `${MessageRole}`;
export type TMessageStatus = `${ToolRequestStatus}`;
export type TMessageQueryData = Exclude<
  GetMessagesQuery["getMessages"],
  TErrorTypeName
>;

export type TMessageItems = TMessageQueryData["items"];

export type TChatMessage = {
  sessionId: string;
  teamId: string;
  messageId: string;
  prompt: MaybeString;
  status: TMessageStatus;
  modelUrl: MaybeString;
  imageUrls: string[];
  imageUrl: MaybeString;
  role: TMessageRole;
  nftId: MaybeString;
  payload: PromptPayload;
  isAssistantLastMessage: boolean;
  createdAt?: string;
  credits: number | null | undefined;
};
