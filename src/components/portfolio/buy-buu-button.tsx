import { useAppDispatch } from "@/hooks/redux";
import { setBuyBuuDialogOpen } from "@/lib/redux/features/buu-pricing";
import React from "react";
import { Button } from "../ui/button";
import { getClusterUrl } from "@/lib/solana/staking";

export default function BuyBuuButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        window.Jupiter.init({
          autoConnect: true,
          displayMode: "modal",

          endpoint: getClusterUrl(),

          formProps: {
            initialOutputMint: "88n8pBT6doB5rHP7WcAaG8TuVY1baWazzxAS7Bm8virt",
            fixedInputMint: true,
            fixedOutputMint: true,
            swapMode: "ExactIn",
            fixedAmount: true,
            initialAmount: "",
          },
        }); // dispatch(setBuyBuuDialogOpen(true));
      }}
      className="h-[40px] w-full"
    >
      <span className="p-3">Buy $Buu</span>
    </Button>
  );
}
