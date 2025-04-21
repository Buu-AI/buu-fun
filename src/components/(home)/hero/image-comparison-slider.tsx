"use client";
import { MutantAlien, MutantAlienWireFrame } from "@/assets/Image";
import MutantMesh from "@/assets/Image/home/mutant-mesh";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { createRef, useLayoutEffect, useRef, useState } from "react";
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
import FeatureTextSlider from "../feature/feature-text-slider";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

// Distance from center for the circular text slider

export default function ImageComparisonSlider() {
  const [position, setPosition] = useState(40);
  const [sliderInView, setSliderInView] = useState(false);
  const sliderInViewRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
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
      if (!featureContainerRef.current) return;

      const featureWidth = featureContainerRef.current.clientHeight;

      const ctx = gsap.context(() => {
        gsap.to(containerRef, {
          duration: 2,
          ease: "power2.inOut",
          stagger: 0.5,
          onUpdate: function () {
            setPosition((this.progress() + 0.4) * 100);
          },
          scrollTrigger: {
            end: featureWidth * features.length + window.innerHeight,
            pin: true,
            trigger: containerRef.current,
            start: "top top",
            toggleActions: "play none none reverse",
            onUpdate(event) {
              if (
                !sliderContainerRef.current ||
                !featureContainerRef.current ||
                !backgroundImageRef.current ||
                !bringYourIdeaContent.current
              ) {
                return;
              }

              const progress = event.progress * 100;
              sliderContainerRef.current.style.opacity = `${Math.round(100 - progress * 5)}%`;
              bringYourIdeaContent.current.style.opacity = `${Math.round(100 - progress * 5)}%`;
              backgroundImageRef.current.style.filter = `blur(${Math.round(progress * 0.1)}px)`;
              featureContainerRef.current.style.opacity = `${progress * 5}%`;
              featureContainerRef.current.style.zIndex = `0`;

              // Handle slider opacity
              // Handle z-index changes
              if (progress < 20) {
                if (sliderInViewRef.current) {
                  sliderInViewRef.current = false;
                  setSliderInView(false);
                }
              }
              if (progress > 20) {
                sliderContainerRef.current.style.zIndex = `0`;
              } else {
                sliderContainerRef.current.style.zIndex = `50`;
              }

              progressRef.current = progress;
              console.log(`INDEX:`, index);
              // if (progress <= 30 && index !== 0) {
              //   setIndex(0);
              //   setPrevIndex(0);
              //   console.log(`Setting index to 0 at progress ${progress}`);
              // } else
              if (progress >= 20) {
                bringYourIdeaContent.current.style.zIndex = "100";
                if (!sliderInViewRef.current) {
                  sliderInViewRef.current = true;
                  setSliderInView(true);
                }

                const adjustedProgress = progress - 20;
                // Divide the remaining 70% among features.length - 1 (since index 0 is already shown)
                const remainingFeatures = features.length - 1;
                const segmentSize = 60 / remainingFeatures;

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
    { dependencies: [], revertOnUpdate: true },
  );

  // Set up responsive positioning that works with any aspect ratio
  useLayoutEffect(() => {
    // These are the coordinates and dimensions from the design
    // Based on the 1920x1080 reference.
    const designWidth = 1920;
    const designHeight = 1080;

    // Position of character in the design (estimated from image)
    const characterCenterX = 940; // Center X position in original design
    const characterTopY = 110; // Top Y position in original design

    // Slider dimensions in design (41% of width)
    const designSliderWidth = designWidth * 0.415;
    const designSliderHeight = designHeight * 0.79; // Estimated from image

    // Function to update slider position based on current viewport
    const updateSliderPosition = () => {
      if (!sliderContainerRef.current || !containerRef.current) return;

      // Get current container dimensions
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Get background image dimensions as it's rendered
      const bgRatio = designWidth / designHeight;
      const containerRatio = containerWidth / containerHeight;

      let renderedBgWidth, renderedBgHeight;

      // Determine how the object-cover scales the background
      if (containerRatio > bgRatio) {
        // Background is wider than container's aspect ratio
        renderedBgWidth = containerWidth;
        renderedBgHeight = containerWidth / bgRatio;
      } else {
        // Background is taller than container's aspect ratio
        renderedBgHeight = containerHeight;
        renderedBgWidth = containerHeight * bgRatio;
      }

      // Calculate scaling factors based on how the background is actually rendered
      const scaleX = renderedBgWidth / designWidth;
      const scaleY = renderedBgHeight / designHeight;

      // Calculate offset if background is centered
      const offsetX = (containerWidth - renderedBgWidth) / 2;
      const offsetY = (containerHeight - renderedBgHeight) / 2;

      // Calculate the position where the character should be
      const characterX = characterCenterX * scaleX + offsetX;
      const characterY = characterTopY * scaleY + offsetY;

      // Calculate the slider dimensions based on the rendered background
      const sliderWidth = designSliderWidth * scaleX;

      // Position the slider centered on the character position
      sliderContainerRef.current.style.width = `${sliderWidth}px`;
      sliderContainerRef.current.style.height = `${designSliderHeight * scaleY}px`;
      sliderContainerRef.current.style.left = `${characterX - sliderWidth / 2.05}px`;
      sliderContainerRef.current.style.top = `${characterY}px`;
    };

    // Run on mount and resize
    updateSliderPosition();
    window.addEventListener("resize", updateSliderPosition);

    return () => window.removeEventListener("resize", updateSliderPosition);
  }, []);

  const direction = 1;

  useLayoutEffect(() => {
    const designWidth = 1920;
    const designHeight = 1080;

    // Position of character in the design (estimated from image)
    const characterCenterX = 960; // Center X position in original design
    const characterTopY = 150; // Top Y position in original design

    // Slider dimensions in design (41% of width)
    const designSliderWidth = designWidth * 0.3281;
    const designSliderHeight = designHeight * 0.74; // Estimated from image

    // Function to update slider position based on current viewport
    const updateSliderPosition = () => {
      if (!featureContainerRef.current || !containerRef.current) return;

      // Get current container dimensions
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Get background image dimensions as it's rendered
      const bgRatio = designWidth / designHeight;
      const containerRatio = containerWidth / containerHeight;

      let renderedBgWidth, renderedBgHeight;

      // Determine how the object-cover scales the background
      if (containerRatio > bgRatio) {
        // Background is wider than container's aspect ratio
        renderedBgWidth = containerWidth;
        renderedBgHeight = containerWidth / bgRatio;
      } else {
        // Background is taller than container's aspect ratio
        renderedBgHeight = containerHeight;
        renderedBgWidth = containerHeight * bgRatio;
      }

      // Calculate scaling factors based on how the background is actually rendered
      const scaleX = renderedBgWidth / designWidth;
      const scaleY = renderedBgHeight / designHeight;

      // Calculate offset if background is centered
      const offsetX = (containerWidth - renderedBgWidth) / 2;
      const offsetY = (containerHeight - renderedBgHeight) / 2;

      // Calculate the position where the character should be
      const characterX = characterCenterX * scaleX + offsetX;
      const characterY = characterTopY * scaleY + offsetY;

      // Calculate the slider dimensions based on the rendered background
      const sliderWidth = designSliderWidth * scaleX;

      // Position the slider centered on the character position
      featureContainerRef.current.style.width = `${sliderWidth}px`;
      featureContainerRef.current.style.height = `${designSliderHeight * scaleY}px`;
      featureContainerRef.current.style.left = `${characterX - sliderWidth / 2}px`;
      featureContainerRef.current.style.top = `${characterY}px`;
    };

    // Run on mount and resize
    updateSliderPosition();

    window.addEventListener("resize", updateSliderPosition);

    return () => {
      window.removeEventListener("resize", updateSliderPosition);
    };
  }, []);

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
            className="w-full h-full"
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
      </section>

      <section
        id="features"
        ref={featureContainerRef}
        className="relative opacity-0 z-50 max-md:px-4"
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

        <div className="w-[100%] rounded-full h-[50%] bg-[#0C0C0D] blur-[150px] absolute left-[-10%] bottom-[-30%] z-30" />
        <div className="relative overflow-visible border-white/20 w-full h-full  border-2 rounded-2xl">
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
                className="rounded-2xl object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Image morphing container */}
          <AnimatePresence mode="popLayout" initial={false}>
            <div className="absolute bottom-[0%] -left-[17%] w-full h-full">
              <motion.div
                key={`image-${index}`}
                custom={direction}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
                className="absolute w-[130%] h-full "
              >
                <Image
                  src={features[index].image}
                  alt="Alien Image"
                  width={1920}
                  height={1080}
                  className="z-10 relative object-contain w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </AnimatePresence>

          <motion.div className="absolute top-0 left-0 h-full w-full z-50 overflow-hidden pointer-events-none">
            <div className="flip absolute bottom-0  w-full h-[6%]">
              {sliderInView ? <ArchGradient /> : null}
            </div>
            <div className="w-full relative h-full z-50">
              <AnimatePresence mode="wait" initial={false}>
                <FeatureTextSlider progressRef={progressRef} index={index} />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
      <div ref={bringYourIdeaContent} className="w-full h-full">
        <AnimatedBringYourIdeas />
      </div>
    </div>
  );
}
