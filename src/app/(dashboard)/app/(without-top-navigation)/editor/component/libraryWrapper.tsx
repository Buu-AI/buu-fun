import useSendModels from "@/hooks/useSendModels";
import LibraryModels from "./library";
import { RefObject } from "react";
import { useAuthentication } from "@/providers/account.context";
import toast from "react-hot-toast";

type TLibraryWrapper = {
  iframeRef: RefObject<HTMLIFrameElement | null>;
};

export default function LibraryWrapper({ iframeRef }: TLibraryWrapper) {
  const { identityToken: accessToken } = useAuthentication();

  const {
    loadObjFromUrl,
    convertAndLoadModel: { mutate },
  } = useSendModels({
    iframeRef,
  });
  return (
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
  );
}
