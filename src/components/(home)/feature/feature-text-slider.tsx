import { SliderIconSecondary } from "@/assets/icons/slider-icon-secondary";
import { features } from "@/components/(home)/feature/feature-data";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";
import SplitTextAnimation from "../elements/animated/split-text-animation";
gsap.registerPlugin(useGSAP);
type TFeatureTextSlider = {
  index: number;
  progressRef: RefObject<number>;
};

export default function FeatureTextSlider({ index }: TFeatureTextSlider) {
  const containerRef = useRef<HTMLDivElement>(null);
  // const elements = useRef<HTMLDivElement | null[]>([]);
  useEffect(() => {
    const divElements = gsap.utils.toArray(
      ".images-ref",
    ) as unknown[] as HTMLElement[];

    const container = containerRef.current;
    const ctx = gsap.context(() => {
      if (!container) return;
      const radius = container.clientWidth / 2;
      const centerX = container.clientWidth / 2;
      const centerY = container.clientHeight / 2;
      const totalItems = divElements.length;

      // Calculate rotation needed to bring the selected index to 0°
      // const angleOffset = (index / totalItems) * 360;

      divElements.map((item, idx) => {
        const angle = (idx / totalItems) * Math.PI * 2 - Math.PI / 2; // Start at top
        const x = centerX + radius * Math.cos(angle) - item.clientWidth / 2;
        const y = centerY + radius * Math.sin(angle) - item.clientHeight / 2;
        // rotate: (angle * 180) / Math.PI + 90
        // , rotate: (angle * 180) / Math.PI + 90
        gsap.set(item, {
          x,
          y,
          rotate: (angle * 180) / Math.PI + 90,
          opacity: 0,
        }); // Opposite rotation to keep text straight
      });
    });
    return () => {
      ctx.revert();
    };
    // Rotate container to bring selected index to top
  }, [index]);

  useGSAP(() => {
    const divElements = gsap.utils.toArray(
      ".images-ref",
    ) as unknown[] as HTMLElement[];
    const paragraphs = gsap.utils.toArray(
      ".feature-text-paragraph",
    ) as unknown[] as HTMLParagraphElement[];

    const totalItems = divElements.length;
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const angleOffset = (index / totalItems) * 360;

      if (!container) return;

      const CurrentItem = divElements[index];
      const currentPara = paragraphs[index];
      const restOfTheItem = divElements.filter(
        (item) => item.id !== CurrentItem.id,
      );
      const restOfPara = paragraphs.filter(
        (item) => currentPara.id !== item.id,
      );

      gsap.to(container, {
        rotate: -angleOffset,
        duration: 2,
        ease: "power2.out",
      });
      gsap.to(restOfTheItem, {
        rotate: angleOffset,
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      });

      gsap.to(CurrentItem, {
        rotate: angleOffset,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(restOfPara, {
        opacity: 0,
        duration: 0.5,
      });

      gsap.fromTo(
        currentPara,
        { opacity: 0, y: 20 },
        { opacity: 1, duration: 1.5, y: 0, delay: 0.7, ease: "power4.inOut" },
      );
    });
    return () => {
      ctx.revert();
    };
  }, [index]);
  return (
    <div className="w-full  h-full   relative overflow-hidden">
      <div className="w-[100%] max-md:px-2  aspect-square    -bottom-[80%] absolute mx-auto   rounded-full">
        <div
          className=" rounded-full  aspect-square border-green-300"
          ref={containerRef}
        >
          {features.map((item, ItemIndex) => {
            return (
              <div
                key={`feature-text-key-${item.title.trim()}`}
                id={`feature-text-index-${ItemIndex}`}
                className={cn("images-ref absolute opacity-0 ", {
                  "opacity-0": index !== ItemIndex,
                })}
              >
                <div className="relative ">
                  <div className="flex items-center gap-2 justify-center flex-col text-center">
                    <h1
                      className={cn(
                        "text-lg md:text-2xl font-medium tracking-tight",
                        {
                          "opacity-0": index !== ItemIndex,
                        },
                      )}
                    >
                      <SplitTextAnimation
                        isChanged={index !== ItemIndex}
                        text={item.title}
                      />
                    </h1>
                    <div>
                      <p
                        id={`feature-para-${ItemIndex}`}
                        // ease-in-out transition-opacity duration-700
                        className={cn(
                          " max-md:text-sm font-medium max-w-sm opacity-0  feature-text-paragraph",
                          {
                            // "opacity-0": index !== ItemIndex,
                          },
                        )}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
