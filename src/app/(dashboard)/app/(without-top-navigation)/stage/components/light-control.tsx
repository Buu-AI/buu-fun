import { TVector3 } from "@/types/stage/objects";
import { TransformControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DirectionalLight, Object3D, SpotLight } from "three";
import { LightConfig } from "./lights-item";

interface LightControlProps {
  light: LightConfig;
  lightRef: React.RefObject<SpotLight | DirectionalLight>;
  onPositionChange?: (position: TVector3) => void;
  onTargetChange?: (target: TVector3) => void;
}

export function LightControl({
  light,
  lightRef,
  onPositionChange,
  onTargetChange,
}: LightControlProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformRef = useRef<any>(null);
  const targetRef = useRef<Object3D>(new Object3D());
  const [mode, setMode] = useState<"translate" | "rotate">("translate");
  const [controlTarget, setControlTarget] = useState<"light" | "target">(
    "light",
  );

  // Initialize target helper position
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.position.set(
        light.target[0],
        light.target[1],
        light.target[2],
      );
    }
  }, [light.target]);

  // Update light position when transform control moves
  useEffect(() => {
    const transform = transformRef.current;
    if (!transform) return;

    const handleObjectChange = () => {
      if (controlTarget === "light" && lightRef.current && onPositionChange) {
        const newPos: TVector3 = [
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
        const newTarget: TVector3 = [
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

    transform.addEventListener("objectChange", handleObjectChange);
    return () => {
      transform?.removeEventListener("objectChange", handleObjectChange);
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
