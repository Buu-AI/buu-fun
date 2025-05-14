import { serverRequest } from "@/gql/client";
import {
  GenerateImageMutation,
  GetSubthreadQuery,
  GetSubthreadsQuery,
  GetThreadsQuery,
} from "@/gql/documents/creative-engine";
import {
  SubthreadStyle,
  GenerateImageMutation as TGenerateImageMutation,
  GetThreadsQuery as TGetThreadsQuery,
} from "@/gql/types/graphql";
import { TThreeDStyles } from "../redux/features/settings";
import { getAuthorization } from "../utils";
import { TGetSubThreadResponse, TGetSubThreadsResponse } from "./threads-types";
import { TypedAppError } from "@/class/error";

type TGenerateSubThreads = {
  prompt: string;
  style?: TThreeDStyles;
  threadId?: string;
  accessToken: string;
  imageUrl?: string | null;
};

// export async function generateSubThreads({
//   prompt,
//   style,
//   threadId,
//   accessToken,
//   imageUrl,
// }: TGenerateSubThreads) {
//   try {
//     const data = await serverRequest<
//       TGenerateSubthreadMutation,
//       GenerateSubthreadMutationVariables
//     >(
//       GenerateSubthreadMutation,
//       {
//         prompt: prompt,
//         style: (style as SubthreadStyle) ?? null,
//         imageUrl: imageUrl ?? null,
//         threadId,
//       },
//       {
//         Authorization: getAuthorization(accessToken),
//       },
//     );
//     if (!data) {
//       TypedAppError.throw("Internal server error", "INTERNAL_SERVER_ERROR");
//     }

//     if ("code" in data.generateSubthread) {
//       TypedAppError.throw(
//         data.generateSubthread.message,
//         TypedAppError.mapErrorCode(data.generateSubthread.code),
//       );
//     }

//     return data.generateSubthread;
//   } catch (error) {
//     if (error instanceof TypedAppError) {
//       throw error;
//     }
//     // Otherwise, convert to our custom error
//     throw TypedAppError.fromExternalError(
//       "An unexpected error occurred",
//       error,
//     );
//   }
// }

export async function getSubThreads(threadId: string, accessToken: string) {
  const data = await serverRequest<TGetSubThreadsResponse>(
    GetSubthreadsQuery,
    {
      filters: {
        threadId_eq: threadId,
      },
      pagination: {},
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getSubthreads) {
    throw new Error(data.getSubthreads.message, { cause: "INVALID_DATA" });
  }
  return data.getSubthreads;
}

export async function getSubThread(subThreadId: string, accessToken: string) {
  const data = await serverRequest<TGetSubThreadResponse>(
    GetSubthreadQuery,
    {
      subthreadId: subThreadId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getSubthread) {
    throw new Error(data.getSubthread.message, { cause: "INVALID_DATA" });
  }
  return data.getSubthread;
}

export async function mutateGenerateNewImage({
  accessToken,
  subthreadId,
}: {
  subthreadId: string;
  accessToken: string;
}) {
  const data = await serverRequest<TGenerateImageMutation>(
    GenerateImageMutation,
    {
      subthreadId: subthreadId,
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.generateImage) {
    throw new Error(data.generateImage.message, { cause: "INVALID_DATA" });
  }
  return data.generateImage;
}

// GetThreadsQuery
export async function getAllThreads(accessToken: string) {
  const data = await serverRequest<TGetThreadsQuery>(
    GetThreadsQuery,
    {
      filters: {},
      pagination: {
        limit: 25,
        orderDirection: "desc",
      },
    },
    {
      Authorization: getAuthorization(accessToken),
    },
  );
  if (!data) {
    throw new Error("Internal server error");
  }

  if ("code" in data.getThreads) {
    throw new Error(data.getThreads.message, { cause: "INVALID_DATA" });
  }
  return data.getThreads;
}
