"use client";
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

export default function BitRefillSheet() {
  return (
    <div className="mt-6">
      <div className="bg-portfolio-statistics px-6 pt-6 pb-6 rounded-2xl">
        <div className="mb-3">
          <h4 className="text-xl font-semibold">Buy gift cards with $BUU</h4>
          <p className="font-medium text-muted-foreground/60 mt-3">
            Use $BUU or other currencies from your games to buy gift cards like
            Amazon, eBay, Xbox and many more. Enjoy instant email delivery - our
            service is fast and secure.
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>More Info</Button>
          </SheetTrigger>
          <SheetContent className="bg-balance-card max-w-full p-0">
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
