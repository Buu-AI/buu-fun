import data from "@/components/chat/assistant/buu-loader.json";
import { OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import LottieLoader from "lottie-react";
import Image from "next/image";
import React, {
  RefObject,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-stdlib";

interface ModelViewerProps {
  src?: string | null;
  poster?: string | null;
  alt?: string;
  enableAR?: boolean;
  modelRef?: RefObject<HTMLElement | null>;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  autoRotateDelay?: number;
  fieldOfView?: number;
  minDistance?: number;
  maxDistance?: number;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// Optimized lighting setup
function OptimizedLighting() {
  return (
    <>
      {/* Increased ambient light for overall brightness */}
      <ambientLight intensity={1.5} />

      {/* Main directional light (key light) */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill light from opposite direction for even lighting */}
      <directionalLight
        position={[-8, 8, -3]}
        intensity={0.6}
        color="#ffffff"
      />

      {/* Additional side lighting for better surface coverage */}
      <directionalLight
        position={[0, 10, -10]}
        intensity={0.4}
        color="#ffffff"
      />

      {/* Point lights for additional fill */}
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[10, -5, 10]} intensity={0.6} color="#ffffff" />

      {/* Enhanced hemisphere light with proper sky and ground colors */}
      <hemisphereLight
        // skyColor="#ffffff"
        groundColor="#404040"
        intensity={0.8}
      />

      {/* Optional: Add a rim light for better edge definition */}
      <directionalLight
        position={[0, 0, -10]}
        intensity={0.3}
        color="#e6f3ff"
      />
    </>
  );
}
function optimizeMaterial(material: THREE.Material) {
  material.needsUpdate = true;

  // If it's a standard material, optimize for better lighting
  if (material instanceof THREE.MeshStandardMaterial) {
    // Ensure proper metalness and roughness for good lighting response
    if (material.metalness === undefined) material.metalness = 0.1;
    if (material.roughness === undefined) material.roughness = 0.7;

    // Enable environment mapping if available
    material.envMapIntensity = 1.0;

    // Improve material appearance
    material.transparent = material.opacity < 1.0;
  }

  // For basic materials, ensure they respond to lighting
  if (material instanceof THREE.MeshBasicMaterial) {
    // Convert to MeshStandardMaterial for better lighting
    const standardMat = new THREE.MeshStandardMaterial({
      color: material.color,
      map: material.map,
      transparent: material.transparent,
      opacity: material.opacity,
      metalness: 0.1,
      roughness: 0.7,
    });

    return standardMat;
  }

  return material;
}
// Enhanced GLTF Model component with better performance
function GLTFModel({
  src,
  onLoad,
  autoRotate,
  speed,
}: {
  src: string;
  onLoad: () => void;
  autoRotate: boolean;
  speed: number;
}) {
  const gltf = useGLTF(src);
  const meshRef = useRef<THREE.Group>(null);

  // Optimize model on load
  useEffect(() => {
    if (gltf && gltf.scene) {
      // Enable shadows and optimize materials for better lighting
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          // Optimize materials for better lighting response
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => {
                optimizeMaterial(mat);
              });
            } else {
              optimizeMaterial(child.material);
            }
          }
        }
      });

      // Center and scale the model
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;

      gltf.scene.scale.setScalar(scale);
      gltf.scene.position.copy(center).multiplyScalar(-scale);

      onLoad();
    }
  }, [gltf, onLoad]);

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * speed;
    }
  });

  return gltf.scene ? <primitive ref={meshRef} object={gltf.scene} /> : null;
}

// Enhanced OBJ Model component
function OBJModel({
  src,
  onLoad,
  autoRotate,
  speed,
}: {
  src: string;
  onLoad: () => void;
  autoRotate: boolean;
  speed: number;
}) {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const meshRef = useRef<THREE.Group>(null);

  const loadOBJModel = useCallback(async () => {
    try {
      const objLoader = new OBJLoader();
      const mtlPath = src.replace(".obj", ".mtl");

      try {
        const mtlLoader = new MTLLoader();
        const materials = await mtlLoader.loadAsync(mtlPath);
        materials.preload();
        objLoader.setMaterials(materials);
      } catch (mtlError) {
        console.log("No MTL file found, using default materials", mtlError);
      }

      const object = await objLoader.loadAsync(src);

      // Optimize and center the model
      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;

      object.scale.setScalar(scale);
      object.position.copy(center).multiplyScalar(-scale);

      // Enable shadows
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });

      setModel(object);
      onLoad();
    } catch (error) {
      console.error("Failed to load OBJ model:", error);
    }
  }, [src, onLoad]);

  useEffect(() => {
    loadOBJModel();
  }, [loadOBJModel]);

  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * speed;
    }
  });

  return model ? <primitive ref={meshRef} object={model} /> : null;
}

// Main model component
function Model({
  src,
  onLoad,
  autoRotate,
  speed,
}: {
  src: string;
  onLoad: () => void;
  autoRotate: boolean;
  speed: number;
}) {
  const format = useMemo(() => {
    const extension = src.split(".").pop()?.toLowerCase();
    return extension;
  }, [src]);

  if (format === "glb" || format === "gltf") {
    return (
      <GLTFModel
        src={src}
        onLoad={onLoad}
        autoRotate={autoRotate}
        speed={speed}
      />
    );
  } else if (format === "obj") {
    return (
      <OBJModel
        src={src}
        onLoad={onLoad}
        autoRotate={autoRotate}
        speed={speed}
      />
    );
  } else {
    console.error(`Unsupported model format: ${format}`);
    return null;
  }
}

// Auto-rotate delay handler
function AutoRotateHandler({
  delay,
  onStart,
}: {
  delay: number;
  onStart: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onStart();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay, onStart]);

  return null;
}

