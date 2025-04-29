"use client";
import { useAppStore } from "@/hooks/redux";
import { setNewThreadId } from "@/lib/redux/features/chat";
import { useRef } from "react";

export default function ThreadsChatInitializer({
  threadId,
}: {
  threadId: string;
}) {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setNewThreadId(threadId));
    initialized.current = true;
  }
  return null;
}
