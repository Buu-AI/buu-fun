"use client";
import { ANIMATOR_URL } from "@/config";
import { Suspense, useRef } from "react";
import LibraryWrapper from "../editor/component/libraryWrapper";

export default function AnimatorPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <main className="relative h-full w-full">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <iframe
          title="Animator page"
          ref={iframeRef}
          className="w-full h-full"
          src={ANIMATOR_URL}
        />
      </div>
      <Suspense fallback={null}>
        <LibraryWrapper iframeRef={iframeRef} />
      </Suspense>
    </main>
  );
}
