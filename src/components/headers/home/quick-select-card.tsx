"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Image from "next/image";
import Icon from "./Star Icon.png";
export default function QuickSelectCard({
  title,
  gradient,
  backgroundImage,
  released = true,
}: {
  title?: ReactNode;
  gradient: string;
  backgroundImage?: ReactNode;
  released?: boolean;
}) {
  return (
    <div
      // disabled={!released}
      className="relative  group w-72  overflow-hidden  aspect-video border h-full rounded-[20px] "
    >
      <div className="w-full h-full overflow-hidden  absolute z-50  left-0 top-0">
        {backgroundImage}
      </div>
      <div className="absolute w-full h-full top-0 left-0">
        <Image
          src={gradient}
          alt="hello"
          width={1980}
          height={1080}
          className=" w-full h-full"
        />
      </div>
      <div
        className={cn(
          "absolute  flex items-center justify-center w-full h-full top-0 left-0  z-50 bg-black/60 ",
          {
            hidden: released,
          },
        )}
      >
        <div className="text-lg flex items-center justify-center  font-bold tracking-tight ">
          <p>Coming soon</p>
          <div className="w-8 h-8">
            <Image
              src={Icon}
              width={100}
              className="w-full"
              height={100}
              alt="Star Icon"
            />
          </div>
        </div>
      </div>
      <div className="z-10 absolute py-4 pl-3 top-0 left-0 w-full h-full  text-2xl  font-medium  text-white text-left">
        <p className="">{title}</p>
      </div>
      {/* {gradient} */}
      {/* <div
        className={cn(
          "absolute w-full h-full  overflow-hidden  border-2 object-cover  max-w-full top-0 left-0"
        )}
      ></div> */}
    </div>
  );
}
