"use client";
import {
  MESSAGE_QUERY_LIMIT,
  VIEW_BEFORE_PX,
} from "@/constants/infinity.config";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useChatMessage } from "@/hooks/use-messages";
import {
  isRoleAssistant,
  isRoleTool,
  isRoleUser,
} from "@/lib/helpers/status-checker";
import { setMessages } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AssistantMessage from "./assistant/assistant-message";
import AssistantToolMessage from "./assistant/tool-message";
import { useUnifiedChatScroll } from "./use-chat-scroll";
import UserChatMessage from "./user/user-message";

export default function ChatContainer({ sessionId }: { sessionId: string }) {
  const {
    fetchNextPage,
    data: Messages,
    hasNextPage,
    isFetchingNextPage,
  } = useChatMessage({
    sessionId,
    limit: MESSAGE_QUERY_LIMIT,
  });

  const dispatch = useAppDispatch();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const oldScrollHeight = useRef(0);
  const isInitialLoad = useRef(true);
  // Observe the top of the chat for infinite scrolling up
  const { ref: topObserverRef } = useInView({
    threshold: 0,
    rootMargin: `${VIEW_BEFORE_PX}px 0px`,

    onChange(inView, entry) {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        console.log("Fetching next page.");
        // Save current scroll height before fetching
        if (chatContainerRef.current) {
          oldScrollHeight.current = chatContainerRef.current.scrollHeight;
        }
        fetchNextPage();
      }
    },
  });
  // Update messages in redux when Messages change
  useEffect(() => {
    if (Messages) {
      dispatch(setMessages(Messages));
    }
  }, [Messages, dispatch]);

  const messages = useAppSelector((state) => state.chat.messages);

  useEffect(() => {
    if (messages.length > 0) {
      isInitialLoad.current = false;
    }
  }, [messages]);

  // useAutoScrollToBottom(chatContainerRef, messages, 300);
  useUnifiedChatScroll({
    chatContainerRef,
    isFetchingNextPage,
    messages,
  });
  console.log("Messages:", messages);
  return (
    <div className="flex-1 overflow-x-hidden max-w-4xl mx-auto w-full  md:px-8 relative h-full  lg:mt-4 scroll-smooth">
      <div
        id="chat-window"
        ref={chatContainerRef}
        className={cn(
          "overflow-y-scroll  scrollbar-w-hidde overflow-x-hidden snap-y px-2  scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-white scrollbar-thumb-rounded w-full h-full relative",
        )}
      >
        <div ref={topObserverRef} className="absolute top-6 w-full h-3" />
        {isFetchingNextPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex justify-center py-4"
          >
            <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-300 rounded-full animate-spin"></div>
          </motion.div>
        )}
        <div className="flex gap-5 flex-col w-full mt-2 pb-2">
          {messages.map((item) => {
            const messageId = item.messageId;
            const role = item.role;
            const sessionId = item.sessionId;
            return (
              <div key={`message-${messageId}-${sessionId}`}>
                {isRoleTool(role) ? <AssistantToolMessage {...item} /> : null}
                {isRoleAssistant(role) ? (
                  <AssistantMessage
                    {...item}
                    isLastMessage={
                      item.isAssistantLastMessage && !isInitialLoad.current
                    }
                  />
                ) : null}
                {isRoleUser(role) ? <UserChatMessage {...item} /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
