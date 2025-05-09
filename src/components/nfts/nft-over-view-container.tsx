import SolanaIconWithTitle from "@/assets/icons/chain/solana";
import { MagicEden } from "@/assets/Image";
import { Nft } from "@/gql/types/graphql";
import {
  cn,
  getMagicEdenUrl,
  getSolScanUrl,
  truncateString,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import OverviewTilesContainer from "../portfolio/overview-tiles";

export default function NFTOverViewContainer({
  metadata,
  mintAddress,
  collectionAddress,
  creator,
  tokenAddress,
  tokenStandard,
  collectionRoyalties,
  // status,
}: Nft) {
  const name = metadata.name;
  const description = metadata.description;
  const attribute = metadata.attributes ?? [];
  // const isQueued =
  //   status === NftStatus.InProgress || status === NftStatus.InQueue;

  return (
    <div className="backdrop-blur-lg rounded-3xl">
      <div className="px-2 md:px-4 py-4 border-white/5 border rounded-t-3xl  bg-overview-portfolio">
        <p className="uppercase text-xs font-medium">{name}</p>
      </div>
      <div className="p-2  md:p-6 bg-buu rounded-b-2xl">
        <p className="text-balance">{description}</p>
        <div>
          <div
            className={cn("grid grid-cols-2 gap-2", {
              "grid-cols-1": attribute.length === 1,
            })}
          >
            {attribute?.map((item) => {
              return (
                <div
                  key={`attribute-${item.trait_type}-${item.value}`}
                  className="bg-tile-muted w-full mt-1 p-2 px-3 rounded-lg group"
                >
                  <div>
                    <p className="text-xs font-medium tracking-tight text-muted-foreground/60">
                      {item.trait_type}
                    </p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center mt-2  justify-center w-full gap-2 flex-col">
            <Link
              target="_blank"
              href={getSolScanUrl(`/token/${mintAddress}`)}
              className="w-full h-full "
            >
              <OverviewTilesContainer
                title="Mint Address"
                value={
                  <span
                    className={cn({
                      "w-24 bg-gray-800 rounded-md animate-pulse h-6 ":
                        !mintAddress,
                      "blue-text-clip": mintAddress,
                    })}
                  >
                    {truncateString(mintAddress ?? "")}
                  </span>
                }
              />
            </Link>
            <Link
              target="_blank"
              href={getSolScanUrl(`/token/${collectionAddress}`)}
              className="w-full h-full"
            >
              <OverviewTilesContainer
                title="Collection Address"
                value={
                  <span
                    className={cn({
                      "w-24 bg-gray-800 rounded-md animate-pulse h-6 ":
                        !collectionAddress,
                      "blue-text-clip": collectionAddress,
                    })}
                  >
                    {truncateString(collectionAddress ?? "")}
                  </span>
                }
              />
            </Link>
            <Link
              target="_blank"
              href={getSolScanUrl(`/address/${creator}`)}
              className="w-full h-full"
            >
              <OverviewTilesContainer
                title="Creator"
                value={
                  <span
                    className={cn({
                      "w-24 bg-gray-800 rounded-md animate-pulse h-6 ":
                        !creator,
                      "blue-text-clip": creator,
                    })}
                  >
                    {truncateString(creator ?? "")}
                  </span>
                }
              />
            </Link>{" "}
            <Link
              target="_blank"
              href={getSolScanUrl(`/token/${tokenAddress}`)}
              className="w-full h-full"
            >
              <OverviewTilesContainer
                title="Token Address"
                value={
                  <span
                    className={cn({
                      "w-24 bg-gray-800 rounded-md animate-pulse h-6 ":
                        !tokenAddress,
                      "blue-text-clip": tokenAddress,
                    })}
                  >
                    {truncateString(tokenAddress ?? "")}
                  </span>
                }
              />{" "}
            </Link>{" "}
            <OverviewTilesContainer
              title="Token Standard"
              value={tokenStandard?.toString()}
            />{" "}
            <OverviewTilesContainer
              title="Royalties"
              value={
                <span
                  className={cn({
                    "w-12 bg-gray-800 rounded-md animate-pulse h-6":
                      typeof collectionRoyalties === "undefined",
                  })}
                >
                  {collectionRoyalties
                    ? `${(collectionRoyalties ?? 0) / 100}%`
                    : "0%"}
                </span>
              }
            />
            <OverviewTilesContainer
              title="Chain"
              value={
                <>
                  <SolanaIconWithTitle />
                </>
              }
            />
            <OverviewTilesContainer
              title="Buy/Sell"
              value={
                <div className="flex items-center gap-2">
                  <Link
                    target="_blank"
                    href={getMagicEdenUrl(`/item-details/${mintAddress}`)}
                    className="w-5 h-5 rounded-full overflow-hidden"
                  >
                    <Image
                      src={MagicEden}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </Link>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
