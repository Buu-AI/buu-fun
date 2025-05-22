import { useRef, useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { TransformControls } from "@react-three/drei";
import { Object3D, SpotLight, DirectionalLight } from "three";
import { LightConfig } from "./lights-item";

interface LightControlProps {
  light: LightConfig;
  lightRef: React.RefObject<SpotLight | DirectionalLight>;
  onPositionChange?: (position: [number, number, number]) => void;
  onTargetChange?: (target: [number, number, number]) => void;
}

export function LightControl({
  light,
  lightRef,
  onPositionChange,
  onTargetChange,
}: LightControlProps) {
  const { camera, scene } = useThree();
  const transformRef = useRef<any>(null);
  const targetRef = useRef<Object3D>(new Object3D());
  const [mode, setMode] = useState<"translate" | "rotate">("translate");
  const [controlTarget, setControlTarget] = useState<"light" | "target">(
    "light"
  );

  // Initialize target helper position
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.position.set(
        light.target[0],
        light.target[1],
        light.target[2]
      );
    }
  }, [light.target]);

  // Update light position when transform control moves
  useEffect(() => {
    if (!transformRef.current) return;

    const handleObjectChange = () => {
      if (controlTarget === "light" && lightRef.current && onPositionChange) {
        const newPos: [number, number, number] = [
          lightRef.current.position.x,
          lightRef.current.position.y,
          lightRef.current.position.z,
        ];
        onPositionChange(newPos);
      } else if (
        controlTarget === "target" &&
        targetRef.current &&
        onTargetChange
      ) {
        const newTarget: [number, number, number] = [
          targetRef.current.position.x,
          targetRef.current.position.y,
          targetRef.current.position.z,
        ];
        onTargetChange(newTarget);

        // Also update the light's target position
        if (lightRef.current) {
          lightRef.current.target.position.copy(targetRef.current.position);
        }
      }
    };

    transformRef.current.addEventListener("objectChange", handleObjectChange);
    return () => {
      transformRef.current?.removeEventListener(
        "objectChange",
        handleObjectChange
      );
    };
  }, [lightRef, onPositionChange, onTargetChange, controlTarget]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle between translate and rotate modes
      if (e.key === "r") {
        setMode((prev) => (prev === "translate" ? "rotate" : "translate"));
      }

      // Toggle between controlling light position and target
      if (e.key === "t") {
        setControlTarget((prev) => (prev === "light" ? "target" : "light"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Transform controls for the light */}
      {controlTarget === "light" && lightRef.current && (
        <TransformControls
          ref={transformRef}
          object={lightRef.current}
          mode={mode}
          size={0.75}
        />
      )}

      {/* Transform controls for the target */}
      {controlTarget === "target" && (
        <>
          <TransformControls
            ref={transformRef}
            object={targetRef.current}
            mode={mode}
            size={0.75}
          />
          <primitive object={targetRef.current}>
            <mesh>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshBasicMaterial color="yellow" wireframe />
            </mesh>
          </primitive>
        </>
      )}
    </>
  );
}
