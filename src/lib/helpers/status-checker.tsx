import { PlanKeyMapper } from "@/constants/subscription/subscription-plans";
import { TGenResponseStatus } from "../redux/features/chat-types";
import { MessageRole } from "@/gql/types/graphql";
import { TMessageStatus, TToolType } from "@/types/chat/chat-types";

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

export function isToolCallPending(status?: TMessageStatus) {
  return status === "PENDING";
}

export function isToolCallCanceled(status?: TMessageStatus) {
  return status === "CANCELLED";
}
export function isToolCallCompleted(status?: TMessageStatus) {
  return status === "COMPLETED";
}

export function isToolCallInQueue(status?: TMessageStatus) {
  return status === "IN_QUEUE";
}

export function isToolCallInProgress(status?: TMessageStatus) {
  return status === "IN_PROGRESS";
}

export function isToolCallFailed(status?: TMessageStatus) {
  return status === "FAILED";
}

export function isToolCallPendingOrCanceled(status?: TMessageStatus) {
  return isToolCallPending(status) || isToolCallCanceled(status);
}

export function isToolCallPendingCanceledOrFailed(status?: TMessageStatus) {
  return isToolCallPendingOrCanceled(status) || isToolCallFailed(status);
}

export function isToolCallPendingOrInProgress(status?: TMessageStatus) {
  return isToolCallInProgress(status) || isToolCallPending(status);
}
export function isToolCallGenerating(status?: TMessageStatus) {
  return isToolCallInProgress(status) || isToolCallInQueue(status);
}
export function isToolCallGeneratingOrPending(status?: TMessageStatus) {
  return (
    isToolCallInProgress(status) ||
    isToolCallInQueue(status) ||
    isToolCallPending(status)
  );
}
export function isToolCallInProgressOrCompleted(status?: TMessageStatus) {
  return isToolCallInProgress(status) || isToolCallCompleted(status);
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

export function isRoleUser(role: string) {
  return role === MessageRole.User;
}

export function isToolModel(type?: TToolType) {
  return type && type === "GENERATE_MODEL_FROM_IMAGE";
}
