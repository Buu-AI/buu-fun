import { Canvas } from "@react-three/fiber";
import { Worlds } from "./worlds";
import OrbitController from "./orbit-controller";
import CameraController from "./camera-controller";
import SceneLights from "./scene-lights";
import ModelScene from "./scene";

export default function CanvasContainer() {
  return (
    <Canvas
      camera={{
        position: [10, 10, 15],
        fov: 60,
      }}
      className=" w-full h-full"
    >
      <CameraController />
      <ModelScene />
      <SceneLights />
      <OrbitController />
      <Worlds />
    </Canvas>
  );
}
