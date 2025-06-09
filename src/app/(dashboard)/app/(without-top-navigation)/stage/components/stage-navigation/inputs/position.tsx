import { getMappedPosition, isNumberRegex, isTypeNumber } from "@/lib/utils";
import { TVector3, TVector3Positions } from "@/types/stage/objects";
import React, { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";

type TPosition = {
  type?: TVector3Positions;
  onChange?: (e: number) => void;
  value: number;
  maxValue: TVector3 | number;
  revolve?: boolean;
};

export default function Position({
  type = "x",
  onChange = () => {},
  value,
  maxValue,
  revolve = true,
}: TPosition) {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; startValue: number } | null>(null);
  const sensitivity = 0.1; // Adjust this to control drag sensitivity

  const maxInputValue = isTypeNumber(maxValue)
    ? maxValue
    : getMappedPosition(type, maxValue);

  // Helper function to clamp value within rotation bounds
  const clampValue = useCallback(
    (val: number): number => {
      if (!revolve) return val;

      const max = Math.abs(maxInputValue);
      return Math.max(-max, Math.min(max, val));
    },
    [maxInputValue, revolve],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      // Handle empty string
      if (inputValue === "") {
        onChange(0);
        return;
      }

      // Handle negative sign only
      if (inputValue === "-") {
        return; // Allow typing negative sign without changing value yet
      }

      // Handle decimal point only
      if (inputValue === ".") {
        onChange(0);
        return;
      }

      // Handle negative decimal point
      if (inputValue === "-.") {
        return; // Allow typing negative decimal without changing value yet
      }

      // Check if it's a valid number (including partial numbers like "1.", "-1.", etc.)
      if (isNumberRegex(inputValue) || /^-?\d*\.?\d*$/.test(inputValue)) {
        const numValue = parseFloat(inputValue);

        // Handle NaN case (shouldn't happen with regex check, but safety net)
        if (isNaN(numValue)) {
          onChange(0);
          return;
        }

        // Handle Infinity and -Infinity
        if (!isFinite(numValue)) {
          onChange(0);
          return;
        }

        // Apply rotation constraints
        const clampedValue = clampValue(numValue);

        // Show toast notification if value was clamped
        if (revolve && clampedValue !== numValue) {
          const max = Math.abs(maxInputValue);
          toast.error(`Value clamped to range: -${max} to ${max}`);
        }

        onChange(clampedValue);
      } else {
        // Invalid input - reset to 0
        onChange(0);
      }
    },
    [onChange, clampValue, revolve, maxInputValue],
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      dragStartRef.current = {
        x: e.clientX,
        startValue: value,
      };

      // Change cursor to grabbing
      document.body.style.cursor = "grabbing";
    },
    [value],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !dragStartRef.current) return;

      const deltaX = e.clientX - dragStartRef.current.x;
      const newValue = dragStartRef.current.startValue + deltaX * sensitivity;

      // Round to 2 decimal places to avoid floating point precision issues
      const roundedValue = Math.round(newValue * 100) / 100;

      // Apply rotation constraints
      const clampedValue = clampValue(roundedValue);
      onChange(clampedValue);
    },
    [isDragging, onChange, sensitivity, clampValue],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStartRef.current = null;
    document.body.style.cursor = "";
  }, []);

  // Add global mouse event listeners when dragging
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="flex items-center h-[31px]">
      <button
        onMouseDown={handleMouseDown}
        className={`bg-position-text w-8 capitalize text-sm flex items-center text-black font-medium justify-center px-3 rounded-l-md h-full select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {type}
      </button>
      <input
        value={value}
        onChange={handleInputChange}
        className="bg-buu outline-none text-sm font-medium px-2 w-14 text-white/80 focus:border-none focus:ring-0 h-full rounded-r-md"
      />
    </div>
  );
}
