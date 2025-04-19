import Image from "next/image";
import React from "react";
import gradientBluePurpleImage from "./gradient-purple-blue.png";
import gradientBlueyRedImage from "./gradient-bluey-red.png";
import gradientRainbowImage from "./gradient-rainbow.png";
import { GeneralClassName } from "@/types";
import { cn } from "@/lib/utils";

export { gradientBluePurpleImage, gradientBlueyRedImage, gradientRainbowImage };

export function GradientPurpleBlue({ className }: GeneralClassName) {
  return (
    <Image
      className={cn("w-full h-full  object-cover ", className)}
      alt="Gradient Blue color"
      width={1920}
      height={1080}
      src={gradientBluePurpleImage}
    />
  );
}

export function GradientBlueyRed({ className }: GeneralClassName) {
  return (
    <Image
      className={cn("w-full h-full", className)}
      alt="Gradient Blue color"
      width={1920}
      height={1080}
      src={gradientBlueyRedImage}
    />
  );
}

export function GradientRainbow({ className }: GeneralClassName) {
  return (
    <Image
      className={cn("w-full h-full object-cover", className)}
      alt="Gradient Blue color"
      width={1920}
      height={1080}
      src={gradientRainbowImage}
    />
  );
}

// export { gradientBluePurpleImage, gradientBlueyRedImage, gradientRainbowImage };
