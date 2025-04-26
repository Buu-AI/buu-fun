"use client";
import { MutantAlien, MutantAlienWireFrame } from "@/assets/Image";
import MutantMesh from "@/assets/Image/home/mutant-mesh";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { createRef, useRef, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { ArchGradient } from "../feature/arch-gradient";
import { features } from "../feature/feature-data";
import {
  FeatureRobloxTopBar,
  ScanningOverlay,
} from "../feature/feature-top-bar";
import { AnimatedBringYourIdeas } from "./bring-ideas";
import SliderHandle from "./slider-handle";
// import FeatureTextSlider from "@/app/(landing)/(navigated)/test/feature-arch";
import useResponsivePositioning, {
  DesignConfig,
} from "@/hooks/use-responsive-positioning";
import { useMediaQuery } from "@mantine/hooks";
import FeatureTextSliderV2 from "../feature/new-components/feature-text-slider";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// Distance from center for the circular text slider

export default function ImageComparisonSlider() {
  const [position, setPosition] = useState(40);
  const [sliderInView, setSliderInView] = useState(false);
  const sliderInViewRef = useRef(false);
  const is650 = useMediaQuery("(min-width: 650px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const ReactCompareSliderRef = useRef<HTMLDivElement>(null);
  const featureImageRef = useRef<HTMLDivElement>(null);
  const featureContainerRef = useRef<HTMLElement>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const bringYourIdeaContent = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef(0);

  // Create refs for feature text elements
  // const textSliderContainerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([]);

  // Initialize refs array if empty
  if (textRefs.current.length === 0) {
    textRefs.current = Array(features.length)
      .fill(null)
      .map(() => createRef<HTMLDivElement>());
  }

  useGSAP(
    () => {
      if (!sliderContainerRef.current) return;

      const featureWidth = sliderContainerRef.current.clientHeight;

      const ctx = gsap.context(() => {
        gsap.to(containerRef, {
          duration: 2,
          ease: "power2.inOut",
          stagger: 0.5,
          onUpdate: function () {
            setPosition((this.progress() + 0.4) * 100);
          },
          scrollTrigger: {
            end: featureWidth * features.length + window.innerWidth * 2,
            pin: true,
            trigger: containerRef.current,
            start: "top top",
            toggleActions: "play none none reverse",

            onUpdate(event) {
              const progress = event.progress * 100;
              progressRef.current = progress;

              if (
                !sliderContainerRef.current ||
                !featureContainerRef.current ||
                !backgroundImageRef.current ||
                !bringYourIdeaContent.current ||
                !ReactCompareSliderRef.current ||
                !featureImageRef.current
              ) {
                return;
              }

              ReactCompareSliderRef.current.style.opacity = is650
                ? `${Math.round(100 - progress * 5)}%`
                : "0";

              featureImageRef.current.style.opacity = is650
                ? `${progress * 5}%`
                : "100";

              bringYourIdeaContent.current.style.opacity = `${Math.round(100 - progress * 10)}%`;

              backgroundImageRef.current.style.filter = `blur(${Math.round(progress * 0.1)}px)`;
              featureContainerRef.current.style.opacity = `${progress * 5}%`;
              featureContainerRef.current.style.zIndex = `0`;

              // Handle slider opacity
              // Handle z-index changes
              if (progress < 15) {
                if (sliderInViewRef.current) {
                  sliderInViewRef.current = false;
                  setSliderInView(false);
                }
              }
              if (progress > 20) {
                // sliderContainerRef.current.style.zIndex = `0`;
              } else {
                // sliderContainerRef.current.style.zIndex = `50`;
              }

              // if (progress <= 30 && index !== 0) {
              //   setIndex(0);
              //   setPrevIndex(0);
              //   console.log(`Setting index to 0 at progress ${progress}`);
              // } else
              if (progress >= 15) {
                bringYourIdeaContent.current.style.zIndex = "50";
                if (!sliderInViewRef.current) {
                  sliderInViewRef.current = true;
                  setSliderInView(true);
                }

                const adjustedProgress = progress - 20;
                // Divide the remaining 70% among features.length - 1 (since index 0 is already shown)
                const remainingFeatures = features.length - 1;
                const segmentSize = 70 / remainingFeatures;

                // Calculate which feature index we should be on (starting from index 1)
                const mappedIndex = Math.min(
                  features.length - 1,
                  Math.floor(adjustedProgress / segmentSize),
                );

                // Only update state if index is actually changing
                if (mappedIndex === 0) {
                  setIndex(0);
                  return;
                }
                if (mappedIndex > 0 && mappedIndex !== index) {
                  setIndex(mappedIndex);
                }
              }
            },
          },
        });
      }, containerRef);

      return () => {
        ctx.revert();
      };
    },
    { dependencies: [is650], revertOnUpdate: true },
  );

  // Set up responsive positioning that works with any aspect ratio
  const designConfig: DesignConfig = {
    designWidth: 1920,
    designHeight: 1080,
  };
  useResponsivePositioning(containerRef, sliderContainerRef, designConfig, {
    centerX: 940,
    topY: 110,
    elementWidth: designConfig.designWidth * 0.415,
    elementHeight: designConfig.designHeight * 0.79,
    offsetXFactor: 2.05,
  });

  useResponsivePositioning(containerRef, featureContainerRef, designConfig, {
    centerX: 960,
    topY: 150,
    elementWidth: designConfig.designWidth * 0.3281,
    elementHeight: designConfig.designHeight * 0.74,
  });
  const direction = 1;

  // Define enhanced variants for smoother animations
  const backgroundVariants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing for smoother transition
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.2, // Match the duration of the entering animation
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  // Enhanced image variants for morphing effect
  const imageVariants: Variants = {
    initial: {
      opacity: 0.3,
      // transition: { delay: 1 },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0.2,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div ref={containerRef} className="relative h-[100vh] w-full">
      <div
        ref={backgroundImageRef}
        className="h-full absolute top-0 left-0 w-full "
      >
        <AnimatePresence initial={true} mode="popLayout">
          <motion.div
            key={`${features[index].background}`}
            initial={{
              opacity: 0.2,
            }}
            animate={{
              transition: { duration: 1.5, ease: "easeInOut" },
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
            className="w-full relative  h-full"
          >
            <Image
              ref={imageRef}
              src={features[index].background}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              alt="Home page background"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <section
        id="bring-your-ideas"
        ref={sliderContainerRef}
        className="absolute z-10 overflow-visible"
      >
        <div
          ref={featureImageRef}
          className="absolute top-0 left-0 max-md:opacity-100 opacity-0 w-full h-full"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {features[index].autoRig ? (
              <motion.div
                key={`auto-rig-${index}`}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                className="w-[115%] z-50 h-full bottom-0 absolute "
              >
                <MutantMesh />
              </motion.div>
            ) : null}
          </AnimatePresence>
          <AnimatePresence mode="popLayout" initial={false}>
            <div className="absolute top-0 left-0  w-full h-full">
              <motion.div
                key={`image-${index}`}
                custom={direction}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
                className=" w-full h-full "
              >
                <Image
                  src={features[index].image}
                  alt="Alien Image"
                  width={1920}
                  height={1080}
                  className="z-0 relative object-contain w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </AnimatePresence>
          <div className="relative w-full h-full ">
            {/* <FeatureTextSliderV2 progressRef={progressRef} index={index} /> */}
            <motion.div className="absolute top-0 left-0 h-full w-full z-50 overflow-hidden pointer-events-none">
              <div className="flip absolute bottom-2  w-full h-full aspect-square max-h-[6%]">
                {sliderInView ? <ArchGradient /> : null}
              </div>
              <div className="w-full relative h-full z-[100]">
                <AnimatePresence mode="wait" initial={false}>
                  <FeatureTextSliderV2
                    progressRef={progressRef}
                    index={index}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="max-md:hidden" ref={ReactCompareSliderRef}>
          <ReactCompareSlider
            className="w-full h-full z-[20] overflow-visible"
            style={{
              overflow: "visible",
            }}
            changePositionOnHover
            handle={<SliderHandle />}
            position={position}
            itemTwo={
              <ReactCompareSliderImage
                width={"auto"}
                height={"auto"}
                src={MutantAlienWireFrame.src}
                alt="Wireframe version"
                className="w-full h-full"
              />
            }
            itemOne={
              <ReactCompareSliderImage
                src={MutantAlien.src}
                width={"auto"}
                height={"auto"}
                alt="Full color version"
                className="w-full h-full relative "
              />
            }
          />
        </div>
      </section>

      <section
        id="features"
        ref={featureContainerRef}
        className="relative opacity-0 "
      >
        {/* <AnimatePresence mode="popLayout" initial={false}>
          {features[index].autoRig ? (
            <motion.div
              key={`auto-rig-${index}`}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1, transition: { duration: 0.8 } }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              className="w-[115%] z-50 h-full bottom-0 absolute "
            >
              <MutantMesh />
            </motion.div>
          ) : null}
        </AnimatePresence> */}

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          className="absolute top-[-3%] mx-auto w-full z-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`topbar-${features[index].scan ? "roblox" : "standard"}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              {features[index].scan ? <FeatureRobloxTopBar /> : null}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="w-[100%] rounded-full h-[50%] bg-[#0C0C0D] blur-[150px] absolute left-[-10%] bottom-[-30%] z-[200]" />
        <div className="relative overflow-visible border-white/20 w-full h-full  border md:border-2 rounded-2xl">
          {/* <motion.div
            style={{
              zIndex: 102,
            }}
            className="absolute  h-full w-full z-[200] overflow-hidden pointer-events-none"
          >
            <div className="flip absolute bottom-0  w-full h-[6%]">
              {sliderInView ? <ArchGradient /> : null}
            </div>
            <div className="w-full relative h-full z-[200]">
              <AnimatePresence mode="wait" initial={false}>
                <FeatureTextSlider progressRef={progressRef} index={index} />
              </AnimatePresence>
            </div>
          </motion.div> */}
          <AnimatePresence mode="popLayout" initial={false}>
            {features[index].scan ? (
              <motion.div
                key={`scanning-overlay-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                className="z-20 w-full h-full absolute top-0 left-0"
              >
                <ScanningOverlay />
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`bgExcluded-${features[index].bgExcluded}`}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={backgroundVariants}
              className="w-full h-full "
            >
              <Image
                width={1080}
                height={1080}
                src={features[index].bgExcluded}
                alt="Wireframe version"
                className="rounded-2xl "
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <div ref={bringYourIdeaContent} className="w-full h-full">
        <AnimatedBringYourIdeas />
      </div>
    </div>
  );
}
