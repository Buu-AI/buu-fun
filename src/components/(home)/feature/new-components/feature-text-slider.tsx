import { SliderIconSecondary } from "@/assets/icons/slider-icon-secondary";
import { features } from "@/components/(home)/feature/feature-data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject, useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

type TFeatureTextSlider = {
  index: number;
  progressRef: RefObject<number>;
};

export default function FeatureTextSlider({
  index,
  progressRef,
}: TFeatureTextSlider) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevProgressRef = useRef<number>(0);
  const lastRotationRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const activeItemRef = useRef<number>(0);
  const textAnimatedRef = useRef<Set<number>>(new Set());
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Initialize positions in a circle
  const updateCirclePositions = () => {
    const container = containerRef.current;
    if (!container) return;

    const divElements = gsap.utils.toArray(
      ".feature-content-container",
    ) as HTMLElement[];
    const totalItems = divElements.length;

    const radius = container.clientWidth / 2;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;

    divElements.forEach((item, idx) => {
      const angle = (idx / totalItems) * Math.PI * 2 - Math.PI / 2; // Start at top
      const x = centerX + radius * Math.cos(angle) - item.clientWidth / 2;
      const y = centerY + radius * Math.sin(angle) - item.clientHeight / 2;

      gsap.set(item, {
        x,
        y,
        rotate: (angle * 180) / Math.PI + 90, // Keep text upright
        opacity: idx === 0 ? 1 : 0,
      });
    });

    // Animate text for first item if not already animated
    animateTextForItem(0);
  };

  // Add resize listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial size
    setContainerSize({
      width: container.clientWidth,
      height: container.clientHeight,
    });

    // Initial layout
    updateCirclePositions();

    // Create ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;

        // Only update if size actually changed
        if (width !== containerSize.width || height !== containerSize.height) {
          setContainerSize({
            width,
            height,
          });

          // Update positions when container size changes
          updateCirclePositions();
        }
      }
    });

    // Start observing the container
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Reapply positions when container size changes
  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      updateCirclePositions();
    }
  }, [containerSize]);

  // Function to animate text for a specific item
  const animateTextForItem = (itemIndex: number) => {
    if (textAnimatedRef.current.has(itemIndex)) return;

    const words = gsap.utils.toArray(
      `#feature-title-${itemIndex} .words`,
    ) as HTMLElement[];

    gsap.set(words, {
      visibility: "hidden",
      opacity: 0,
      filter: "blur(4px)",
      y: 100,
    });

    gsap.to(words, {
      visibility: "visible",
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      ease: "power4.inOut",
      duration: 1.2,
      stagger: 0.15,
      onComplete: () => {
        textAnimatedRef.current.add(itemIndex);
      },
    });
  };

  // Split text helper function
  const splitText = (text: string, itemIndex: number) => {
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span
          className="words opacity-0 will-change-[filter_opacity_transform] relative"
          key={`${itemIndex}-${index}-${word}`}
        >
          {word}
        </span>
      );
    });
  };

  // Handle continuous scroll-based animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !progressRef.current) return;

    const updateBasedOnProgress = () => {
      if (progressRef.current === null || progressRef.current === undefined) {
        animationRef.current = requestAnimationFrame(updateBasedOnProgress);
        return;
      }

      const currentProgress = progressRef.current - 20;

      // Only update if progress changed
      if (currentProgress !== prevProgressRef.current) {
        const totalItems = features.length;

        // Convert progress (0-1) to rotation angle
        const progressAngle = (currentProgress / 100) * 360;

        // Calculate which items should be visible based on progress
        const normalizedProgress = (currentProgress / 100) * totalItems;
        const currentIdx = Math.floor(normalizedProgress) % totalItems;
        const nextIdx = (currentIdx + 1) % totalItems;
        const itemProgress =
          normalizedProgress - Math.floor(normalizedProgress); // 0-1 progress between current and next item

        // Apply rotation based on continuous progress
        gsap.to(container, {
          rotation: -progressAngle,
          duration: 0.1, // Quick update for smooth scrubbing
          ease: "none",
          overwrite: true,
          onComplete: () => {
            lastRotationRef.current = -progressAngle;
          },
        });

        // Update all items with counter-rotation to keep text upright
        const divElements = gsap.utils.toArray(
          ".feature-content-container",
        ) as HTMLElement[];
        divElements.forEach((item, idx) => {
          // Calculate opacity for smooth cross-fade between items
          let opacity = 0.1;
          if (idx === currentIdx) {
            opacity = 1 - itemProgress * 0.9; // Fade out from 1 to 0.3
          } else if (idx === nextIdx) {
            opacity = 0.3 + itemProgress * 0.9; // Fade in from 0.3 to 1
          }

          gsap.to(item, {
            rotation: progressAngle,
            duration: 0.1,
            ease: "none",
            opacity,
            overwrite: true,
          });
        });

        // Handle paragraph transitions - with smoother transitions
        const paragraphs = gsap.utils.toArray(
          ".feature-content-text-paragraph",
        ) as HTMLElement[];

        paragraphs.forEach((para, idx) => {
          if (idx === currentIdx) {
            gsap.to(para, {
              opacity: Math.max(0, 1 - itemProgress * 3.5), // Fade out faster
              y: itemProgress * 20,
              duration: 0.1,
              overwrite: true,
            });
          } else if (idx === nextIdx) {
            // Start animation for next item if needed
            if (itemProgress > 0.5 && activeItemRef.current !== nextIdx) {
              activeItemRef.current = nextIdx;
              animateTextForItem(nextIdx);
            }

            gsap.to(para, {
              opacity: Math.min(1, itemProgress * 8), // Fade in faster
              y: 40 - itemProgress * 40,
              duration: 0.1,
              overwrite: true,
            });
          } else {
            gsap.set(para, { opacity: 0, y: 40 });
          }
        });

        prevProgressRef.current = currentProgress;
      }

      animationRef.current = requestAnimationFrame(updateBasedOnProgress);
    };

    // Start the animation loop
    updateBasedOnProgress();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [progressRef.current, progressRef]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="w-[100%] max-md:px-2 aspect-square -bottom-[78%] md:-bottom-[80%] absolute mx-auto rounded-full">
        <div className="rounded-full aspect-square " ref={containerRef}>
          {features.map((item, itemIndex) => (
            <div
              key={`feature-text-key-${itemIndex}`}
              id={`feature-text-index-${itemIndex}`}
              className="feature-content-container absolute"
            >
              <div className="relative">
                <div className="flex items-center gap-2 justify-center flex-col text-center">
                  <h1
                    id={`feature-title-${itemIndex}`}
                    className="text-lg md:text-2xl font-medium tracking-tight"
                  >
                    <span className="relative">
                      {splitText(item.title, itemIndex)}
                    </span>
                  </h1>
                  <div>
                    <p
                      id={`feature-para-${itemIndex}`}
                      className="max-md:text-sm font-medium max-w-sm opacity-0 feature-content-text-paragraph"
                    >
                      {item.description}
                    </p>
                    <div className="flex items-center pt-2 justify-center">
                      <SliderIconSecondary index={index} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
