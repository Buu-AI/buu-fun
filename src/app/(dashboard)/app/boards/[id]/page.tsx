import ViewBoardContainer from "@/components/boards/view-board-container";
import { getUserSharableBoardQuery } from "@/lib/react-query/boards";
import { Ghost } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
type TBoardsPage = {
  params: Promise<{
    id: string;
  }>;
};
export default async function BoardsPage({ params }: TBoardsPage) {
  const boardId = (await params).id;
  const cookie = await cookies();

  const accessToken = cookie.get("privy-id-token")?.value;
  if (!accessToken) {
    redirect("/");
    return;
  }

  const board = await getUserSharableBoardQuery({
    _id: boardId,
    accessToken,
    count: 1,
  });

  const index = 0;
  return (
    <main className="flex flex-col relative h-full w-full   max-h-[calc(100vh-100px)]  overflow-hidden">
      {board?.items.length && board?.items[index] ? (
        <ViewBoardContainer currentUser={true} board={board?.items[index]} />
      ) : (
        <div className="w-full h-full flex gap-3 flex-col items-center justify-center">
          <Ghost className="w-10 h-10" />
          <p className="text-2xl font-medium max-w-sm text-center">
            The Board you are looking for is either deleted or doesn&apos;t
            exists
          </p>
        </div>
      )}
    </main>
  );
}
