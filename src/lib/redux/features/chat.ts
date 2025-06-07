import { TChatMessage, TMessageQueryData } from "@/types/chat/chat-types";
import { MessageUpdatedEvent } from "@/types/chat/event-source";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { InfiniteData } from "@tanstack/react-query";

import { Model, ToolRequest } from "@/gql/types/graphql";
import { prepareMessagePayload } from "../prepare/message";
import {
  AiChatStreamMessage,
  handleMessageUpdate,
  optimisticUserMessages,
} from "../prepare/optimistic-messages";
import {
  ChatState,
  TEditImage,
  TGenerateModal,
  TImageData,
  TMaximize,
} from "./chat-types";

const initialState: ChatState = {
  inputQuery: "",
  inputImageUrl: "",
  inputFile: [],
  genNft: {
    isGenNftModalOpen: false,
    messageId: "",
    modelUrl: "",
    imageUrl: "",
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
        modelId?: string | null;
      }>,
    ) {
      state.genNft.isGenNftModalOpen = action?.payload?.isGenNftOpen;
      state.genNft.messageId = action.payload.messageId;
      state.genNft.modelUrl = action.payload.modelUrl;
      state.genNft.imageUrl = action.payload.imageUrl;
      state.genNft.modelId = action.payload.modelId;
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
      state.genModelFromImage.imageId = action.payload.imageId;
      state.genModelFromImage.modelUrl = action.payload.modelUrl;
    },
    setMaximizedViewer(state, action: PayloadAction<TMaximize>) {
      state.maximizedContainer.isOpened = action.payload.isOpened;
      state.maximizedContainer.data = action.payload.data;
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
    updateMessageModel(state, action: PayloadAction<Model>) {
      const model = action.payload;

      const message = state.messages.find(
        (fv) => fv.messageId === model.messageId,
      );

      if (message) {
        const modelIndex = message.models.findIndex(
          (fv) => fv._id === model._id,
        );

        if (modelIndex !== -1) {
          // Update the existing model
          message.models[modelIndex] = {
            ...message.models[modelIndex],
            ...model,
          };
        } else {
          // If model doesn't exist, add it to the models array
          message.models.push(model);
        }
      }
    },
    updateMessageToolRequest(state, action: PayloadAction<ToolRequest>) {
      const tool = action.payload;

      const message = state.messages.find(
        (fv) => fv.messageId === tool.messageId,
      );

      if (message) {
        // Replace the message toolRequest with the new tool
        message.toolRequest = tool;

        // Update toolRequest in all models within this message
        if (message.models && message.models.length > 0) {
          message.models.forEach((model) => {
            model.toolRequest = tool;
          });
        }
      }
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
      prepare(prompt: string, sessionId: string) {
        const newMessage = optimisticUserMessages(prompt, sessionId);
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
  clearInput,
  setPlacedImage,
  setDraggedImage,
  setInputFile,
  clearInputFile,
  setInputImageUrl,
  setGenerateNFT,
  setOpenGenerateNFTModal,
  setMessages,
  setNewSession,
  removeImage,
  setEditImage,
  setGenerateModel,
  setMaximizedViewer,
  appendUserChatMessage,
  appendAIChatMessage,
  handleMessageUpdates,
  updateMessageModel,
  updateMessageToolRequest,
  clearMessages,
} = ChatSlice.actions;

export default ChatSlice.reducer;
