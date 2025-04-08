import { MagicPenIcon, SizePenIcon } from "@/assets/icons";
import LogoutIcon from "@/assets/icons/log-out-Icon";
import SettingsIcon from "@/assets/icons/settings-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { profilePicture } from "@/lib/dice-bear";
import { useAuthentication } from "@/providers/account.context";
import { ArrowDown, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import CopyAddress from "./copy-address";
import KnowMoreContent from "./know-more-content";
import ReferralIcon from "@/assets/icons/referral-icon";
import ExportSolanaWallet from "../referral/export-wallet";
import ApiKeyHeaderIcon from "@/assets/icons/api-key-header-icon";

export default function MobileProfileNavigation() {
  const { address, isAuthenticated, logout } = useAuthentication();
  const shouldConnect = !isAuthenticated || !address;

  return (
    <>
      {!shouldConnect ? (
        <Drawer>
          <DrawerTrigger className="md:hidden">
            <div className="flex  items-center gap-1.5 text-sm px-2 h-[40px] group py-1.5 bg-white text-black rounded-md">
              <div className="relative flex w-8 h-8 border-profile shadow-inner rounded-md overflow-hidden">
                <Image
                  src={profilePicture(address)}
                  width={100}
                  alt="sample profile Icon"
                  height={100}
                />
              </div>
              <p className="hidden lg:flex">
                {address && address.length > 9 ? (
                  <>
                    {address.slice(0, 4)}...
                    {address.slice(address.length - 5, address.length - 1)}
                  </>
                ) : (
                  address
                )}
              </p>
              <div className="w-0.5 h-[90%] my-auto bg-muted/80 hidden lg:flex" />
              <ChevronDown />
            </div>
          </DrawerTrigger>
          <DrawerContent className="bg-buu shadow-buu-inner border-buu ">
            <DrawerHeader>
              <DrawerTitle className="flex   items-center gap-2 justify-center">
                <div className="relative flex w-8 h-8 border-profile shadow-inner rounded-md overflow-hidden">
                  <Image
                    src={profilePicture(address)}
                    width={100}
                    alt="sample profile Icon"
                    height={100}
                  />
                </div>
                <div className="flex">
                  <CopyAddress />
                </div>
              </DrawerTitle>
              <DrawerDescription className="sr-only">
                Navigation drawer for Home, profiles, and boards
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col ">
              <div className="flex  w-full px-1 pb-2 ">
                <DrawerClose asChild>
                  <ExportSolanaWallet className="w-full" />
                </DrawerClose>
              </div>
              <div className="flex flex-col gap-2 px-1 w-full ">
                <div className="flex border-b w-full ">
                  <Link
                    href={"/app"}
                    // className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium"
                  >
                    <DrawerClose className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium">
                      <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-blue-300">
                        <MagicPenIcon />
                      </div>
                      <p className="text-xl">Home</p>
                    </DrawerClose>
                  </Link>
                </div>
                <div className="flex border-b w-full ">
                  <Link href={"/app/boards"}>
                    <DrawerClose className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium">
                      <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-blue-300">
                        <SizePenIcon />
                      </div>
                      <p className="text-xl">boards</p>{" "}
                    </DrawerClose>
                  </Link>
                </div>
                <div className="flex border-b w-full ">
                  <Link href={"/app/api-key"}>
                    {" "}
                    <DrawerClose className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium">
                      <div className="w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-blue-300">
                        <ApiKeyHeaderIcon />
                      </div>
                      <p className="text-xl">API Key</p>{" "}
                    </DrawerClose>
                  </Link>
                </div>
                <div className="flex border-b w-full ">
                  <Link
                    href={"/app/profile"}
                    // className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium"
                  >
                    {" "}
                    <DrawerClose className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium">
                      <div className="w-6 h-6">
                        <SettingsIcon />
                      </div>
                      <p className="text-xl">Settings</p>{" "}
                    </DrawerClose>
                  </Link>
                </div>{" "}
                <div className="flex border-b w-full ">
                  <Link
                    href={"/app/referral"}
                    // className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium"
                  >
                    {" "}
                    <DrawerClose className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium">
                      <div className="w-6 h-6">
                        <ReferralIcon />
                      </div>
                      <p className="text-xl">Referral Program</p>{" "}
                    </DrawerClose>
                  </Link>
                </div>
                <div className="flex border-b  w-full">
                  <button
                    onClick={async () => {
                      await logout();
                    }}
                    // className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium"
                  >
                    {" "}
                    <DrawerClose className="flex w-full  items-center gap-2  py-2 rounded-md px-2 font-medium">
                      <div className="w-6 h-6">
                        <LogoutIcon />
                      </div>
                      <p className="text-xl">Logout</p>{" "}
                    </DrawerClose>
                  </button>{" "}
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      className="flex group  group  items-center justify-center w-full"
                      arrowClass="hidden"
                      //   asChild
                    >
                      <div className="flex justify-center  items-center gap-1.5  py-2 rounded-md px-2 font-medium">
                        <p className="text-base">Know more</p>
                        <div className="w-6 h-6 group-[&[data-state=open]]:rotate-180 transition-transform duration-700 ease-in-out">
                          <ArrowDown />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mb-10 ">
                      <div className="px-3 max-w-sm flex items-center justify-center">
                        <KnowMoreContent />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* <div className="flex max-w-sm py-4 items-center justify-center w-full">
                  <button
                    onClick={async () => {}}
                    className="flex justify-center  items-center gap-1.5  py-2 rounded-md px-2 font-medium"
                  >
                    <p className="text-base">Know more</p>
                    <div className="w-6 h-6">
                      <ArrowDown />
                    </div>
                  </button>{" "}
                </div> */}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      ) : null}
    </>
  );
}
