"use client";
import { useUserSubscription } from "@/hooks/use-credits";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";

export default function NewSubscriptionConfetti() {
  const { data: subscription } = useUserSubscription();
  const confettiRef = useRef<TConductorInstance | null>(null);
  const searchParam = useSearchParams();
  const success = searchParam.get("stripeSubscription");
  const isSuccess = success === "success";
  const router = useRouter();
  const timeout = useRef<NodeJS.Timeout>(null);
  useEffect(() => {
    if (!subscription?.planKey || !isSuccess || !confettiRef.current) {
      return;
    }
    confettiRef.current.run({
      speed: 1.2,
      delay: 250,
      duration: 5000,
    });
    timeout.current = setTimeout(() => {
      router.push("/app/profile");
    }, 9000);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      if (confettiRef.current) {
        confettiRef.current?.stop();
        confettiRef.current = null;
      }
    };
  });

  // if (!subscription || isFreePlan(subscription?.planKey)) return null;
  return (
    <div className="fixed w-full h-full top-0 left-0 -z-[100]">
      <Fireworks
        className="w-full h-full"
        globalOptions={{
          useWorker: true,
        }}
        onInit={({ conductor }) => {
          confettiRef.current = conductor;
        }}
      />
    </div>
  );
}
