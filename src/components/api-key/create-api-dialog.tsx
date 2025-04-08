"use client";
import PlusIcon from "@/assets/icons/plus-blue-icon.png";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CreateAPIForm from "./create-api-form";
import DisplayAPIKey from "./display-api-key";
import ApiKeyHeaderIcon from "@/assets/icons/api-key-header-icon";
import { clearState } from "@/lib/redux/features/api-key";
export default function CreateAPIDialog() {
  const isApiKeyRetrieved = useAppSelector(
    (state) => state.apiKey.isAPIKeyRetrieved,
  );
  const dispatch = useAppDispatch();
  return (
    <Dialog
      onOpenChange={() => {
        dispatch(clearState());
      }}
    >
      <DialogTrigger asChild>
        <Button size={"special"}>
          <div className=" items-center justify-center w-6 h-6 flex">
            <Image src={PlusIcon} alt="das" width={100} height={100} />
          </div>
          Create New Key
        </Button>
      </DialogTrigger>
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
