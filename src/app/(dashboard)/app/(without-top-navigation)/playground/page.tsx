"use client";
import { PersistProvider } from "@/providers/redux";
import CanvasContainer from "./components/canvas-container";
import ObjectsInScene from "./components/objects-in-scene";
import StageNavigationTopbar from "./components/stage-navigation/stage-navigation-top-bar";

// Main App Component
export default function StagingPage() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <PersistProvider>
        <StageNavigationTopbar />
        <CanvasContainer />
        <ObjectsInScene />
      </PersistProvider>
    </div>
  );
}
