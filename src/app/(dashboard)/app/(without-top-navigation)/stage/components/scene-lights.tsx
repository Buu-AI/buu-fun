import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useDebounce } from "@/hooks/use-debouce";
import { setSelectedLights, updateLights } from "@/lib/redux/features/stage";
import { TLightConfig, TVector3 } from "@/types/stage/objects";
import { TransformControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type TSceneLights = {};

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

  useEffect(() => {
    if (lightRef.current && helperRef.current) {
      helperRef.current.update();
    }
  }, [light.position, light.intensity, light.color]);

  return (
    <group>
      <directionalLight
        ref={lightRef}
        position={light.position}
        intensity={light.intensity}
        color={light.color}
        visible={light.visible}
        castShadow={light.castShadow}
        onClick={onSelect}
      />
      {(light.helper || isSelected) && lightRef.current && (
        <primitive
          ref={helperRef}
          object={new THREE.DirectionalLightHelper(lightRef.current, 1)}
          visible={light.visible}
        />
      )}
    </group>
  );
}

function SpotLight({
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

  // Set default values for spot light
  const angle = light.angle ?? Math.PI / 6; // 30 degrees default
  const penumbra = light.penumbra ?? 0.1; // 0.1 default
  const distance = light.distance ?? 10; // 10 units default
  const decay = light.decay ?? 2; // Physical decay default

  useEffect(() => {
    if (lightRef.current && helperRef.current) {
      helperRef.current.update();
    }
  }, [light.position, light.intensity, light.color, angle, penumbra, distance]);

  return (
    <group>
      <spotLight
        ref={lightRef}
        position={light.position}
        intensity={light.intensity}
        color={light.color}
        angle={angle}
        penumbra={penumbra}
        distance={distance}
        decay={decay}
        visible={light.visible}
        castShadow={light.castShadow}
        onClick={onSelect}
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

  // Set default values for point light
  const distance = light.distance ?? 10; // 10 units default
  const decay = light.decay ?? 2; // Physical decay default

  useEffect(() => {
    if (lightRef.current && helperRef.current) {
      helperRef.current.update();
    }
  }, [light.position, light.intensity, light.color, distance]);

  return (
    <group>
      <pointLight
        ref={lightRef}
        position={light.position}
        intensity={light.intensity}
        color={light.color}
        distance={distance}
        decay={decay}
        visible={light.visible}
        castShadow={light.castShadow}
        onClick={onSelect}
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

// Transform controls component
function LightTransformControls({
  light,
  isSelected,
}: {
  light: TLightConfig;
  isSelected: boolean;
}) {
  const dispatch = useAppDispatch();
  const selectedLights = useAppSelector(
    (state) => state.stage.present.selectedLights
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transformRef = useRef<any>(null);
  const objectRef = useRef<THREE.Object3D>(new THREE.Object3D());

  // Debounced update function to prevent too many redux updates
  const debouncedUpdate = useDebounce((newPosition: TVector3) => {
    dispatch(
      updateLights({
        id: light.id,
        position: newPosition,
      })
    );
  }, 100);

  // Handle transform changes
  const handleTransformChange = () => {
    if (objectRef.current) {
      const position: TVector3 = [
        objectRef.current.position.x,
        objectRef.current.position.y,
        objectRef.current.position.z,
      ];
      debouncedUpdate(position);
    }
  };

  // Update object position when light position changes from GUI
  useEffect(() => {
    if (objectRef.current) {
      objectRef.current.position.set(...light.position);
    }
  }, [light.position]);

  // Get current interaction mode
  const interactionMode = selectedLights?.interactionMode || "translate";

  if (!isSelected || interactionMode === "none") {
    return null;
  }

  return (
    <TransformControls
      ref={transformRef}
      object={objectRef}
      mode={interactionMode}
      onObjectChange={handleTransformChange}
      showX={true}
      showY={true}
      showZ={true}
      size={0.8}
      space="world"
    >
      <mesh ref={objectRef} position={light.position} visible={false}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial />
      </mesh>
    </TransformControls>
  );
}

export default function SceneLights({}: TSceneLights) {
  const dispatch = useAppDispatch();
  const lights = useAppSelector((state) => state.stage.present.lights);
  const selectedLights = useAppSelector(
    (state) => state.stage.present.selectedLights
  );

  // Handle light selection
  const handleLightSelect = (lightId: string) => {
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
        })
      );
    }
  };

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
      case "spot":
        return (
          <SpotLight
            key={light.id}
            light={light}
            isSelected={isSelected}
            onSelect={onSelect}
          />
        );
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
    <group>
      {/* Render all lights */}
      {lights ? lights?.map(renderLight) : null}

      {/* Render transform controls for selected light */}
      {selectedLights && (
        <LightTransformControls
          light={lights.find((l) => l.id === selectedLights.id)!}
          isSelected={true}
        />
      )}
    </group>
  );
}
