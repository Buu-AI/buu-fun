"use client";
import { BitRefillImages } from "@/assets/Image";
import MyBitrefillWidget from "./bit-refill";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { ThreeDMarquee } from "./ui/3d-marquee";

export default function BitRefillSheet() {
  return (
    <div className="mt-6">
      <div className="bg-portfolio-statistics overflow-hidden px-6 pt-6 pb-6 rounded-2xl relative border">
        <div className="absolute -z-10  max-md:hidden top-0 left-0 w-full h-full">
          <div
            style={{
              position: "absolute",
              width: "70%",
            }}
            className="grid grid-cols-3 gap-2 rotate-[28deg]  lg:top-[20%] xl:top-[-27%]  right-[-20%]"
          >
            {/* <ThreeDMarquee images={BitRefillImages.map((item) => item.src)} /> */}
            {BitRefillImages.map((item, index) => {
              return (
                <div key={`bit-refill-${item.src}-${index}`} className="">
                  <Image
                    src={item.src}
                    alt="bit-refill coupon providers"
                    className="rounded-lg  aspect-video object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-3">
          <h4 className="text-xl font-semibold">Buy gift cards with $BUU</h4>
          <p className="font-medium text-muted-foreground/60 mt-3 md:w-[40%]">
            Use $BUU or other currencies from your games to buy gift cards like
            Amazon, eBay, Xbox and many more. Enjoy instant email delivery - our
            service is fast and secure.
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>More Info</Button>
          </SheetTrigger>
          <SheetContent
          overlayClassName="bg-black/40"
          className="bg-balance-card  p-0 w-full  sm:max-w-xl">
            <SheetHeader>
              <SheetTitle className="sr-only">Bitrefill widget</SheetTitle>
              <SheetDescription className="sr-only">
                Allow users to buy coupons using $BUU tokens
              </SheetDescription>
            </SheetHeader>
            <MyBitrefillWidget />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
