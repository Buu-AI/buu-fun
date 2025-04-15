"use client";
import {
  boatAndFlowers,
  whiteChatLady,
  lizardMermaid,
  Elephant,
  hotAirBallon,
  RoundedLamp3d,
  StepShape3d,
} from "@/assets/Image";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Create3DLayout({
  ImageOneClassName,
  ImageTwoClassName,
  containerClass,
}: {
  ImageOneClassName?: string;
  ImageTwoClassName?: string;
  containerClass?: string;
}) {
  return (
    <div className={cn(containerClass)}>
      <Image
        src={RoundedLamp3d.src}
        className={cn(
          "max-w-28 rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] rotate-[-8deg] right-12 z-10  absolute -bottom-3",
          ImageOneClassName
        )}
        alt="Comic boy"
        width={720}
        height={480}
      />
      <div className="help-card-box-shadow ">
        <Image
          src={StepShape3d.src}
          className={cn(
            "z-0 max-w-24   shadow-inner shadow-white drop-shadow-md rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[15deg] rotate-[12deg] right-0  absolute -bottom-4",
            ImageTwoClassName
          )}
          alt="Comic boy"
          width={720}
          height={480}
        />
      </div>
    </div>
  );
}
export function CreateComicLayout({
  ImageOneClassName,
  ImageTwoClassName,
  containerClass,
}: {
  ImageOneClassName?: string;
  ImageTwoClassName?: string;
  containerClass?: string;
}) {
  return (
    <div className={cn("", containerClass)}>
      <Image
        src={whiteChatLady.src}
        className={cn(
          "max-w-28 rounded-2xl top-6 transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] rotate-[-6deg] right-8 absolute translate-y-[65px] z-0",
          ImageOneClassName
        )}
        alt="Comic boy"
        width={720}
        height={480}
      />

      <Image
        src={lizardMermaid.src}
        className={cn(
          "z-10  max-w-28 absolute  shadow-inner shadow-white drop-shadow-md rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[15deg] rotate-[12deg] right-0   top-[60%] ",
          ImageTwoClassName
        )}
        alt="Comic boy"
        width={720}
        height={480}
      />
    </div>
  );
}

export function CreateVideoLayout() {
  return (
    <div className="">
      <div>
        <Image
          src={hotAirBallon.src}
          className="object-top max-w-[120px] w-full rounded-2xl object-cover transition-all duration-500 ease-in-out group-hover:scale-90 rotate-[6deg] right-[15%] z-[3]  absolute top-[60%]"
          alt="Comic boy"
          width={720}
          height={480}
        />
        <Image
          src={boatAndFlowers.src}
          className="z-2 max-w-32  object-cover object-top shadow-inner shadow-white drop-shadow-md rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[18deg] rotate-[12deg] right-0  absolute top-[60%]"
          alt="Comic boy"
          width={720}
          height={480}
        />
        <Image
          src={Elephant.src}
          className="max-w-32 w-full rounded-2xl transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] rotate-[-6deg] right-[30%] z-[1]  absolute top-[60%]"
          alt="Comic boy"
          width={720}
          height={480}
        />
      </div>
    </div>
  );
}
