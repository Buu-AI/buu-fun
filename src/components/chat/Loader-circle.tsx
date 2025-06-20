"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

type TLoaderCircle = {
  index?: number;
  disableSpin?: boolean;
};

export default function LoaderCircle({
  index = 0,
  disableSpin = false,
}: TLoaderCircle) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (disableSpin) return;
    const ctx = gsap.context(() => {
      // Generate random values for more varied animation
      const randomDuration = 3; // Random duration between 1-3 seconds
      const randomDirection = index / 2 === 0 ? -360 : 360; // Random direction
      const randomDelay = Math.random() * index * 0.5; // Random start delay up to 1 second

      gsap.to(svgRef.current, {
        rotate: randomDirection,
        transformOrigin: "center center",
        repeat: -1,
        ease: "none",
        duration: randomDuration,
        delay: randomDelay,
      });
    }, svgRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 124 124"
      fill="none"
      style={{ width: 124, height: 124 }}
    >
      <path
        opacity="0.4"
        d="M88.3041 97.4414C107.925 82.8671 112.015 55.1467 97.4409 35.5263C82.8666 15.9058 55.1462 11.8151 35.5258 26.3895C15.9053 40.9638 11.8146 68.6842 26.389 88.3046C28.6364 91.3302 31.1965 93.9866 33.9913 96.2621"
        stroke="#78DBFF"
        strokeWidth="7.78732"
        strokeLinecap="round"
      />
      <path
        d="M48.4682 104.081C56.9714 106.785 66.2103 106.9 74.896 104.236"
        stroke="#78DBFF"
        strokeWidth="7.78732"
        strokeLinecap="round"
      />
    </svg>
  );
}
