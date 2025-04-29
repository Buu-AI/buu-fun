import React from "react";

export default function RoiDetailedLine({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex w-full items-center relative z-50 justify-between">
      <p className="font-medium tracking-tight text-muted-foreground/80">
        {title}
      </p>
      <p className="text-white opacity-100 font-medium bg-opacity-100">
        {value}
      </p>
    </div>
  );
}
