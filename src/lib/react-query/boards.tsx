import { TypedAppError } from "@/class/error";
import { serverRequest } from "@/gql/client";
import { CreateShareableBoardMutation } from "@/gql/documents/creative-engine";
import {
  CreateShareableBoardMutationVariables,
  CreateShareableBoardMutation as TCreateShareableBoardMutation,
} from "@/gql/types/graphql";
import { getAuthorization } from "../utils";
import { AccessToken } from "./user";

import {
  DeleteShareableBoardMutation,
  GetShareableBoardQuery,
  GetUserShareableBoardsQuery,
  UpdateShareableBoardVisibilityMutation,
} from "@/gql/documents/creative-engine";
import {
  DeleteShareableBoardMutationVariables,
  GetUserShareableBoardQuery,
  OrderDirection,
  DeleteShareableBoardMutation as TDeleteShareableBoardMutation,
  GetShareableBoardQuery as TGetShareableBoardQuery,
  GetShareableBoardQueryVariables as TGetShareableBoardQueryVariables,
  GetUserShareableBoardQueryVariables as TGetUserShareableBoardQueryVariables,
  UpdateShareableBoardVisibilityMutation as TUpdateShareableBoardVisibilityMutation,
  UpdateShareableBoardVisibilityMutationVariables,
} from "@/gql/types/graphql";

export async function getUserSharableBoardQuery({
  accessToken,
  threadId,
  count,
  _id,
}: AccessToken & { threadId?: string; count?: number; _id?: string }) {
  const data = await serverRequest<
    GetUserShareableBoardQuery,
    TGetUserShareableBoardQueryVariables
  >(
    GetUserShareableBoardsQuery,
    {
      filters: {
        threadId_eq: threadId,
        _id_eq: _id,
      },
      pagination: {
        limit: count ?? 100,
        orderBy: "createdAt",
        orderDirection: OrderDirection.Desc,
      },
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.getUserShareableBoard) {
    throw new Error(data.getUserShareableBoard.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.getUserShareableBoard;
}

export async function getSharableBoardQuery({
  boardId,
  headers,
}: {
  boardId: string;
  headers?: {
    Authorization: string;
  };
}) {
  try {
    const data = await serverRequest<
      TGetShareableBoardQuery,
      TGetShareableBoardQueryVariables
    >(
      GetShareableBoardQuery,
      {
        getShareableBoardId: boardId,
      },
      headers,
    );

    if (!data) {
      throw new Error("Internal server error");
    }
    if ("code" in data.getShareableBoard) {
      console.log(data.getShareableBoard);
      throw new Error(data.getShareableBoard.message, {
        cause: "INVALID_DATA",
      });
    }

    return data.getShareableBoard;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export type TGetSharableBoardQuery = Awaited<ReturnType<typeof getSharableBoardQuery>>

export async function updateBoardsVisibility({
  boardId,
  isPublic,
  accessToken,
}: {
  boardId: string;
  isPublic: boolean;
} & AccessToken) {
  const data = await serverRequest<
    TUpdateShareableBoardVisibilityMutation,
    UpdateShareableBoardVisibilityMutationVariables
  >(
    UpdateShareableBoardVisibilityMutation,
    {
      isPublic: isPublic,
      shareableBoardId: boardId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.updateShareableBoardVisibility) {
    throw new Error(data.updateShareableBoardVisibility.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.updateShareableBoardVisibility;
}

export async function deleteBoard({
  boardId,
  accessToken,
}: { boardId: string } & AccessToken) {
  const data = await serverRequest<
    TDeleteShareableBoardMutation,
    DeleteShareableBoardMutationVariables
  >(
    DeleteShareableBoardMutation,
    {
      shareableBoardId: boardId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );

  if (!data) {
    throw new Error("Internal server error");
  }
  if ("code" in data.deleteShareableBoard) {
    throw new Error(data.deleteShareableBoard.message, {
      cause: "INVALID_DATA",
    });
  }

  return data.deleteShareableBoard;
}

export async function createNewBoardsMutation({
  threadId,
  accessToken,
}: AccessToken & { threadId: string }) {
  try {
    const data = await serverRequest<
      TCreateShareableBoardMutation,
      CreateShareableBoardMutationVariables
    >(
      CreateShareableBoardMutation,
      {
        threadId,
      },
      {
        Authorization: getAuthorization(accessToken),
      },
    );
    if (!data) {
      TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
    }

    if ("code" in data.createShareableBoard) {
      TypedAppError.throw(
        data.createShareableBoard.message,
        TypedAppError.mapErrorCode(data.createShareableBoard.code),
      );
    }
    return data.createShareableBoard;
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
