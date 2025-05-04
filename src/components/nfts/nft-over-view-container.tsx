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
}: Nft) {
  const name = metadata.name;
  const description = metadata.description;
  const attribute = metadata.attributes ?? [];
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
                  <span className="blue-text-clip">
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
                  <span className="blue-text-clip">
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
                title="Owner"
                value={
                  <span className="blue-text-clip">
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
                  <span className="blue-text-clip">
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
                  {/* <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src={OpenSea}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </div> */}
                  {/* <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src={TensorFlow}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </div> */}
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
