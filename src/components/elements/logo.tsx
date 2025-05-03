import React from "react";
import Image from "next/image";
import logo from "@/assets/icons/logo-no-gradient.png";

export default function BuuLogo() {
  return (
    <Image
      className="w-full h-full"
      src={logo}
      width={250}
      height={250}
      alt="Bunn.fun logo"
    />
  );
}
