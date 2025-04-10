import React from "react";
import { Button } from "../ui/button";
import { CoinStackIcon } from "@/assets/icons";

export default function StakeConfirmButton() {
  return (
    <Button className="w-full">
      <CoinStackIcon />
      Stake $BUU
    </Button>
  );
}
