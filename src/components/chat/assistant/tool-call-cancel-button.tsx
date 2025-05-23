import { TypedAppError } from "@/class/error";
import { useAppDispatch } from "@/hooks/redux";
import { queryClient } from "@/lib/react-query/query-client";
import { cancelToolCall } from "@/lib/react-query/threads.v3";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Button } from "../../ui/button";

type TToolCallCancelButton = {
  messageId: string;
};

export default function ToolCallCancelButton({
  messageId,
}: TToolCallCancelButton) {
  const { identityToken } = useAuthentication();
  const dispatch = useAppDispatch();

  const { mutate: cancelToolMessage, isPending: isExistingChatPending } =
    useMutation({
      mutationFn: cancelToolCall,
      async onSuccess(data) {
        toast.loading("Canceling Generation", { duration: 8000 });
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

  function handleCancelMessage() {
    const accessToken = identityToken ?? "";
    cancelToolMessage({ accessToken, messageId });
  }
  return (
    <Button
      disabled={isExistingChatPending}
      onClick={() => handleCancelMessage()}
      size={"buu"}
      variant={"muted_button"}
      className="px-5 py-1.5 "
    >
      Cancel
    </Button>
  );
}
