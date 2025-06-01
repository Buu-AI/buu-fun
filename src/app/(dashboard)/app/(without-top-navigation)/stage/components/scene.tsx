import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSelectedModel } from "@/lib/redux/features/stage";
import { TransformControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState } from "react";
import { Group } from "three";
import Model from "./model";

// Main Scene Component
export default function ModelScene() {
  const models = useAppSelector((state) => state.stage.present.models);
  const [isDragging, setIsDragging] = useState(false);

  const dispatch = useAppDispatch();
  const [dragStartPosition, setDragStartPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const sceneRef = useRef<Group>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformControlsRef = useRef<any>(null);

  const { gl } = useThree();

  const selectedModel = useAppSelector(
    (state) => state.stage.present.selectedModel,
  );

  const handleCanvasClick = () => {
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
    dispatch(
      setSelectedModel({ id, polygonCount, transformModel: "translate" }),
    );
  };

  const handlePointerDown = useCallback(
    (e: PointerEvent) => {
      setIsDragging(false);
      setDragStartPosition({ x: e.clientX, y: e.clientY });
    },
    [setIsDragging, setDragStartPosition],
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (dragStartPosition) {
        const dx = Math.abs(e.clientX - dragStartPosition.x);
        const dy = Math.abs(e.clientY - dragStartPosition.y);

        // If moved more than a threshold, consider it dragging
        if (dx > 5 || dy > 5) {
          setIsDragging(true);
        }
      }
    },
    [dragStartPosition, setIsDragging],
  );

  const handlePointerUp = useCallback(() => {
    setDragStartPosition(null);
  }, [setDragStartPosition]);

  // Handle transform controls change events
  const handleTransformChange = () => {
    if (!transformControlsRef.current?.object) return;

    const object = transformControlsRef.current.object;

    // Find the transform change handler from the object's userData
    if (object.userData?.onTransformChange) {
      object.userData.onTransformChange();
    }
  };

  // Handle transform controls drag events
  const handleTransformDragStart = () => {
    setIsDragging(true);
  };

  const handleTransformDragEnd = () => {
    // Small delay to prevent immediate canvas click after drag end
    setTimeout(() => setIsDragging(false), 50);
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
  }, [
    gl.domElement,
    dragStartPosition,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  ]);

  // Get the selected object for transform controls
  const selectedObject = selectedModel?.id
    ? sceneRef.current?.children.find(
        (child) => child.userData?.id === selectedModel.id,
      )
    : null;

  return (
    <group ref={sceneRef} onClick={handleCanvasClick}>
      {/* Ambient light */}
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} intensity={5} />
      {/* Models */}
      {models.map((model, index) => (
        <Model
          key={`model-maps-${model.id}-${model.modelUrl}`}
          id={model.id}
          url={model.modelUrl}
          visible={model.visible}
          position={model.position}
          scale={model.scale}
          onSelect={handleObjectSelect}
          isSelected={selectedModel?.id === model.id}
          index={index}
        />
      ))}

      {/* Transform controls for selected objects */}
      {selectedObject && (
        <TransformControls
          ref={transformControlsRef}
          object={selectedObject}
          mode={selectedModel?.transformModel}
          onChange={handleTransformChange}
          onMouseDown={handleTransformDragStart}
          onMouseUp={handleTransformDragEnd}
        />
      )}
    </group>
  );
}
