import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const pillVariant = cva(
  "flex items-center justify-center relative rounded-full",
  {
    variants: {
      variant: {
        default: "bg-buu shadow-buu-pill border-buu",
        destructive: "destructive-pill",
        orange: "orange-pill",
        white: "bg-white text-black",
        blue: "border-pill bg-pill-blue shadow-pill-blue",
        golden: "golden-pill",
      },
      size: {
        default: "px-1.5 py-1",
        sm: "px-3 py-0.5 text-xs",
      },
    },
  },
);
export type TPillVariant = VariantProps<typeof pillVariant>;
export default function Pill({
  className,
  children,
  size = "default",
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof pillVariant>) {
  return (
    <span
      // className={cn(
      //   "bg-buu flex items-center justify-center   relative shadow-buu-pill border-buu rounded-full   px-1.5 py-1",
      //   className
      // )}
      className={cn(pillVariant({ variant, size, className }))}
    >
      {children}
    </span>
  );
}
