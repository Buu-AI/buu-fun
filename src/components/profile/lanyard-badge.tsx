import React from "react";
import Lanyard from "../ui/lanyard";
import { useUserSubscription } from "@/hooks/use-credits";
import { isFreePlan } from "@/lib/helpers/status-checker";

export default function LanyardBadge() {
  const { data: subscription } = useUserSubscription();
  if (!subscription || isFreePlan(subscription?.planKey)) return null;
  return (
    <Lanyard cardGLB="/lanyard/solanacard.glb" lanyard="/lanyard/lanyard.png" />
  );
}
