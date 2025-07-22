"use client";
import { EDITOR_URL } from "@/config";
import { Suspense, useRef } from "react";
import LibraryWrapper from "./component/libraryWrapper";

export default function Page() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <main className="relative h-full w-full">
      <div className="w-full h-full overflow-hidden rounded-lg">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={EDITOR_URL}
          title="SculptGL Editor"
        />
      </div>
      <Suspense fallback={null}>
        <LibraryWrapper modelType="obj" iframeRef={iframeRef} />
      </Suspense>
    </main>
  );
}
