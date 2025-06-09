import "@/app/globals.css";
import { constructMetadata } from "@/lib/construct-metadata";
import { GoogleAnalytics } from "@next/third-parties/google";

import SubscriptionDialog from "@/components/subscriptions/subscription-dialog";
import Providers from "@/providers/auth-provider";
import { ConfettiProvider } from "@/providers/confetti-provider";
import NextUIProviders from "@/providers/next-ui-provder";
import ReactQueryProvider from "@/providers/react-query";
import StoreProvider from "@/providers/redux";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
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
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/ac51e3b0cec858c94943219d/script.js"
      />

      <body className={` ${BricolageGrotesque.className} antialiased dark `}>
        <Toaster />

        <ReactQueryProvider>
          <StoreProvider>
            <NextUIProviders>
              <Providers>
                <ConfettiProvider>
                  <SplashCursorProvider />
                  {children}
                  <div id="integrated-terminal" />
                  <SubscriptionDialog />
                </ConfettiProvider>
              </Providers>
            </NextUIProviders>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
      <GoogleAnalytics gaId="G-DDL82EPESF" />
      <Script src="https://terminal.jup.ag/main-v3.js" data-preload />
    </html>
  );
}
