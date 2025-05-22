"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AddProps from "./components/add-props";
import GridHelpers from "./components/gridHelper";
import InformationViewer from "./components/information-viewer";
import LevaComponent from "./components/leva";
import ModelScene from "./components/scene";
import { SceneLights } from "./components/scene-lights";

// Main App Component
export default function StagingPage() {
  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-hidden relative  ">
      <AddProps />
      <Canvas
        camera={{ position: [0, 2, 5], fov: 75 }}
        className=" border-2 border-red-500 w-full h-full"
      >
        <ModelScene />
        <SceneLights />
        <OrbitControls makeDefault enableDamping={false} />
        <GridHelpers />
        {/* <Lights /> */}
      </Canvas>
      <LevaComponent />
      <InformationViewer />
    </div>
  );
}
