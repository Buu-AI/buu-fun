"use client";
import SplashCursor from "@/components/ui/splash-cursor";
import React, { useMemo } from "react";

export default function SplashCursorProvider() {
  const child = useMemo(
    () => (
      <SplashCursor
        PRESSURE={0.05}
        SPLAT_RADIUS={0.1}
        DENSITY_DISSIPATION={2}
      />
    ),
    [],
  );

  return child;
}
