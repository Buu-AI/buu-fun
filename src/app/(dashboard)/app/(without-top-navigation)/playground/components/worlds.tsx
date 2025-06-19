"use client";
import { Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

export function Worlds() {
  const [textureUrl] = useState<string>("/background.jpg");
  const sphereRef = useRef<THREE.Mesh>(null);
  const groundRef = useRef<THREE.Mesh>(null);

  if (!textureUrl) return null;

  return (
    <Suspense
      fallback={<BasicWorld sphereRef={sphereRef} groundRef={groundRef} />}
    >
      <WorldContent
        textureUrl={textureUrl}
        sphereRef={sphereRef}
        groundRef={groundRef}
      />
    </Suspense>
  );
}

function WorldContent({
  textureUrl,
  sphereRef,
  groundRef,
}: {
  textureUrl: string;
  sphereRef: React.RefObject<THREE.Mesh | null>;
  groundRef: React.RefObject<THREE.Mesh | null>;
}) {
  try {
    const hdrTexture = useLoader(TextureLoader, textureUrl);

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
  } catch (error) {
    console.error("Error loading texture:", error);
    return <BasicWorld sphereRef={sphereRef} groundRef={groundRef} />;
  }
}

// Fallback component without texture
function BasicWorld({
  sphereRef,
  groundRef,
}: {
  sphereRef: React.RefObject<THREE.Mesh | null>;
  groundRef: React.RefObject<THREE.Mesh | null>;
}) {
  return (
    <>
      {/* Basic environment */}
      <Environment preset="sunset" />

      {/* Simple colored sphere */}
      <mesh ref={sphereRef} scale={[-100, 100, 100]}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshBasicMaterial color="#4a90e2" side={THREE.BackSide} />
      </mesh>

      {/* Ground plane */}
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

export default Worlds;
