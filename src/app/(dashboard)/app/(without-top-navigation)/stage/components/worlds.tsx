"use client";
import { Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { memo, useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

export function Worlds() {
  const textureUrl = "/background.png";
  const hdrTexture = useLoader(TextureLoader, textureUrl);
  // const envMap = useEnvironment({ files: textureUrl });
  const sphereRef = useRef<THREE.Mesh>(null);
  const groundRef = useRef<THREE.Mesh>(null);

  return (
    <>
      {/* Environment for lighting */}
      <Environment map={hdrTexture} />

      {/* Large sphere with HDRI texture - this creates navigable geometry */}
      <mesh ref={sphereRef} scale={[-100, 100, 100]}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshBasicMaterial map={hdrTexture} side={THREE.BackSide} />
      </mesh>

      {/* Ground plane at y=0 */}
      <mesh
        ref={groundRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial
          color="#888888"
          transparent
          opacity={0.3}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
    </>
  );
}

export default memo(Worlds);
