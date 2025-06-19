import { Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// Types
interface LoaderProps {
  message?: string;
  particleCount?: number;
  mainColor?: string;
  accentColor?: string;
  size?: number;
}

interface FloatingParticleProps {
  index: number;
  total: number;
  color?: string;
  radius?: number;
}

interface AnimatedTorusProps {
  onHover?: (hovered: boolean) => void;
  size?: number;
  color?: string;
  hoverColor?: string;
}

// Enhanced animated torus with better performance
const AnimatedTorus: React.FC<AnimatedTorusProps> = ({
  onHover,
  size = 1,
  color = "#4ecdc4",
  hoverColor = "#ff6b6b",
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = Math.sin(time * 2) * 0.3;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z = Math.sin(time * 1.5) * 0.1;
      meshRef.current.position.y = Math.sin(time * 3) * 0.15;

      // Smooth scale animation
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1,
      );
    }

    // Animate material properties
    if (materialRef.current) {
      materialRef.current.emissiveIntensity =
        0.1 + Math.sin(state.clock.elapsedTime * 4) * 0.05;
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    onHover?.(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover?.(false);
  };

  return (
    <mesh
      ref={meshRef}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <torusGeometry args={[size, size * 0.3, 16, 100]} />
      <meshStandardMaterial
        ref={materialRef}
        color={hovered ? hoverColor : color}
        wireframe
        transparent
        opacity={0.8}
        emissive={hovered ? hoverColor : color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

// Enhanced floating particle with varied shapes and behaviors
const FloatingParticle: React.FC<FloatingParticleProps> = ({
  index,
  total,
  color = "#ffd93d",
  radius = 2.5,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Memoize particle properties for performance
  const particleProps = useMemo(() => {
    const angle = (index / total) * Math.PI * 2;
    const speed = 0.5 + Math.random() * 0.5;
    const size = 0.08 + Math.random() * 0.04;
    const offsetY = (Math.random() - 0.5) * 0.5;
    const shape = Math.random() > 0.5 ? "box" : "sphere";

    return { angle, speed, size, offsetY, shape };
  }, [index, total]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const { angle, speed, offsetY } = particleProps;

      // Orbital motion with variation
      meshRef.current.position.x = Math.cos(angle + time * speed) * radius;
      meshRef.current.position.z = Math.sin(angle + time * speed) * radius;
      meshRef.current.position.y = Math.sin(time * 2 + index) * 0.6 + offsetY;

      // Rotation
      meshRef.current.rotation.x = time * (speed * 0.5);
      meshRef.current.rotation.y = time * speed;
      meshRef.current.rotation.z = time * (speed * 0.3);

      // Pulsing scale
      const scale = 1 + Math.sin(time * 3 + index) * 0.2;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const geometry =
    particleProps.shape === "box" ? (
      <boxGeometry
        args={[particleProps.size, particleProps.size, particleProps.size]}
      />
    ) : (
      <sphereGeometry args={[particleProps.size, 8, 8]} />
    );

  return (
    <mesh ref={meshRef}>
      {geometry}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

// Progress ring component
const ProgressRing: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ringRef.current) {
      // Animate the ring based on progress
      ringRef.current.rotation.z = -Math.PI * 0.5 + progress * Math.PI * 2;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -0.1]}>
      <ringGeometry args={[1.4, 1.5, 32]} />
      <meshStandardMaterial
        color="#61dafb"
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Main Loader component
const Loader: React.FC<LoaderProps> = ({
  message = "Loading Model...",
  particleCount = 12,
  mainColor = "#4ecdc4",
  accentColor = "#ff6b6b",
  size = 1,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    setProgress(Math.min((elapsed % 8) / 8, 1)); // 8 second cycle
  });

  // Memoize particles array for performance
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }, (_, i) => (
        <FloatingParticle
          key={i}
          index={i}
          total={particleCount}
          color={isHovered ? accentColor : "#ffd93d"}
          radius={2.5 + Math.sin(i) * 0.5}
        />
      )),
    [particleCount, isHovered, accentColor],
  );

  return (
    <group>
      {/* Background glow effect */}
      <mesh position={[0, 0, -2]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial
          color={mainColor}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Progress ring */}
      <ProgressRing progress={progress} />

      {/* Main animated torus */}
      <AnimatedTorus
        onHover={setIsHovered}
        size={size}
        color={mainColor}
        hoverColor={accentColor}
      />

      {/* Loading text with dynamic color */}
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.4}
        color={isHovered ? accentColor : "#ffffff"}
        anchorX="center"
        anchorY="middle"
      >
        {message}
      </Text>

      {/* Progress text */}
      <Text
        position={[0, -3.2, 0]}
        fontSize={0.25}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
      >
        {Math.round(progress * 100)}%
      </Text>

      {/* Floating particles */}
      {particles}

      {/* Additional ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight
        position={[0, 0, 5]}
        intensity={0.5}
        color={mainColor}
        distance={10}
        decay={2}
      />
    </group>
  );
};

// Example usage component
const LoaderScene: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#1a1a1a" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <Loader
            message="Loading 3D Model..."
            particleCount={16}
            mainColor="#61dafb"
            accentColor="#ff6b6b"
            size={1.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Loader;
export { LoaderScene };
