import { PlanKeyMapper } from "@/constants/subscription/subscription-plans";
import { TGenResponseStatus } from "../redux/features/chat-types";

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
