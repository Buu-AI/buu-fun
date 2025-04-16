"use client";

import {
  SUB_THREAD_QUERY_LIMIT,
  VIEW_BEFORE_PX,
} from "@/constants/infinity.config";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";
import { useSubThreads } from "@/hooks/use-subthreads";
import {
  setInfinitySubThreads,
  setNewThreadId,
} from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import ThreeDGenerationWrapper from "./three-d-generation-wrapper";

export type TThreadsWrapper = {
  threadId: string;
};

export default function ThreadsWrapper({ threadId }: TThreadsWrapper) {

  const dispatch = useAppDispatch();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);
  const lastSubThreadIdRef = useRef<string | null>(null);
  const lastSubThreadsLengthRef = useRef<number>(0);
  const isScrollingProgrammatically = useRef(false);
  const isPendingScroll = useRef(false);
  const lastScrollTopRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    fetchNextPage,
    data: InfinitySubThreadData,
    hasNextPage,
    isFetchingNextPage,
  } = useSubThreads({
    threadId,
    limit: SUB_THREAD_QUERY_LIMIT,
  });

  // Dispatch subThreads to Redux store when data changes
  useEffect(() => {
    if (InfinitySubThreadData) {
      dispatch(setInfinitySubThreads(InfinitySubThreadData));
    }
  }, [InfinitySubThreadData, dispatch]);

  const subThreads = useAppSelector((state) => state.chat.subThreads);

  // Calculate the scroll container if we are in near bottom of the container div
  const isNearBottom = useCallback(() => {
    if (!scrollContainerRef.current) return false;

    const { scrollTop, scrollHeight, clientHeight } =
      scrollContainerRef.current;
    return scrollHeight - scrollTop - clientHeight < 50;
  }, []);

  // call back hook for handling scrolling state
  const scrollToBottom = useCallback((immediate = false) => {
    if (!scrollContainerRef.current) return;

    // update the ref that we are programatically scrolling the divs
    isScrollingProgrammatically.current = true;
    isPendingScroll.current = true;

    // if there are any pending time outs clear it before requesting new frames
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const scrollContainer = scrollContainerRef.current;
    const scrollHeight = scrollContainer.scrollHeight;

    // Use RAF for smoother animation frame timing
    requestAnimationFrame(() => {
      if (!scrollContainer) return;

      // Force layout computation to scroll.
      scrollContainer.scrollTo({
        top: scrollHeight,
        behavior: immediate ? "auto" : "smooth",
      });

      // Set a timeout to reset the programmatic scrolling flag
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingProgrammatically.current = false;
        isPendingScroll.current = false;
        setShouldScrollToBottom(true);
        // Breathing time for The components to load and set
      }, 300);
    });
  }, []);

  // Handle user scroll events
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Ignore if the scrolling programmatically is turned on
      if (isScrollingProgrammatically.current) return;

      // Store the current scroll position
      lastScrollTopRef.current = scrollContainer.scrollTop;

      // Mark user as scrolling
      setIsUserScrolling(true);

      // Check if user has scrolled to bottom of the container
      const nearBottom = isNearBottom();
      setShouldScrollToBottom(nearBottom);

      // Clear previous timeout and set a new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, 200);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isNearBottom]);

  // Preserve scroll position when loading more user chat history
  useEffect(() => {
    if (isFetchingNextPage) {
      // Save the current scroll position and height for after update reassignments
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const oldScrollHeight = scrollContainer.scrollHeight;
      const oldScrollTop = scrollContainer.scrollTop;

      // After the new content is loaded, adjust scroll position
      const handleContentLoaded = () => {
        requestAnimationFrame(() => {
          if (!scrollContainer) return;

          // Get the new scroll height
          const newScrollHeight = scrollContainer.scrollHeight;

          // Calculate the difference in height of the container
          const heightDifference = newScrollHeight - oldScrollHeight;

          // Adjust scroll position to maintain the same relative position
          if (heightDifference > 0) {
            scrollContainer.scrollTop = oldScrollTop + heightDifference;
          }
        });
      };

      // Create an observer to detect height changes for
      // useful when adding responsiveness
      const resizeObserver = new ResizeObserver(handleContentLoaded);
      resizeObserver.observe(scrollContainer);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [isFetchingNextPage]);

  // Manage scrolling when new messages arrive
  useEffect(() => {
    // Skip if there are no threads
    if (!subThreads.length) return;

    const currentLength = subThreads.length;
    const previousLength = lastSubThreadsLengthRef.current;
    const currentLastId = subThreads[currentLength - 1]._id;
    const previousLastId = lastSubThreadIdRef.current;

    // Update refs for next comparison
    lastSubThreadsLengthRef.current = currentLength;
    lastSubThreadIdRef.current = currentLastId;

    // Don't scroll for initial load of historical messages
    if (previousLength === 0) {
      // Initial load - scroll to bottom immediately
      requestAnimationFrame(() => {
        scrollToBottom(false);
      });
      return;
    }

    // Check if new messages were added (not just loaded from history)
    const newMessagesAdded =
      currentLength > previousLength && currentLastId !== previousLastId;

    // Only scroll to bottom if new messages were added and user was already at bottom
    if (newMessagesAdded && shouldScrollToBottom) {
      // Delay slightly to ensure content is rendered
      requestAnimationFrame(() => {
        // Double RAF for better animation timing
        requestAnimationFrame(() => {
          scrollToBottom(false);
        });
      });
    }
  }, [subThreads, shouldScrollToBottom, scrollToBottom]);

  // Ensure initial scroll position is at the bottom
  useLayoutEffect(() => {
    // Using layout effect to ensure this happens before paint
    if (scrollContainerRef.current && subThreads.length > 0) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set up the observer for infinite loading
  const { ref } = useInView({
    threshold: 0,
    rootMargin: `${VIEW_BEFORE_PX}px 0px`,
    onChange(inView, entry) {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  // Modified scroll snap behavior to work more smoothly with other scroll logic
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let snapScrollTimeout: NodeJS.Timeout;
    let isSnapping = false;

    const handleScrollEnd = () => {
      // Don't apply snap if:
      // 1. User is actively scrolling
      // 2. We're programmatically scrolling
      // 3. We're near the bottom (always prioritize bottom)
      if (
        isUserScrolling ||
        isScrollingProgrammatically.current ||
        isPendingScroll.current
      ) {
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

      // If we're near the bottom, make sure we get to the very bottom
      if (scrollHeight - scrollTop - clientHeight < 500) {
        scrollContainer.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
        return;
      }

      // Apply snap behavior
      const slideHeight = clientHeight;
      const slideIndex = Math.round(scrollTop / slideHeight);
      const targetScrollTop = slideIndex * slideHeight;

      // Only snap if we're not already very close to a snap point
      if (!isSnapping) {
        isSnapping = true;
        scrollContainer.scrollTo({
          top: targetScrollTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          isSnapping = false;
        }, 300);
      }
    };

    const handleScroll = () => {
      // Don't interfere with programmatic scrolling
      if (isScrollingProgrammatically.current) return;

      // Cancel previous timeout
      clearTimeout(snapScrollTimeout);

      // Set new timeout for scroll end detection
      snapScrollTimeout = setTimeout(handleScrollEnd, 200);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(snapScrollTimeout);
    };
  }, [isUserScrolling]);

  return (
    <div className="flex-1  px-1 relative h-full scrollbar-w-hidden overflow-y-scroll flex items-center justify-center lg:mt-4 lg:mr-[0.15vw] flex-col scroll-smooth ">
      <div className="w-full h-full relative z-0 ">
        <div
          ref={scrollContainerRef}
          className={cn(
            "overflow-y-scroll scrollbar-w-hidden snap-y  snap-mandatory w-full h-full relative",
          )}
        >
          <div className={cn("flex  -mt-4 flex-col w-full h-full relative")}>
            <div ref={ref} className="absolute top-6 w-full h-3" />
            {isFetchingNextPage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full flex justify-center py-4"
              >
                <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-300 rounded-full animate-spin"></div>
              </motion.div>
            )}
            <AnimatePresence mode="sync">
              {subThreads.map((subThread) => (
                <motion.div
                  key={`sub-threads-${subThread._id}-${threadId}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    opacity: { duration: 0.2 },
                  }}
                  role="group"
                  aria-roledescription="slide"
                  className={cn(
                    "min-w-0 shrink-0 grow-0 basis-full",
                    "pt-4",
                    "relative py-4 w-full h-full snap-start",
                  )}
                  onAnimationComplete={() => {
                    // After animation completes, check if we need to scroll to bottom
                    if (isPendingScroll.current) {
                      scrollToBottom(false);
                    }
                  }}
                >
                  <ThreeDGenerationWrapper
                    threadId={threadId}
                    subThread={subThread}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
