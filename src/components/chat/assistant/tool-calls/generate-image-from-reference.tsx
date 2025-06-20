import { GenerateModelsFromReferencesDetails } from "@/gql/types/graphql";
import { getNumberOfFaces } from "@/lib/helpers/chat/tool";
import Image from "next/image";

type TGenerateImageFromReference = {
  details: GenerateModelsFromReferencesDetails;
};

export default function GenerateImageFromReference({
  details: { images, instructions, numberOfFaces, numberOfModels, texture },
}: TGenerateImageFromReference) {
  return (
    <div>
      {images && images.length > 0 ? (
        <div>
          <p className="text-xs font-medium ml-2 mb-2 text-muted-foreground/60">
            Images
          </p>
          <div className="flex items-center flex-wrap gap-2">
            {images && images.length > 0
              ? images.map((item) => {
                  if (!item.url) return;
                  return (
                    <Image
                      key={`image-details-card-${item._id}`}
                      src={item.url}
                      width={250}
                      className="w-20 h-20 aspect-square object-cover"
                      height={250}
                      alt="hello"
                    />
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
      {instructions ? (
        <div className="mt-4">
          <p className="text-xs font-medium ml-2 text-muted-foreground/60">
            Prompt
          </p>
          <div className="min-h-20 pt-1 mt-1 chat-prompt-bg">
            <p className="py-2 mt-1  px-4 text-sm ">{instructions}</p>
          </div>
        </div>
      ) : null}
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
