"use client";
import { EDITOR_URL } from "@/config";
import useSendModels from "@/hooks/useSendModels";
import { useAuthentication } from "@/providers/account.context";
import { useRef } from "react";
import toast from "react-hot-toast";
import LibraryModels from "./component/library";

export default function Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { identityToken: accessToken } = useAuthentication();

  const {
    loadObjFromUrl,
    convertAndLoadModel: { mutate },
  } = useSendModels({
    iframeRef,
  });

  return (
    <main className="relative h-full w-full">
      <div className="absolute bottom-14 left-[10px] max-w-max h-4">
        <div className="flex flex-col gap-2 ">
          <LibraryModels
            modelChooser={(model) => {
              return model.obj?.optimizedMesh?.url;
            }}
            loaderCallback={(model, modelId) => {
              if (model) {
                loadObjFromUrl(model);
                return;
              }
              if (!accessToken) {
                toast.error("Please signin and try again");
                return;
              }
              mutate({
                accessToken,
                opts: {
                  mesh: "optimizedMesh",
                  modelId: modelId,
                  outputFormat: "obj",
                },
              });
            }}
          />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden rounded-lg">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={EDITOR_URL}
          title="SculptGL Editor"
        />
      </div>

      {/* Control Panel */}
      {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg space-y-2">
        <button
          onClick={handleLoadExampleObj}
          disabled={isLoading}
          className="block w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : "Load Example OBJ"}
        </button>

        <button
          onClick={handleLoadCustomObj}
          disabled={isLoading}
          className="block w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Load Custom OBJ URL
        </button>

        {loadStatus && (
          <div
            className={`text-sm p-2 rounded ${
              loadStatus.includes("Error")
                ? "bg-red-100 text-red-700"
                : loadStatus.includes("Successfully")
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
            }`}
          >
            {loadStatus}
          </div>
        )}
      </div> */}
    </main>
  );
}
