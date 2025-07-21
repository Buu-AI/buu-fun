import { Suspense, useRef } from "react";
import LibraryWrapper from "./component/libraryWrapper";
import { EDITOR_URL } from "@/config";

type TEditorWrapper = {};

export default function EditorWrapper({}: TEditorWrapper) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <main className="relative h-full w-full">
      <Suspense fallback={null}>
        <LibraryWrapper iframeRef={iframeRef} />
      </Suspense>
      <div className="w-full h-full overflow-hidden rounded-lg">
        <iframe
          ref={iframeRef}
          className="w-full h-full"
          src={EDITOR_URL}
          title="SculptGL Editor"
        />
      </div>
    </main>
  );
}
