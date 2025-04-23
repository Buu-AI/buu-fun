import { RectangleRounded } from "@/lib/helpers/threejs/rectangle-rounded";
import { getCachedTexture } from "@/lib/home/utils";
import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useMemo, useRef } from "react";
import { DoubleSide, Mesh } from "three";
import { getPositionByIndex, getRotationByIndex } from "./get-positions";
gsap.registerPlugin(useGSAP);
export default function ImageCard({
  finishedLoading,
  total,
  imageUrl,
  index,
}: {
  index: number;
  finishedLoading: boolean;
  total: number;
  imageUrl: string;
}) {
  const meshRef = useRef<Mesh>(null);

  const texture = useMemo(() => {
    return getCachedTexture(imageUrl);
  }, [imageUrl]);

  const radius = 8; // Increased from 6 to create more space between cards
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  // Calculate positions with slight offset to ensure cards aren't perfectly centered
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi) + 0.5; // Small offset to avoid center congestion
  useFrame(() => {
    if (!meshRef.current) return;

    if (!finishedLoading) {
      meshRef.current.rotation.z += 0.01;
      //   meshRef.current.rotation.x -= 0.08;
      meshRef.current.rotation.y -= 0.05;
    } else {
    }
  });
  useGSAP(() => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;

    const ctx = gsap.context(() => {
      if (finishedLoading) {
        // Reset rotation for all cards
        gsap.to(mesh.rotation, {
          z: 0,
          x: 0,
          y: 0,
          duration: 3,
          ease: "power2.inOut",
        });

        // Calculate new positions for the spread effect
        let targetX = x,
          targetY = y,
          targetZ = z;
        let rotationX = 0,
          rotationY = 0,
          rotationZ = 0;
        // const spreadFactor = 1.5; // Adjust this to control how far cards spread

        // Different positioning logic based on card position
        const position = getPositionByIndex(index);
        const rotation = getRotationByIndex(index);
        if (z < -1) {
          // Cards in the back (negative z)
          targetX = position.x;
          targetY = position.y;
          targetZ = position.z;
          rotationX = rotation.x;
          rotationZ = rotation.y;
          rotationY = rotation.z;
        } else if (z > 3) {
          // Cards in the front (positive z)
          //   targetX *= spreadFactor;
          //   targetY *= spreadFactor;
          //   targetZ = z * 1.2; // Push further forward
        } else {
          // Cards in the middle
          //   targetX *= spreadFactor * 1.3;
          //   targetY *= spreadFactor * 1.3;
        }

        // Animate to new positions
        gsap.to(mesh.position, {
          x: targetX,
          y: targetY,
          z: targetZ,
          duration: 2.8,
          //   delay: index * 3, // Stagger based on index
          ease: "power3.out",
        });
        gsap.to(mesh.rotation, {
          x: rotationX,
          y: rotationY,
          z: rotationZ,
          duration: 3,
          //   delay: index * 3, // Stagger based on index
          ease: "power3.out",
        });
      }
    }, [meshRef, finishedLoading]);

    return () => {
      ctx.revert();
    };
  }, [finishedLoading, meshRef, x, y, z, index]);
  return (
    <mesh
      ref={meshRef}
      position={[x, y, z]}
      geometry={RectangleRounded(1.6, 2, 0.2, 10)}
      lookAt={[0, 0, 0]} // Make cards face the center
    >
      <meshStandardMaterial
        map={texture}
        side={DoubleSide}
        transparent
        opacity={1}
        emissive={0x444444} // Add slight glow
        emissiveIntensity={0.002}
        // blending={2}
      />
    </mesh>
  );
}
