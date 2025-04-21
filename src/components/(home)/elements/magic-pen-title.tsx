import { MagicPenIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import React from "react";

export default function MagicPenTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 blue-text-clip",
        className,
      )}
    >
      <div className="w-5 h-5 text-blue-300">
        <MagicPenIcon className="fill-blue-300" />
      </div>
      <p>{title}</p>
    </div>
  );
}
