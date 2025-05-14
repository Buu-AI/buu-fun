import { TChatMessage } from "@/types/chat/chat-types";
import { RefObject, useEffect, useRef } from "react";

export function useAutoScrollToBottom(
  containerRef: RefObject<HTMLDivElement | null>,
  messages: TChatMessage[],
  threshold = 300,
) {
  const prevMessagesLength = useRef(0);
  const prevHeight = useRef(0);

  useEffect(() => {
    // Function to check if user is near bottom and scroll if needed
    const handleNewMessage = () => {
      const container = containerRef.current;
      if (!container) return;

      const currentHeight = container.scrollHeight;
      const isHeightChanged = currentHeight !== prevHeight.current;

      // Only proceed if messages length increased or height changed
      if (messages.length > prevMessagesLength.current || isHeightChanged) {
        // Calculate distance from bottom
        const distanceFromBottom =
          container.scrollHeight -
          (container.scrollTop + container.clientHeight);

        // If user is close to bottom, scroll to bottom
        if (distanceFromBottom <= threshold) {
          // Use setTimeout to ensure this happens after the DOM has updated
          setTimeout(() => {
            container.scrollTop = container.scrollHeight;
          }, 0);
        }

        // Update refs
        prevMessagesLength.current = messages.length;
        prevHeight.current = currentHeight;
      }
    };

    handleNewMessage();
  }, [containerRef, messages, threshold]);
}
