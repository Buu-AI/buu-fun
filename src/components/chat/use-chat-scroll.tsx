import { TChatMessage } from "@/types/chat/chat-types";
import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

interface UseChatScrollProps<T> {
  chatContainerRef: RefObject<HTMLDivElement | null>;
  messages: T[];
  isFetchingNextPage: boolean;
  oldScrollHeight: RefObject<number>;
}

export function useChatScroll<T>({
  chatContainerRef,
  messages,
  isFetchingNextPage,
  oldScrollHeight,
}: UseChatScrollProps<T>) {
  const isInitialLoad = useRef(true);
  const prevMessagesLength = useRef(0);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;

    // If we've added messages to the top (loading older messages)
    if (
      !isInitialLoad.current &&
      messages.length > prevMessagesLength.current &&
      isFetchingNextPage === false
    ) {
      // Calculate how much new content was added
      const newScrollHeight = chatContainer.scrollHeight;
      const addedHeight = newScrollHeight - oldScrollHeight.current;

      // Adjust scroll position to maintain the same view
      chatContainer.scrollTop = addedHeight;
    }

    // Initial load - scroll to bottom
    if (isInitialLoad.current && messages.length > 0 && !isFetchingNextPage) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
      isInitialLoad.current = false;
    }

    // Update previous message count
    prevMessagesLength.current = messages.length;
  }, [messages, isFetchingNextPage, chatContainerRef, oldScrollHeight]);
}

export function useUnifiedChatScroll({
  chatContainerRef,
  messages,
  isFetchingNextPage,
  threshold = 300,
}: {
  chatContainerRef: RefObject<HTMLElement | null>;
  messages: TChatMessage[];
  isFetchingNextPage: boolean;
  threshold?: number;
}) {
  const isInitialLoad = useRef(true);
  const prevMessagesLength = useRef(0);
  const prevHeight = useRef(0);

  useLayoutEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const currentHeight = container.scrollHeight;
    const isHeightChanged = currentHeight !== prevHeight.current;
    const distanceFromBottom =
      container.scrollHeight - (container.scrollTop + container.clientHeight);

    // Initial load: scroll to bottom
    if (isInitialLoad.current && messages.length > 0 && !isFetchingNextPage) {
      container.scrollTop = container.scrollHeight;
      isInitialLoad.current = false;
    }
    // Loading older messages: maintain scroll position
    else if (
      !isInitialLoad.current &&
      messages.length > prevMessagesLength.current &&
      isFetchingNextPage === false &&
      prevMessagesLength.current > 0
    ) {
      const addedHeight = currentHeight - prevHeight.current + 50;
      container.scrollTop += addedHeight;
    }
    // New messages: scroll to bottom if near bottom
    else if (
      (messages.length > prevMessagesLength.current || isHeightChanged) &&
      distanceFromBottom <= threshold
    ) {
      container.scrollTop = container.scrollHeight;
    }

    // Update refs
    prevMessagesLength.current = messages.length;
    prevHeight.current = currentHeight;
  }, [chatContainerRef, messages, isFetchingNextPage, threshold]);
}
