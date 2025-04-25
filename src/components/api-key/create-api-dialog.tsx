"use client";
import ApiKeyHeaderIcon from "@/assets/icons/api-key-header-icon";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  clearApiKeyState,
  setCreateModalChange,
} from "@/lib/redux/features/api-key";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import CreateAPIForm from "./create-api-form";
import DisplayAPIKey from "./display-api-key";
export default function CreateAPIDialog() {
  const isApiKeyRetrieved = useAppSelector(
    (state) => state.apiKey.isAPIKeyRetrieved,
  );
  const isModalOpen = useAppSelector((state) => state.apiKey.isCreateModalOpen);
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(clearApiKeyState());
          return;
        }
        dispatch(setCreateModalChange(value));
      }}
    >
      <DialogContent className="rounded-[20px]  lg:rounded-[20px]  bg-buu/80 backdrop-blur-lg border-buu ">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle className="text-2xl">
            <span>
              {isApiKeyRetrieved ? (
                "API Key successful generated!"
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Create API Key
                  <span className="w-5 h-5">
                    <ApiKeyHeaderIcon />
                  </span>
                </span>
              )}
            </span>
          </DialogTitle>
          <DialogDescription className="text-center font-medium max-w-md">
            <span>
              {isApiKeyRetrieved
                ? "Copy your API key to connect to the MCP server"
                : "API keys allow AI agents to connect to the MCP server"}
            </span>
          </DialogDescription>
        </DialogHeader>
        {!isApiKeyRetrieved ? <CreateAPIForm /> : <DisplayAPIKey />}
      </DialogContent>
    </Dialog>
  );
}
