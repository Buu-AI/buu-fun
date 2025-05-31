"use client";
import {
  BitRefillImagesOne,
  BitRefillImagesTwo,
  BitRefillImagesThree,
} from "@/assets/Image";
import Image from "next/image";
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
import { Marquee } from "./(home)/CTA/marquee";

export default function BitRefillSheet() {
  return (
    <div className="mt-6">
      <div className="bg-portfolio-statistics overflow-hidden  px-6 pt-6 pb-6 rounded-2xl relative border">
        <div className="absolute -z-10  max-md:hidden top-0 left-0 w-full h-full">
          <div
            style={{
              position: "absolute",
              // width: "70%",
            }}
            className="flex      max-w-max  h-[200%]  gap-2  rotate-[28deg]  -top-[15%] -right-[10%]"
          >
            {/* <ThreeDMarquee images={BitRefillImages.map((item) => item.src)} /> */}
            <Marquee
              reverse
              className="overflow-visible   [gap:4px]   [--duration:60s] p-0"
              childClass="gap-0 [gap:5px]"
              vertical
            >
              {BitRefillImagesOne.map((item, index) => {
                return (
                  <div
                    key={`bit-refill-${item.src}-${index}`}
                    className="w-40 bit-refill-image-border rounded-md overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt="bit-refill coupon providers"
                      className="aspect-video object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                );
              })}
            </Marquee>
            <Marquee
              childClass="gap-0 [gap:5px]"
              className="overflow-visible  p-0 [gap:4px]"
              vertical
            >
              {BitRefillImagesTwo.map((item, index) => {
                return (
                  <div
                    key={`bit-refill-${item.src}-${index}`}
                    className="w-40 bit-refill-image-border rounded-md overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt="bit-refill coupon providers"
                      className="   aspect-video object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                );
              })}
            </Marquee>
            <Marquee
              childClass="gap-0 [gap:5px]"
              className="overflow-visible  [gap:4px] p-0 [--duration:20s]"
              vertical
            >
              {BitRefillImagesThree.map((item, index) => {
                return (
                  <div
                    key={`bit-refill-${item.src}-${index}`}
                    className="w-40 bit-refill-image-border rounded-md overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt="bit-refill coupon providers"
                      className="rounded-md   aspect-video object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                );
              })}
            </Marquee>
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
            <Button>CASH OUT</Button>
          </SheetTrigger>
          <SheetContent
            overlayClassName="bg-black/40"
            className="bg-balance-card  p-0 w-full  sm:max-w-xl"
          >
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
