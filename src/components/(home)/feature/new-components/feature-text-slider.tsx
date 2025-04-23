"use client";
import React, { RefObject, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export const features = [
  {
    title: "Instant 3D Generation",
    description:
      "Input a prompt or image, and watch BUU.FUN craft a detailed 3D model in seconds.",
  },
  {
    title: "Auto Rigging",
    description:
      "Automatically add skeletons to your models, making them ready for animation without manual effort.",
  },
  {
    title: "Texture Remeshing",
    description:
      "Enhance your models with high-quality textures that adapt seamlessly to any design.",
  },
  {
    title: "One-Click Animation",
    description:
      "Bring your models to life with automated animations tailored to your creation.",
  },
  {
    title: "Roblox Studio Integration",
    description:
      "Upcoming LUA plugin allows direct import of your models into Roblox Studio for game development",
  },
];

export default function FeatureTextSliderV2({
  index,
  progressRef,
}: {
  index: number;
  progressRef: RefObject<number>;
}) {
  const [state] = useState(progressRef.current);
  console.log(state);
  useGSAP(() => {
    const ctx = gsap.context(() => {});
  });
  return (
    <div className="flex items-end w-full h-full justify-center ">
      <h1>hello</h1>
    </div>
  );
}
