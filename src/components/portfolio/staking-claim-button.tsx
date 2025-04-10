import React from "react";
import { Button } from "../ui/button";

export default function StakingClaimButton() {
  return (
    <Button variant={"special"} className="h-[40px]">
      <span className="p-3">Claim</span>
    </Button>
  );
}
