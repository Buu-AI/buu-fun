import ViewBoardContainer from "@/components/boards/view-board-container";
import { getSharableBoardQuery } from "@/lib/react-query/boards";
import { getAuthorization } from "@/lib/utils";
import { Ghost } from "lucide-react";
import { cookies } from "next/headers";
type TBoardsPage = {
  params: Promise<{
    id: string;
  }>;
};
export default async function BoardsPage({ params }: TBoardsPage) {
  const boardId = (await params).id;
  const cookie = cookies();

  const accessToken = (await cookie).get("privy-id-token")?.value;
  const headers = accessToken
    ? {
        Authorization: getAuthorization(accessToken),
      }
    : undefined;

  const board = await getSharableBoardQuery({
    boardId,
    headers,
  });

  return (
    <main className="flex flex-col relative h-full w-full   max-h-[calc(100vh-100px)]  overflow-hidden">
      {board ? (
        <ViewBoardContainer board={board} />
      ) : (
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
          <Ghost className="w-10 h-10 text-blue-300 animate-pulse" />
          <p className="text-2xl font-medium max-w-sm text-center">
            The Board you are looking for is either private or doesn&apos;t
            exists
          </p>
        </div>
      )}
    </main>
  );
}
