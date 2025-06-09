"use client";

import * as Sentry from "@sentry/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../app/globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);
  const router = useRouter();
  const handleGoHome = () => {
    router.push("/app");
    // window.location.href = "/";
  };

  return (
    <html className="dark">
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Overlays */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-overlay-primary rounded-full blur-[200px] opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-overlay-secondary rounded-full blur-[200px] opacity-15"></div>
        </div>

        {/* Main Error Container */}
        <div className="bg-buu-table border-buu rounded-2xl shadow-buu-inner max-w-lg w-full p-8 text-center relative z-10 backdrop-blur-10">
          {/* Animated Error Icon */}
          <div className="relative mb-8">
            <div className="text-7xl animate-bounce">⚠️</div>
            <div className="absolute inset-0 animate-pulse">
              <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Title with Gradient Text */}
          <h1 className="text-4xl font-bold mb-4 grayish-text-gradient">
            Something went wrong
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
            We encountered an unexpected error. Our team has been automatically
            notified and we&apos;re working to resolve this issue.
          </p>

          {/* Error Details (Collapsible) */}
          <details className="bg-buu-secondary border-buu rounded-lg p-4 mb-8 text-left shadow-buu-secondary">
            <summary className="cursor-pointer font-semibold text-red-400 hover:text-red-300 transition-colors flex items-center gap-2">
              <span className="text-sm">🔍</span>
              Technical Details
            </summary>
            <div className="mt-4 space-y-3">
              <div className="bg-buu-foreground border-buu rounded-lg p-3">
                <p className="text-sm text-red-300 mb-2">
                  <strong className="text-red-200">Error:</strong>{" "}
                  <span className="text-red-400 font-mono text-xs">
                    {error.message || "Unknown error occurred"}
                  </span>
                </p>
                {error.digest && (
                  <p className="text-sm text-red-300 mb-2">
                    <strong className="text-red-200">Error ID:</strong>
                    <code className="bg-red-950/50 text-red-300 px-2 py-1 rounded text-xs ml-2 font-mono border border-red-800/30">
                      {error.digest}
                    </code>
                  </p>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                This information helps our developers identify and fix the issue
                quickly.
              </p>
            </div>
          </details>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={reset}
                className="bg-buu-secondary-foreground w-full shadow-buu-secondary-button border-buu px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-buu-muted hover:-translate-y-0.5 flex justify-center items-center gap-2 text-muted-foreground hover:text-white"
              >
                <span className="text-lg">↻</span>
                Refresh
              </button>
            </div>

            <button
              onClick={handleGoHome}
              className="w-full  text-black bg-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-buu-muted hover:-translate-y-0.5 shadow-buu-pill"
            >
              Return Home
            </button>
          </div>

          {/* Report Issue Section */}

          {/* Footer message */}
          <div className="mt-6 pt-4 ">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Error automatically reported • {new Date().toLocaleString()}
            </p>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="fixed bottom-0 left-0 right-0 h-32 footer-gradient pointer-events-none"></div>
      </body>
    </html>
  );
}
