import { useAppSelector } from "@/hooks/redux";
import { getX, getY, getZ } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CameraController() {
  const { camera } = useThree();
  const { position, fov } = useAppSelector(
    (state) => state.stage.present.camera
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
    camera.position.x = getX(position);
    camera.position.y = getY(position);
    camera.position.z = getZ(position);
    camera.updateProjectionMatrix();

    // Animate FOV if the camera is a PerspectiveCamera
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = fov;
      camera.updateProjectionMatrix();

      // timelineRef.current.to(
      //   camera,
      //   {
      //     fov: fov,
      //     duration: 1.2,
      //     ease: "power2.inOut",
      //     onUpdate: () => {
      //       camera.updateProjectionMatrix();
      //     },
      //   },
      //   0
      // ); // Start at the same time as position animation
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
