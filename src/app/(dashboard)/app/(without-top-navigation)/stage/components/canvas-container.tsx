import { Canvas } from "@react-three/fiber";
import Lights from "../lights";
import CameraController from "./camera-controller";
import OrbitController from "./orbit-controller";
import ModelScene from "./scene";
import { SceneLights } from "./scene-lights";
import Worlds from "./worlds";
import { AmbientLight } from "three";
import * as THREE from "three";
export default function CanvasContainer() {
  //   const { camera } = useThree();
  return (
    <Canvas
      camera={{ position: [10, 10, 15], fov: 60,  }}
      className=" w-full h-full"
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1;
      }}
    >
      <CameraController />
      <ModelScene />
      <SceneLights />
      <OrbitController />
      {/* <GridHelpers /> */}
      <Worlds />
      <Lights />
    </Canvas>
  );
}
