import { cn } from "@/lib/utils";
import React, { useRef, useCallback } from "react";

type TProgressBar = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
  disabled?: boolean;
};

export default function ProgressBar({
  max = 100,
  min = 1,
  onChange,
  value,
  className = "",
  disabled = false,
}: TProgressBar) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Ensure value is within bounds
  const clampedValue = Math.min(Math.max(value, min), max);
  const percentage = ((clampedValue - min) / (max - min)) * 100;

  const updateValue = useCallback(
    (clientX: number) => {
      if (!trackRef.current || disabled) return;

      const rect = trackRef.current.getBoundingClientRect();
      const percentage = Math.min(
        Math.max((clientX - rect.left) / rect.width, 0),
        1,
      );
      const newValue = min + percentage * (max - min);

      // Use requestAnimationFrame for smoother updates during fast movement
      requestAnimationFrame(() => {
        onChange(Math.round(newValue));
      });
    },
    [min, max, onChange, disabled],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (disabled) return;

      e.preventDefault();
      updateValue(e.clientX);

      const handleMouseMove = (e: MouseEvent) => {
        e.preventDefault();
        updateValue(e.clientX);
      };

      const handleMouseUp = (e: MouseEvent) => {
        e.preventDefault();
        document.removeEventListener("mousemove", handleMouseMove, true);
        document.removeEventListener("mouseup", handleMouseUp, true);
        document.body.style.userSelect = "";
        document.body.style.pointerEvents = "";
      };

      // Capture events globally and prevent text selection during drag
      document.body.style.userSelect = "none";
      document.body.style.pointerEvents = "none";
      document.addEventListener("mousemove", handleMouseMove, true);
      document.addEventListener("mouseup", handleMouseUp, true);
    },
    [updateValue, disabled],
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (disabled) return;

      e.preventDefault();
      updateValue(e.touches[0].clientX);

      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        if (e.touches.length > 0) {
          updateValue(e.touches[0].clientX);
        }
      };

      const handleTouchEnd = (e: TouchEvent) => {
        e.preventDefault();
        document.removeEventListener("touchmove", handleTouchMove, true);
        document.removeEventListener("touchend", handleTouchEnd, true);
        document.body.style.touchAction = "";
      };

      // Prevent scrolling during drag
      document.body.style.touchAction = "none";
      document.addEventListener("touchmove", handleTouchMove, {
        capture: true,
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd, {
        capture: true,
        passive: false,
      });
    },
    [updateValue, disabled],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      const step = Math.max(1, (max - min) / 100); // At least 1 unit steps
      let newValue = clampedValue;

      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          newValue = Math.min(clampedValue + step, max);
          break;
        case "ArrowLeft":
        case "ArrowDown":
          newValue = Math.max(clampedValue - step, min);
          break;
        case "Home":
          newValue = min;
          break;
        case "End":
          newValue = max;
          break;
        default:
          return;
      }

      e.preventDefault();
      onChange(Math.round(newValue));
    },
    [clampedValue, min, max, onChange, disabled],
  );

  return (
    <div className={`relative w-full ${className}`}>
      {/* Track */}
      <div
        ref={trackRef}
        className={cn(
          "relative h-2 rounded-full cursor-pointer select-none",
          "transition-all duration-150 ease-out",
          { "opacity-50 cursor-not-allowed": disabled },
        )}
        style={{
          background: `linear-gradient(to right, 
            white 0%, 
            white ${percentage}%, 
            rgba(255, 255, 255, 0.1) ${percentage}%, 
            rgba(255, 255, 255, 0.1) 100%
          )`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />

      {/* Handle */}
      <div
        className={cn(
          "absolute top-1/2 w-3 h-3 bg-white rounded-full border-2 border-white",
          "transform -translate-y-1/2 -translate-x-1/2 cursor-pointer select-none",
          "transition-all duration-150 ease-out shadow-lg",
          "hover:scale-110 active:scale-125",
          {
            "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100":
              disabled,
          },
        )}
        style={{
          left: `${percentage}%`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={clampedValue}
        aria-disabled={disabled}
      />

      {/* Hidden native input for accessibility */}
      <input
        type="range"
        min={min}
        max={max}
        value={clampedValue}
        onChange={(e) => !disabled && onChange(Number(e.target.value))}
        className="sr-only"
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
}
