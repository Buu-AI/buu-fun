import { PlanKeyMapper } from "@/constants/subscription/subscription-plans";
import { TGenResponseStatus } from "../redux/features/chat-types";
import { MessageRole } from "@/gql/types/graphql";
import { TMessageStatus } from "@/types/chat/chat-types";

export function isInProgress(status: TGenResponseStatus) {
  return status === "InProgress";
}

export function isError(status: TGenResponseStatus) {
  return status === "Error";
}

export function isFreePlan(plan?: string): boolean {
  if (!plan) return true;

  if (plan === PlanKeyMapper.FREE) return true;

  return false;
}

export function isToolCallPending(status: TMessageStatus) {
  return status === "PENDING";
}

export function isToolCallCompleted(status: TMessageStatus) {
  return status === "COMPLETED";
}

export function isToolCallInProgress(status: TMessageStatus) {
  return status === "IN_PROGRESS";
}

export function isToolCallPendingOrInProgress(status: TMessageStatus) {
  return status === "IN_PROGRESS" || status === "PENDING";
}
export function isToolCallGenerating(status: TMessageStatus) {
  return (
    status === "IN_PROGRESS" || status === "IN_QUEUE" || status === "PENDING"
  );
}
export function isToolCallInProgressOrCompleted(status: TMessageStatus) {
  return status === "IN_PROGRESS" || status === "COMPLETED";
}

export function isRoleAssistant(role: string) {
  return role === MessageRole.Assistant;
}

export function isRoleToolOrAssistant(role: string) {
  return role === MessageRole.Assistant || role === MessageRole.Tool;
}

export function isRoleTool(role: string) {
  return role === MessageRole.Tool;
}
