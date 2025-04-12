"use client";
import { RETRY_ALLOWED_VERIFIED_STORAGE_KEY } from "@/constants/request.config";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { mutateGenerateNewImage } from "@/lib/react-query/threads";
import {
  setNewGenRequest,
  setRetryModalOpen,
  setRetrySubthreadId,
} from "@/lib/redux/features/chat";
import { useAuthentication } from "@/providers/account.context";
import { useLocalStorage } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, RefreshCw } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";

export default function RetryConfirmationDialog() {
  const [checked, setChecked] = useState(false);
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_acknowledgedRetry, setAcknowledgedRetry] = useLocalStorage({
    key: RETRY_ALLOWED_VERIFIED_STORAGE_KEY,
    defaultValue: false,
  });
  const queryClient = useQueryClient();

  const { mutateAsync: generateNewImage, isPending } = useMutation({
    mutationFn: mutateGenerateNewImage,
    onSuccess(data) {
      toast.loading("Generating new 3D models...", { duration: 8000 });
      dispatch(setNewGenRequest(data));
      queryClient.invalidateQueries({
        queryKey: [data.subthreadId, "get-all-sub-threads"],
      });
    },
    onError(error) {
      toast.error("Failed to generate 3D models. Please try again.");
      console.log(error);
    },
  });

  const isRetryModalOpen = useAppSelector(
    (state) => state.chat.retry.modalOpened
  );
  const subThreadId = useAppSelector((state) => state.chat.retry.subThreadId);
  const { identityToken: accessToken, login } = useAuthentication();
  const dispatch = useAppDispatch();

  function cancel() {
    if (checked) {
      setAcknowledgedRetry(true);
    }
  }

  function handleClose(value: boolean) {
    if (!value) {
      dispatch(setRetrySubthreadId(null));
    }
    cancel();
    dispatch(setRetryModalOpen(value));
  }

  async function handleRetryGeneration() {
    if (!subThreadId) {
      toast.error("Subthread not found");
      return;
    }

    if (!accessToken) {
      login();
      return;
    }
    try {
      cancel();
      const newArray = new Array(3).fill(0);
      const AllPromises = newArray.map(async () => {
        return await generateNewImage({
          subthreadId: subThreadId,
          accessToken,
        });
      });

      await Promise.all(AllPromises);
      dispatch(setRetryModalOpen(false));
      dispatch(setRetrySubthreadId(null));
    } catch (error) {
      if (error) {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <Dialog
      open={isRetryModalOpen}
      onOpenChange={(value) => {
        handleClose(value);
      }}
    >
      <DialogContent className="rounded-[20px] lg:rounded-[20px] bg-buu/80 backdrop-blur-lg border-buu">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle className="text-xl">
            Generate Multiple 3D Models
          </DialogTitle>
          <DialogDescription className="text-center mt-2">
            You&apos;re about to generate 3 new variations of your 3D model.
            This will use 3 credits from your account.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 p-3 bg-black/10 rounded-lg text-sm">
          <p>
            All three models will use your current parameters but will produce
            unique variations, giving you more options to choose from. Each
            generation counts as a separate credit usage.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 pb-3">
            <Checkbox
              id="never-ask-checkbox"
              checked={checked}
              onCheckedChange={(value) => {
                if (typeof value === "boolean") {
                  setChecked(value);
                }
              }}
            />
            <Label htmlFor="never-ask-checkbox">
              Don&apos;t show this confirmation again
            </Label>
          </div>

          <div className="grid w-full grid-cols-[40%_60%] gap-2">
            <DialogClose asChild>
              <Button className="w-full" variant={"special"}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={() => {
                handleRetryGeneration();
              }}
              className="w-full"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate 3 Models
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
