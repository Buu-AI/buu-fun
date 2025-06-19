import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useDebounce } from "@/hooks/use-debouce";
import { setSelectedLights, updateLights } from "@/lib/redux/features/stage";
import { TLightConfig, TVector3 } from "@/types/stage/objects";
import { TransformControls } from "@react-three/drei";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Individual light components
function DirectionalLight({
  light,
  isSelected,
  onSelect,
}: {
  light: TLightConfig;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const helperRef = useRef<THREE.DirectionalLightHelper>(null);
  const targetRef = useRef<THREE.Object3D>(null);
  const dispatch = useAppDispatch();

  // Track if properties are being updated internally (from transform controls)
  const isInternalUpdate = useRef(false);

  // Get the current light data from Redux to detect external updates
  const currentLight = useAppSelector((state) =>
    state.stage.present.lights.find((l) => l.id === light.id),
  );

  // Debounced functions to update Redux store
  const debouncedUpdatePosition = useDebounce(
    useCallback(
      (newPosition: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            position: newPosition,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  const debouncedUpdateRotation = useDebounce(
    useCallback(
      (rotation: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            rotation: rotation,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  const debouncedUpdateScale = useDebounce(
    useCallback(
      (scale: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            scale: scale,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  const debouncedUpdateTarget = useDebounce(
    useCallback(
      (target: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            target: target,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  // Function to handle transform changes
  const handleTransformChange = useCallback(() => {
    if (!lightRef.current) return;

    const lightObject = lightRef.current;
    isInternalUpdate.current = true;

    const newPosition: TVector3 = [
      lightObject.position.x,
      lightObject.position.y,
      lightObject.position.z,
    ];

    const newRotation: TVector3 = [
      lightObject.rotation.x,
      lightObject.rotation.y,
      lightObject.rotation.z,
    ];

    const newScale: TVector3 = [
      lightObject.scale.x,
      lightObject.scale.y,
      lightObject.scale.z,
    ];

    // Update position, rotation, and scale
    debouncedUpdatePosition(newPosition);
    debouncedUpdateRotation(newRotation);
    debouncedUpdateScale(newScale);

    // Handle target for directional light
    if (lightObject.target && targetRef.current) {
      const targetPosition: TVector3 = [
        lightObject.target.position.x,
        lightObject.target.position.y,
        lightObject.target.position.z,
      ];
      debouncedUpdateTarget(targetPosition);
    }
  }, [
    debouncedUpdatePosition,
    debouncedUpdateRotation,
    debouncedUpdateScale,
    debouncedUpdateTarget,
  ]);

  // Effect to sync Redux changes to the light (external updates)
  useEffect(() => {
    if (!lightRef.current || !currentLight || isInternalUpdate.current) return;

    const lightObject = lightRef.current;

    // Update position
    const reduxPosition = currentLight.position;
    if (
      lightObject.position.x !== reduxPosition[0] ||
      lightObject.position.y !== reduxPosition[1] ||
      lightObject.position.z !== reduxPosition[2]
    ) {
      lightObject.position.set(
        reduxPosition[0],
        reduxPosition[1],
        reduxPosition[2],
      );
    }

    // Update rotation
    if (currentLight.rotation) {
      const reduxRotation = currentLight.rotation;
      if (
        lightObject.rotation.x !== reduxRotation[0] ||
        lightObject.rotation.y !== reduxRotation[1] ||
        lightObject.rotation.z !== reduxRotation[2]
      ) {
        lightObject.rotation.set(
          reduxRotation[0],
          reduxRotation[1],
          reduxRotation[2],
        );
      }
    }

    // Update scale
    if (currentLight.scale) {
      const reduxScale = currentLight.scale;
      if (
        lightObject.scale.x !== reduxScale[0] ||
        lightObject.scale.y !== reduxScale[1] ||
        lightObject.scale.z !== reduxScale[2]
      ) {
        lightObject.scale.set(reduxScale[0], reduxScale[1], reduxScale[2]);
      }
    }

    // Update target for directional light
    if (currentLight.target && lightObject.target) {
      const reduxTarget = currentLight.target;
      if (
        lightObject.target.position.x !== reduxTarget[0] ||
        lightObject.target.position.y !== reduxTarget[1] ||
        lightObject.target.position.z !== reduxTarget[2]
      ) {
        lightObject.target.position.set(
          reduxTarget[0],
          reduxTarget[1],
          reduxTarget[2],
        );
      }
    }

    // Update other properties
    if (lightObject.intensity !== currentLight.intensity) {
      lightObject.intensity = currentLight.intensity;
    }
    if (
      lightObject.color.getHex() !==
      new THREE.Color(currentLight.color).getHex()
    ) {
      lightObject.color.set(currentLight.color);
    }
    if (lightObject.visible !== currentLight.visible) {
      lightObject.visible = currentLight.visible;
    }
    if (lightObject.castShadow !== currentLight.castShadow) {
      lightObject.castShadow = currentLight.castShadow ?? false;
    }
  }, [currentLight]);

  // Update helper when properties change
  useEffect(() => {
    if (lightRef.current && helperRef.current) {
      helperRef.current.update();
    }
  }, [
    light.position,
    light.rotation,
    light.intensity,
    light.color,
    light.target,
  ]);

  // Set up light target
  useEffect(() => {
    if (lightRef.current && light.target) {
      if (!targetRef.current) {
        targetRef.current = new THREE.Object3D();
      }
      targetRef.current.position.set(
        light.target[0],
        light.target[1],
        light.target[2],
      );
      lightRef.current.target = targetRef.current;
    }
  }, [light.target]);

  // Add transform change handler to userData
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.userData = {
        ...lightRef.current.userData,
        type: "selectable",
        id: light.id,
        onTransformChange: handleTransformChange,
      };
    }
  }, [handleTransformChange, light.id]);

  return (
    <group>
      <directionalLight
        ref={lightRef}
        position={light.position}
        rotation={light.rotation}
        scale={light.scale}
        intensity={light.intensity}
        color={light.color}
        visible={light.visible}
        castShadow={light.castShadow}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      />
      {(light.helper || isSelected) && lightRef.current && (
        <primitive
          ref={helperRef}
          object={new THREE.DirectionalLightHelper(lightRef.current, 1)}
          visible={light.visible}
        />
      )}
      {targetRef.current && <primitive object={targetRef.current} />}
    </group>
  );
}

export function SpotLight({
  light,
  isSelected,
  onSelect,
}: {
  light: TLightConfig;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const lightRef = useRef<THREE.SpotLight>(null);
  const helperRef = useRef<THREE.SpotLightHelper>(null);
  const dispatch = useAppDispatch();

  // Track if properties are being updated internally
  const isInternalUpdate = useRef(false);

  // Get the current light data from Redux
  const currentLight = useAppSelector((state) =>
    state.stage.present.lights.find((l) => l.id === light.id),
  );

  // Set default values for spot light
  const angle = light.angle ?? Math.PI / 6;
  const penumbra = light.penumbra ?? 0.1;
  const distance = light.distance ?? 10;
  const decay = light.decay ?? 2;

  // Debounced functions to update Redux store
  const debouncedUpdatePosition = useDebounce(
    useCallback(
      (newPosition: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            position: newPosition,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  const debouncedUpdateRotation = useDebounce(
    useCallback(
      (rotation: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            rotation: rotation,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  const debouncedUpdateScale = useDebounce(
    useCallback(
      (scale: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            scale: scale,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  // Function to handle transform changes
  const handleTransformChange = useCallback(() => {
    if (!lightRef.current) return;

    const lightObject = lightRef.current;
    isInternalUpdate.current = true;

    const newPosition: TVector3 = [
      lightObject.position.x,
      lightObject.position.y,
      lightObject.position.z,
    ];

    const newRotation: TVector3 = [
      lightObject.rotation.x,
      lightObject.rotation.y,
      lightObject.rotation.z,
    ];

    const newScale: TVector3 = [
      lightObject.scale.x,
      lightObject.scale.y,
      lightObject.scale.z,
    ];

    debouncedUpdatePosition(newPosition);
    debouncedUpdateRotation(newRotation);
    debouncedUpdateScale(newScale);
  }, [debouncedUpdatePosition, debouncedUpdateRotation, debouncedUpdateScale]);

  // Effect to sync Redux changes to the light
  useEffect(() => {
    if (!lightRef.current || !currentLight || isInternalUpdate.current) return;

    const lightObject = lightRef.current;

    // Update position
    const reduxPosition = currentLight.position;
    if (
      lightObject.position.x !== reduxPosition[0] ||
      lightObject.position.y !== reduxPosition[1] ||
      lightObject.position.z !== reduxPosition[2]
    ) {
      lightObject.position.set(
        reduxPosition[0],
        reduxPosition[1],
        reduxPosition[2],
      );
    }

    // Update rotation
    if (currentLight.rotation) {
      const reduxRotation = currentLight.rotation;
      if (
        lightObject.rotation.x !== reduxRotation[0] ||
        lightObject.rotation.y !== reduxRotation[1] ||
        lightObject.rotation.z !== reduxRotation[2]
      ) {
        lightObject.rotation.set(
          reduxRotation[0],
          reduxRotation[1],
          reduxRotation[2],
        );
      }
    }

    // Update scale
    if (currentLight.scale) {
      const reduxScale = currentLight.scale;
      if (
        lightObject.scale.x !== reduxScale[0] ||
        lightObject.scale.y !== reduxScale[1] ||
        lightObject.scale.z !== reduxScale[2]
      ) {
        lightObject.scale.set(reduxScale[0], reduxScale[1], reduxScale[2]);
      }
    }

    // Update spot light specific properties
    const currentAngle = currentLight.angle ?? Math.PI / 6;
    const currentPenumbra = currentLight.penumbra ?? 0.1;
    const currentDistance = currentLight.distance ?? 10;
    const currentDecay = currentLight.decay ?? 2;

    if (lightObject.angle !== currentAngle) {
      lightObject.angle = currentAngle;
    }
    if (lightObject.penumbra !== currentPenumbra) {
      lightObject.penumbra = currentPenumbra;
    }
    if (lightObject.distance !== currentDistance) {
      lightObject.distance = currentDistance;
    }
    if (lightObject.decay !== currentDecay) {
      lightObject.decay = currentDecay;
    }

    // Update common properties
    if (lightObject.intensity !== currentLight.intensity) {
      lightObject.intensity = currentLight.intensity;
    }
    if (
      lightObject.color.getHex() !==
      new THREE.Color(currentLight.color).getHex()
    ) {
      lightObject.color.set(currentLight.color);
    }
    if (lightObject.visible !== currentLight.visible) {
      lightObject.visible = currentLight.visible;
    }
    if (lightObject.castShadow !== currentLight.castShadow) {
      lightObject.castShadow = currentLight.castShadow ?? false;
    }
  }, [currentLight]);

  // Update helper
  useEffect(() => {
    if (lightRef.current && helperRef.current) {
      helperRef.current.update();
    }
  }, [
    light.position,
    light.rotation,
    light.intensity,
    light.color,
    angle,
    penumbra,
    distance,
  ]);

  // Add transform change handler to userData
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.userData = {
        ...lightRef.current.userData,
        type: "selectable",
        id: light.id,
        onTransformChange: handleTransformChange,
      };
    }
  }, [handleTransformChange, light.id]);

  return (
    <group>
      <spotLight
        ref={lightRef}
        position={light.position}
        rotation={light.rotation}
        scale={light.scale}
        intensity={light.intensity}
        color={light.color}
        angle={angle}
        penumbra={penumbra}
        distance={distance}
        decay={decay}
        visible={light.visible}
        castShadow={light.castShadow}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      />
      {(light.helper || isSelected) && lightRef.current && (
        <primitive
          ref={helperRef}
          object={new THREE.SpotLightHelper(lightRef.current)}
          visible={light.visible}
        />
      )}
    </group>
  );
}

function PointLight({
  light,
  isSelected,
  onSelect,
}: {
  light: TLightConfig;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const lightRef = useRef<THREE.PointLight>(null);
  const helperRef = useRef<THREE.PointLightHelper>(null);
  const dispatch = useAppDispatch();

  // Track if properties are being updated internally
  const isInternalUpdate = useRef(false);

  // Get the current light data from Redux
  const currentLight = useAppSelector((state) =>
    state.stage.present.lights.find((l) => l.id === light.id),
  );

  // Set default values for point light
  const distance = light.distance ?? 10;
  const decay = light.decay ?? 2;

  // Debounced functions to update Redux store
  const debouncedUpdatePosition = useDebounce(
    useCallback(
      (newPosition: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            position: newPosition,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  const debouncedUpdateRotation = useDebounce(
    useCallback(
      (rotation: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            rotation: rotation,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  const debouncedUpdateScale = useDebounce(
    useCallback(
      (scale: TVector3) => {
        dispatch(
          updateLights({
            id: light.id,
            scale: scale,
          }),
        );
        isInternalUpdate.current = false;
      },
      [dispatch, light.id],
    ),
    500,
  );

  // Function to handle transform changes
  const handleTransformChange = useCallback(() => {
    if (!lightRef.current) return;

    const lightObject = lightRef.current;
    isInternalUpdate.current = true;

    const newPosition: TVector3 = [
      lightObject.position.x,
      lightObject.position.y,
      lightObject.position.z,
    ];

    const newRotation: TVector3 = [
      lightObject.rotation.x,
      lightObject.rotation.y,
      lightObject.rotation.z,
    ];

    const newScale: TVector3 = [
      lightObject.scale.x,
      lightObject.scale.y,
      lightObject.scale.z,
    ];

    debouncedUpdatePosition(newPosition);
    debouncedUpdateRotation(newRotation);
    debouncedUpdateScale(newScale);
  }, [debouncedUpdatePosition, debouncedUpdateRotation, debouncedUpdateScale]);

  // Effect to sync Redux changes to the light
  useEffect(() => {
    if (!lightRef.current || !currentLight || isInternalUpdate.current) return;

    const lightObject = lightRef.current;

    // Update position
    const reduxPosition = currentLight.position;
    if (
      lightObject.position.x !== reduxPosition[0] ||
      lightObject.position.y !== reduxPosition[1] ||
      lightObject.position.z !== reduxPosition[2]
    ) {
      lightObject.position.set(
        reduxPosition[0],
        reduxPosition[1],
        reduxPosition[2],
      );
    }

    // Update rotation
    if (currentLight.rotation) {
      const reduxRotation = currentLight.rotation;
      if (
        lightObject.rotation.x !== reduxRotation[0] ||
        lightObject.rotation.y !== reduxRotation[1] ||
        lightObject.rotation.z !== reduxRotation[2]
      ) {
        lightObject.rotation.set(
          reduxRotation[0],
          reduxRotation[1],
          reduxRotation[2],
        );
      }
    }

    // Update scale
    if (currentLight.scale) {
      const reduxScale = currentLight.scale;
      if (
        lightObject.scale.x !== reduxScale[0] ||
        lightObject.scale.y !== reduxScale[1] ||
        lightObject.scale.z !== reduxScale[2]
      ) {
        lightObject.scale.set(reduxScale[0], reduxScale[1], reduxScale[2]);
      }
    }

    // Update point light specific properties
    const currentDistance = currentLight.distance ?? 10;
    const currentDecay = currentLight.decay ?? 2;

    if (lightObject.distance !== currentDistance) {
      lightObject.distance = currentDistance;
    }
    if (lightObject.decay !== currentDecay) {
      lightObject.decay = currentDecay;
    }

    // Update common properties
    if (lightObject.intensity !== currentLight.intensity) {
      lightObject.intensity = currentLight.intensity;
    }
    if (
      lightObject.color.getHex() !==
      new THREE.Color(currentLight.color).getHex()
    ) {
      lightObject.color.set(currentLight.color);
    }
    if (lightObject.visible !== currentLight.visible) {
      lightObject.visible = currentLight.visible;
    }
    if (lightObject.castShadow !== currentLight.castShadow) {
      lightObject.castShadow = currentLight.castShadow ?? false;
    }
  }, [currentLight]);

  // Update helper
  useEffect(() => {
    if (lightRef.current && helperRef.current) {
      helperRef.current.update();
    }
  }, [light.position, light.rotation, light.intensity, light.color, distance]);

  // Add transform change handler to userData
  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.userData = {
        ...lightRef.current.userData,
        type: "selectable",
        id: light.id,
        onTransformChange: handleTransformChange,
      };
    }
  }, [handleTransformChange, light.id]);

  return (
    <group>
      <pointLight
        ref={lightRef}
        position={light.position}
        rotation={light.rotation}
        scale={light.scale}
        intensity={light.intensity}
        color={light.color}
        distance={distance}
        decay={decay}
        visible={light.visible}
        castShadow={light.castShadow}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      />
      {(light.helper || isSelected) && lightRef.current && (
        <primitive
          ref={helperRef}
          object={new THREE.PointLightHelper(lightRef.current, 0.5)}
          visible={light.visible}
        />
      )}
    </group>
  );
}

export default function SceneLights() {
  const dispatch = useAppDispatch();
  const lights = useAppSelector((state) => state.stage.present.lights);
  const selectedLights = useAppSelector(
    (state) => state.stage.present.selectedLights,
  );
  const sceneRef = useRef<THREE.Group>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformControlsRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle light selection
  const handleLightSelect = (lightId: string) => {
    if (isDragging) return;

    const isCurrentlySelected = selectedLights?.id === lightId;

    if (isCurrentlySelected) {
      // If clicking the same light, deselect it
      dispatch(setSelectedLights(null));
    } else {
      // Select the new light with default translate mode
      dispatch(
        setSelectedLights({
          id: lightId,
          interactionMode: "translate",
        }),
      );
    }
  };

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

  // Get the selected light object for transform controls
  const selectedLightObject = selectedLights?.id
    ? sceneRef.current?.children
        .flatMap((child) => {
          // Search through all children and their children for the light
          const findLight = (obj: THREE.Object3D): THREE.Light | null => {
            if (
              obj.userData?.id === selectedLights.id &&
              obj instanceof THREE.Light
            ) {
              return obj;
            }
            for (const child of obj.children) {
              const found = findLight(child);
              if (found) return found;
            }
            return null;
          };
          return findLight(child);
        })
        .find(Boolean)
    : null;

  // Render individual lights
  const renderLight = (light: TLightConfig) => {
    const isSelected = selectedLights?.id === light.id;
    const onSelect = () => handleLightSelect(light.id);

    switch (light.type) {
      case "directional":
        return (
          <DirectionalLight
            key={light.id}
            light={light}
            isSelected={isSelected}
            onSelect={onSelect}
          />
        );
      // case "spot":
      //   return (
      //     <SpotLight
      //       key={light.id}
      //       light={light}
      //       isSelected={isSelected}
      //       onSelect={onSelect}
      //     />
      //   );
      case "point":
        return (
          <PointLight
            key={light.id}
            light={light}
            isSelected={isSelected}
            onSelect={onSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <group ref={sceneRef}>
      {/* Render all lights */}
      {lights ? lights.map(renderLight) : null}

      {/* Transform controls for selected light */}
      {selectedLightObject && selectedLights?.id && (
        <TransformControls
          ref={transformControlsRef}
          object={selectedLightObject}
          mode={selectedLights.interactionMode ?? "translate"}
          onChange={handleTransformChange}
          onMouseDown={handleTransformDragStart}
          onMouseUp={handleTransformDragEnd}
          size={0.8}
          space="world"
        />
      )}
    </group>
  );
}
