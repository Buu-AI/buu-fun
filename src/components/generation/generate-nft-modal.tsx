"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { generateNFT } from "@/lib/react-query/nfts";
import { setGenerateNFT } from "@/lib/redux/features/chat";
import { createNftSchema, TCreateNftSchema } from "@/lib/zod/create-nft";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Loader2 } from "lucide-react";
import GenerateNft from "@/assets/icons/Generate-nft";

export default function GenerateNFTModal() {
  const { identityToken: accessToken, address, login } = useAuthentication();
  const isOpen = useAppSelector((state) => state.chat.genNft.isGenNftModalOpen);
  const dispatch = useAppDispatch();
  const genRequestId = useAppSelector((state) => state.chat.genNft.genId);
  const { register, handleSubmit } = useForm<TCreateNftSchema>({
    resolver: zodResolver(createNftSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: generateNFT,
    onSuccess() {
      toast.success("NFT has been generated");
    },
    onError(error) {
      if (error.message) {
        toast.error(error.message);
      }
    },
  });
  function handleCreateNFTForm({ description, name }: TCreateNftSchema) {
    if (!accessToken) {
      login();
      return;
    }
    if (!genRequestId) {
      toast.error("invalid generation request");
      return;
    }
    mutate({
      name,
      description,
      genRequestId,
      accessToken,
    });
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(value) => {
        if (!value) {
          dispatch(
            setGenerateNFT({ isGenNftOpen: value, genRequestId: undefined })
          );
          return;
        }
        dispatch(setGenerateNFT({ isGenNftOpen: value }));
      }}
    >
      <DialogContent className="rounded-[20px] lg:rounded-[20px] bg-buu/80 backdrop-blur-lg border-buu">
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Create NFT</DialogTitle>
          <DialogDescription className="text-center text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, exercitationem?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateNFTForm)}>
          <div className="w-full">
            <Label className="uppercase text-xs font-medium ">NAME</Label>
            <Input
              {...register("name")}
              className="py-2.5 text-lg h-auto border-gray-700"
              placeholder="name"
            />
          </div>
          <div className="w-full mt-2.5">
            <Label className="uppercase text-xs font-medium ">
              description
            </Label>
            <Input
              {...register("description")}
              className="py-2.5 text-lg h-auto border-gray-700"
              placeholder="description"
            />
          </div>
          <div className="mt-4">
            <Button disabled={isPending} className="h-[40px] w-full">
              {!isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating NFT...
                </>
              ) : (
                <>
                  <GenerateNft />
                  Create NFT
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
