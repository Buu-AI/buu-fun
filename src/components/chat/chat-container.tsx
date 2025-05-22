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
    error,
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

  if (error?.message) {
    return <>{error?.message}</>;
  }
  return (
    <div className="flex-1 overflow-x-hidden max-w-4xl mx-auto w-full  md:px-8 relative h-full  lg:mt-4 scroll-smooth">
      <div
        id="chat-window"
        ref={chatContainerRef}
        className={cn(
          "overflow-y-scroll  scrollbar-w-hidden overflow-x-hidden snap-y px-2 snap-mandatory w-full h-full relative",
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
        {/* <AnimatePresence> */}
        <div className="flex gap-5 flex-col w-full mt-2 pb-12">
          {messages.map((item) => {
            const messageId = item.messageId;
            const payload = item?.payload;
            const role = item.role;
            const sessionId = item.sessionId;
            const credits = item.credits ?? 0;
            const status = item.status;
            const imageUrl = item.imageUrl;
            const imageUrls = item.imageUrls;
            const modelUrl = item.modelUrl;
            const prompt = item.prompt;
            const createdAt = item.createdAt;
            const type = item.type;
            const tokenized = typeof item.nftId === "string";
            const nftId = item.nftId;
            return (
              <div
                // initial={{ scale: 1, opacity: 0, y: -100 }}
                // animate={{
                //   y: 0,
                //   opacity: 1,
                //   transition: {
                //     type: "tween",
                //     duration: 0.5,
                //   },
                // }}
                // exit={{
                //   opacity: 0,
                //   transition: {
                //     duration: 0.3,
                //     ease: "easeInOut",
                //   },
                // }}
                // layout
                key={`message-${messageId}-${sessionId}`}
              >
                {isRoleTool(role) ? (
                  <AssistantToolMessage
                    messageId={messageId}
                    prompt={prompt}
                    imageUrls={imageUrls}
                    status={status}
                    nftId={nftId}
                    type={type}
                    tokenized={tokenized}
                    imageUrl={imageUrl}
                    modelUrl={modelUrl}
                    payload={payload}
                    credits={credits}
                  />
                ) : null}
                {isRoleAssistant(role) ? (
                  <AssistantMessage
                    createdAt={createdAt}
                    status={status}
                    isLastMessage={
                      item.isAssistantLastMessage && !isInitialLoad.current
                    }
                    prompt={prompt}
                  />
                ) : null}
                {isRoleUser(role) ? (
                  <UserChatMessage
                    status={status}
                    messageId={messageId}
                    imageUrls={imageUrls}
                    text={prompt ?? ""}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}
