"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface AnimatedCircleProps {
  size?: string; // Tailwind size class like "w-4 h-4"
  duration?: number; // Animation duration in seconds
  className?: string; // Additional classes
}

export default function AnimatedCircle({
  size = "w-4 h-4",
  duration = 3.5,
  className = "",
}: AnimatedCircleProps) {
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const gradients = [
      "linear-gradient(45deg, #78DBFF, #A378FF)",
      "linear-gradient(45deg, #A378FF, #EB78FF)", 
      "linear-gradient(45deg, #EB78FF, #FF6B9D)",
      "linear-gradient(45deg, #FF6B9D, #F093FB)",
      "linear-gradient(45deg, #F093FB, #4FACFE)",
      "linear-gradient(45deg, #A378FF, #78DBFF)"
    ];

    gsap.to(circle, {
      duration,
      keyframes: gradients.map((gradient) => ({
        background: gradient,
      })),
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, [duration]);

  return (
    <div
      ref={circleRef}
      className={`bg-gradient-to-br from-[#78DBFF] to-[#A378FF] ${size} rounded-full ${className}`}
    />
  );
}