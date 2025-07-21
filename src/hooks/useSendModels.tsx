import { convertModel } from "@/lib/react-query/model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

type TUseSendModels = {
  iframeRef: RefObject<HTMLIFrameElement | null>;
};
type ModelStatus = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
  modelInfo?: {
    vertexCount: number;
    triangleCount: number;
    objectsCount: number;
  };
};
export default function useSendModels({ iframeRef }: TUseSendModels) {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [modelStatus, setModelStatus] = useState<ModelStatus>({
    status: "idle",
    message: "Ready to load model",
  });
  // const isLoadedViaParam = useRef(false);
  const path = usePathname();
  const param = useSearchParams();
  const isModelLoadedRef = useRef(false);
  const typedPath = whichPath(path);

  const loadModelGlb = param.get("modelUrl");
  const loadModelObj = param.get("modelObjUrl");
  // console.log("MODEL_URL", { loadModelGlb, loadModelObj });

  const [loadStatus, setLoadStatus] = useState("");

  const convertAndLoadModel = useMutation({
    mutationFn: convertModel,
    onMutate: () => {
      toast.loading("Preparing model...");
    },
    async onSuccess(data) {
      toast.dismiss();
      await queryClient.invalidateQueries({
        exact: false,
        queryKey: ["get-models"],
      });
      const modelUrl = data.obj?.optimizedMesh?.url ?? data.obj?.mesh?.url;
      if (!modelUrl) {
        toast.error("Failed to convert model");
        return;
      }
      toast.success("Model prepared successfully");
      loadObjFromUrl(modelUrl);
    },
    onError() {
      toast.dismiss();
      toast.error("Failed to convert model");
    },
  });
  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.data && event.data.type === "CANVAS_LOADED" && !isModelLoadedRef.current) {
      // you can now start to send message to the apps
      if (loadModelObj) {
        loadObjFromUrl(loadModelObj);
        isModelLoadedRef.current = true;
      } else if (loadModelGlb) {
        loadGLB(loadModelGlb);
        isModelLoadedRef.current = true;
      }
    }
    if (event.data && event.data.type === "MODEL_LOADING_STATUS") {
      const { status, message, modelInfo } = event.data.payload;
      setModelStatus({ status, message, modelInfo });
    }

    if (event.data?.type === "OBJ_LOADED_SUCCESS") {
      setIsLoading(false);
      setLoadStatus(`Successfully loaded: ${event.data.url}`);
      console.log("OBJ loaded successfully:", event.data.url);
    } else if (event.data?.type === "OBJ_LOADED_ERROR") {
      toast.error("failed to load model, please try again");
      setIsLoading(false);
      setLoadStatus(`Error loading: ${event.data.error}`);
      console.error("Error loading OBJ:", event.data.error);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  const loadObjFromUrl = useCallback(
    (url: string) => {
      try {
        if (!iframeRef?.current?.contentWindow || typedPath !== "editor") {
          console.error("Iframe not ready");
          return;
        }

        setIsLoading(true);
        // Send message to the iframe to load the OBJ
        iframeRef.current.contentWindow.postMessage(
          {
            type: "LOAD_OBJ_FROM_URL",
            url: url,
          },
          "*"
        );
      } catch (error) {
        console.log("[ERROR_LOAD_OBJ]:", error);
        toast.error("Failed to load the model");
      }
    },
    [iframeRef, typedPath]
  );

  const loadGLB = useCallback(
    (url: string) => {
      if (!iframeRef?.current?.contentWindow || typedPath !== "animator") {
        console.error("Iframe not ready");
        return;
      }
      setModelStatus({ status: "loading", message: "Sending load request..." });

      // Send message to iframe to load GLB
      iframeRef.current.contentWindow.postMessage(
        {
          type: "LOAD_MODEL",
          payload: {
            url: url,
            fileExtension: "glb",
          },
        },
        "*"
      );
    },
    [iframeRef, typedPath]
  );

  return {
    loadObjFromUrl,
    isLoading,
    loadStatus,
    loadGLB,
    convertAndLoadModel,
    modelStatus,
  };
}

const path = {
  "/app": "home",
  "/app/playground": "playground",
  "/app/editor": "editor",
  "/app/animator": "animator",
} as const;

export function whichPath(
  value: string
): (typeof path)[keyof typeof path] | undefined {
  return path[value as keyof typeof path];
}
