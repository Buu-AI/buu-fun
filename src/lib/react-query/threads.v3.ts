import { TypedAppError } from "@/class/error";
import { serverRequest } from "@/gql/client";
import {
  CancelToolRequest,
  ConfirmToolRequest,
  GenerateModelFromImageMutation,
  GetSessions,
  SendChatMessage,
} from "@/gql/documents/messages";
import {
  CancelToolRequestMutation,
  CancelToolRequestMutationVariables,
  ConfirmToolRequestMutationVariables,
  // EditImageMutationVariables,
  GenerateModelFromImageMutationVariables,
  GetMessagesQueryVariables,
  GetSessionsQueryVariables,
  MessageFilter,
  OrderDirection,
  Pagination,
  SendMessageMutation,
  SendMessageMutationVariables,
  ConfirmToolRequestMutation as TConfirmToolRequestMutation,
  // EditImageMutation as TEditImageMutation,
  GenerateModelFromImageMutation as TGenerateModelFromImageMutation,
  GetMessagesQuery as TGetMessagesQuery,
  GetSessionsQuery as TGetSessionsQuery,
} from "@/gql/types/graphql";
import { QueryFunction } from "@tanstack/react-query";
import { TThreeDStyles } from "../redux/features/settings";
import { getAuthorization } from "../utils";
import { AccessToken } from "./user";

import { GetMessages } from "@/gql/documents/messages";

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
  // return await getChatMessages()
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
    throw new Error("Internal server error NO DATA AVAILABLE");
  }

  if ("code" in data.getMessages) {
    throw new Error("Failed to fetch data");
  }
  console.log("GET:MESSAGES:", data);
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
  sessionId: string;
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
  requestId: string;
} & AccessToken;

export async function approveTool({ requestId, accessToken }: TToolParams) {
  try {
    const data = await serverRequest<
      TConfirmToolRequestMutation,
      ConfirmToolRequestMutationVariables
    >(
      ConfirmToolRequest,
      {
        requestId,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.confirmToolRequest) {
      TypedAppError.throw(
        data.confirmToolRequest.message,
        TypedAppError.mapErrorCode(data.confirmToolRequest.code),
      );
    }

    return data.confirmToolRequest;
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

export async function cancelToolCall({ requestId, accessToken }: TToolParams) {
  try {
    const data = await serverRequest<
      CancelToolRequestMutation,
      CancelToolRequestMutationVariables
    >(
      CancelToolRequest,
      {
        requestId,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.cancelToolRequest) {
      TypedAppError.throw(
        data.cancelToolRequest.message,
        TypedAppError.mapErrorCode(data.cancelToolRequest.code),
      );
    }

    return data.cancelToolRequest;
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
  imageId,
  sessionId,
}: TGenerateModelFromImageParams) {
  try {
    const data = await serverRequest<
      TGenerateModelFromImageMutation,
      GenerateModelFromImageMutationVariables
    >(
      GenerateModelFromImageMutation,
      {
        imageId,
        sessionId,
        numberOfModels: 1,
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

// export async function editImageMutation({
//   accessToken,
//   edit,
//   imageUrl,
//   sessionId,
//   numberOfImages,
// }: EditImageMutationVariables & AccessToken) {
//   try {
//     const data = await serverRequest<
//       TEditImageMutation,
//       EditImageMutationVariables
//     >(
//       EditModelMutation,
//       {
//         edit,
//         imageUrl,
//         sessionId,
//         numberOfImages,
//       },
//       {
//         Authorization: getAuthorization(accessToken),
//       }
//     );
//     if (!data) {
//       TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
//     }

//     if ("code" in data.editImage) {
//       TypedAppError.throw(
//         data.editImage.message,
//         TypedAppError.mapErrorCode(data.editImage.code)
//       );
//     }

//     return data.editImage;
//   } catch (error) {
//     if (error instanceof TypedAppError) {
//       throw error;
//     }
//     // Otherwise, convert to our custom error
//     throw TypedAppError.fromExternalError(
//       "An unexpected error occurred",
//       error
//     );
//   }
// }
