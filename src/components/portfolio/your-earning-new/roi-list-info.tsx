import React from "react";

export default function RoiListInfo({ description }: { description: string }) {
  return (
    <div className="flex  px-3 items-center gap-1">
      <div className="w-1 h-1 flex-shrink-0 rounded-full bg-muted-foreground/40 self-start mt-2.5" />
      <p className="font-medium text-white/50 text-base">{description}</p>
    </div>
  );
}
