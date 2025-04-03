import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function TokenStatisticsButtons() {
  return (
    <div className="flex items-center justify-center bg-portfolio-statistics-button-background rounded-md px-2 py-2">
      <Button
        // variant={Plan !== item ? "ghost" : undefined}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            false,
        })}
      >
        1H
      </Button>
      <Button
        variant={"ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            true,
        })}
      >
        3H
      </Button>
      <Button
        variant={"ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            true,
        })}
      >
        Day
      </Button>
      <Button
        variant={"ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            true,
        })}
      >
        Week
      </Button>
      <Button
        variant={"ghost"}
        className={cn({
          "hover:text-white text-sm text-muted-foreground/60 transition-all duration-300 ease-in-out hover:bg-muted/0":
            true,
        })}
      >
        Month
      </Button>
    </div>
  );
}
