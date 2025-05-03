import SolanaIconWithTitle from "@/assets/icons/chain/solana";
import { MagicEden, OpenSea, TensorFlow } from "@/assets/Image";
import { Nft } from "@/gql/types/graphql";
import { cn, getSolScanUrl, truncateString } from "@/lib/utils";
import Image from "next/image";
import OverviewTilesContainer from "../portfolio/overview-tiles";
import Link from "next/link";

export default function NFTOverViewContainer({
  metadata,
  mintAddress,
  collectionAddress,
  creator,
  tokenAddress,
  tokenStandard,
  collectionRoyalties,
}: Nft) {
  const name = metadata.name;
  const description = metadata.description;
  const attributed = metadata.attributes;

  return (
    <div className="backdrop-blur-lg rounded-3xl">
      <div className="px-2 md:px-4 py-4 border-white/5 border rounded-t-3xl  bg-overview-portfolio">
        <p className="uppercase text-xs font-medium">{name}</p>
      </div>
      <div className="p-2  md:p-6 bg-buu rounded-b-2xl">
        <p className="text-balance">{description}</p>
        <div>
          <div
            className={cn("flex items-center justify-between gap-2 my-2", {
              hidden: true,
            })}
          >
            <div className="bg-tile-muted w-full p-2 px-3 rounded-lg group">
              <div>
                <p className="text-xs font-medium tracking-tight">Style</p>
                <p className="text-white">Cute</p>
              </div>
            </div>
            <div className="bg-tile-muted w-full p-2 px-3 rounded-lg group">
              <div>
                <p className="text-xs font-medium tracking-tight">Style</p>
                <p className="text-white">Cute</p>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-2  justify-center w-full gap-2 flex-col">
            <Link
              target="_blank"
              href={getSolScanUrl(`/token/${mintAddress}`)}
              className="w-full h-full"
            >
              <OverviewTilesContainer
                title="Mint Address"
                value={truncateString(mintAddress ?? "")}
              />
            </Link>
            <Link
              target="_blank"
              href={getSolScanUrl(`/token/${collectionAddress}`)}
              className="w-full h-full"
            >
              <OverviewTilesContainer
                title="Collection Address"
                value={truncateString(collectionAddress ?? "")}
              />
            </Link>
            <Link
              target="_blank"
              href={getSolScanUrl(`/address/${creator}`)}
              className="w-full h-full"
            >
              <OverviewTilesContainer
                title="Owner"
                value={truncateString(creator ?? "")}
              />
            </Link>{" "}
            <Link
              target="_blank"
              href={getSolScanUrl(`/token/${tokenAddress}`)}
              className="w-full h-full"
            >
              <OverviewTilesContainer
                title="Token Address"
                value={truncateString(tokenAddress ?? "")}
              />{" "}
            </Link>{" "}
            <OverviewTilesContainer
              title="Token Standard"
              value={tokenStandard?.toString()}
            />{" "}
            <OverviewTilesContainer
              title="Royalties"
              value={`${(collectionRoyalties ?? 0) / 100}%`}
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
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src={OpenSea}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </div>
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src={TensorFlow}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </div>
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src={MagicEden}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
