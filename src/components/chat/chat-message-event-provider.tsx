"use client";
import { useAppDispatch } from "@/hooks/redux";
import { getEventSource } from "@/lib/fetcher/events/event-sourcer";
import { handleEventSource } from "@/lib/helpers/eventsource/chat";
import {
  appendAIChatMessage,
  clearMessages,
  handleMessageUpdates,
} from "@/lib/redux/features/chat";
import { parseJson } from "@/lib/utils";
import { useAuthentication } from "@/providers/account.context";
import { ChatEvents } from "@/types/chat/event-source";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type TChatMessageEventProvider = {
  sessionId: string;
};

export default function ChatMessageEventProvider({
  sessionId,
}: TChatMessageEventProvider) {
  const slug = `/chat/${sessionId}`;
  const { identityToken: accessToken } = useAuthentication();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  useEffect(() => {
    function invalidatorMessage() {
      queryClient.invalidateQueries({
        exact: false,
        queryKey: ["get-messages", sessionId, accessToken],
      });
    }
    const eventSource = getEventSource(slug);
    eventSource.addEventListener("open", (ev) => {});
    let message = "";

    eventSource.onmessage = (ev) => {
      const { data } = parseJson<ChatEvents>(ev.data);
      if (!data) return;

      switch (data.type) {
        case "message-updated": {
          message = "";
          console.log(data.payload)
          dispatch(handleMessageUpdates(data.payload));
          handleEventSource["message-updated"]?.({
            ...data,
            invalidate: invalidatorMessage,
          });
          return;
        }
        case "message-new-token": {
          message = message + data.payload.token;
          const { messageId } = data.payload;
          dispatch(appendAIChatMessage(message, messageId, sessionId));
          handleEventSource["message-new-token"]?.({
            ...data,
            message,
          });
        }
      }
    };
    // eventSource.addEventListener("message", (ev) => {});

    eventSource.addEventListener("error", (ev) => {
      invalidatorMessage();
    });
    return () => {
      eventSource.close();
      dispatch(clearMessages());
    };
  }, [sessionId, accessToken, slug, dispatch, queryClient]);
  return null;
}



