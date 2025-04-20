"use client";
import React from "react";
import PlusIcon from "@/assets/icons/plus-blue-icon.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { setCreateModalChange } from "@/lib/redux/features/api-key";
import { useUserSubscription } from "@/hooks/use-credits";
import { isFreePlan } from "@/lib/helpers/status-checker";
import { setSubscriptionModel, setSubscriptionModelPlanType } from "@/lib/redux/features/subscription";

export default function CreateAPIKeyButton() {
  const { data } = useUserSubscription();
  const dispatch = useAppDispatch();
  function handleClick() {
    if (isFreePlan(data?.planKey)) {
      dispatch(setSubscriptionModelPlanType("BASIC"));
      dispatch(setSubscriptionModel(true));
      return;
    }
    dispatch(setCreateModalChange(true));
  }
  return (
    <Button
      onClick={() => {
        handleClick();
      }}
      size={"special"}
    >
      <div className=" items-center justify-center w-6 h-6 flex">
        <Image src={PlusIcon} alt="das" width={100} height={100} />
      </div>
      Create New Key
    </Button>
  );
}
