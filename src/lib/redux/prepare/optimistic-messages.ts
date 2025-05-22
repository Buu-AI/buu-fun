import { parseJson } from "@/lib/utils";
import { PromptPayload, TChatMessage } from "@/types/chat/chat-types";
import { MessageUpdatedEvent } from "@/types/chat/event-source";
import { v4 as uuid } from "uuid";
export const optimisticUserMessages = (
  text: string,
  sessionId: string,
  imageUrls: string[] = []
): TChatMessage => {
  return {
    credits: 0,
    imageUrl: null,
    imageUrls,
    isAssistantLastMessage: false,
    messageId: uuid(),
    modelUrl: null,
    nftId: null,
    payload: null,
    prompt: text,
    role: "user",
    sessionId,
    status: "COMPLETED",
    /**
     * Verify @victor
     */
    teamId: "team-id",
    createdAt: new Date(Date.now()).toISOString(),
  };
};

export const AiChatStreamMessage = (
  prompt: string,
  messageId: string,
  sessionId: string
): TChatMessage => {
  return {
    credits: 0,
    imageUrl: null,
    imageUrls: [],
    isAssistantLastMessage: false,
    messageId: messageId,
    modelUrl: null,
    nftId: null,
    payload: null,
    prompt: prompt,
    role: "assistant",
    sessionId,
    status: "IN_PROGRESS",
    teamId: "team-id",
    createdAt: new Date(Date.now()).toISOString(),
  };
};

export const handleMessageUpdate = (
  data: MessageUpdatedEvent["payload"]
): TChatMessage => {
  const { data: payload } = parseJson<PromptPayload>(
    data.toolRequest?.payload ?? ""
  );

  const imageUrls =
    data.content?.images
      ?.map((image) => image.url)
      .filter((fv) => typeof fv === "string") ?? [];
  return {
    credits: data?.credits,
    imageUrl: data.content?.model?.image?.url,
    imageUrls: imageUrls,
    isAssistantLastMessage: true,
    messageId: data?._id,
    modelUrl: data.content?.model?.url,
    nftId: null,
    payload: payload,
    prompt: data?.content?.text,
    role: data?.role,
    sessionId: data?.sessionId,
    status: data?.status,
    teamId: data?.teamId,
    createdAt: data.createdAt ?? new Date(Date.now()).toISOString(),
    type: data.toolRequest?.type ?? undefined,
  };
};
