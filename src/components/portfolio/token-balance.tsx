"use client";
import {
  useBuuPricingData,
  useTokenBalance,
} from "@/hooks/use-pricing";
import { formatNumberWithFractions, formatWithComma } from "@/lib/utils";
import { Button } from "../ui/button";

export default function TokenBalance() {
  const { data: tokenBalance } = useTokenBalance();
  const { data } = useBuuPricingData();
  const balance = tokenBalance?.value.uiAmount ?? 0;
  const usd = balance * (data?.price ?? 0);
  return (
    <div className="bg-balance-card mt-5 rounded-lg">
      <div className="px-2  md:px-6 py-5">
        <div className="grid md:grid-cols-2">
          <div className="">
            <div className="flex  items-center justify-between">
              <h3 className="font-medium   w-full lg:text-left ">
                Your Balance{" "}
              </h3>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-1">
              <p className="text-5xl font-medium tracking-tight">
                {formatNumberWithFractions(Number(balance ?? 0))}
              </p>
              <span className="text-sm text-muted-foreground/60">$BUU</span>
            </div>
            <p className="text-muted-foreground/50 hidden lg:block tracking-tight font-medium text-sm">
              $ {formatWithComma(usd)}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button className="h-[40px] w-full">BUY $BUU</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
