import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function StakingSlider() {
  return (
    <div className="flex  items-center justify-around bg-portfolio-statistics-button-background rounded-md px-2 py-2">
      <Button
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            false,
        })}
      >
        25%
      </Button>
      <Button
        variant={"ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            true,
        })}
      >
        50%
      </Button>
      <Button
        variant={"ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            true,
        })}
      >
        75%
      </Button>
      <Button
        variant={"ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            true,
        })}
      >
        MAX
      </Button>
    </div>
  );
}
