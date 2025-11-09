import { TypedAppError } from "@/class/error";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { approveTool } from "@/lib/react-query/threads.v3";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { useAuthentication } from "@/providers/account.context";
import { MaybeString } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Button } from "../../ui/button";

type TToolCallApproveButton = {
  requestId: MaybeString;
};

export default function ToolCallApproveButton({
  requestId,
}: Readonly<TToolCallApproveButton>) {
  const { identityToken } = useAuthentication();
  const dispatch = useAppDispatch();
  const isAutoApproveEnabled = useAppSelector(
    (state) => state.settings.autoApprove,
  );
  const hasAutoApproved = useRef(false);

  const { mutate: approveToolMessage, isPending: isExistingChatPending } =
    useMutation({
      mutationKey: [requestId],
      mutationFn: approveTool,
      async onSuccess() {},
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
    if (!requestId) {
      toast.error("Failed to retrieve Request!");
      return;
    }
    approveToolMessage({ accessToken, requestId });
  }

  // Auto-approve when component loads if auto-approve is enabled
  useEffect(() => {
    if (
      isAutoApproveEnabled &&
      requestId &&
      identityToken &&
      !hasAutoApproved.current &&
      !isExistingChatPending
    ) {
      hasAutoApproved.current = true;
      handleApproveMessage();
    }
  }, [isAutoApproveEnabled, requestId, identityToken, isExistingChatPending]);

  return (
    <Button
      disabled={isExistingChatPending}
      onClick={() => {
        handleApproveMessage();
      }}
      size={"special"}
      className="px-5 py-1.5 w-full font-medium"
    >
      Confirm
    </Button>
  );
}
