import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { setBooleanToggler } from "@/lib/redux/features/buu-pricing";
import React from "react";

export default function RoiButton() {
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(
          setBooleanToggler({ key: "roiStakingDialogOpen", value: true })
        );
      }}
    >
      Calculate ROI
    </Button>
  );
}
