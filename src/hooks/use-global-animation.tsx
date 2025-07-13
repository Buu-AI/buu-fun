import { GLOBE_CONFIG } from "@/components/(home)/loading/position-generator";
import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { RefObject, useRef } from "react";
import { Group } from "three";

export const useGlobeAnimations = (
  groupRef: RefObject<Group | null>,
  finishedLoading: boolean,
) => {
  const { camera } = useThree();
  const isAnimationRan = useRef(false);

  useGSAP(() => {
    if (!finishedLoading || isAnimationRan.current || !groupRef.current) return;

    isAnimationRan.current = true;
    const tl = gsap.timeline();

    // Camera animation
    tl.to(camera.position, {
      z: GLOBE_CONFIG.camera.targetZ,
      duration: GLOBE_CONFIG.camera.animationDuration,
      ease: "power2.inOut",
    });

    // Group rotation animation
    tl.to(
      groupRef.current.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 3.5,
        ease: "power3.out",
      },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, [finishedLoading, camera, groupRef]);
};
