"use client";
import ChevronArrow from "@/assets/icons/chevron-arrow";
import { cn } from "@/lib/utils";
import { PromptPayload } from "@/types/chat/chat-types";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import JsonViewer from "./json-viewer";
type TAssistantMessageShowDetailToolCall = {
  payload: PromptPayload;
};
export default function AssistantMessageShowDetailToolCall({
  payload,
}: TAssistantMessageShowDetailToolCall) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (detailsRef.current && contentRef.current) {
      // First set height to auto to measure it
      if (isOpen) {
        // Set height to auto and visibility hidden to measure the natural height
        gsap.set(detailsRef.current, {
          height: "auto",
          visibility: "hidden",
          opacity: 0,
          overflow: "hidden",
        });

        // Capture the natural height
        const naturalHeight = detailsRef.current.offsetHeight;

        // Reset to starting position
        gsap.set(detailsRef.current, {
          height: 0,
          visibility: "visible",
          //   padding: 0,
        });

        // Now animate to the exact height we measured
        gsap.to(detailsRef.current, {
          height: naturalHeight,
          opacity: 1,
          //   paddingTop: 20,
          //   paddingBottom: 20,
          duration: 0.5,
          ease: "power3.out",
          clearProps: "all", // Clean up inline styles after animation
          onComplete: () => {
            gsap.set(detailsRef.current, {
              height: "auto",
              overflow: "visible",
            });
          },
        });
      } else {
        // For closing, capture current height first
        const currentHeight = detailsRef.current.offsetHeight;

        // Set to that height explicitly
        gsap.set(detailsRef.current, {
          height: currentHeight,
          overflow: "hidden",
        });

        // Then animate to zero
        gsap.to(detailsRef.current, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.4,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };
  const payloadKeys = typeof payload === "object" ? Object.keys(payload) : [];

  return (
    <div className="">
      {/* button */}
      <button className="flex items-center gap-1" onClick={toggleDetails}>
        <div
          className={cn(`w-4 h-4 transition-transform duration-300 rotate-0`, {
            "-rotate-180": isOpen,
          })}
        >
          <ChevronArrow />
        </div>
        <p>{isOpen ? "Hide details" : "Show details"}</p>
      </button>

      <div
        ref={detailsRef}
        className="bg-show-detailed-card w-full rounded-lg"
        style={{
          height: 0,
          opacity: 0,
          overflow: "hidden",
        }}
      >
        <div ref={contentRef} className="px-5 py-5">
          <JsonViewer data={payload} maxHeight="30rem" />
        </div>
      </div>
    </div>
  );
}
