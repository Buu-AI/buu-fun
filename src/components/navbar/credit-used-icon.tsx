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
      >
        <div className="flex h-4 w-4">
          <FlashIcon />
        </div>
        <p className="text-white">{getFixedCredits(data?.available)}</p>
        <p className="xs:block hidden">Credits Available </p>
      </Button>
    </div>
  );
}
