"use client";

import { SplatMesh } from "@sparkjsdev/spark";
import { useThree } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import type { PackedSplats } from "@sparkjsdev/spark";

interface SplatTransitionProps {
  lowResSplats: PackedSplats | null;
  highResSplats: PackedSplats | null;
  visible?: boolean;
}

export const SplatTransition: React.FC<SplatTransitionProps> = ({
  lowResSplats,
  highResSplats,
  visible = true,
}) => {
  const { size } = useThree();
  const [lowResMesh, setLowResMesh] = useState<SplatMesh | null>(null);
  const [highResMesh, setHighResMesh] = useState<SplatMesh | null>(null);

  // Manage low-res mesh lifecycle
  useEffect(() => {
    if (!lowResSplats) {
      setLowResMesh(null);
      return;
    }

    const mesh = new SplatMesh({ packedSplats: lowResSplats });
    mesh.rotation.x = Math.PI;
    mesh.position.set(0, 0, 0);
    setLowResMesh(mesh);

    return () => {
      mesh.dispose();
    };
  }, [lowResSplats]);

  // Manage high-res mesh lifecycle
  useEffect(() => {
    if (!highResSplats) {
      setHighResMesh(null);
      return;
    }

    const mesh = new SplatMesh({ packedSplats: highResSplats });
    mesh.rotation.x = Math.PI;
    mesh.position.set(0, 0, 0);
    setHighResMesh(mesh);

    return () => {
      mesh.dispose();
    };
  }, [highResSplats]);

  // Update on viewport resize
  useEffect(() => {
    lowResMesh?.updateGenerator();
    highResMesh?.updateGenerator();
  }, [size.width, size.height, lowResMesh, highResMesh]);

  // Determine visibility
  const showHighRes = highResMesh !== null;
  const showLowRes = !showHighRes && lowResMesh !== null;

  return (
    <>
      {lowResMesh && (
        <primitive object={lowResMesh} visible={visible && showLowRes} />
      )}
      {highResMesh && (
        <primitive object={highResMesh} visible={visible && showHighRes} />
      )}
    </>
  );
};
