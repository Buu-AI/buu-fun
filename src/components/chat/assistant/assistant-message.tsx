import { cn } from "@/lib/utils";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { gsap } from "gsap";

type TAssistantMessage = {
  prompt?: string | null;
  isLastMessage: boolean;
};

export default function AssistantMessage({
  prompt,
  isLastMessage = false,
}: TAssistantMessage) {
  const markdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!markdownRef.current || !prompt || !isLastMessage) return;

    // Create a SplitText instance for all text-containing elements
    const split = new SplitText(
      markdownRef.current.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, li, raw-text"
      ),
      {
        type: "chars, words", // Split into characters and words
      }
    );

    // Create a GSAP timeline for the animation

    // Example animation: Staggered fade-in and slide-up for characters
    gsap.from(split.chars, {
      duration: 0.1,
      opacity: 0,
      y: 0,
      ease: "power4.inOut",
      stagger: 0.01,
    });
    
    // Cleanup: Revert SplitText and kill timeline on unmount or prop change
    return () => {
      split.revert();
    };
    // Re-run effect when prompt changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt]);
  return (
    <div className="">
      <div ref={markdownRef}>
        <ReactMarkdown
          unwrapDisallowed={true}
          components={{
            code: ({ children }) => <p>{children}</p>,
            pre: ({ children }) => <p>{children}</p>,
            // text: ({ children }) => (
            //   <span className="raw-text">{children}</span>
            // ),
          }}
          disallowedElements={["pre", "code"]}
          className={cn("prose prose-base all-white  text-white")}
          remarkPlugins={[remarkGfm]}
        >
          {prompt ?? ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}
