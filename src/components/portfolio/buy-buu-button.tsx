import { useAppDispatch } from "@/hooks/redux";
import { setBuyBuuDialogOpen } from "@/lib/redux/features/buu-pricing";
import React from "react";
import { Button } from "../ui/button";

export default function BuyBuuButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(setBuyBuuDialogOpen(true));
      }}
      className="h-[40px] w-full"
    >
      <span className="p-3">Buy $Buu</span>
    </Button>
  );
}
