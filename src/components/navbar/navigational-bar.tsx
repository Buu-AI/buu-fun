import { CoinStackIcon, SizePenIcon } from "@/assets/icons";
import logo from "@/assets/icons/logo-no-gradient.png";
import MagicPenIcon from "@/assets/icons/magicpen";
import NFTSideBarIcon from "@/assets/icons/nft-sidebar-icon";
import SelectObjectIcon from "@/assets/icons/select-object-icon";
import Image from "next/image";
import Link from "next/link";
import KnowMorePopover from "./know-more-pop-over";
import LocationKnownLink from "./location-known-link";
export default function NavigationalBar() {
  return (
    <nav className="px-3 py-4  w-full h-full md:h-screen z-50 relative">
      <div className="md:bg-buu md:py-4   flex flex-col items-center justify-between md:rounded-[20px] overflow-hidden md:h-full md:w-[72px]">
        <div className="flex flex-col  items-center justify-center">
          <Link
            href={"/app"}
            className="flex items-center justify-center h-10 w-10 lg:w-12 lg:h-12   rounded-lg "
          >
            <Image
              className="w-full h-full "
              src={logo}
              width={250}
              height={250}
              alt="Bunn.fun logo"
            />
          </Link>
          {/* <Link href={"/app/nfts"} className="mt-4 w-6 h-6 hidden md:block">
            <GenerateNft />
          </Link> */}
        </div>
        <div className="hidden md:flex flex-col gap-4 items-center justify-center">
          {/* <Link
            href={"/app/boards"}
            // group bg-buu-button  hover:bg-white hover:shadow-none  group shadow-buu-button min-w-[30px]  rounded-md flex items-center justify-center p-1.5
            className="w-10 flex  items-center group   justify-center    h-10  text-black"
          >
            <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-gray-500">
              <SizePenIcon />
            </div>
          </Link> */}
          <LocationKnownLink LinkIn="boards" LinkTo="/app/boards">
            <SizePenIcon />
          </LocationKnownLink>
          <LocationKnownLink LinkIn="" LinkTo="/app">
            <MagicPenIcon className="fill-current" />
          </LocationKnownLink>
          <LocationKnownLink LinkIn="portfolio" LinkTo="/app/portfolio">
            <CoinStackIcon />
          </LocationKnownLink>
          <LocationKnownLink LinkIn="nfts" LinkTo="/app/nfts">
            <NFTSideBarIcon />
          </LocationKnownLink>
          <div className="h-0.5 w-[80%] bg-gray-800 rounded-full" />
          <LocationKnownLink
            LinkIn="playground"
            LinkTo="/app/playground"
            className="w-8 h-8"
          >
            <div className="relative w-full h-full">
              <SelectObjectIcon height={"100%"} width={"100%"} />
              <div className="absolute bg-pill-card -bottom-2 left-0 right-0 max-w-max p-0.5 mx-auto">
                <p className="text-[7px] leading-none font-bold text-white">
                  NEW
                </p>
              </div>
            </div>
          </LocationKnownLink>
          {/* <Link
            href={"/app"}
            className="w-10 flex  items-center group   justify-center    h-10 "
          >
            <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-gray-500"></div>
          </Link> */}
          {/* <Link
            href={"/app/portfolio"}
            className="w-10 flex group items-center justify-center px-2 py-3 h-10 "
          >
            <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-gray-500">
              <CoinStackIcon />
            </div>
          </Link> */}
        </div>
        <div className="hidden md:flex">
          <KnowMorePopover />
        </div>
      </div>
    </nav>
  );
}
