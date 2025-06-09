import { Leva } from "leva";
// import {  } from "leva";
import React from "react";

export default function LevaComponent() {
  const buuTheme = {
    colors: {
      elevation1: "#0f111a", // Main panel background
      elevation2: "#141621", // Slightly elevated background
      elevation3: "#1c1f2b", // For controls background
      accent1: "#4ec4ff", // Highlight color (similar to the glow or label like "APR 20.00%")
      accent2: "#84f4e2", // Optional: lighter accent
      highlight1: "#ffffff", // White labels or icons
      highlight2: "#999999", // Muted text or secondary labels
      vivid1: "#00ffd1", // Optional vivid accent for active states
    },
    radii: {
      sm: "6px",
      lg: "14px",
    },
    fontSizes: {
      root: "13px",
      label: "11px",
      toolTip: "11px",
      input: "13px",
    },
    fonts: {
      mono: `'JetBrains Mono', monospace`,
      sans: `'Inter', sans-serif`,
    },
    sizes: {
      rootWidth: "280px",
      controlWidth: "160px",
      scrubberWidth: "8px",
      scrubberHeight: "8px",
      checkboxSize: "14px",
      joystickWidth: "100px",
      joystickHeight: "100px",
      rowGap: "10px",
      colGap: "10px",
    },
  };
  return (
    <div className="absolute top-0 left-0 z-50">
      <Leva
        isRoot
        theme={buuTheme}
        fill
        flat
        oneLineLabels
        collapsed
        neverHide
        titleBar={{
          position: {
            x: 100,
          },
          title: "Buu Stage Configurator",
        }}
      />
    </div>
  );
}
