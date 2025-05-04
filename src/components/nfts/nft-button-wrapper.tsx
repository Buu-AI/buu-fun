"use client";
import useUserNfts from "@/hooks/use-nft";
import { pluralize } from "@/lib/utils";

export default function NftButtonWrapper() {
  const { data } = useUserNfts();

  return (
    <div className="flex flex-col  items-center justify-center gap-1">
      <p className="text-3xl md:text-5xl font-bold my-2 hero-gradient-text ">
        {data?.items.length} {pluralize(data?.items.length ?? 1, "collectible")}
      </p>
    </div>
  );
}
