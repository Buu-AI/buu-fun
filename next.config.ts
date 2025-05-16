import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "v3.fal.media",
      },
      {
        // protocol: "https",
        hostname: "*.r2.cloudflarestorage.com",
      },
      {
        // protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        // protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        // protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        hostname: "cdn.buu.fun",
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
