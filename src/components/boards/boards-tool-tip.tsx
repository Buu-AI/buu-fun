import { TooltipProvider } from "@/components/ui/tooltip";
import { useAppSelector } from "@/hooks/redux";
import useToolTip from "@/hooks/use-tool-tip";
import { getBoards } from "@/lib/redux/selectors/board";
import { BoardToolTips } from "../generation/handle-tool-calls";
import ToolTipDownload from "../generation/tool-tip-download";
import BoardToolTipDelete from "./board-tool-tip-delete";
import BoardToolTipUpdateVisibility from "./board-tool-tip-update-visibility";
import ToolTipPlayGround from "./boards-playground-tool-tip";
import BoardToolTipShare from "./tool-tip-share";
import ToolTipWrapper from "./tool-tip-wrapper";

export default function BoardsToolTip({
  currentUser,
}: {
  currentUser?: boolean;
}) {
  const boards = useAppSelector((state) => getBoards(state));

  const current = useAppSelector((state) => state.boards.currentIndex);
  const { redirectToAnimator } = useToolTip({});
  return (
    <div className=" flex items-center justify-center gap-2 relative mt-4">
      <TooltipProvider>
        {BoardToolTips.map((item, index) => {
          if (item.type === "DOWNLOAD") {
            return (
              <ToolTipDownload
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                modelUrl={boards?.board[current - 1]?.modelUrl}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }

          if (item.type === "SHARE") {
            return (
              <BoardToolTipShare
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                modelUrl={boards?.board[current - 1]?.modelUrl}
                boardId={boards?.boardId ?? ""}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }

          if (item.type === "PLAYGROUND") {
            return (
              <ToolTipPlayGround
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                modelUrl={boards?.board[current - 1]?.modelUrl}
                imageUrl={boards?.board[current - 1]?.ImageUrl}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }

          if (item.type === "ANIMATOR") {
            return (
              <ToolTipWrapper
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                modelUrl={boards?.board[current - 1]?.modelUrl}
                imageUrl={boards?.board[current - 1]?.ImageUrl}
                index={index}
                length={BoardToolTips.length}
                callBack={() => {
                  redirectToAnimator(boards?.board[current - 1]?.modelUrl);
                }}
                toolTipData={item}
              />
            );
          }
          // if (item.type === "EDITOR") {
          //   return (
          //     <ToolTipWrapper
          //       key={`tool-tip-contents-${item.content.trim()}-${index}`}
          //       modelUrl={boards?.board[current - 1]?.modelUrl}
          //       imageUrl={boards?.board[current - 1]?.ImageUrl}
          //       index={index}
          //       length={BoardToolTips.length}
          //       callBack={() => {
          //         toast.success("hello");
          //       }}
          //       toolTipData={item}
          //     />
          //   );
          // }
          if (item.type === "DELETE" && currentUser) {
            return (
              <BoardToolTipDelete
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                boardId={boards?.boardId ?? ""}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }

          if (item.type === "UPDATE" && currentUser) {
            return (
              <BoardToolTipUpdateVisibility
                key={`tool-tip-contents-${item.content.trim()}-${index}`}
                boardId={boards?.boardId ?? ""}
                index={index}
                length={BoardToolTips.length}
                toolTipData={item}
              />
            );
          }
        })}
      </TooltipProvider>{" "}
    </div>
  );
}
