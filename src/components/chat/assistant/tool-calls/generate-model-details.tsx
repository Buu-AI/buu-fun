import { GenerateModelsDetails } from "@/gql/types/graphql";
import { getNumberOfFaces } from "@/lib/helpers/chat/tool";

type TGenerateModelDetails = {
  details: GenerateModelsDetails;
};

export default function GenerateModelDetails({
  details: { numberOfFaces, numberOfModels, texture },
}: TGenerateModelDetails) {
  return (
    <div>
      <div className="mt-4 grid grid-cols-2 gap-2 ">
        <div>
          <p className="text-xs font-medium ml-2 text-muted-foreground/60">
            Texture
          </p>
          <div className="mt-1 chat-prompt-bg">
            <p className="py-3   px-4 text-sm uppercase">{texture}</p>
          </div>{" "}
        </div>

        {numberOfModels ? (
          <div>
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              Number of models
            </p>
            <div className="mt-1 chat-prompt-bg">
              <p className="py-3   px-4 text-sm ">{numberOfModels}</p>
            </div>{" "}
          </div>
        ) : null}
        {numberOfFaces ? (
          <div>
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              Number of faces
            </p>
            <div className="mt-1 chat-prompt-bg">
              <p className="py-3   px-4 text-sm uppercase ">
                {getNumberOfFaces(numberOfFaces)}
              </p>
            </div>
          </div>
        ) : null}
      </div>{" "}
    </div>
  );
}
