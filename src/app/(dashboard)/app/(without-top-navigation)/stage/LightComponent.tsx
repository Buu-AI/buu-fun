// import React, { useRef, useCallback, useEffect, useMemo } from "react";
// import * as THREE from "three";
// import { useHelper, TransformControls } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// // import { updateLights } from './store/stageSlice'; // Adjust import path
// import { useAppDispatch, useAppSelector } from "@/hooks/redux";
// import { useDebounce } from "@/hooks/use-debouce";
// import { updateLights } from "@/lib/redux/features/stage";

// // Enhanced type definitions
// export type TLightType = "directional" | "spot" | "point";
// export type TVector3 = [number, number, number];

// export type TBaseLightConfig = {
//   id: string;
//   type: TLightType;
//   position: TVector3;
//   intensity: number;
//   color: string;
//   visible: boolean;
//   castShadow?: boolean;
// };

// export type TDirectionalLightConfig = TBaseLightConfig & {
//   type: "directional";
//   target: TVector3;
//   shadowCameraSize?: number;
//   shadowCameraNear?: number;
//   shadowCameraFar?: number;
// };

// export type TPointLightConfig = TBaseLightConfig & {
//   type: "point";
//   decay?: number;
//   distance?: number;
//   shadowCameraNear?: number;
//   shadowCameraFar?: number;
// };

// export type TSpotLightConfig = TBaseLightConfig & {
//   type: "spot";
//   target: TVector3;
//   angle?: number;
//   penumbra?: number;
//   decay?: number;
//   distance?: number;
//   shadowCameraNear?: number;
//   shadowCameraFar?: number;
// };

// export type TLightConfig =
//   | TDirectionalLightConfig
//   | TPointLightConfig
//   | TSpotLightConfig;

// // Helper function to get default properties for each light type
// const getDefaultLightProps = (type: TLightType) => {
//   const baseProps = {
//     castShadow: true,
//     shadowCameraNear: 0.1,
//     shadowCameraFar: 500,
//   };

//   switch (type) {
//     case "directional":
//       return {
//         ...baseProps,
//         shadowCameraSize: 10,
//       };
//     case "point":
//       return {
//         ...baseProps,
//         decay: 2,
//         distance: 0,
//       };
//     case "spot":
//       return {
//         ...baseProps,
//         angle: Math.PI / 6,
//         penumbra: 0.5,
//         decay: 2,
//         distance: 0,
//       };
//     default:
//       return baseProps;
//   }
// };

// // Helper component for light visualization
// const LightHelper: React.FC<{
//   lightRef: React.RefObject<THREE.Light>;
//   type: TLightType;
//   show: boolean;
// }> = ({ lightRef, type, show }) => {
//   const helperArgs = useMemo(() => {
//     switch (type) {
//       case "directional":
//         return [1, "#ffff00"] as const;
//       case "point":
//         return [0.5, "#ffff00"] as const;
//       case "spot":
//         return ["#ffff00"] as const;
//       default:
//         return [] as const;
//     }
//   }, [type]);

//   if (!show || !lightRef.current) return null;

//   switch (type) {
//     case "directional":
//       useHelper(
//         lightRef as React.RefObject<THREE.DirectionalLight>,
//         THREE.DirectionalLightHelper,
//         ...[1, "#ffff00"]
//       );
//       break;
//     case "point":
//       useHelper(
//         lightRef as React.RefObject<THREE.PointLight>,
//         THREE.PointLightHelper,
//         ...[0.5, "#ffff00"]
//       );
//       break;
//     case "spot":
//       useHelper(
//         lightRef as React.RefObject<THREE.SpotLight>,
//         THREE.SpotLightHelper,
//         ...helperArgs
//       );
//       break;
//   }

//   return null;
// };

// // Transform Controls Component
// const LightTransformControls: React.FC<{
//   enabled: boolean;
//   object?: THREE.Object3D;
//   mode?: "translate" | "rotate" | "scale";
//   onObjectChange?: () => void;
//   onDragging?: (dragging: boolean) => void;
// }> = ({ enabled, object, mode = "translate", onObjectChange, onDragging }) => {
//   if (!enabled || !object) return null;

//   return (
//     <TransformControls
//       object={object}
//       mode={mode}
//       onObjectChange={onObjectChange}
//       // onDragging={onDragging}
//     />
//   );
// };

// // Main Light Component
// export const Light: React.FC<{
//   lightConfig: TLightConfig;
//   isSelected?: boolean;
//   showHelper?: boolean;
//   onSelect?: (id: string) => void;
//   transformMode?: "translate" | "rotate" | "scale";
//   enableTransforms?: boolean;
// }> = ({
//   lightConfig,
//   isSelected = false,
//   showHelper = false,
//   onSelect,
//   transformMode = "translate",
//   enableTransforms = true,
// }) => {
//   const lightRef = useRef<THREE.Light>(null);
//   const targetRef = useRef<THREE.Object3D>(null);
//   const dispatch = useAppDispatch();

