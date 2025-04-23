import "@/app/globals.css";
import CratePopover from "@/components/(home)/CratePopover";
import SmoothScrollWrapper from "@/components/(home)/scroll-smoother";
import { constructMetadata } from "@/lib/construct-metadata";
import HomeStoreProvider from "@/providers/home-redux";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
const BricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = constructMetadata({
  icons: "/logo.png",
  twitter: {
    card: "player",
    title: "Buu - AI-Driven 3D Asset & Animation Creator",
    images: ["https://www.buu.fun/images/buu-ai-3d-preview.jpg"],
    description:
      "Turn prompts or images into rigged 3D assets and animations with Buu's AI. Visit buu.fun for creators and designers!",
    players: [
      {
        playerUrl: "https://www.buu.fun/videos/buu-ai-demo-player.html",
        width: 1280,
        height: 720,
        streamUrl: "https://www.buu.fun/videos/buu-ai-demo.mp4",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.buu.fun",
  },
  authors: [{ name: "Buu" }],
  other: {
    video: "https://www.buu.fun/videos/buu-ai-demo.mp4",
    video_type: "video/mp4",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {/* uncomment for checking performance */}
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />
      </head> */}
     
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/ac51e3b0cec858c94943219d/script.js"
      />
      {/* overflow-hidden */}
      <body className={`${BricolageGrotesque.className} antialiased dark   `}>
        <HomeStoreProvider>
          <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        </HomeStoreProvider>
        <CratePopover/>
      </body>
      <GoogleAnalytics gaId="G-DDL82EPESF" />
    </html>
  );
}
