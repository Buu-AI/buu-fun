import { Media, Nft } from "@/gql/types/graphql";

export type ToolRequestType =
  | "GENERATE_NFT"
  | "GENERATE_MODEL_FROM_TEXT"
  | "GENERATE_MODEL_FROM_IMAGE";

export type ToolRequestPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type ToolRequestStatus =
  | "PENDING"
  | "IN_QUEUE"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "CANCELED";

export type ToolRequestStatusWithUser = ToolRequestStatus | "USER";

export interface ToolRequest {
  id: string;
  type: ToolRequestType;
  priority: ToolRequestPriority;
  payload: string;
}

export type MessageRole = "user" | "assistant" | "tool";

export interface MessageContent {
  text?: string;
  media?: Media[] | null;
  nft?: Nft | null;
}

export interface Message {
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  teamId: string;
  sessionId: string;
  role: MessageRole;
  status: ToolRequestStatus;
  content?: MessageContent;
  toolRequest?: ToolRequest;
  toolCalls?: ToolRequest[];
  credits?: number;
}

export type TempMessage = {
  _id: string;
  role: MessageRole;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PromptPayload = any;