//   // Track internal updates to prevent feedback loops
//   const isInternalUpdate = useRef(false);
//   const isDragging = useRef(false);

//   // Get current light data from Redux
//   const currentLight = useAppSelector((state) =>
//     state.stage.present.lights.find((l) => l.id === lightConfig.id)
//   );

//   // Memoize default properties
//   const defaultProps = useMemo(
//     () => getDefaultLightProps(lightConfig.type),
//     [lightConfig.type]
//   );

//   // Debounced Redux update function
//   const debouncedUpdateLight = useDebounce(
//     useCallback(
//       (updates: Partial<TLightConfig>) => {
//         if (!isInternalUpdate.current) return;

//         dispatch(
//           updateLights({
//             id: lightConfig.id,
//             ...updates,
//           })
//         );

//         isInternalUpdate.current = false;
//       },
//       [dispatch, lightConfig.id]
//     ),
//     300 // 300ms debounce
//   );

//   // Handle transform changes
//   const handleTransformChange = useCallback(() => {
//     if (!lightRef.current || isDragging.current) return;

//     isInternalUpdate.current = true;
//     const light = lightRef.current;

//     const updates: Partial<TLightConfig> = {
//       position: [light.position.x, light.position.y, light.position.z],
//     };

//     // Handle target updates for directional and spot lights
//     if (
//       (lightConfig.type === "directional" || lightConfig.type === "spot") &&
//       targetRef.current
//     ) {
//       const target = targetRef.current;
//       updates?.target = [
//         target.position.x,
//         target.position.y,
//         target.position.z,
//       ];
//     }

//     debouncedUpdateLight(updates);
//   }, [debouncedUpdateLight, lightConfig.type]);

//   // Handle dragging state
//   const handleDragging = useCallback(
//     (dragging: boolean) => {
//       isDragging.current = dragging;
//       if (!dragging) {
//         handleTransformChange();
//       }
//     },
//     [handleTransformChange]
//   );

//   // Sync Redux state to light object
//   useEffect(() => {
//     if (!lightRef.current || !currentLight || isInternalUpdate.current) return;

//     const light = lightRef.current;

//     // Position
//     const [px, py, pz] = currentLight.position;
//     if (
//       Math.abs(light.position.x - px) > 0.001 ||
//       Math.abs(light.position.y - py) > 0.001 ||
//       Math.abs(light.position.z - pz) > 0.001
//     ) {
//       light.position.set(px, py, pz);
//     }

//     // Intensity
//     if (Math.abs(light.intensity - currentLight.intensity) > 0.001) {
//       light.intensity = currentLight.intensity;
//     }

//     // Color
//     const currentColor = currentLight.color.replace("#", "");
//     if (light.color.getHexString() !== currentColor) {
//       light.color.set(currentLight.color);
//     }

//     // Visibility
//     if (light.visible !== currentLight.visible) {
//       light.visible = currentLight.visible;
//     }

//     // Type-specific properties
//     if (currentLight.type === "spot" && light instanceof THREE.SpotLight) {
//       const spotConfig = currentLight as TSpotLightConfig;

//       if (
//         spotConfig.angle !== undefined &&
//         Math.abs(light.angle - spotConfig.angle) > 0.001
//       ) {
//         light.angle = spotConfig.angle;
//       }

//       if (
//         spotConfig.penumbra !== undefined &&
//         Math.abs(light.penumbra - spotConfig.penumbra) > 0.001
//       ) {
//         light.penumbra = spotConfig.penumbra;
//       }

//       if (
//         spotConfig.decay !== undefined &&
//         Math.abs(light.decay - spotConfig.decay) > 0.001
//       ) {
//         light.decay = spotConfig.decay;
//       }

//       if (
//         spotConfig.distance !== undefined &&
//         Math.abs(light.distance - spotConfig.distance) > 0.001
//       ) {
//         light.distance = spotConfig.distance;
//       }
//     }

//     if (currentLight.type === "point" && light instanceof THREE.PointLight) {
//       const pointConfig = currentLight as TPointLightConfig;

//       if (
//         pointConfig.decay !== undefined &&
//         Math.abs(light.decay - pointConfig.decay) > 0.001
//       ) {
//         light.decay = pointConfig.decay;
//       }

//       if (
//         pointConfig.distance !== undefined &&
//         Math.abs(light.distance - pointConfig.distance) > 0.001
//       ) {
//         light.distance = pointConfig.distance;
//       }
//     }

