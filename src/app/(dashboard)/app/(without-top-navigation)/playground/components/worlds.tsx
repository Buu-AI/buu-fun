"use client";
import { Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

export function Worlds() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const groundRef = useRef<THREE.Mesh>(null);
  const textureUrl = "https://cdn.buu.fun/background.jpg";

  return (
    <Suspense fallback={null}>
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
  // Add error handling to useLoader with onError callback
  const texture = useLoader(
    TextureLoader,
    textureUrl,
    (loader) => {
      // Optional: Add loading progress tracking
      loader.crossOrigin = "anonymous";
    },
    (error) => {
      console.error("Error loading texture:", error);
      throw error; // Re-throw to trigger error boundary
    }
  );

  return (
    <>
      {/* Use JPG texture as environment map */}
      <Environment map={texture} />

      {/* Large sphere with texture */}
      <mesh ref={sphereRef} scale={[-100, 100, 100]}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
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

// Alternative approach using manual texture loading with better error handling
function WorldContentManual({
  textureUrl,
  sphereRef,
  groundRef,
}: {
  textureUrl: string;
  sphereRef: React.RefObject<THREE.Mesh | null>;
  groundRef: React.RefObject<THREE.Mesh | null>;
}) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.crossOrigin = "anonymous";

    loader.load(
      textureUrl,
      (loadedTexture) => {
        setTexture(loadedTexture);
        setLoading(false);
        setError(false);
      },
      (progress) => {
        // Optional: Handle loading progress
        console.log("Loading progress:", progress);
      },
      (err) => {
        console.error("Error loading texture:", err);
        setError(true);
        setLoading(false);
      }
    );
  }, [textureUrl]);

  if (loading) {
    return null;
  }

  if (error || !texture) {
    return null;
  }

  return (
    <>
      <Environment map={texture} />
      <mesh ref={sphereRef} scale={[-100, 100, 100]}>
        <sphereGeometry args={[1, 64, 32]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
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

// Fallback component without texture
export function BasicWorld({
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
        <meshBasicMaterial color="#595959" side={THREE.BackSide} />
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

export default WorldContentManual;
