"use client";
import useUserNfts from "@/hooks/use-nft";
import { pluralize } from "@/lib/utils";

export default function NftButtonWrapper() {
  const { data } = useUserNfts({});
  const totalLength = data?.pages
    .flatMap((item) => item?.items.map((item) => item._id))
    .filter((fv) => typeof fv !== "undefined")?.length;
  return (
    <div className="flex flex-col  items-center justify-center gap-1">
      <p className="text-3xl md:text-5xl font-bold my-2 hero-gradient-text ">
        {totalLength ?? 0} {pluralize(totalLength ?? 0, "collectible")}
      </p>
    </div>
  );
}
