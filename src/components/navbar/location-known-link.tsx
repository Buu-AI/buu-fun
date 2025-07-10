"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type HoverSideHint = {
  enabled: boolean;
  content: string;
  side?: "top" | "right" | "bottom" | "left";
  delayDuration?: number;
};

export default function LocationKnownLink({
  LinkTo,
  LinkIn,
  children,
  className = "", 
  toolTip,
}: {
  LinkTo: string;
  LinkIn: string;
  children: ReactNode;
  className?: string;
  toolTip?: HoverSideHint;
}) {
  const pathname = usePathname();

  const isCurrent =
    pathname === `/app/${LinkIn}` || (LinkIn === "" && pathname === "/app");

  const linkContent = (
    <Link
      href={LinkTo}
      className="w-10 group relative flex items-center group justify-center h-10"
    >
      <div
        className={cn(
          "w-6 h-6 group-hover:text-white group-hover:fill-text-white text-gray-500",
          {
            "text-white": isCurrent,
          },
          className
        )}
      >
        {children}
      </div>
    </Link>
  );

  // If tooltip is enabled, wrap with tooltip components
  if (toolTip?.enabled && toolTip?.content) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={toolTip.delayDuration || 300}>
          <TooltipTrigger asChild>
            {linkContent}
          </TooltipTrigger>
          <TooltipContent side={toolTip.side || "right"}>
            <p>{toolTip.content}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  // If no tooltip, return the link as is
  return linkContent;
}