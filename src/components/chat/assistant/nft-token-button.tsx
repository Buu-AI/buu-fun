import NftTokenIcon from "@/assets/icons/nft-token-icon";
import { MaybeString } from "@/types";
import { useRouter } from "next/navigation";

type TNftTokenButton = {
  nftId: MaybeString;
};

export default function NftTokenButton({ nftId }: TNftTokenButton) {
  const router = useRouter();
  if (!nftId) {
    return null;
  }
  return (
    <button
      onClick={() => {
        router.push(`/app/nfts/${nftId}`);
      }}
      className="flex  px-2 py-2 nft-tokenized-button items-center justify-center"
    >
      <div className="w-6 h-6">
        <NftTokenIcon />
      </div>
      <p>Tokenized</p>
    </button>
  );
}
