"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import type { PackedSplats } from "@sparkjsdev/spark";
import type { PerspectiveCamera as PerspectiveCameraType } from "three";
import { Vector3 } from "three";
import { SplatTransition } from "./splat-transition";

interface SplatRendererProps {
  lowResSplat: PackedSplats | null;
  highResSplat: PackedSplats | null;
}

function ResizeHandler({ splatLoaded }: { splatLoaded: boolean }) {
  const { gl, camera, invalidate } = useThree();
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Get actual container dimensions from the DOM
  const updateSize = useCallback(() => {
    const container = gl.domElement.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    if (width > 0 && height > 0) {
      gl.setSize(width, height, false);
      if ("aspect" in camera) {
        (camera as PerspectiveCameraType).aspect = width / height;
        camera.updateProjectionMatrix();
      }
      invalidate();
    }
  }, [gl, camera, invalidate]);

  // Set up ResizeObserver to watch container dimensions
  useEffect(() => {
    const container = gl.domElement.parentElement;
    if (!container) return;

    resizeObserverRef.current = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserverRef.current.observe(container);

    // Initial size update after mount
    updateSize();

    // Additional delayed updates to handle modal animations
    const timeouts = [
      setTimeout(updateSize, 50),
      setTimeout(updateSize, 150),
      setTimeout(updateSize, 300),
    ];

    return () => {
      resizeObserverRef.current?.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [gl, updateSize]);

  // Also update when splat loads (content might affect layout)
  useEffect(() => {
    if (splatLoaded) {
      updateSize();
      // Small delay to ensure Three.js has processed the splat
      const timeout = setTimeout(updateSize, 50);
      return () => clearTimeout(timeout);
    }
  }, [splatLoaded, updateSize]);

  return null;
}

const MOVE_SPEED = 1;

function FPSControls() {
  const { camera } = useThree();
  const moveState = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

  // Reusable vectors to avoid allocations every frame
  const direction = useRef(new Vector3());
  const frontVector = useRef(new Vector3());
  const sideVector = useRef(new Vector3());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          moveState.current.forward = true;
          break;
        case "KeyS":
          moveState.current.backward = true;
          break;
        case "KeyA":
          moveState.current.left = true;
          break;
        case "KeyD":
          moveState.current.right = true;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          moveState.current.up = true;
          break;
        case "ControlLeft":
        case "ControlRight":
          moveState.current.down = true;
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyW":
          moveState.current.forward = false;
          break;
        case "KeyS":
          moveState.current.backward = false;
          break;
        case "KeyA":
          moveState.current.left = false;
          break;
        case "KeyD":
          moveState.current.right = false;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          moveState.current.up = false;
          break;
        case "ControlLeft":
        case "ControlRight":
          moveState.current.down = false;
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    const speed = MOVE_SPEED * delta;
    const dir = direction.current;
    const front = frontVector.current;
    const side = sideVector.current;

    // Reset direction
    dir.set(0, 0, 0);

    // Get camera's forward direction (where it's looking)
    camera.getWorldDirection(front);
    front.y = 0;
    front.normalize();

    // Get camera's right direction
    side.crossVectors(front, camera.up).normalize();

    // Forward/backward (W/S)
    if (moveState.current.forward) {
      dir.add(front);
    }
    if (moveState.current.backward) {
      dir.sub(front);
    }

    // Left/right (A/D)
    if (moveState.current.right) {
      dir.add(side);
    }
    if (moveState.current.left) {
      dir.sub(side);
    }

    // Up/down (Shift/Control)
    if (moveState.current.up) {
      dir.y += 1;
    }
    if (moveState.current.down) {
      dir.y -= 1;
    }

    // Normalize to prevent faster diagonal movement, then apply speed
    if (dir.length() > 0) {
      dir.normalize().multiplyScalar(speed);
      camera.position.add(dir);
    }
  });

  return null;
}

const SplatRenderer: React.FC<SplatRendererProps> = ({
  lowResSplat,
  highResSplat,
}) => {
  const splatLoaded = lowResSplat !== null || highResSplat !== null;

  return (
    <>
      <ResizeHandler splatLoaded={splatLoaded} />
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <PointerLockControls makeDefault />
      <FPSControls />
      <SplatTransition
        lowResSplats={lowResSplat}
        highResSplats={highResSplat}
      />
    </>
  );
};

export default SplatRenderer;
