"use client";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { Group } from "three";
import ImageCard from "./card/image-card";
import { imageUrls } from "./image-data";

export default function ImageGlobeV3({
  finishedLoading,
}: {
  finishedLoading: boolean;
}) {
  const groupRef = useRef<Group>(null);
  const { camera } = useThree();
  const isAnimationRan = useRef(false);

  // Set up animations when finishedLoading changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (finishedLoading && !isAnimationRan.current && groupRef.current) {
        isAnimationRan.current = true;
        // Animate the camera to move inside the sphere
        gsap.to(camera.position, {
          z: 5, // Move camera to the center of the sphere
          duration: 3,
          ease: "power2.inOut",
        });

        // Smoothly transition the rotation to zero
        gsap.to(groupRef.current?.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 3.5,
          ease: "power3.out",
          onComplete: () => {
            if (!groupRef.current) return;
            gsap.to(groupRef.current.rotation, {
              z: 0,
              duration: 4, // Slower easing for a smooth stop
              ease: "power4.out",
            });
          },
        });
      }
    });
    return () => {
      ctx.revert();
    };
  }, [finishedLoading, camera]);

  // Use useFrame only for continuous updates before loading is finished
  useFrame(() => {
    if (!groupRef.current || finishedLoading) return;
    // Apply continuous rotation only when not finished loading
    groupRef.current.rotation.x += 0.003;
    groupRef.current.rotation.y += 0.008;
    // Uncomment if you want z-rotation too
    // groupRef.current.rotation.z += 0.005;
    // groupRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.006;
  });

  const images = useMemo(
    () =>
      imageUrls.map((item, index) => (
        <ImageCard
          finishedLoading={finishedLoading}
          key={`${index}-${item}`}
          index={index}
          imageUrl={item}
          total={imageUrls.length}
        />
      )),
    [finishedLoading],
  );

  return <group ref={groupRef}>{images}</group>;
}
