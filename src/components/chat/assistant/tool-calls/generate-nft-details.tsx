import { GenerateNftDetails } from "@/gql/types/graphql";
import { capitalizeFirstLetter } from "@/lib/utils";

type TGenerateNftDetails = {
  details: GenerateNftDetails;
};

export default function GenerateNftToolDetails({
  details: { description, name, attributes, symbol },
}: TGenerateNftDetails) {
  const NFTAttribute = attributes?.map((item, index) => {
    return (
      <div
        key={`nft-attribute-tool-details-${index}-${item.trait_type}-${item.value}`}
      >
        <p className="text-xs font-medium ml-2 text-muted-foreground/60">
          {capitalizeFirstLetter(item.trait_type)}
        </p>
        <div className="mt-1 chat-prompt-bg">
          <p className="py-3 px-4 text-sm uppercase">
            {capitalizeFirstLetter(item.value)}
          </p>
        </div>{" "}
      </div>
    );
  });

  return (
    <div>
      {description ? (
        <div className="mt-4">
          <p className="text-xs font-medium ml-2 text-muted-foreground/60">
            Description
          </p>
          <div className="min-h-20 pt-1 mt-1 chat-prompt-bg">
            <p className="py-2 mt-1  px-4 text-sm ">{description}</p>
          </div>
        </div>
      ) : null}
      <div className="mt-4 grid grid-cols-2 gap-2 ">
        <div>
          <p className="text-xs font-medium ml-2 text-muted-foreground/60">
            Name
          </p>
          <div className="mt-1 chat-prompt-bg">
            <p className="py-3   px-4 text-sm uppercase">{name}</p>
          </div>{" "}
        </div>
        {symbol ? (
          <div>
            <p className="text-xs font-medium ml-2 text-muted-foreground/60">
              Number of models
            </p>
            <div className="mt-1 chat-prompt-bg">
              <p className="py-3   px-4 text-sm ">{symbol}</p>
            </div>{" "}
          </div>
        ) : null}
        {NFTAttribute}
      </div>{" "}
    </div>
  );
}
