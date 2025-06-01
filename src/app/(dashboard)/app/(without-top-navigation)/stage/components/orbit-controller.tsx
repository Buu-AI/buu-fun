import { updateCamera, updateFov } from "@/lib/redux/features/stage";
import { TVector3 } from "@/types/stage/objects";
import { OrbitControls as COrbitControls } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export default function OrbitController() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const dispatch = useDispatch();
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
      }, 100);
    },
    [dispatch],
  );

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const handleChange = () => {
      const camera = controls.object;

      const fov = "fov" in camera ? camera.fov : 60;

      const position: TVector3 = [
        camera.position.x,
        camera.position.y,
        camera.position.z,
      ];

      debouncedDispatch(position, fov);
    };

    controls.addEventListener("change", handleChange);

    return () => {
      controls.removeEventListener("change", handleChange);
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [debouncedDispatch]);

  return (
    <>
      <COrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={50}
        maxPolarAngle={Math.PI / 2}
        minDistance={0.1}
      />
    </>
  );
}
