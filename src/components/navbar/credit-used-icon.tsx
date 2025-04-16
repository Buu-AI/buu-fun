"use client";
import FlashIcon from "@/assets/icons/flash-icon";
import React from "react";
import { Button } from "../ui/button";
import useUserCredits from "@/hooks/use-credits";
import { getFixedCredits } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function CreditUsedIcon() {
  const { data } = useUserCredits();
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => {
          router.push("/app/profile");
        }}
        variant={"special"}
        size={"special"}
        className="gap-0"
      >
        <div className="flex">
          <FlashIcon />
        </div>
        <p className="text-white pr-1 pl-0.5">{getFixedCredits(data?.available)}</p>
        <p className="xs:block hidden text-muted-foreground/80">Credits Available </p>
      </Button>
    </div>
  );
}