//     // Handle target for directional and spot lights
//     if (
//       (currentLight.type === "directional" || currentLight.type === "spot") &&
//       "target" in currentLight &&
//       targetRef.current
//     ) {
//       const [tx, ty, tz] = currentLight.target;
//       if (
//         Math.abs(targetRef.current.position.x - tx) > 0.001 ||
//         Math.abs(targetRef.current.position.y - ty) > 0.001 ||
//         Math.abs(targetRef.current.position.z - tz) > 0.001
//       ) {
//         targetRef.current.position.set(tx, ty, tz);

//         if (
//           light instanceof THREE.DirectionalLight ||
//           light instanceof THREE.SpotLight
//         ) {
//           light.target = targetRef.current;
//         }
//       }
//     }
//   }, [currentLight]);

//   // Configure shadow properties
//   useEffect(() => {
//     if (!lightRef.current?.shadow) return;

//     const shadow = lightRef.current.shadow;
//     const config = { ...defaultProps, ...lightConfig };

//     shadow.bias = -0.0005;
//     shadow.radius = 10;
//     shadow.camera.near = config.shadowCameraNear;
//     shadow.camera.far = config.shadowCameraFar;

//     if (
//       lightConfig.type === "directional" &&
//       shadow.camera instanceof THREE.OrthographicCamera
//     ) {
//       const size = (config as any).shadowCameraSize || 10;
//       shadow.camera.left = -size;
//       shadow.camera.right = size;
//       shadow.camera.top = size;
//       shadow.camera.bottom = -size;
//     }

//     shadow.camera.updateProjectionMatrix();
//   }, [lightConfig, defaultProps]);

//   // Click handler
//   const handleClick = useCallback(
//     (e: any) => {
//       e.stopPropagation();
//       onSelect?.(lightConfig.id);
//     },
//     [onSelect, lightConfig.id]
//   );

//   // Render target object for directional and spot lights
//   const renderTarget = () => {
//     if (lightConfig.type !== "directional" && lightConfig.type !== "spot") {
//       return null;
//     }

//     const targetConfig = lightConfig as
//       | TDirectionalLightConfig
//       | TSpotLightConfig;

//     return (
//       <>
//         <object3D
//           ref={targetRef}
//           position={targetConfig.target}
//           userData={{
//             type: "lightTarget",
//             lightId: lightConfig.id,
//           }}
//         />
//         <LightTransformControls
//           enabled={enableTransforms && isSelected}
//           object={targetRef.current || undefined}
//           mode={transformMode}
//           onObjectChange={handleTransformChange}
//           onDragging={handleDragging}
//         />
//       </>
//     );
//   };

//   // Common light properties
//   const commonProps = {
//     ref: lightRef,
//     position: lightConfig.position,
//     intensity: lightConfig.intensity,
//     color: lightConfig.color,
//     visible: lightConfig.visible,
//     castShadow: lightConfig.castShadow ?? defaultProps.castShadow,
//     userData: {
//       type: "selectable",
//       lightType: lightConfig.type,
//       id: lightConfig.id,
//     },
//     onClick: handleClick,
//   };

//   // Render appropriate light type
//   const renderLight = () => {
//     switch (lightConfig.type) {
//       case "directional":
//         return (
//           <>
//             <directionalLight {...commonProps} />
//             {renderTarget()}
//           </>
//         );

//       case "point": {
//         const pointConfig = lightConfig as TPointLightConfig;
//         return (
//           <pointLight
//             {...commonProps}
//             decay={pointConfig.decay ?? defaultProps.decay}
//             distance={pointConfig.distance ?? defaultProps.distance}
//           />
//         );
//       }

//       case "spot": {
//         const spotConfig = lightConfig as TSpotLightConfig;
//         return (
//           <>
//             <spotLight
//               {...commonProps}
//               angle={spotConfig.angle ?? defaultProps.angle}
//               penumbra={spotConfig.penumbra ?? defaultProps.penumbra}
//               decay={spotConfig.decay ?? defaultProps.decay}
//               distance={spotConfig.distance ?? defaultProps.distance}
//             />
//             {renderTarget()}
//           </>
//         );
//       }

//       default:
//         console.warn(`Unknown light type: ${lightConfig.type}`);
//         return null;
//     }
//   };

//   return (
//     <>
//       {renderLight()}
//       <LightHelper
//         lightRef={lightRef}
//         type={lightConfig.type}
//         show={showHelper || isSelected}
//       />
//       <LightTransformControls
//         enabled={enableTransforms && isSelected}
//         object={lightRef.current || undefined}
//         mode={transformMode}
//         onObjectChange={handleTransformChange}
//         onDragging={handleDragging}
//       />
//     </>
//   );
// };
