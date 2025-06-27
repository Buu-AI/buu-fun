"use client";
import { Media, NftAttribute } from "@/gql/types/graphql";
import { getNumberOfFaces } from "@/lib/helpers/chat/tool";
import { capitalizeFirstLetter } from "@/lib/utils";
import { TToolRequest } from "@/types/chat/chat-types";
import Image from "next/image";

type TToolCallDetails = {
  toolRequest: TToolRequest;
};

export default function ToolCallDetails({ toolRequest }: TToolCallDetails) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { details }: any = toolRequest;
  if (!details) return;

  const NFTAttribute = details?.attributes
    ? details?.attributes?.map((item: NftAttribute, index: number) => {
        return (
          <div
            key={`nft-attribute-tool-details-${index}-${item.trait_type}-${item.value}`}
          >
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              {capitalizeFirstLetter(item.trait_type)}
            </p>
            <div className="mt-1 chat-prompt-bg">
              <p className="py-3 px-4 text-sm uppercase">
                {capitalizeFirstLetter(item.value)}
              </p>
            </div>{" "}
          </div>
        );
      })
    : null;

  const isImage = details?.image && "url" in details.image;

  return (
    <div>
      <div>
        {isImage ? (
          <div key={details?.image?.url ?? undefined} className="">
            <p className="text-xs font-medium ml-2 mb-2 text-muted-foreground/60">
              Image
            </p>
            {details?.image && "url" in details.image && details?.image.url ? (
              <Image
                src={details?.image?.url ?? "/logo.png"}
                width={250}
                className="w-20 h-20"
                height={250}
                alt="N/A"
              />
            ) : null}
          </div>
        ) : null}
        {details?.images && details?.images.length > 0 ? (
          <div>
            <p className="text-xs font-medium ml-2 mb-2 text-muted-foreground/60">
              Images
            </p>
            <div className="flex items-center flex-wrap gap-2">
              {details?.images && details?.images?.length > 0
                ? details?.images.map((item: Media) => {
                    if (!item.url) return;
                    return (
                      <Image
                        key={`image-details-card-${item._id}`}
                        src={item.url}
                        width={250}
                        className="w-20 h-20 aspect-square object-cover"
                        height={250}
                        alt="hello"
                      />
                    );
                  })
                : null}
            </div>
          </div>
        ) : null}
        {(details?.instructions ?? details?.prompt ?? details?.edit) ? (
          <div className="mt-4">
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              Prompt
            </p>
            <div className="min-h-20 pt-1 mt-1 chat-prompt-bg">
              <p className="py-2 mt-1  px-4 text-sm ">
                {details?.instructions ?? details?.prompt ?? details?.edit}
              </p>
            </div>
          </div>
        ) : null}
        {details?.description ? (
          <div className="mt-4">
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              Description
            </p>
            <div className="min-h-20 pt-1 mt-1 chat-prompt-bg">
              <p className="py-2 mt-1  px-4 text-sm ">{details?.description}</p>
            </div>
          </div>
        ) : null}
        <div className="mt-4 grid grid-cols-2 gap-2 ">
          {details?.name ? (
            <div>
              <p className="text-xs font-medium ml-2 text-muted-foreground/60">
                Name
              </p>
              <div className="mt-1 chat-prompt-bg">
                <p className="py-3   px-4 text-sm uppercase">{details?.name}</p>
              </div>{" "}
            </div>
          ) : null}
          {NFTAttribute}
          {details?.style ? (
            <div>
              <p className="text-xs font-medium ml-2 text-muted-foreground/60">
                Style
              </p>
              <div className="mt-1 chat-prompt-bg">
                <p className="py-3   px-4 text-sm ">{details?.style}</p>
              </div>{" "}
            </div>
          ) : null}
          {details?.symbol ? (
            <div>
              <p className="text-xs font-medium ml-2 text-muted-foreground/60">
                Symbol
              </p>
              <div className="mt-1 chat-prompt-bg">
                <p className="py-3   px-4 text-sm ">{details?.symbol}</p>
              </div>{" "}
            </div>
          ) : null}
          {details?.texture ? (
            <div>
              <p className="text-xs font-medium ml-2 text-muted-foreground/60">
                Texture
              </p>
              <div className="mt-1 chat-prompt-bg">
                <p className="py-3   px-4 text-sm uppercase">
                  {details?.texture}
                </p>
              </div>{" "}
            </div>
          ) : null}
          {details?.numberOfModels ? (
            <div>
              <p className="text-xs font-medium ml-2 text-muted-foreground/60">
                Number of models
              </p>
              <div className="mt-1 chat-prompt-bg">
                <p className="py-3   px-4 text-sm ">
                  {details?.numberOfModels}
                </p>
              </div>{" "}
            </div>
          ) : null}
          {details?.numberOfFaces ? (
            <div>
              <p className="text-xs font-medium ml-2 text-muted-foreground/60">
                Number of faces
              </p>
              <div className="mt-1 chat-prompt-bg">
                <p className="py-3   px-4 text-sm uppercase ">
                  {getNumberOfFaces(details?.numberOfFaces)}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
