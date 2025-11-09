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
import KnowMoreContent from "./know-more-content";
import { createNavigationConfig, NavigationItem } from "./navigation-config";

export default function MobileProfileNavigation() {
  const { address, isAuthenticated, logout } = useAuthentication();
  const shouldConnect = !isAuthenticated || !address;

  const navigationConfig = createNavigationConfig(logout);

  const renderNavigationItem = (item: NavigationItem, index: number) => {
    const content = (
      <DrawerClose className="flex w-full items-center gap-2 py-2 rounded-md px-2 font-medium">
        <div className="w-6 h-6">
          {item.icon}
        </div>
        <p className={`text-xl ${item.textClassName || ""}`}>
          {item.label}
        </p>
      </DrawerClose>
    );

    if (item.href) {
      return (
        <div key={index} className="flex border-b w-full">
          <Link href={item.href}>
            {content}
          </Link>
        </div>
      );
    }

    if (item.onClick) {
      return (
        <div key={index} className="flex border-b w-full">
          <button onClick={item.onClick}>
            {content}
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {!shouldConnect ? (
        <Drawer>
          <DrawerTrigger className="md:hidden">
            <div className="flex items-center gap-1.5 text-sm px-2 h-[40px] group py-1.5 bg-white text-black rounded-md">
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
          <DrawerContent className="bg-buu shadow-buu-inner border-buu">
            <DrawerHeader>
              <DrawerTitle className="flex items-center gap-2 justify-center">
                {/* <div className="relative flex w-8 h-8 border-profile shadow-inner rounded-md overflow-hidden">
                  <Image
                    src={profilePicture(address)}
                    width={100}
                    alt="sample profile Icon"
                    height={100}
                  />
                </div> */}
                <div className="flex">
                  {/* <CopyAddress /> */}
                </div>
              </DrawerTitle>
              <DrawerDescription className="sr-only">
                Navigation drawer for Home, profiles, and boards
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col">
              {/* <div className="flex w-full px-1 pb-2">
                <DrawerClose asChild>
                  <ExportSolanaWallet className="w-full" />
                </DrawerClose>
              </div> */}
              <div className="flex flex-col gap-2 px-1 w-full max-h-[70dvh] overflow-y-scroll scrollbar-w-hidden">
                {navigationConfig.map(renderNavigationItem)}
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      className="flex group items-center justify-center w-full"
                      arrowClass="hidden"
                    >
                      <div className="flex justify-center items-center gap-1.5 py-2 rounded-md px-2 font-medium">
                        <p className="text-base">Know more</p>
                        <div className="w-6 h-6 group-[&[data-state=open]]:rotate-180 transition-transform duration-700 ease-in-out">
                          <ArrowDown />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="mb-10">
                      <div className="px-3 max-w-sm flex items-center justify-center">
                        <KnowMoreContent />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      ) : null}
    </>
  );
}
