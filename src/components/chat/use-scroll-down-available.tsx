import { useEffect, useState, useCallback, RefObject } from "react";

type TUseScrollDownAvailable = {
  ref: RefObject<HTMLElement | null>;
  threshold?: number; // Distance from bottom in pixels to consider "at bottom"
};

export default function useScrollDownAvailable({
  ref,
  threshold = 100,
}: TUseScrollDownAvailable) {
  const [isScrollDownAvailable, setIsScrollDownAvailable] = useState(false);

  const checkScrollAvailability = useCallback(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { scrollTop, scrollHeight, clientHeight } = element;

    // Calculate distance from bottom
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

    // Show scroll down button if user is not near the bottom
    setIsScrollDownAvailable(distanceFromBottom > threshold);
  }, [ref, threshold]);

  const scrollToBottom = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      if (!ref.current) return;

      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior,
      });
    },
    [ref],
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check initial state
    checkScrollAvailability();

    // Add scroll event listener
    element.addEventListener("scroll", checkScrollAvailability);

    // Use ResizeObserver to detect content changes (new messages)
    const resizeObserver = new ResizeObserver(() => {
      checkScrollAvailability();
    });

    resizeObserver.observe(element);

    // Cleanup
    return () => {
      element.removeEventListener("scroll", checkScrollAvailability);
      resizeObserver.disconnect();
    };
  }, [checkScrollAvailability, ref]);

  return {
    isScrollDownAvailable,
    scrollToBottom,
    checkScrollAvailability, // Expose for manual checks if needed
  };
}
