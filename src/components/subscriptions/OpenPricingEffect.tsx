"use client";
import { PlanKeyMapper } from "@/constants/subscription/subscription-plans";
import { useAppDispatch } from "@/hooks/redux";
import { useUserSubscription } from "@/hooks/use-credits";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { useEffect } from "react";

export default function OpenPricingEffect() {
  const dispatch = useAppDispatch();
  const { data: subscriptionData } = useUserSubscription();
  useEffect(() => {
    if (subscriptionData && subscriptionData?.planKey === PlanKeyMapper.FREE) {
      dispatch(setSubscriptionModel(true));
    }
  }, [subscriptionData?.planKey]);
  return null;
}
