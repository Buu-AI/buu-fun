import { getClusterUrl } from "@/lib/solana/staking";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

export default function BuyBuuButton() {
  return (
    <Button
      onClick={() => {
        if (!window.Jupiter) {
          toast.error("Jupiter is not ready yet, Please try again");
          return;
        }
        window.Jupiter.init({
          autoConnect: true,
          displayMode: "modal",
          endpoint: getClusterUrl(),
          strictTokenList: false,
          formProps: {
            initialOutputMint: "88n8pBT6doB5rHP7WcAaG8TuVY1baWazzxAS7Bm8virt",
            fixedInputMint: true,
            fixedOutputMint: true,
            swapMode: "ExactIn",
            fixedAmount: true,
          },
        });
      }}
      className="h-[40px] w-full"
    >
      <span className="p-3">Buy $Buu</span>
    </Button>
  );
}
