import { TypedAppError } from "@/class/error";
import { serverRequest } from "@/gql/client";
import {
  ConfirmToolMessage,
  GetMessages,
  GetSessions,
  SendChatMessage,
  CancelToolMessage,
  GenerateModelFromImageMutation,
  EditImageMutation,
} from "@/gql/documents/creative-engine";
import {
  ConfirmToolMessageMutationVariables,
  GetMessagesQueryVariables,
  GetSessionsQueryVariables,
  MessageFilter,
  OrderDirection,
  Pagination,
  SendMessageMutation,
  SendMessageMutationVariables,
  ConfirmToolMessageMutation as TConfirmToolMessageMutation,
  GetMessagesQuery as TGetMessagesQuery,
  GetSessionsQuery as TGetSessionsQuery,
  CancelToolMessageMutation,
  CancelToolMessageMutationVariables,
  GenerateModelFromImageMutation as TGenerateModelFromImageMutation,
  GenerateModelFromImageMutationVariables,
  EditImageMutation as TEditImageMutation,
  EditImageMutationVariables,
} from "@/gql/types/graphql";
import { QueryFunction } from "@tanstack/react-query";
import { TThreeDStyles } from "../redux/features/settings";
import { getAuthorization } from "../utils";
import { AccessToken } from "./user";

export type TGetMessages = {
  sessionId: string;
  accessToken: string;
  pagination?: TPagination;
  filters?: Filters;
};

export type Filters = MessageFilter;
export type TPagination = Omit<Pagination, "orderDirection"> & {
  orderDirection?: "asc" | "desc";
};

export type TGetMessagesQueryVariables = Omit<
  GetMessagesQueryVariables,
  "pagination"
> & {
  pagination: TPagination;
};
export type TqueryFun = Awaited<
  ReturnType<Awaited<ReturnType<QueryFunction<typeof getMessages>>>>
>;
export async function getMessages({
  sessionId,
  accessToken,
  pagination = {
    limit: 100,
    offset: 0,
    orderDirection: "desc",
    orderBy: "createdAt",
  },
}: TGetMessages) {
  const data = await serverRequest<
    TGetMessagesQuery,
    TGetMessagesQueryVariables
  >(
    GetMessages,
    {
      // filters: {
      //   ...filters,
      // },
      sessionId,
      pagination,
    },
    { Authorization: getAuthorization(accessToken) },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getMessages) {
    throw new Error("Failed to fetch data");
  }

  return data.getMessages;
}

export type TGetMessagesReturn = Awaited<ReturnType<typeof getMessages>>;

export async function getSessions({ accessToken }: { accessToken: string }) {
  const data = await serverRequest<
    TGetSessionsQuery,
    GetSessionsQueryVariables
  >(
    GetSessions,
    {
      filters: {},
      pagination: {
        limit: 500,
        orderBy: "createdAt",
        orderDirection: OrderDirection.Desc,
      },
    },
    { Authorization: getAuthorization(accessToken) },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getSessions) {
    throw new Error("Failed to fetch data");
  }

  return data.getSessions;
}

type TSendChatMessage = {
  prompt: string;
  style?: TThreeDStyles;
  sessionId?: string;
  accessToken: string;
  imageUrls?: SendMessageMutationVariables["imageUrls"];
};

export async function sendChatMessage({
  prompt,
  // style,
  sessionId,
  accessToken,
  imageUrls,
}: TSendChatMessage) {
  try {
    const data = await serverRequest<
      SendMessageMutation,
      SendMessageMutationVariables
    >(
      SendChatMessage,
      {
        sessionId,
        content: prompt,
        imageUrls,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.sendMessage) {
      TypedAppError.throw(
        data.sendMessage.message,
        TypedAppError.mapErrorCode(data.sendMessage.code),
      );
    }

    return data.sendMessage;
  } catch (error) {
    if (error instanceof TypedAppError) {
      throw error;
    }
    // Otherwise, convert to our custom error
    throw TypedAppError.fromExternalError(
      "An unexpected error occurred",
      error,
    );
  }
}

type TToolParams = {
  messageId: string;
} & AccessToken;

export async function approveTool({ messageId, accessToken }: TToolParams) {
  try {
    const data = await serverRequest<
      TConfirmToolMessageMutation,
      ConfirmToolMessageMutationVariables
    >(
      ConfirmToolMessage,
      {
        messageId,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.confirmToolMessage) {
      TypedAppError.throw(
        data.confirmToolMessage.message,
        TypedAppError.mapErrorCode(data.confirmToolMessage.code),
      );
    }

    return data.confirmToolMessage;
  } catch (error) {
    if (error instanceof TypedAppError) {
      throw error;
    }
    // Otherwise, convert to our custom error
    throw TypedAppError.fromExternalError(
      "An unexpected error occurred",
      error,
    );
  }
}

export async function cancelToolCall({ messageId, accessToken }: TToolParams) {
  try {
    const data = await serverRequest<
      CancelToolMessageMutation,
      CancelToolMessageMutationVariables
    >(
      CancelToolMessage,
      {
        messageId,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.cancelToolMessage) {
      TypedAppError.throw(
        data.cancelToolMessage.message,
        TypedAppError.mapErrorCode(data.cancelToolMessage.code),
      );
    }

    return data.cancelToolMessage;
  } catch (error) {
    if (error instanceof TypedAppError) {
      throw error;
    }
    // Otherwise, convert to our custom error
    throw TypedAppError.fromExternalError(
      "An unexpected error occurred",
      error,
    );
  }
}
type TGenerateModelFromImageParams = GenerateModelFromImageMutationVariables &
  AccessToken;
export async function generateModelFromImageMutation({
  accessToken,
  imageUrl,
  sessionId,
}: TGenerateModelFromImageParams) {
  try {
    const data = await serverRequest<
      TGenerateModelFromImageMutation,
      GenerateModelFromImageMutationVariables
    >(
      GenerateModelFromImageMutation,
      {
        imageUrl,
        sessionId,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.generateModelFromImage) {
      TypedAppError.throw(
        data.generateModelFromImage.message,
        TypedAppError.mapErrorCode(data.generateModelFromImage.code),
      );
    }

    return data.generateModelFromImage;
  } catch (error) {
    if (error instanceof TypedAppError) {
      throw error;
    }
    // Otherwise, convert to our custom error
    throw TypedAppError.fromExternalError(
      "An unexpected error occurred",
      error,
    );
  }
}

export async function editImageMutation({
  accessToken,
  edit,
  imageUrl,
  sessionId,
  numberOfImages,
}: EditImageMutationVariables & AccessToken) {
  try {
    const data = await serverRequest<
      TEditImageMutation,
      EditImageMutationVariables
    >(
      EditImageMutation,
      {
        edit,
        imageUrl,
        sessionId,
        numberOfImages,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.editImage) {
      TypedAppError.throw(
        data.editImage.message,
        TypedAppError.mapErrorCode(data.editImage.code),
      );
    }

    return data.editImage;
  } catch (error) {
    if (error instanceof TypedAppError) {
      throw error;
    }
    // Otherwise, convert to our custom error
    throw TypedAppError.fromExternalError(
      "An unexpected error occurred",
      error,
    );
  }
}
