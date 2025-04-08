import { TrashIconDark } from "@/assets/icons/trash-icon";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { deleteAPIKey } from "@/lib/react-query/api-key";
import {
  setDeleteApiKeyData,
  setIsDeleteModalOpen,
} from "@/lib/redux/features/api-key";
import { useAuthentication } from "@/providers/account.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import Pill from "../elements/pill";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import DeleteApiKeyConfirm from "./delete-api-key-confim";

export default function DeleteApiKeyModal() {
  const { identityToken: accessToken, login } = useAuthentication();
  const isDialogOpen = useAppSelector(
    (state) => state.apiKey.isDeleteModalOpen
  );
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const keyToDeleteData = useAppSelector(
    (state) => state.apiKey.keyToDeleteData
  );

  const {
    mutate: deleteApiKeyMutation,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["delete-api-key", keyToDeleteData?.id],
    mutationFn: deleteAPIKey,
    onSuccess(data) {
      console.log("SUCCESS DATA:", data);
      queryClient.invalidateQueries({
        queryKey: ["retrieve-api-keys"],
      });
      toast.success("API key deleted successfully");
    },
    onError() {
      toast.error("Failed to delete API key");
    },
  });

  function handleSubmit() {
    if (!keyToDeleteData?.id) {
      toast.error("No Ids found to be deleted");
      return;
    }
    if (!accessToken) {
      login();
      return;
    }
    deleteApiKeyMutation({
      accessToken,
      input: {
        deleteApiKeyId: keyToDeleteData?.id,
      },
    });
  }

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(setDeleteApiKeyData(null));
        }
        dispatch(setIsDeleteModalOpen(value));
      }}
    >
      <DialogContent className="rounded-[20px] px-6 lg:rounded-[20px]  bg-buu/80 backdrop-blur-lg border-buu ">
        {isSuccess ? (
          <DeleteApiKeyConfirm />
        ) : (
          <>
            <div className="flex items-center justify-center">
              <Pill className="text-xs px-3 uppercase text-muted-foreground/60">
                {keyToDeleteData?.name}
              </Pill>
            </div>
            <DialogHeader className="flex items-center justify-center ">
              <DialogTitle className="text-2xl text-center font-medium max-w-xs">
                Are you sure you want to delete this API Key?
              </DialogTitle>
              <DialogDescription className="text-center font-medium max-w-md">
                Once deleted, this key will no longer work and cannot be
                recovered. If you need a new key, you will have to generate a
                new one
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2 justify-center w-full">
              <DialogClose asChild>
                <Button
                  size={"special"}
                  className="w-full border-button-muted"
                  variant={"muted"}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                size={"special"}
                className="w-full"
              >
                {!isLoading ? (
                  <>
                    <div className="">
                      <TrashIconDark />
                    </div>
                    Delete Key
                  </>
                ) : (
                  <>
                    <div>
                      <Loader2 className="w-4 h-5 animate-spin" />
                    </div>
                    Deleting...
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
