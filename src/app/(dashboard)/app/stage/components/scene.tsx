import { TransformControls } from "@react-three/drei";
import { ThreeEvent, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import {
  modelUrls as DEFAULT_MODEL_URL,
  modelData,
  TModel,
} from "../modelUrls";
import Model from "./model";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSelectedModel } from "@/lib/redux/features/stage";

// Main Scene Component

export default function ModelScene({
  modelUrls = modelData,
}: {
  modelUrls?: TModel;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useAppDispatch();
  const [dragStartPosition, setDragStartPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const sceneRef = useRef<Group>(null);
  const { gl } = useThree();
  const selectedModel = useAppSelector((state) => state.stage.selectedModel);
  const handleCanvasClick = (e: ThreeEvent<MouseEvent>) => {
    // Only unselect if it's a direct canvas click (not after dragging)
    if (!isDragging) {
      dispatch(setSelectedModel(null));
    }
  };

  const handleObjectSelect = ({
    id,
    polygonCount,
  }: {
    id: string;
    polygonCount: number;
  }) => {
    if (isDragging) return;
    dispatch(setSelectedModel({ id, polygonCount }));
  };

  const handlePointerDown = (e: PointerEvent) => {
    setIsDragging(false);
    setDragStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (dragStartPosition) {
      const dx = Math.abs(e.clientX - dragStartPosition.x);
      const dy = Math.abs(e.clientY - dragStartPosition.y);

      // If moved more than a threshold, consider it dragging
      if (dx > 5 || dy > 5) {
        setIsDragging(true);
      }
    }
  };

  const handlePointerUp = () => {
    setDragStartPosition(null);
  };

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
    };
  }, [gl.domElement, dragStartPosition]);
  return (
    <group ref={sceneRef} onClick={handleCanvasClick}>
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Models */}
      {modelUrls.map((model, index) => (
        <Model
          key={index}
          id={model.id}
          url={model.modelUrl}
          position={[index * 2 - 2, 0, 0]}
          onSelect={handleObjectSelect}
          isSelected={selectedModel?.id === model.id}
          index={index}
        />
      ))}

      {/* Transform controls for selected objects */}
      {selectedModel?.id ? (
        <TransformControls
          object={sceneRef.current?.children.find(
            (child) => child.userData?.id === selectedModel.id
          )}
          mode="translate"
        />
      ) : null}
    </group>
  );
}
