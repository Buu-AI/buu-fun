import React, { ReactNode } from "react";
import Pill from "../elements/pill";
import { cn } from "@/lib/utils";

export default function OverviewTilesContainer({
  title = "Price",
  value,
  pill,
}: {
  title?: string;
  value?: ReactNode;
  pill?: string;
}) {
  return (
    <div className="bg-tile-muted w-full p-3.5 rounded-lg group">
      <div className="flex justify-between">
        <h4 className="text-white/60 group-hover:text-white/75">{title}</h4>
        <div className="flex items-center justify-center gap-2">
          <p>{value}</p>
          <Pill
            variant={"blue"}
            className={cn("text-xs hidden font-medium", {
              flex: pill,
            })}
          >
            {pill}
          </Pill>
        </div>{" "}
      </div>
    </div>
  );
}
