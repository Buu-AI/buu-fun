"use client";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { profilePicture } from "@/lib/dice-bear";
import { useAuthentication } from "@/providers/account.context";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createNavigationConfig, NavigationItem } from "./navigation-config";

export default function DesktopProfileNavigation() {
  const { address, isAuthenticated, logout } = useAuthentication();
  const shouldConnect = !isAuthenticated || !address;

  const navigationConfig = createNavigationConfig(logout);

  const renderNavigationItem = (item: NavigationItem, index: number) => {
    // Filter out "Home" for desktop navigation
    if (
      item.label === "Home" ||
      item.label === "Boards" ||
      item.label === "NFT's"
    ) {
      return null;
    }

    const baseClassName =
      "flex w-full items-center gap-1.5 py-2 rounded-md px-2 font-medium";
    const hoverClassName = item.onClick
      ? "hover:bg-buu-secondary"
      : "hover:bg-buu-button/60";
    const className = `${baseClassName} ${hoverClassName}`;

    const content = (
      <>
        <div className="w-5 h-5">{item.icon}</div>
        <p className={item.textClassName || ""}>{item.label}</p>
      </>
    );

    if (item.href) {
      return (
        <Link key={index} href={item.href} className={className}>
          {content}
        </Link>
      );
    }

    if (item.onClick) {
      return (
        <button key={index} onClick={item.onClick} className={className}>
          {content}
        </button>
      );
    }

    return null;
  };

  return (
    <>
      {!shouldConnect ? (
        <Popover>
          <PopoverTrigger asChild className="md:flex hidden relative">
            <button className="flex items-center relative gap-1.5 text-sm px-2 h-[40px] group py-1.5 bg-white text-black rounded-md">
              <div className="relative flex w-8 h-8 border-profile shadow-inner rounded-md overflow-hidden">
                <Image
                  src={profilePicture(address)}
                  width={100}
                  alt="sample profile Icon"
                  height={100}
                />
              </div>
              <div className="relative flex items-center">
                <div className="w-[1px] h-[90%] relative my-auto bg-muted/60 hidden lg:flex" />
                <ChevronDown />
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={8}
            align="end"
            className="px-1 pb-1 pt-1 max-w-[210px] bg-buu backdrop-blur-lg border-buu"
          >
            {navigationConfig.map(renderNavigationItem)}
          </PopoverContent>
        </Popover>
      ) : null}
    </>
  );
}
