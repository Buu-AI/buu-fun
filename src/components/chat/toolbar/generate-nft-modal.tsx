"use client";
import GenerateNft from "@/assets/icons/Generate-nft";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { generateNFT } from "@/lib/react-query/nfts";
import {
  setGenerateNFT,
  setMaximizedViewer
} from "@/lib/redux/features/chat";
import { cn } from "@/lib/utils";
import { createNftSchema, TCreateNftSchema } from "@/lib/zod/create-nft";
import { useAuthentication } from "@/providers/account.context";
import { useConfetti } from "@/providers/confetti-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

const ModelViewer = dynamic(() => import("../../generation/model-viewer"), {
  ssr: false,
  loading: () => null,
});

export default function GenerateNFTModal() {
  const { identityToken: accessToken, login } = useAuthentication();
  const [checked, setChecked] = useState(false);
  const isOpen = useAppSelector((state) => state.chat.genNft.isGenNftModalOpen);
  const dispatch = useAppDispatch();
  const GenNft = useAppSelector((state) => state.chat.genNft);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<TCreateNftSchema>({
    resolver: zodResolver(createNftSchema),
  });
  const router = useRouter();
  const query = useQueryClient();
  const confetti = useConfetti();

  const { mutate, isPending } = useMutation({
    mutationFn: generateNFT,
    async onSuccess(data) {
      await query.invalidateQueries({
        queryKey: ["get-sub-thread-requests"],
      });
      toast.success("NFT has been generated");
      setTimeout(() => {
        confetti.runConfetti({ duration: 5000 });
      }, 1000);
      router.push(`/app/nfts/${data._id}`);
      dispatch(
        setGenerateNFT({
          isGenNftOpen: false,
          messageId: undefined,
          imageUrl: undefined,
          modelUrl: undefined,
        })
      );
      dispatch(
        setMaximizedViewer({
          isOpened: false,
          imageUrl: undefined,
          modelUrl: undefined,
        })
      );
    },
    onError(error) {
      if (error.message) {
        toast.error(error.message);
      }
    },
  });
  function handleCreateNFTForm({ description, name }: TCreateNftSchema) {
    const messageId = GenNft.messageId;
    if (!checked) {
      toast.error("Please acknowledge the credits used to generate NFT");
      return;
    }
    if (!accessToken) {
      login();
      return;
    }
    if (!messageId) {
      toast.error("invalid generation request");
      return;
    }
    mutate({
      name,
      description,
      messageId,
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
            setGenerateNFT({
              isGenNftOpen: value,
              messageId: undefined,
              imageUrl: undefined,
              modelUrl: undefined,
            })
          );
          return;
        }
        dispatch(setGenerateNFT({ isGenNftOpen: value }));
      }}
    >
      <DialogContent className="rounded-[20px] pt-6 lg:rounded-[20px] bg-nft-modal-card overflow-y-scroll max-h-[90dvh] scrollbar-w-hidden">
        <DialogHeader className="flex items-center justify-center ">
          <DialogTitle>Create a new collectible</DialogTitle>
          <DialogDescription className="text-center text-pretty">
            You could create a collectible unique
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
                checked={checked}
                onCheckedChange={(value) => {
                  if (typeof value === "undefined") return;
                  if (typeof value === "boolean") {
                    setChecked(value);
                  }
                }}
                id="acknowledge-credits"
                className="rounded-[4px] data-[state=checked]:bg-buu mt-0.5 data-[state=checked]:text-primary border border-gray-500"
              />
              <Label
                htmlFor="acknowledge-credits"
                className="text-sm font-medium"
              >
                This NFT will cost you 3 credits, would you like to
                proceed?{" "}
              </Label>
            </div>
          </div>
          <div className="mt-4">
            <Button
              disabled={isPending || isSubmitting || !checked}
              className="h-[40px] w-full"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating NFT...
                </>
              ) : (
                <>
                  <GenerateNft />
                  Create Collectible{" "}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
