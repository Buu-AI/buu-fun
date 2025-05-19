"use client";
import { useAppStore } from "@/hooks/redux";
import { setNewSession } from "@/lib/redux/features/chat";
import { useRef } from "react";

export default function ChatMessageInitializer({
  sessionId,
}: {
  sessionId: string;
}) {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(setNewSession(sessionId));
    initialized.current = true;
  }
  return null;
}
