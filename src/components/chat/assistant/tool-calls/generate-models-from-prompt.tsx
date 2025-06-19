import { GenerateModelsFromPromptDetails as TGenerateModelsFromPromptDetails } from "@/gql/types/graphql";
import { getNumberOfFaces } from "@/lib/helpers/chat/tool";

type TGenerateModelsFromPrompt = {
  details: TGenerateModelsFromPromptDetails;
};

export default function GenerateModelsFromPrompt({
  details: { prompt, numberOfFaces, numberOfModels, style, texture },
}: TGenerateModelsFromPrompt) {
  return (
    <div>
      <div>
        <p className="text-xs font-medium ml-2 text-muted-foreground/60">
          Prompt
        </p>
        <div className="min-h-20 pt-1 mt-1 chat-prompt-bg">
          <p className="py-2 mt-1  px-4 text-sm ">{prompt}</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 ">
          {style ? (
            <div>
              <p className="text-xs font-medium ml-2 text-muted-foreground/60">
                Style
              </p>
              <div className="mt-1 chat-prompt-bg">
                <p className="py-3   px-4 text-sm ">{style}</p>
              </div>{" "}
            </div>
          ) : null}
          <div>
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              Texture
            </p>
            <div className="mt-1 chat-prompt-bg">
              <p className="py-3   px-4 text-sm uppercase">{texture}</p>
            </div>{" "}
          </div>
          <div>
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              Number of models
            </p>
            <div className="mt-1 chat-prompt-bg">
              <p className="py-3   px-4 text-sm ">{numberOfModels}</p>
            </div>{" "}
          </div>
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
        </div>
      </div>
    </div>
  );
}
