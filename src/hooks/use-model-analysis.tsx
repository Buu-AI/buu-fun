import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export interface ModelGeometry {
  vertices: number;
  faces: number;
  meshes: number;
  materials: number;
  boundingBox?: {
    width: number;
    height: number;
    depth: number;
  };
  estimatedSize: string;
  analyzedAt: number;
}

export interface UseModelAnalysisOptions {
  enabled?: boolean;
}

export interface UseModelAnalysisResult {
  geometry: ModelGeometry | null;
  isAnalyzing: boolean;
  error: string | null;
  refresh: () => void;
}

const useModelAnalysis = (
  url: string | null,
  options: UseModelAnalysisOptions = {}
): UseModelAnalysisResult => {
  const { enabled = true } = options;

  const [geometry, setGeometry] = useState<ModelGeometry | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const currentUrl = useRef<string | null>(null);
  const abortController = useRef<AbortController | null>(null);

  const getFileExtension = useCallback((url: string): string => {
    return url.split(".").pop()?.toLowerCase() || "";
  }, []);

  const createLoader = useCallback((extension: string) => {
    switch (extension) {
      case "gltf":
      case "glb":
        return new GLTFLoader();
      case "obj":
        return new OBJLoader();
      case "fbx":
        return new FBXLoader();
      default:
        throw new Error(`Unsupported file format: ${extension}`);
    }
  }, []);

  const analyzeGeometry = useCallback(
    (scene: THREE.Object3D): ModelGeometry => {
      let totalVertices = 0;
      let totalFaces = 0;
      let meshCount = 0;
      const materials = new Set<string>();
      const boundingBox = new THREE.Box3();

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          meshCount++;
          const geometry = child.geometry;

          // Count vertices
          if (geometry.attributes.position) {
            totalVertices += geometry.attributes.position.count;
          }

          // Count faces
          if (geometry.index) {
            totalFaces += geometry.index.count / 3;
          } else if (geometry.attributes.position) {
            totalFaces += geometry.attributes.position.count / 3;
          }

          // Collect unique materials
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => materials.add(mat.uuid));
            } else {
              materials.add(child.material.uuid);
            }
          }

          // Update bounding box
          geometry.computeBoundingBox();
          if (geometry.boundingBox) {
            boundingBox.union(geometry.boundingBox);
          }
        }
      });

      const size = boundingBox.getSize(new THREE.Vector3());
      const estimatedMemorySize = (totalVertices * 3 * 4) / 1024 / 1024; // Rough estimate in MB

      return {
        vertices: totalVertices,
        faces: Math.floor(totalFaces),
        meshes: meshCount,
        materials: materials.size,
        boundingBox: {
          width: parseFloat(size.x.toFixed(2)),
          height: parseFloat(size.y.toFixed(2)),
          depth: parseFloat(size.z.toFixed(2)),
        },
        estimatedSize: `${estimatedMemorySize.toFixed(2)} MB`,
        analyzedAt: Date.now(),
      };
    },
    []
  );

  const loadModel = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (modelUrl: string): Promise<any> => {
      const extension = getFileExtension(modelUrl);
      const loader = createLoader(extension);

      return new Promise((resolve, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const onLoad = (loadedModel: any) => {
          resolve(loadedModel);
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const onError = (error: any) => {
          reject(error);
        };

        loader.load(modelUrl, onLoad, undefined, onError);
      });
    },
    [getFileExtension, createLoader]
  );

  const analyzeModel = useCallback(
    async (modelUrl: string): Promise<void> => {
      if (!enabled) return;

      // Cancel any ongoing analysis
      if (abortController.current) {
        abortController.current.abort();
      }
      abortController.current = new AbortController();

      setIsAnalyzing(true);
      setError(null);
      currentUrl.current = modelUrl;

      try {
        const loadedModel = await loadModel(modelUrl);

        // Check if this request is still current
        if (
          currentUrl.current !== modelUrl ||
          abortController.current?.signal.aborted
        ) {
          return;
        }

        // Extract scene based on loader type
        let scene: THREE.Object3D;
        if (loadedModel.scene) {
          // GLTF/GLB format
          scene = loadedModel.scene;
        } else if (
          loadedModel instanceof THREE.Group ||
          loadedModel instanceof THREE.Object3D
        ) {
          // OBJ/FBX format
          scene = loadedModel;
        } else {
          throw new Error("Unable to extract scene from loaded model");
        }

        const geometryData = analyzeGeometry(scene);

        // Only set state if this is still the current request
        if (
          currentUrl.current === modelUrl &&
          !abortController.current?.signal.aborted
        ) {
          setGeometry(geometryData);
        }
      } catch (err) {
        if (
          currentUrl.current === modelUrl &&
          !abortController.current?.signal.aborted
        ) {
          const errorMessage =
            err instanceof Error ? err.message : "Unknown error occurred";
          setError(errorMessage);
          console.error("Model analysis error:", err);
        }
      } finally {
        if (
          currentUrl.current === modelUrl &&
          !abortController.current?.signal.aborted
        ) {
          setIsAnalyzing(false);
        }
      }
    },
    [enabled, loadModel, analyzeGeometry]
  );

  const refresh = useCallback(() => {
    if (url) {
      analyzeModel(url);
    }
  }, [url, analyzeModel]);

  // Main effect - analyze model when URL changes
  useEffect(() => {
    if (!url) {
      setGeometry(null);
      setError(null);
      setIsAnalyzing(false);
      currentUrl.current = null;
      return;
    }

    if (currentUrl.current === url) {
      return; // Same URL, no need to re-analyze
    }

    analyzeModel(url);
  }, [url, analyzeModel]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, []);

  return {
    geometry,
    isAnalyzing,
    error,
    refresh,
  };
};

export default useModelAnalysis;
