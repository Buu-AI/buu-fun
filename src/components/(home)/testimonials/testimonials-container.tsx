"use client";
import EmojiHappy from "@/assets/icons/emoji-happy";
import { profilePicture } from "@/lib/dice-bear";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { testimonialsData } from "./testimonial-data";

// if (window !== undefined) {
//   gsap.registerPlugin(useGSAP);
// }
const SLIDE_CHANGE_IN = 6000;
export default function TestimonialsContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef(null);

  const splitText = useMemo(() => {
    const text = testimonialsData[currentIndex]?.testimonial || "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span
          className="word opacity-0 will-change-[filter_opacity] "
          key={`${index}-${word}`}
        >
          {word}
        </span>
      );
    });
  }, [currentIndex]);

  useGSAP(() => {
    if (!progressRef.current) return;
    const totalDuration = testimonialsData.length * (SLIDE_CHANGE_IN / 1000); // Total time for all slides
    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: `${100}%`,
          duration: totalDuration,
          repeat: Infinity,
        },
      );
    });
    return () => {
      ctx.revert();
    };
  }, []);

  useGSAP(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".word",
        { visibility: "hidden", opacity: 0 },
        {
          visibility: "visible",
          opacity: 1,
          ease: "power4.inOut",
          duration: 2.5,
          stagger: 0.1,
        },
      );
      gsap.fromTo(
        ".word",
        { filter: "blur(4px)" }, // Ensure it starts from blur
        {
          filter: "blur(0px)",
          ease: "power4.inOut",
          duration: 2.5,
          stagger: 0.15,
        },
      );
    }, textRef.current);

    return () => {
      ctx.revert();
    };
  }, [splitText, currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === testimonialsData.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, SLIDE_CHANGE_IN);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col relative gap-8  justify-center h-screen w-full  transition-all duration-300 ease-in-out "
      ref={containerRef}
    >
      <div className="flex justify-center items-center transition-all duration-300 ease-in-out">
        <div className="w-6 h-6">
          <EmojiHappy />
        </div>
        <p className="blue-text-clip text-xl">What Creators Are Saying</p>
      </div>
      <div className="flex flex-col relative  items-center gap-12 my-8  justify-center ">
        <div className=" relative flex  ">
          <p className="text-4xl md:text-6xl transition-all duration-300 ease-in-out opacity-0  grayish-text-gradient max-w-5xl font-medium tracking-tight text-center">
            {testimonialsData[currentIndex]?.testimonial}
          </p>
          <AnimatePresence mode="sync">
            <motion.div
              className="top-0 max-w-5xl  w-full  left-0 absolute z-[500]  "
              key={`${testimonialsData[currentIndex]?.testimonial.trim()}-${testimonialsData[currentIndex]?.id}`}
              exit={{
                opacity: 0,
                transition: { duration: 1.5 },
              }}
            >
              <p
                key={`${testimonialsData[currentIndex]?.testimonial.trim()}-${testimonialsData[currentIndex]?.id}-text`}
                ref={textRef}
                className="text-3xl md:text-6xl max-w-5xl font-medium text-white/80  w-full  tracking-tight text-center"
              >
                {splitText}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${testimonialsData[currentIndex]?.testimonial.trim()}-${testimonialsData[currentIndex]?.id}-image-${testimonialsData[currentIndex]?.name}`}
            initial={{
              x: 200,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.5, ease: "backInOut", delay: 0 },
            }}
            exit={{
              opacity: 0,
              //   y: 10,
              x: -100,
              transition: { duration: 0.5, ease: "backInOut" },
            }}
            className="flex items-center justify-center gap-2 my-2"
          >
            <div className="w-8 h-8 profile-border overflow-hidden shadow-inner shadow-gray-200">
              <Image
                loading="lazy"
                src={profilePicture(testimonialsData[currentIndex].id)}
                width={480}
                className="w-full h-full"
                alt="Profile image"
                height={480}
              />
            </div>
            <p className="text-lg flex-shrink-0 font-medium">
              {testimonialsData[currentIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicator */}
      <div className="w-72 h-1 bg-[#D9D9D920] mx-auto rounded-full">
        <div
          ref={progressRef}
          className="h-full blue-icon-gradient-background rounded-full w-0"
        ></div>
      </div>
    </div>
  );
}
