"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

interface SmoothBorderGlowProps {
  /**
   * The class name of the container.
   */
  className?: string;
  /**
   * The style of the container.
   */
  style?: React.CSSProperties;
  /**
   * The content to display inside the border.
   */
  children?: React.ReactNode;
  /**
   * The primary color of the glow effect.
   */
  glowColor?: string;
  /**
   * The secondary color of the glow effect.
   */
  secondaryColor?: string;
  /**
   * The animation duration in seconds.
   */
  duration?: number;
  /**
   * The border width in pixels.
   */
  borderWidth?: number;
  /**
   * The border radius in pixels or as a string (e.g., "1rem").
   */
  borderRadius?: string | number;
  /**
   * Whether to pause the animation on hover.
   */
  pauseOnHover?: boolean;
}

export const SmoothBorderGlow = ({
  className,
  style,
  children,
  glowColor = "#3b82f6", // Default blue
  secondaryColor = "#8b5cf6", // Default purple
  duration = 8,
  borderWidth = 2,
  borderRadius = "0.75rem",
  pauseOnHover = false,
}: SmoothBorderGlowProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Convert numerical border radius to string with px
  const formattedBorderRadius =
    typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

  return (
    <div
      className={cn("relative", className)}
      style={{
        ...style,
        borderRadius: formattedBorderRadius,
      }}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Actual content */}
      <div
        className="relative z-10 h-full w-full"
        style={{
          borderRadius: formattedBorderRadius,
        }}
      >
        {children}
      </div>

      {/* Outer glow container */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          borderRadius: formattedBorderRadius,
        }}
      >
        {/* Gradient overlay - moving clockwise */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, ${glowColor}, ${secondaryColor}, transparent)`,
            borderRadius: formattedBorderRadius,
            borderWidth,
            borderStyle: "solid",
            borderColor: "transparent",
          }}
          initial={{ rotate: 0 }}
          animate={{
            rotate: isHovered ? 0 : 360,
            scale: [1, 1.02, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            rotate: {
              duration: duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
            scale: {
              duration: duration / 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            opacity: {
              duration: duration / 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />

        {/* Gradient overlay - moving counter-clockwise */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, ${secondaryColor}, ${glowColor}, transparent)`,
            borderRadius: formattedBorderRadius,
            borderWidth,
            borderStyle: "solid",
            borderColor: "transparent",
          }}
          initial={{ rotate: 180 }}
          animate={{
            rotate: isHovered ? 180 : -180,
            scale: [1, 1.01, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            rotate: {
              duration: duration * 1.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
            scale: {
              duration: duration / 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
            opacity: {
              duration: duration / 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />

        {/* Blur effect */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(8px)",
            borderRadius: formattedBorderRadius,
          }}
        />
      </div>

      {/* Inner border with solid color */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          borderRadius: formattedBorderRadius,
          borderWidth,
          borderStyle: "solid",
          borderColor: glowColor,
          opacity: 0.4,
          background: "transparent",
        }}
      />
    </div>
  );
};
