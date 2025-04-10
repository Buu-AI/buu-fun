import React from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

export default function StakingClaimAndRestake() {
  return (
    <Button
      onClick={async () => {
        toast.success("clicked");
        try {
          // const data = await wallet?.walletData?.sendTransaction({})
        } catch (error) {
          if (error) {
            toast.error("user rejected the request");
          }
        }
      }}
      className="h-[40px]"
    >
      <span className="p-3">Claim & Restake</span>
    </Button>
  );
}
