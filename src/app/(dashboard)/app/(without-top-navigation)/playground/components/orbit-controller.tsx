import { useAppDispatch } from "@/hooks/redux";
import { updateCamera, updateFov } from "@/lib/redux/features/stage";
import { TVector3 } from "@/types/stage/objects";
import { OrbitControls as ControlOrbit } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { Event } from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export default function OrbitController() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const dispatch = useAppDispatch();

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedDispatch = useCallback(
    (position: TVector3, fov: number) => {
      // Clear existing timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      // Set new timeout
      debounceTimeoutRef.current = setTimeout(() => {
        dispatch(updateCamera({ position }));
        dispatch(updateFov(fov));
      }, 400);
    },
    [dispatch],
  );
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    function handleOrbit(e: Event<"change", OrbitControlsImpl>) {
      const object = e.target.object;

      const fov = "fov" in object ? object.fov : 60;

      const position: TVector3 = [
        object.position.x,
        object.position.y,
        object.position.z,
      ];

      debouncedDispatch(position, fov);
    }

    controls.addEventListener("change", handleOrbit);
    return () => {
      controls.removeEventListener("change", handleOrbit);
    };
  });

  return (
    <>
      <ControlOrbit
        ref={controlsRef}
        makeDefault
        target={0}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={50}
        maxPolarAngle={Math.PI / 2}
        // minDistance={0.1}
      />
    </>
  );
}
