import { useState, useEffect, useRef } from "react";
import { PackedSplats } from "@sparkjsdev/spark";

export type LoadingStage =
  | "idle"
  | "loading_preview"
  | "preview_loaded"
  | "loading_fullres"
  | "complete";

export interface ProgressiveSplatLoaderResult {
  previewProgress: number;
  previewSplat: PackedSplats | null;
  fullResProgress: number;
  fullResSplat: PackedSplats | null;
  stage: LoadingStage;
  error: Error | null;
}

interface UseProgressiveSplatLoaderOptions {
  preview100kUrl: string;
  fullResUrl: string;
}

// Helper function to load a splat file with progress tracking and abort support
async function loadSplat(
  url: string,
  signal: AbortSignal,
  onProgress?: (progress: number) => void,
): Promise<PackedSplats> {
  const response = await fetch(url, { signal });
  const contentLength = response.headers.get("content-length");
  const total = contentLength ? parseInt(contentLength, 10) : 0;

  if (!response.body) {
    throw new Error("Response body is null");
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let receivedLength = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      chunks.push(value);
      receivedLength += value.length;

      if (total && onProgress) {
        onProgress(receivedLength / total);
      }
    }
  } catch (err) {
    reader.releaseLock();
    throw err;
  }

  // Combine chunks into single array
  const data = new Uint8Array(receivedLength);
  let position = 0;
  for (const chunk of chunks) {
    data.set(chunk, position);
    position += chunk.length;
  }

  const splats = new PackedSplats({
    fileBytes: data,
    fileName: url,
  });

  await splats.initialized;
  return splats;
}

export function useProgressiveSplatLoader({
  preview100kUrl,
  fullResUrl,
}: UseProgressiveSplatLoaderOptions): ProgressiveSplatLoaderResult {
  const [previewProgress, setPreviewProgress] = useState(0);
  const [previewSplat, setPreviewSplat] = useState<PackedSplats | null>(null);
  const [fullResProgress, setFullResProgress] = useState(0);
  const [fullResSplat, setFullResSplat] = useState<PackedSplats | null>(null);
  const [stage, setStage] = useState<LoadingStage>("idle");
  const [error, setError] = useState<Error | null>(null);

  // Track mounted state to prevent state updates after unmount
  const mountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Guard: Skip loading if URLs are empty/invalid
    if (!preview100kUrl || !fullResUrl) {
      setStage("idle");
      return;
    }

    mountedRef.current = true;

    // Abort any previous load
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const loadBothSplats = async () => {
      try {
        // Stage 1: Load preview (100k) splat
        if (mountedRef.current) {
          setStage("loading_preview");
          setPreviewProgress(0);
        }

        const previewSplats = await loadSplat(
          preview100kUrl,
          abortController.signal,
          (progress) => {
            if (mountedRef.current) setPreviewProgress(progress);
          },
        );

        if (mountedRef.current) {
          setPreviewSplat(previewSplats);
          setStage("preview_loaded");
        }

        // Stage 2: Load full resolution
        if (mountedRef.current) {
          setStage("loading_fullres");
          setFullResProgress(0);
        }

        const fullResSplats = await loadSplat(
          fullResUrl,
          abortController.signal,
          (progress) => {
            if (mountedRef.current) setFullResProgress(progress);
          },
        );

        if (mountedRef.current) {
          setFullResSplat(fullResSplats);
          setStage("complete");
        }
      } catch (err) {
        // Ignore abort errors
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
        if (mountedRef.current) {
          setError(
            err instanceof Error
              ? err
              : new Error("Unknown error loading splat"),
          );
        }
      }
    };

    loadBothSplats();

    return () => {
      mountedRef.current = false;
      abortController.abort();
    };
  }, [preview100kUrl, fullResUrl]);

  return {
    previewProgress,
    previewSplat,
    fullResProgress,
    fullResSplat,
    stage,
    error,
  };
}
