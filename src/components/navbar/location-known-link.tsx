"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function LocationKnownLink({
  LinkTo,
  LinkIn,
  children,
}: {
  LinkTo: string;
  LinkIn: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const Path = pathname.split("/");
  //   console.log();

  const isCurrent =
    pathname === `/app/${LinkIn}` || (LinkIn === "" && pathname === "/app");

  return (
    <Link
      href={LinkTo}
      className="w-10 flex  items-center group   justify-center    h-10 "
    >
      <div
        className={cn(
          "w-6 h-6 group-hover:text-white  group-hover:fill-text-white text-gray-500",
          {
            "text-white": isCurrent,
          }
        )}
      >
        {children}
      </div>
    </Link>
  );
}
