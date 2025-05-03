"use client";
import GenerateNft from "@/assets/icons/Generate-nft";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { generateNFT } from "@/lib/react-query/nfts";
import { setGenerateNFT } from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { createNftSchema, TCreateNftSchema } from "@/lib/zod/create-nft";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
const ModelViewer = dynamic(() => import("../generation/model-viewer"), {
  ssr: false,
  loading: () => null, // Use null instead of undefined
});

export default function GenerateNFTModal() {
  const { identityToken: accessToken, login } = useAuthentication();
  const isOpen = useAppSelector((state) => state.chat.genNft.isGenNftModalOpen);
  const dispatch = useAppDispatch();
  const GenNft = useAppSelector((state) => state.chat.genNft);
  const { register, handleSubmit, watch } = useForm<TCreateNftSchema>({
    resolver: zodResolver(createNftSchema),
  });
  const query = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: generateNFT,
    async onSuccess() {
      await query.invalidateQueries({
        queryKey: ["get-sub-thread-requests"],
      });
      toast.success("NFT has been generated");
    },
    onError(error) {
      if (error.message) {
        toast.error(error.message);
      }
    },
  });
  function handleCreateNFTForm({ description, name }: TCreateNftSchema) {
    const genRequestId = GenNft.genId;
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
  const modelUrl = GenNft.modelUrl;
  const imageUrl = GenNft.imageUrl;
  const descriptionLength = watch("description")?.length ?? 0;
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
      <DialogContent className="rounded-[20px] pt-6 lg:rounded-[20px] bg-nft-modal-card overflow-y-scroll max-h-[90dvh] scrollbar-w-hidden">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle>Create a new Collectable</DialogTitle>
          <DialogDescription className="text-center text-pretty">
            You could create a collectable unique
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full md:w-[50%] mx-auto aspect-square">
          <ModelViewer src={modelUrl ?? ""} alt="" poster={imageUrl} />
        </div>
        <form onSubmit={handleSubmit(handleCreateNFTForm)}>
          <div className="w-full">
            <Label className="uppercase text-xs font-medium ">NAME</Label>
            <Input
              {...register("name")}
              className="py-2.5 text-lg h-auto border-gray-700 placeholder:font-medium placeholder:text-foreground/60"
              placeholder="Add name"
            />
          </div>
          <div className="w-full mt-2.5">
            <Label className="uppercase text-xs font-medium ">
              description
            </Label>
            <Textarea
              {...register("description", { max: 500 })}
              className="py-2.5 text-lg h-auto border-gray-700 placeholder:font-medium placeholder:text-foreground/60"
              placeholder="Add Description (500 characters allowed)"
            />
            <p className="text-sm my-0.5 text-right">
              <span
                className={cn({
                  "text-red-500": descriptionLength > 500,
                })}
              >
                {" "}
                {descriptionLength}
              </span>
              /500 Characters
            </p>
          </div>
          <div className="my-3">
            <div className="flex justify-start items-start gap-2 pl-1  ">
              <Checkbox
                id="set-expiresIn"
                className="rounded-[4px] data-[state=checked]:bg-buu mt-0.5 data-[state=checked]:text-primary border border-gray-500"
              />
              <Label htmlFor="set-expiresIn" className="text-xs font-medium">
                This NFT will cost you 3 credits, would you like to
                proceed?{" "}
              </Label>
            </div>
          </div>
          <div className="mt-4">
            <Button disabled={isPending} className="h-[40px] w-full">
              {isPending ? (
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
