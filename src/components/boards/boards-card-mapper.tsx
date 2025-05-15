import { GetUserShareableBoardQuery } from "@/gql/types/graphql";
import BoardCards, {
  SingleImageLayout,
  ThreeColumnImageLayout,
  TwoColumnImageLayout,
} from "./boards-card";
type ShareableBoardPageType = Extract<
  GetUserShareableBoardQuery["getUserShareableBoard"],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { items: any }
>;

type ShareableBoardType = ShareableBoardPageType["items"][number];

type TIdeas = ShareableBoardType;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function clearUndefinedOrNull(value: any | null | undefined): boolean {
  return typeof value !== "undefined" || value !== null;
}

export default function BoardsCardMapper({
  ideas,
  title,
}: {
  ideas: TIdeas;
  title: string;
}) {
  const images = ideas.models
    .map((item) => item?.image?.url)
    .filter((fv) => typeof fv === "string");

  const imageCmp = getImageComponent({ images });
  return (
    <BoardCards idea={ideas.models.length} images={imageCmp} title={title} />
  );
}

function getImageComponent({ images }: { images: string[] }) {
  if (!images.length) return null;
  if (images.length === 1) {
    return <SingleImageLayout alt={"Single image"} url={images[0]} />;
  }
  if (images.length === 2) {
    return (
      <TwoColumnImageLayout
        media={[
          { alt: "Dual Image layout image 1", url: images[0] },
          { alt: "Dual Image layout image 2", url: images[1] },
        ]}
      />
    );
  }
  return (
    <ThreeColumnImageLayout
      media={[
        { alt: "Dual Image layout image 1", url: images[0] },
        { alt: "Dual Image layout image 2", url: images[1] },
        { alt: "Dual Image layout image 2", url: images[2] },
      ]}
    />
  );
}
