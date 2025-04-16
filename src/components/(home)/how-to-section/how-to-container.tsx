"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import ContentContainer from "./content-container";
import MobileMockCard from "./mobile-mock-card";

export default function HowToContainer() {
  const howToRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [showModel, setShowModel] = useState(false);
  const isModelShown = useRef(false);
  const cleanup = useRef<() => void>(() => {});

  // Memoized content to prevent unnecessary re-renders
  const contentSections = [
    {
      title: "Describe",
      index: "01",
      subTitle: (
        <>
          Input <br />
          Your Idea
        </>
      ),
      subDescription: "",
    },
    {
      title: "Customize",
      index: "02",
      subTitle: (
        <>
          Customize <br />
          Your Model
        </>
      ),
      subDescription: "",
    },
    {
      title: "Integrate",
      index: "03",
      subTitle: (
        <>
          Export <br />
          and Integrate
        </>
      ),
      subDescription: "",
    },
  ];

  // Setup ScrollTrigger with proper cleanup
  const setupScrollTrigger = useCallback(() => {
    // Clean up previous instances first
    cleanup.current();

    const container = howToRef.current;
    const mobileElement = mobileRef.current;
    if (!container || !mobileElement) return;

    // Calculate viewport width
    const viewportWidth = window.innerWidth;

    // Get total width of all sections
    const sections = Array.from(container.children) as HTMLElement[];
    const totalSectionsWidth = sections.reduce(
      (acc, section) => acc + section.offsetWidth,
      0,
    );

    // Calculate the endpoint - don't allow overscrolling
    const endpoint = Math.max(0, totalSectionsWidth - viewportWidth);

    // Create animation context
    const ctx = gsap.context(() => {
      gsap.to(container, {
        x: -endpoint,
        ease: "none",
        scrollTrigger: {
          trigger: ".trig",
          start: "bottom bottom",
          end: `+=${endpoint + viewportWidth * 2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: (progress) => {
              if (sections.length <= 1) return progress;
              const index = Math.round(progress * (sections.length - 1));
              return index / (sections.length - 1);
            },
            inertia: true,
            duration: 0.2,
            ease: "sine.inOut",
          },
          onUpdate: (self) => {
            if (!mobileElement) return;

            const progress = self.progress;

            // Only update state when crossing threshold
            if (progress > 0.3 && !isModelShown.current) {
              isModelShown.current = true;
              setShowModel(true);
            } else if (progress <= 0.3 && isModelShown.current) {
              isModelShown.current = false;
              setShowModel(false);
            }

            // Apply rotation directly without requestAnimationFrame
            const rotateX = gsap.utils.mapRange(0, 1, -20, 20, progress);
            const rotateY = gsap.utils.mapRange(1, 0, -25, 25, progress);
            const rotateZ = gsap.utils.mapRange(1, 0, -15, 15, progress);

            gsap.to(mobileElement, {
              rotateX,
              rotateY,
              rotateZ,
              duration: 0.2,
              ease: "sine.inOut",
              overwrite: true,
            });
          },
        },
      });
    });

    cleanup.current = () => {
      ctx.revert();
    };
  }, []);

  // Optimized resize handler with debounce
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        setupScrollTrigger();
      }, 200);
    };

    // Initial setup
    setupScrollTrigger();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);

      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      cleanup.current();
    };
  }, [setupScrollTrigger]);

  return (
    <div className="h-screen trig overflow-hidden relative">
      {/* Horizontal Scroll Section */}
      <div ref={howToRef} className="how-to-container flex w-max">
        {contentSections.map((section) => (
          <ContentContainer
            key={section.index}
            subDescription={section.subDescription}
            subTitle={section.subTitle}
            index={section.index}
            title={section.title}
          />
        ))}
      </div>

      {/* Mobile Image with Rotation */}
      <div className="absolute w-full h-full -top-12 left-0 flex justify-center items-center">
        <div
          ref={mobileRef}
          className="max-h-[584px] p-2 border-2 border-muted-foreground/20 rounded-[40px] flex h-full w-full max-w-[300px]"
        >
          <MobileMockCard showModel={showModel} />
        </div>
      </div>
    </div>
  );
}
