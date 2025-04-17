import "@/app/globals.css";
import NavigationalBar from "@/components/navbar/navigational-bar";
import Topbar from "@/components/navbar/top-bar";
import { constructMetadata } from "@/lib/construct-metadata";
import { GoogleAnalytics } from "@next/third-parties/google";

import Providers from "@/providers/auth-provider";
import NextUIProviders from "@/providers/next-ui-provder";
import ReactQueryProvider from "@/providers/react-query";
import StoreProvider from "@/providers/redux";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Toaster } from "react-hot-toast";
import SubscriptionDialog from "@/components/subscriptions/subscription-dialog";
import SplashCursorProvider from "./SplashCursorProvider";
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
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" />

      </head> */}

      <body className={` ${BricolageGrotesque.className} antialiased dark `}>
        <Toaster />
        <ReactQueryProvider>
          <StoreProvider>
            <NextUIProviders>
              <Providers>
                <div className="h-[100dvh] min-h-[100dvh] overflow-hidden relative max-h-[100dvh]   w-full">
                  <SplashCursorProvider/>
                  <div className=" w-[200px] h-[100px] bg-overlay-secondary  bg-[#69CCD5]  rounded-full right-[20%] absolute bottom-[-140px] -z-10 blur-[100px]  rotate-[-10deg]" />

                  <div className="grid-container w-full h-full">
                    <div className="main-body relative">
                      <div className="w-[176px] h-[334px] violet-gradient left-[45%]  rounded-full  absolute top-[5%] -z-10   md:block hidden  rotate-[-10deg]" />
                      {children}
                    </div>
                    <div className="top-bar">
                      <Topbar />
                    </div>
                    <div className="navigation ">
                      <NavigationalBar />
                    </div>
                  </div>
                </div>
                <SubscriptionDialog />
              </Providers>
            </NextUIProviders>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
      <GoogleAnalytics gaId="G-DDL82EPESF" />
    </html>
  );
}
