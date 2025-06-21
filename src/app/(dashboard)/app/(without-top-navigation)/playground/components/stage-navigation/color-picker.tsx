import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ColorPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (color: string) => void;
}) {
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [hideColors, setHideColors] = useState(false);
  const predefinedColors = [
    "#ffffff", // white
    "#ff0000", // red
    "#ff8000", // orange
    "#ffff00", // yellow
    "#80ff00", // lime
    "#00ff00", // green
    "#00ffff", // cyan
    "#0080ff", // sky blue
    "#0000ff", // blue
    "#8000ff", // purple
    "#ff0080", // pink
    "#4ecdc4", // teal
    "#45b7d1", // light blue
    "#96ceb4", // mint
    "#feca57", // golden
    "#54a0ff", // dodger blue
    "#00d2d3", // turquoise
    "#ff9f43", // orange peel
    "#10ac84", // emerald
    "#808080", // gray
  ];

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center my-2">
        <p className="text-xs font-semibold uppercase">Light Color {value}</p>
        <button
          onClick={() => {
            setHideColors((prev) => !prev);
          }}
          className="text-xs font-medium uppercase"
        >
          {hideColors ? "Show" : "Hide"}
        </button>
      </div>
      <div
        className={cn("space-y-3", {
          hidden: hideColors,
        })}
      >
        <div className="grid grid-cols-7 gap-2">
          {predefinedColors.map((color, index) => (
            <button
              key={index}
              onClick={() => onChange(color)}
              className={`w-10 h-10 rounded-md border  transition-all ${
                value === color
                  ? "border-white shadow-lg scale-105"
                  : "border-gray-600 hover:border-gray-400"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}

          {/* Custom color picker button */}
          <button
            onClick={() => setShowCustomPicker(!showCustomPicker)}
            className={`w-10 h-10 rounded-md border-2 transition-all flex items-center justify-center ${
              showCustomPicker
                ? "border-white shadow-lg scale-110"
                : "border-gray-600 hover:border-gray-400"
            }`}
            style={{ backgroundColor: "#2a2a2a" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white"
            >
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          </button>
        </div>

        {showCustomPicker && (
          <div className="mt-3 ">
            <input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-8 rounded-lg bg-transparent cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
}
