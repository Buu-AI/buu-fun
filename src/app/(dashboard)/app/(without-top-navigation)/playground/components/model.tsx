"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useDebounce } from "@/hooks/use-debouce";
import { updateModel } from "@/lib/redux/features/stage"; // Import your updateModel action
import { TVector3 } from "@/types/stage/objects";

import { useGLTF } from "@react-three/drei";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Debounce utility

export default function Model({
  url,
  position,
  onSelect,
  isSelected,
  id,
  scale,
  visible,
}: {
  id: string;
  url: string;
  isSelected: boolean;
  position: TVector3;
  scale: TVector3;
  visible: boolean;
  onSelect: (data: { id: string; polygonCount: number }) => void;
  index: number;
}) {
  const { scene } = useGLTF(url);
  const primitiveRef = useRef<THREE.Group>(null);
  const [polyCount, setPolyCount] = useState(0);
  const [clonedScene, setClonedScene] = useState<THREE.Group | null>(null);
  const dispatch = useAppDispatch();

  // Get the current model data from Redux to detect external updates
  const currentModel = useAppSelector((state) =>
    state.stage.present.models.find((m) => m.id === id),
  );

  // Track if position is being updated internally (from transform controls)
  const isInternalUpdate = useRef(false);

  // Debounced function to update Redux store
  const debouncedUpdatePosition = useDebounce(
    useCallback(
      (newPosition: TVector3, newRotation?: TVector3, newScale?: TVector3) => {
        dispatch(
          updateModel({
            id,
            position: newPosition,
            rotation: newRotation,
            scale: newScale,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, id],
    ),
    500, // 500ms debounce delay
  );

  // Effect to sync Redux position changes to the primitive (external updates)
  useEffect(() => {
    if (!primitiveRef.current || !currentModel || isInternalUpdate.current)
      return;

    const primitive = primitiveRef.current;
    const reduxPosition = currentModel.position;
    const reduxScale = currentModel.scale;
    const reduxRotation = currentModel.rotation;

    // Check if position needs to be updated
    if (
      primitive.position.x !== reduxPosition[0] ||
      primitive.position.y !== reduxPosition[1] ||
      primitive.position.z !== reduxPosition[2]
    ) {
      primitive.position.set(
        reduxPosition[0],
        reduxPosition[1],
        reduxPosition[2],
      );
    }

    // Check if scale needs to be updated
    if (
      primitive.scale.x !== reduxScale[0] ||
      primitive.scale.y !== reduxScale[1] ||
      primitive.scale.z !== reduxScale[2]
    ) {
      primitive.scale.set(reduxScale[0], reduxScale[1], reduxScale[2]);
    }

    // Check if rotation needs to be updated (if you have rotation in your model)
    if (
      reduxRotation &&
      (primitive.rotation.x !== reduxRotation[0] ||
        primitive.rotation.y !== reduxRotation[1] ||
        primitive.rotation.z !== reduxRotation[2])
    ) {
      primitive.rotation.set(
        reduxRotation[0],
        reduxRotation[1],
        reduxRotation[2],
      );
    }
  }, [
    currentModel?.position,
    currentModel?.scale,
    currentModel?.rotation,
    currentModel,
  ]);

  // Function to handle position changes from transform controls
  const handleTransformChange = useCallback(() => {
    if (!primitiveRef.current) return;

    const primitive = primitiveRef.current;
    isInternalUpdate.current = true;

    const newPosition: TVector3 = [
      primitive.position.x,
      primitive.position.y,
      primitive.position.z,
    ];

    const newScale: TVector3 = [
      primitive.scale.x,
      primitive.scale.y,
      primitive.scale.z,
    ];

    const newRotation: TVector3 = [
      primitive.rotation.x,
      primitive.rotation.y,
      primitive.rotation.z,
    ];

    // Debounced update to Redux
    debouncedUpdatePosition(newPosition, newRotation, newScale);
  }, [debouncedUpdatePosition]);

  useEffect(() => {
    if (!scene) return;

    // Clone the scene to avoid sharing the same object between multiple instances
    const sceneClone = scene.clone();
    setClonedScene(sceneClone);
  }, [scene]);

  useEffect(() => {
    if (!clonedScene) return;

    let totalPolygons = 0;

    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        // Handle both single materials and array of materials
        if (child.geometry.index) {
          totalPolygons += child.geometry.index.count / 3;
        } else if (child?.geometry?.attributes?.position) {
          totalPolygons += child.geometry.attributes.position.count / 3;
        }

        // Clone materials to avoid affecting other instances
        if (Array.isArray(child.material)) {
          child.material = child.material.map((mat) => {
            const newMat = mat.clone();
            // Force standard material for proper lighting
            if (newMat.type === "MeshBasicMaterial") {
              const standardMat = new THREE.MeshStandardMaterial();
              standardMat.copy(newMat);
              standardMat.wireframe = isSelected;
              return standardMat;
            }
            newMat.wireframe = isSelected;
            return newMat;
          });
        } else {
          let newMat = child.material.clone();
          if (newMat.type === "MeshBasicMaterial") {
            const standardMat = new THREE.MeshStandardMaterial();
            standardMat.copy(newMat);
            standardMat.wireframe = isSelected;
            newMat = standardMat;
          }
          child.material = newMat;
        }
      }
    });

    setPolyCount(Math.floor(totalPolygons));
  }, [isSelected, clonedScene]);

  if (!clonedScene) return null;

  return (
    <primitive
      ref={primitiveRef}
      object={clonedScene}
      position={position}
      scale={scale}
      visible={visible}
      userData={{
        type: "selectable",
        id: id,
        onTransformChange: handleTransformChange,
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick={(e: any) => {
        e.stopPropagation();
        onSelect({ id, polygonCount: polyCount });
      }}
    />
  );
}
