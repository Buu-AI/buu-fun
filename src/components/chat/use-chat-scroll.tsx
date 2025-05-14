import { RefObject, useEffect, useRef } from "react";

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
