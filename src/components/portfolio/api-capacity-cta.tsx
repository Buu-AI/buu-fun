import React from "react";
import { Button } from "../ui/button";

export default function APICapacityCTA() {
  return (
    <div className="flex my-3 items-stretch justify-between">
      <div>
        <h4 className="text-xl">
          Total API Capacity:
          <span className="blue-text-clip"> 181,480 VCU</span>
        </h4>
        <p className="text-sm font-medium text-muted-foreground/60">
          1 $BUU = 0.197 VCU per day
        </p>
      </div>
      <Button variant={"special"} size={"buu"}>
        API Dashboard
      </Button>
    </div>
  );
}
