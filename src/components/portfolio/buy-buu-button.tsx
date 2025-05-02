import { getClusterUrl } from "@/lib/solana/staking";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { IInit } from "@/types/jup";
import { GeneralClassName } from "@/types";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { JupiterAgIcon } from "@/assets/icons";
import Image from "next/image";

const JupiterIcon = () => {
  return (
    <Image
      src={JupiterAgIcon}
      width={250}
      height={250}
      alt="jupiter ag swap icon"
    />
  );
};

export const config: IInit = {
  autoConnect: true,
  displayMode: "modal",
  endpoint: getClusterUrl(),
  strictTokenList: true,
  formProps: {
    initialOutputMint: "88n8pBT6doB5rHP7WcAaG8TuVY1baWazzxAS7Bm8virt",
    fixedInputMint: true,
    fixedOutputMint: true,
    swapMode: "ExactIn",
    fixedAmount: true,
  },
};

export default function BuyBuuButton() {
  return (
    <Button
      onClick={() => {
        if (!window.Jupiter) {
          toast.error("Jupiter is not ready yet, Please try again");
          return;
        }
        window.Jupiter.init(config);
      }}
      className="h-[40px] w-full"
    >
      <span className="p-3">Buy $Buu</span>
    </Button>
  );
}

export function BuyBuuButtonNoAppearance({
  className,
  children = JupiterIcon(),
}: GeneralClassName & { children?: ReactNode }) {
  return (
    <button
      className={cn(className)}
      onClick={() => {
        if (!window.Jupiter) {
          toast.error("Jupiter is not ready yet, Please try again");
          return;
        }
        window.Jupiter.init(config);
      }}
    >
      {children}
    </button>
  );
}
