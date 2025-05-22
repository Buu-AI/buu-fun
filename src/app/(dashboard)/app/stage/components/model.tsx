import { useAppDispatch } from "@/hooks/redux";
import { setPolygonCount } from "@/lib/redux/features/stage";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
export default function Model({
  url,
  position,
  onSelect,
  isSelected,
  index,
  id,
}: {
  id: string;
  url: string;
  isSelected: boolean;
  position: [number, number, number];
  onSelect: (data: { id: string; polygonCount: number }) => void;
  index: number;
}) {
  const { scene } = useGLTF(url, undefined, true);

  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [polyCount, setPolyCount] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.add(scene);
  });
  useEffect(() => {
    if (!scene) return;
    let totalPolygons = 0;
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        // Handle both single materials and array of materials
        if (child.geometry.index) {
          totalPolygons += child.geometry.index.count / 3;
        } else if (child.geometry.attributes.position) {
          totalPolygons += child.geometry.attributes.position.count / 3;
        }
        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => {
            mat.wireframe = isSelected;
          });
        } else {
          child.material.wireframe = isSelected;
        }
      }
      dispatch(setPolygonCount(totalPolygons));
      setPolyCount(Math.floor(totalPolygons));
    });
  }, [isSelected, scene]);
  return (
    <mesh
      ref={meshRef}
      position={position}
      userData={{ type: "selectable", id: id }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect({ id, polygonCount: polyCount });
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}
