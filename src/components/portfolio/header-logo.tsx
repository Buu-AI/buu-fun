import Image from "next/image";
import logo from "@/assets/icons/logo-no-gradient.png";
import React from "react";

export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex bg-[#1C2027] items-center justify-center max-w-max px-1 py-1    rounded-lg ">
        <Image
          className="aspect-square w-10 "
          src={logo}
          width={250}
          height={250}
          alt="Bunn.fun logo"
        />
      </div>
      <h2 className="grayish-text-gradient text-2xl font-medium ">BUU Token</h2>
    </div>
  );
}
