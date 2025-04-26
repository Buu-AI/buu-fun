"use client";
import gsap from "gsap";
import { LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // return children
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    if (!lenisRef.current) return;

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    const ctx = gsap.context(() => {
      gsap.ticker.add(update);
    });

    return () => {
      gsap.ticker.remove(update);
      ctx.revert();
    };
  }, []);

  return (
    <ReactLenis
      options={{
        autoResize: true,
        gestureOrientation: "both",

        // autoRaf: false,
        anchors: { immediate: false },
      }}
      ref={lenisRef}
      root
    >
      {children}
    </ReactLenis>
  );
}
