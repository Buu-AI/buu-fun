import { useMutation } from "@tanstack/react-query";
import { Button } from "../../ui/button";
import toast from "react-hot-toast";
import { approveTool } from "@/lib/react-query/threads.v3";
import { queryClient } from "@/lib/react-query/query-client";
import { TypedAppError } from "@/class/error";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { useAppDispatch } from "@/hooks/redux";
import { useAuthentication } from "@/providers/account.context";

type TToolCallApproveButton = {
  messageId: string;
};

export default function ToolCallApproveButton({
  messageId,
}: TToolCallApproveButton) {
  const { identityToken } = useAuthentication();
  const dispatch = useAppDispatch();
  const { mutate: approveToolMessage, isPending: isExistingChatPending } =
    useMutation({
      mutationFn: approveTool,
      async onSuccess(data) {
        toast.loading("Generating your model...", { duration: 8000 });
        // dispatch(pushNewSubThreads(data));
        const sessionId = data.sessionId;
        await queryClient.invalidateQueries({
          exact: false,
          queryKey: ["get-messages", sessionId],
        });
      },
      onError(error) {
        if (error instanceof TypedAppError) {
          switch (error.code) {
            case "CREDIT_NOT_FOUND": {
              dispatch(setSubscriptionModel(true));
              toast.error("Insufficient credits");
              return;
            }
            default: {
              toast.error("Something went wrong");
              return;
            }
          }
        }
        toast.error("Something went wrong, Please try again.");
      },
    });
  function handleApproveMessage() {
    const accessToken = identityToken ?? "";
    approveToolMessage({ accessToken, messageId });
  }
  return (
    <Button
      disabled={isExistingChatPending}
      onClick={() => {
        handleApproveMessage();
      }}
      size={"buu"}
      className="px-5 py-1.5 "
    >
      Approve
    </Button>
  );
}
