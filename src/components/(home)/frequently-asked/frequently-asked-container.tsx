"use client";
import FrequentlyAskedIcon from "@/assets/icons/frequently-asked";
import Bounded from "@/components/ui/Bounded";
import { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { MinusCircle, PlusCircle } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FAQ_DETAILS } from "@/constants/faq";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function FrequentlyAskedContainer() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const colorPurpleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [colorPurpleRef.current],
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "power4.inOut",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".faq-trigger",
            start: "top 80%",
            end: "bottom 70%",
            toggleActions: "play reverse play reverse", // Ensures it reverses properly
          },
        },
      );
    });
    return () => {
      ctx.revert();
    };
  });
  useGSAP(() => {
    if (!triggerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".accordion-container",
        {
          filter: "blur(10px)",
          rotate: "6deg",
          y: 100,
        },
        {
          rotate: "0deg",
          y: 0,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse", // Ensures it reverses properly
          },
          filter: "blur(0px)",
          duration: 2,
          stagger: 0.2,
          ease: "power4.inOut",
        },
      );
    });
    return () => {
      ctx.revert();
    };
  });

  return (
    <div ref={triggerRef} className="w-full relative faq-trigger py-32">
      <div
        ref={colorPurpleRef}
        className="w-[176px] h-[334px] violet-gradient top-[25%]  blur-[100px]  bg-[#6b69d5]  -left-[70px]   rounded-full  absolute  -z-10  md:block hidden  rotate-[-10deg]"
      />
      <Bounded className="max-w-screen-2xl w-full h-full  flex items-center  justify-between flex-col md:flex-row">
        <div className="flex flex-col  gap-6 w-full">
          <div className="flex items-center  gap-2">
            <FrequentlyAskedIcon />
            <h1 className="blue-text-clip bg-clip-text text-transparent">
              FAQ
            </h1>
          </div>
          <div>
            <h1 className="grayish-text-gradient  max-w-max text-4xl md:text-6xl tracking-tighter font-medium">
              Frequently <br /> Asked Questions
            </h1>
          </div>
          <p className="text-white/60">
            Read answers to the most common questions about BUU.FUN
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" className="flex  flex-col gap-4" collapsible>
            {FAQ_DETAILS.map((item, index) => {
              return (
                <AccordionItem
                  key={`${item.answer.trim()}-${item.question.trim()}-${index}`}
                  value={`item-${index}`}
                  className="rgb-muted accordion-container px-6 py-2 rounded-2xl border-b-0"
                >
                  <AccordionTrigger
                    icon={
                      <>
                        <PlusCircle className="fill-white group-[&[data-state=open]]:hidden stroke-black stroke-2" />
                        <MinusCircle className="fill-white group-[&[data-state=closed]]:hidden stroke-black stroke-2" />
                      </>
                    }
                    className="text-lg text-white"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    <motion.div
                      initial={{
                        y: 40,
                      }}
                      animate={{
                        y: 0,
                        transition: { duration: 0.5 },
                      }}
                    >
                      {item.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}

            {/* <AccordionItem
              value="item-2"
              className="rgb-muted accordion-container px-6 py-2 rounded-2xl border-b-0"
            >
              <AccordionTrigger
                icon={
                  <>
                    <PlusCircle className="fill-white group-[&[data-state=open]]:hidden stroke-black stroke-2" />
                    <MinusCircle className="fill-white group-[&[data-state=closed]]:hidden stroke-black stroke-2" />
                  </>
                }
                className="text-lg text-white"
              >
                How does the Roblox Studio integration work?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <motion.div
                  initial={{
                    y: 40,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    filter: "blur(0px)",
                    y: 0,
                    transition: { duration: 0.8 },
                  }}
                >
                  {" "}
                  Yes. It adheres to the WAI-ARIA design pattern.
                </motion.div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="rgb-muted accordion-container px-6 py-2 rounded-2xl border-b-0"
            >
              <AccordionTrigger
                icon={
                  <>
                    <PlusCircle className="fill-white group-[&[data-state=open]]:hidden stroke-black stroke-2" />
                    <MinusCircle className="fill-white group-[&[data-state=closed]]:hidden stroke-black stroke-2" />
                  </>
                }
                className="text-lg text-white"
              >
                Can I use BUU.FUN for commercial projects?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <motion.div
                  initial={{
                    y: 40,
                  }}
                  animate={{
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                >
                  BUU.FUN offers a seamless platform to create stunning 3D
                  objects from text prompts or images. With features like
                  auto-rigging, texture remeshing, and animation, your creations
                  are ready for any project{" "}
                </motion.div>
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        </div>
      </Bounded>
    </div>
  );
}
