import { Metadata } from "next";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";

export function constructMetadata({
  title = "Buu - AI-Powered 3D Asset Creation & Animation",
  MetaHeadTitle = "Buu - AI-Powered 3D Asset Creation & Animation",
  description = "Create 3D assets, auto-rigged models, and animations with Buu. Turn prompts or images into pro 3D designs using AI at buu.fun!",
  OgImage = "/thumbnail.jpg",
  openGraph = {
    title: "Buu - Create 3D Assets & Animations with AI",
    description:
      "Explore Buu at buu.fun - the AI platform for generating 3D assets, auto-rigging, and animations from prompts or images. Simplify your 3D workflow!",
    type: "website",
    url: "https://www.buu.fun",
    images: [
      {
        url: "https://www.buu.fun/images/buu-ai-3d-preview.jpg",
        alt: "Buu - AI 3D Preview",
      },
    ],
    videos: [
      {
        url: "https://dkl5j4dbh1gr3.cloudfront.net/video/Kinetic_buu.mp4",
        secureUrl: "https://dkl5j4dbh1gr3.cloudfront.net/video/Kinetic_buu.mp4",
        type: "video/mp4",
        width: 1280,
        height: 720,
      },
    ],
  },
  keywords = [
    "AI 3D asset creation",
    "auto-rigging",
    "3D animation platform",
    "Buu",
    "AI-generated 3D models",
    "3D design tool",
    "prompt to 3D",
    "image to 3D",
  ],
  icons = "/logo.png",
  noIndex = false,
  ...rest
}: {
  title?: string;
  MetaHeadTitle?: string | TemplateString | null;
  description?: string;
  OgImage?: string;
  icons?: string;
  noIndex?: boolean;
  publishedTime?: Date;
} & Partial<Metadata>): Metadata {
  return {
    title: MetaHeadTitle ? MetaHeadTitle : title,
    description,
    keywords,
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OgImage],
    },
    icons,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}`),
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
    ...rest,
  };
}
