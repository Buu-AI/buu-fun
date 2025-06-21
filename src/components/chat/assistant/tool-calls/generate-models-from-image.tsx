import { GenerateModelsFromImageDetails } from "@/gql/types/graphql";
import { getNumberOfFaces } from "@/lib/helpers/chat/tool";
import Image from "next/image";

type TGenerateModelsFromImage = {
  details: GenerateModelsFromImageDetails;
};

export default function GenerateModelsFromImage({
  details: { image, numberOfFaces, numberOfModels, texture },
}: TGenerateModelsFromImage) {
  return (
    <div>
      <div key={image.url} className="">
        <p className="text-xs font-medium ml-2 mb-2 text-muted-foreground/60">
          Image
        </p>
        {image && "url" in image && image.url ? (
          <Image
            src={image.url}
            width={250}
            className="w-20 h-20"
            height={250}
            alt="hello"
          />
        ) : null}
      </div>
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
      </div>
    </div>
  );
}
