import { TSubthread as TResponseThread } from "@/lib/react-query/threads-types";
import { TChatMessage, TMessageQueryData } from "@/types/chat/chat-types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { InfiniteData } from "@tanstack/react-query";
import { MessageUpdatedEvent } from "@/types/chat/event-source";

import { prepareMessagePayload } from "../prepare/message";
import {
  ChatState,
  TImageData,
  TAllSubThreadsResponse,
  TMediaRequest,
  TSubThread,
  TSubThreadsMedia,
  TSubThreadsResponse,
  TSubthreadV1,
  TEditImage,
  TGenerateModal,
  TMaximize,
} from "./chat-types";
import {
  AiChatStreamMessage,
  handleMessageUpdate,
  optimisticUserMessages,
} from "../prepare/optimistic-messages";

const initialState: ChatState = {
  inputQuery: "",
  inputImageUrl: "",
  inputFile: [],
  currentGenRequestIndex: 0,
  currentSubThreadIndex: 0,
  subThreads: [],
  genRequest: {},
  genNft: {
    isGenNftModalOpen: false,
    messageId: "",
    modelUrl: "",
    imageUrl: "",
  },
  threads: {
    threadId: "",
    subThreads: [],
  },
  retry: {
    modalOpened: false,
    subThreadId: null,
  },
  maximizedContainer: {
    isOpened: false,
    data: undefined,
  },
  sessionId: "",
  messages: [],
  chatMessageEditImage: {
    isOpened: false,
    imageUrl: null,
  },
  genModelFromImage: {
    isOpened: false,
    imageUrl: null,
  },
  chatMessages: {
    pageParams: [],
    pages: [],
  },
};
const ChatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.messages = [];
    },
    setOpenGenerateNFTModal(state, action: PayloadAction<boolean>) {
      state.genNft.isGenNftModalOpen = action.payload;
    },
    setGenerateNFT(
      state,
      action: PayloadAction<{
        isGenNftOpen: boolean;
        messageId?: string;
        modelUrl?: string | null;
        imageUrl?: string | null;
      }>,
    ) {
      state.genNft.isGenNftModalOpen = action?.payload?.isGenNftOpen;
      state.genNft.messageId = action.payload.messageId;
      state.genNft.modelUrl = action.payload.modelUrl;
      state.genNft.imageUrl = action.payload.imageUrl;
    },
    setRetryModalOpen(state, action: PayloadAction<boolean>) {
      state.retry.modalOpened = action.payload;
    },
    setRetrySubthreadId(state, action: PayloadAction<string | null>) {
      state.retry.subThreadId = action.payload;
    },
    setInputFile(state, action: PayloadAction<TImageData>) {
      const fileLength = state.inputFile.length < 4;
      if (fileLength) {
        state.inputFile?.push(action.payload);
      }
    },
    removeImage(state, action: PayloadAction<string>) {
      state.inputFile = state.inputFile.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearInputFile(state) {
      state.inputFile = [];
    },
    setInputImageUrl(state, action: PayloadAction<string>) {
      state.inputImageUrl = action.payload;
    },
    pushNewSubThreads(state, action: PayloadAction<TSubthreadV1>) {
      state.subThreads.push(action.payload);
    },
    setNewGenRequest(state, action: PayloadAction<TSubThreadsMedia>) {
      state.genRequest[action.payload.subthreadId].push(action.payload);
    },
    setSubThreadIndex(state, action: PayloadAction<number>) {
      state.currentSubThreadIndex = action.payload;
    },
    setGenRequestIndex(state, action: PayloadAction<number>) {
      state.currentGenRequestIndex = action.payload;
    },
    setSubThreadResponse: {
      reducer(
        state,
        action: PayloadAction<{
          subThreadId: string;
          Media: TSubThreadsMedia[];
        }>,
      ) {
        state.genRequest[action.payload.subThreadId] = action.payload.Media;
      },
      prepare(Media: TSubThreadsResponse["items"], subThreadId: string) {
        return {
          payload: {
            Media,
            subThreadId,
          },
        };
      },
    },
    setInfinitySubThreads: {
      reducer(state, action: PayloadAction<TSubthreadV1[]>) {
        state.subThreads = action.payload;
      },
      prepare(data: InfiniteData<TAllSubThreadsResponse>) {
        const transformedData: TSubthreadV1[] = data.pages
          .flatMap((eachPage) => {
            return eachPage.items.map(
              (item): TSubthreadV1 => ({
                ...item,
              }),
            );
          })
          .sort(
            (a, b) =>
              new Date(a.createdAt as string).getTime() -
              new Date(b.createdAt as string).getTime(),
          );

        return {
          payload: transformedData,
        };
      },
    },
    setDraggedImage(state, action: PayloadAction<string | undefined>) {
      state.draggingImage = action.payload;
    },
    setPlacedImage(state, action: PayloadAction<string | undefined>) {
      state.placedImage = action.payload;
    },
    clearInput(state) {
      state.inputQuery = "";
      state.placedImage = undefined;
    },
    setInputQuery(state, action: PayloadAction<string>) {
      state.inputQuery = action.payload;
    },
    addWords(state, action: PayloadAction<string>) {
      const words = state.inputQuery.split(" ");

      // Check if there's at least one word
      if (words.length > 0) {
        // Replace the last word with the suggested word from action.payload
        words[words.length - 1] = action.payload;

        // Join the words back into a string
        state.inputQuery = words.join(" ") + " ";
      }
    },
    setNewThreadId(state, action: PayloadAction<string>) {
      state.threads.threadId = action.payload;
      state.inputQuery = "";
    },
    setSubThreads: {
      reducer(state, action: PayloadAction<TSubThread[]>) {
        state.threads.subThreads = action.payload;
      },

      prepare(payload: TResponseThread[]) {
        const data: TSubThread[] = payload.map((item) => ({
          _id: item._id,
          loadingNewGeneration:
            item?.imageRequests?.length !== item?.modelRequests?.length,
          createdAt: item.createdAt,
          style: item.style,
          threadId: item.threadId,
          imageRequest:
            item.imageRequests &&
            item.imageRequests.map((imgRes): TMediaRequest => {
              return {
                _id: imgRes._id,
                images: imgRes.images,

                modelMesh: imgRes.model_mesh,
                metadata: imgRes.metadata,
                status: imgRes.status,
                type: imgRes.type,
              };
            }),
          message: item.prompt,
          modelRequest:
            item.modelRequests &&
            item.modelRequests.map(
              (modRes): TMediaRequest => ({
                _id: modRes._id,
                images: modRes.images,
                metadata: modRes.metadata,
                modelMesh: modRes.model_mesh,
                status: modRes.status,
                type: modRes.type,
              }),
            ),
        }));
        return {
          payload: data,
        };
      },
    },

    setSubThread: {
      reducer(state, action: PayloadAction<TSubThread>) {
        console.log("PAYLOAD", action.payload);
        const index = state.threads.subThreads.findIndex(
          (fv) => fv._id === action.payload._id,
        );

        if (index !== -1) {
          // Replace the existing object
          state.threads.subThreads[index] = action.payload;
        } else {
          // Add new subThread
          state.threads.subThreads.push(action.payload);
        }
      },
      prepare(payload: TResponseThread, loadingNewGeneration: boolean = false) {
        // const loadingNewGeneration = isLoadingNew
        const data: TSubThread = {
          ...payload,
          loadingNewGeneration,
          message: payload.prompt,
          modelRequest:
            payload.modelRequests &&
            payload.modelRequests.map((imgRes) => {
              return {
                _id: imgRes._id,
                images: imgRes.images,
                modelMesh: imgRes.model_mesh,
                metadata: imgRes.metadata,
                status: imgRes.status,
                type: imgRes.type,
              };
            }),
          imageRequest:
            payload.imageRequests &&
            payload.imageRequests.map((imgRes) => {
              return {
                _id: imgRes._id,
                images: imgRes.images,
                modelMesh: imgRes.model_mesh,
                metadata: imgRes.metadata,
                status: imgRes.status,
                type: imgRes.type,
              };
            }),
        };
        return {
          payload: data,
        };
      },
    },
    setNewSession(state, payload: PayloadAction<string>) {
      state.sessionId = payload.payload;
    },
    setEditImage(state, action: PayloadAction<TEditImage>) {
      state.chatMessageEditImage.isOpened = action.payload.isOpened;
      state.chatMessageEditImage.imageUrl = action.payload.imageUrl;
    },
    setGenerateModel(state, action: PayloadAction<TGenerateModal>) {
      state.genModelFromImage.isOpened = action.payload.isOpened;
      state.genModelFromImage.imageUrl = action.payload.imageUrl;
      state.genModelFromImage.modelUrl = action.payload.modelUrl;
    },
    setMaximizedViewer(state, action: PayloadAction<TMaximize>) {
      state.maximizedContainer.isOpened = action.payload.isOpened;
      state.maximizedContainer.data = action.payload.data;
    },
    setNewMessage(
      state,
      action: PayloadAction<InfiniteData<TMessageQueryData>>,
    ) {
      state.chatMessages = action.payload;
    },
    setMessages: {
      reducer: (state, action: PayloadAction<TChatMessage[]>) => {
        state.messages = action.payload;
      },
      prepare: (data: InfiniteData<TMessageQueryData>) => {
        const message = prepareMessagePayload(data);
        return {
          payload: message,
        };
      },
    },
    handleMessageUpdates: {
      reducer: (state, action: PayloadAction<TChatMessage>) => {
        const item = state.messages.find(
          (item) => item.messageId === action.payload.messageId,
        );
        if (!item) {
          state.messages.push(action.payload);
        } else {
          item.prompt = action.payload.prompt;
        }
      },
      prepare(payload: MessageUpdatedEvent["payload"]) {
        const data = handleMessageUpdate(payload);
        return {
          payload: data,
        };
      },
    },

    appendAIChatMessage: {
      reducer: (state, action: PayloadAction<TChatMessage>) => {
        const item = state.messages.find(
          (item) => item.messageId === action.payload.messageId,
        );
        if (!item) {
          state.messages.push(action.payload);
        } else {
          item.prompt = action.payload.prompt;
        }
      },
      prepare: (prompt: string, messageId: string, sessionId: string) => {
        const payload = AiChatStreamMessage(prompt, messageId, sessionId);
        return {
          payload,
        };
      },
    },
    appendUserChatMessage: {
      reducer: (state, payload: PayloadAction<TChatMessage>) => {
        state.messages.push(payload.payload);
      },
      prepare(prompt: string, sessionId: string, imageUrls: string[] = []) {
        const newMessage = optimisticUserMessages(prompt, sessionId, imageUrls);
        return {
          payload: newMessage,
        };
      },
    },
  },
});

export const {
  setInputQuery,
  addWords,
  setNewThreadId,
  setSubThreads,
  setSubThread,
  clearInput,
  setPlacedImage,
  setDraggedImage,
  setInfinitySubThreads,
  setSubThreadResponse,
  setGenRequestIndex,
  setSubThreadIndex,
  pushNewSubThreads,
  setNewGenRequest,
  setInputFile,
  clearInputFile,
  setInputImageUrl,
  setRetryModalOpen,
  setRetrySubthreadId,
  setGenerateNFT,
  setOpenGenerateNFTModal,
  setMessages,
  setNewSession,
  setNewMessage,
  removeImage,
  setEditImage,
  setGenerateModel,
  setMaximizedViewer,
  appendUserChatMessage,
  appendAIChatMessage,
  handleMessageUpdates,
  clearMessages,
} = ChatSlice.actions;

export default ChatSlice.reducer;
