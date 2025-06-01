import NavigationalBar from "@/components/navbar/navigational-bar";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100dvh] min-h-[100dvh] overflow-hidden relative max-h-[100dvh]   w-full">
      <div className=" w-[200px] h-[100px] bg-overlay-secondary  bg-[#69CCD5]  rounded-full right-[20%] absolute bottom-[-140px] -z-10 blur-[100px]  rotate-[-10deg]" />

      <div className="grid-container-without-topbar w-full h-full ">
        <div className="main-body relative ">
          <div className="w-[176px] h-[334px] violet-gradient left-[45%]  rounded-full  absolute top-[5%] -z-10   md:block hidden  rotate-[-10deg]" />
          {children}
        </div>
        {/* <div className="top-bar ">
          <Topbar />
        </div> */}
        <div className="navigation ">
          <NavigationalBar />
        </div>
      </div>
    </div>
  );
}