// Enhanced loading component with Lottie and progress
function LoadingIndicator() {
  const { progress } = useProgress();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="h-32 w-32 flex items-center justify-center p-1">
        <LottieLoader animationData={data} loop autoplay />
      </div>
      <div className="mt-4 text-lg font-semibold text-gray-700">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

// Poster image component
function PosterImage({
  src,
  alt,
  onLoad,
}: {
  src: string;
  alt: string;
  onLoad: () => void;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover blur-md"
        onLoad={onLoad}
        loading="lazy"
      />
    </div>
  );
}

// Mobile detection utility
function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    "android",
    "webos",
    "iphone",
    "ipad",
    "ipod",
    "blackberry",
    "windows phone",
    "mobile",
  ];

  return (
    mobileKeywords.some((keyword) => userAgent.includes(keyword)) ||
    /Mobi|Android/i.test(navigator.userAgent) ||
    (window.screen && window.screen.width < 768)
  );
}

// Enhanced AR Button with mobile detection
function ARButton({
  onClick,
  enabled,
}: {
  onClick: () => void;
  enabled: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  if (!enabled || !isMobile) return null;

  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 right-4  bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105"
      title="View in AR"
      aria-label="View in Augmented Reality"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
      >
        <path
          d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
          fill="currentColor"
        />
        <path
          d="M17 14L17.91 18.26L22 19L17.91 19.74L17 24L16.09 19.74L12 19L16.09 18.26L17 14Z"
          fill="currentColor"
        />
        <path
          d="M7 14L7.91 18.26L12 19L7.91 19.74L7 24L6.09 19.74L2 19L6.09 18.26L7 14Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

export default function ThreeJSModelViewer({
  src = "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
  poster,
  alt = "A 3D model",
  enableAR = true,
  // modelRef,
  autoRotate = true,
  autoRotateSpeed = 0.2,
  autoRotateDelay = 2,
  fieldOfView = 75,
  minDistance = 1,
  maxDistance = 10,
  className = "w-full h-full",
  ...props
}: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPosterLoaded] = useState(false);
  const [showPoster, setShowPoster] = useState(!!poster);
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleModelLoad = useCallback(() => {
    setModelLoaded(true);
    setIsLoading(false);
    if (poster) {
      setTimeout(() => setShowPoster(false), 500);
    }
  }, [poster]);

  const handleAutoRotateStart = useCallback(() => {
    setAutoRotateEnabled(autoRotate);
  }, [autoRotate]);

  const handleARClick = useCallback(() => {
    // Enhanced AR functionality check
    if (navigator.xr) {
      navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        if (supported) {
          console.log("Starting AR session...");
          // Implement WebXR AR session here
        } else {
          alert("AR not supported on this device");
        }
      });
    } else {
      alert(
        "WebXR not available. AR functionality requires a compatible browser and device."
      );
    }
  }, []);

  const stopPropagation = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation();
  }, []);

  // Optimized event handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stopPropagationHandler = (e: Event) => {
      e.stopPropagation();
    };

    const events = [
      "mousedown",
      "touchcancel",
      "touchend",
      "touchmove",
      "wheel",
      "touchstart",
    ];

    events.forEach((event) => {
      container.addEventListener(event, stopPropagationHandler, {
        passive: true,
      });
    });

    return () => {
      events.forEach((event) => {
        container.removeEventListener(event, stopPropagationHandler);
      });
    };
  }, []);

  // Memoized camera settings
  const cameraSettings = useMemo(
    () => ({
      fov: fieldOfView,
      position: [0, 0, 5] as [number, number, number],
      near: 0.1,
      far: 1000,
    }),
    [fieldOfView]
  );

  if (!src) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <p className="text-gray-500">No model source provided</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}  rounded-lg overflow-hidden`}
      onMouseDown={stopPropagation}
      onTouchCancel={stopPropagation}
      onTouchEnd={stopPropagation}
      onTouchMove={stopPropagation}
      onTouchStart={stopPropagation}
      onWheel={stopPropagation}
      {...props}
    >
      {/* Poster Image */}
      {poster && showPoster && (
        <PosterImage
          src={poster}
          alt={`Poster for ${alt}`}
          onLoad={() => setPosterLoaded(true)}
        />
      )}

      {/* Enhanced Loading Indicator */}
      {isLoading && <LoadingIndicator />}

      {/* Optimized Three.js Canvas */}
      {/* <Canvas
        camera={cameraSettings}
        // shadows
        style={{
          width: "100%",
          height: "100%",
          display: showPoster && poster ? "none" : "block",
        }}
        gl={{
          // antialias: true,

          // alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]} // Responsive pixel ratio
      > */}
      <Canvas
        camera={cameraSettings}
        shadows
        style={{
          width: "100%",
          height: "100%",
          display: showPoster && poster ? "none" : "block",
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          // Enable tone mapping for better exposure
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2, // Increase for brighter appearance
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 2]}
        // Additional scene settings
        onCreated={({ gl, scene }) => {
          // Set tone mapping properties
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;

          // Improve material appearance
          scene.environment = null; // Will be set by Environment component if used
        }}
      >
        <OptimizedLighting />

        <Suspense fallback={null}>
          <Model
            src={src}
            onLoad={handleModelLoad}
            autoRotate={autoRotateEnabled}
            speed={autoRotateSpeed}
          />
          <AutoRotateHandler
            delay={autoRotateDelay}
            onStart={handleAutoRotateStart}
          />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={minDistance}
          maxDistance={maxDistance}
          autoRotate={autoRotateEnabled}
          autoRotateSpeed={autoRotateSpeed}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Enhanced AR Button with mobile detection */}
      <ARButton onClick={handleARClick} enabled={enableAR && modelLoaded} />
    </div>
  );
}
