"use client";
import { Canvas } from "@react-three/fiber";
// pages/lighting-editor.tsx
import dynamic from "next/dynamic";
import React from "react";

// Import the LightingManager with no SSR since it uses browser APIs
const Scene = dynamic(() => import("../stage/lights"), {
  ssr: false,
});

const LightingEditorPage: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <Scene />
      </Canvas>
    </div>
  );
};

export default LightingEditorPage;
