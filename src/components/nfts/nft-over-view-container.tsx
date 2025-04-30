import SolanaIconWithTitle from "@/assets/icons/chain/solana";
import { MagicEden, OpenSea, TensorFlow } from "@/assets/Image";
import Image from "next/image";
import OverviewTilesContainer from "../portfolio/overview-tiles";

export default function NFTOverViewContainer() {
  return (
    <div className="backdrop-blur-lg rounded-3xl">
      <div className="px-4 py-4 border-white/5 border rounded-t-3xl  bg-overview-portfolio">
        <p className="uppercase text-xs font-medium">3d Cube</p>
      </div>
      <div className="p-6 bg-buu rounded-b-2xl">
        <p>
          The BUU.FUN token (BUU) is an access key for AI agents and developers
          to consume private, uncensored inference through the BUU.FUN API,
          without paying per request. Stakers control an ongoing flow of
          BUU.FUN&apos;s inference capacity via its API, while receiving yield.
        </p>
        <p>
          Stakers control an ongoing flow of BUU.FUN&apos;s inference capacity
          via its API, while receiving yield.
        </p>
        <div>
          <div className="flex items-center justify-between gap-2 my-2">
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
          <div className="flex items-center  justify-center w-full gap-2 flex-col">
            <OverviewTilesContainer
              title="Mint Address"
              value={`GjMe...iptJ`}
            />
            <OverviewTilesContainer
              title="Collection Address"
              value={`GjMe...iptJ`}
            />
            <OverviewTilesContainer title="Owner" value={`GjMe...iptJ`} />
            <OverviewTilesContainer
              title="Token Address"
              value={`GjMe...iptJ`}
            />
            <OverviewTilesContainer
              title="Token Standard"
              value={
                <>
                  <SolanaIconWithTitle />
                </>
              }
            />
            <OverviewTilesContainer title="Chain" value={`GjMe...iptJ`} />
            <OverviewTilesContainer
              title="Buy/Sell"
              value={
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src={OpenSea}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </div>
                  <div className="w-4 h-4">
                    <Image
                      src={TensorFlow}
                      width={250}
                      height={250}
                      alt="jupiter ag swap icon"
                    />
                  </div>
                  <div className="w-4 h-4">
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
