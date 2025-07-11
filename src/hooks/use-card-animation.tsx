import { GLOBE_CONFIG, Position3D, PositionGenerator } from "@/components/(home)/loading/position-generator";
import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { RefObject } from "react";
import { Mesh } from "three";

export const useCardAnimations = (
  meshRef: RefObject<Mesh | null>,
  finishedLoading: boolean,
  index: number,
  initialPosition: Position3D
) => {
  // Continuous rotation during loading
  useFrame(() => {
    if (!meshRef.current || finishedLoading) return;
    
    const { rotation } = GLOBE_CONFIG.animationSpeed;
    meshRef.current.rotation.x += rotation.x;
    meshRef.current.rotation.y += rotation.y;
    meshRef.current.rotation.z += rotation.z;
  });

  // Final positioning animation
  useGSAP(() => {
    if (!meshRef.current || !finishedLoading) return;

    const mesh = meshRef.current;
    const layout = PositionGenerator.getLayoutByIndex(index);
    const { animation } = GLOBE_CONFIG.cards;

    const tl = gsap.timeline();

    // Reset rotation
    tl.to(mesh.rotation, {
      x: 0,
      y: 0,
      z: 0,
      duration: animation.duration,
      ease: animation.ease,
    });

    // Animate to final position and rotation
    tl.to(
      mesh.position,
      {
        x: layout.position.x,
        y: layout.position.y,
        z: layout.position.z,
        duration: animation.duration,
        ease: animation.ease,
      },
      "<"
    );

    tl.to(
      mesh.rotation,
      {
        x: layout.rotation.x,
        y: layout.rotation.y,
        z: layout.rotation.z,
        duration: animation.duration,
        ease: animation.ease,
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, [finishedLoading, index, initialPosition]);
};
