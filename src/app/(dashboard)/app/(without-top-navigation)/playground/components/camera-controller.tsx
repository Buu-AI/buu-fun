import { useAppSelector } from "@/hooks/redux";
import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CameraController() {
  const { camera } = useThree();
  const { position, fov } = useAppSelector(
    (state) => state.stage.present.camera,
  );

  // Keep track of animation timeline
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  useGSAP(() => {
    // Kill any existing animation to prevent conflicts
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create new timeline
    timelineRef.current = gsap.timeline();

    // Animate camera position
    timelineRef.current.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 0.4,
      ease: "power2.inOut",
      onUpdate: () => {
        // Ensure camera matrix is updated during animation
        camera.updateMatrixWorld();
      },
    });

    // Animate FOV if the camera is a PerspectiveCamera
    if (camera instanceof THREE.PerspectiveCamera) {
      timelineRef.current.to(
        camera,
        {
          fov: fov,
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        },
        0.1,
      ); // Start at the same time as position animation
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [position, fov, camera]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return null;
}
