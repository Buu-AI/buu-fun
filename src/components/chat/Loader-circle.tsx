"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

type TLoaderCircle = {
  index?: number;
  disableSpin?: boolean;
};

export default function LoaderCircle({ disableSpin = false }: TLoaderCircle) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<NodeListOf<SVGPathElement>>(null);

  useEffect(() => {
    if (disableSpin) return;
    const svgElement = svgRef.current;
    if (!svgElement) return;

    // Get all path elements
    pathRefs.current = svgElement.querySelectorAll("path");
    if (!pathRefs.current.length) return;

    const ctx = gsap.context(() => {
      const colors = ["#78DBFF", "#A378FF", "#EB78FF", "#A378FF", "#78DBFF"];

      // Rotation animation
      gsap.to(svgElement, {
        rotate: 360,
        transformOrigin: "center center",
        repeat: -1,
        ease: "none",
        duration: 3,
      });

      // Color transition animation - target the path elements
      const colorTimeline = gsap.timeline({ repeat: -1 });

      colors.forEach((color, i) => {
        if (i === 0) return; // Skip first color as it's the starting color

        colorTimeline.to(pathRefs.current, {
          stroke: color,
          duration: 3 / (colors.length - 1), // Divide duration evenly
          ease: "sine.inOut",
        });
      });
    }, svgElement);

    return () => {
      ctx.revert();
    };
  }, [disableSpin]);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 123 123"
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
