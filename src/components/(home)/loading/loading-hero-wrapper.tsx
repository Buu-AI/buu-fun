"use client";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import MultiArrowDownIcon from "@/assets/icons/mutli-arrow-down-icon";
import ImageGlobeV3 from "@/components/(home)/loading/image-globe.v3";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import MagicPenTitle from "../elements/magic-pen-title";
import TryNow from "../elements/try-now";

export default function HeroLoadingWrapper({
  children,
}: {
  children?: ReactNode;
}) {
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const progressRef = useRef(60);
  const [finishedLoading, setFinishedLoading] = useState(false);

  useEffect(() => {
    if (finishedLoading) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }
    intervalRef.current = setInterval(() => {
      if (progressRef.current >= 100 && intervalRef.current) {
        setFinishedLoading(true);
        clearInterval(intervalRef.current);
      }
      progressRef.current = progressRef.current + Math.random() * 15;
    }, 200);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [finishedLoading]);
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-screen relative ">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
          className="w-full h-full z-10 relative"
        >
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ImageGlobeV3 finishedLoading={finishedLoading} />
          <EffectComposer>
            <Bloom />
          </EffectComposer>
        </Canvas>
        <div className="w-full  h-full flex items-center justify-center absolute top-0 left-0">
          <div className="relative w-full mx-auto">
            <div className="bg-overlay-primary bg-slate-500/50  backdrop-blur-3xl left-[45%]  rounded-full max-w-[350px] rotate-45 w-full h-[200px] max-h-[200px]  top-[50%] mx-auto flex items-center justify-center -z-10 blur-[100px]" />
          </div>
        </div>
      </div>
      <motion.section
        id="home"
        className="absolute top-0 z-[50] left-0 w-full h-full flex flex-col items-center   justify-center text-white "
        initial={{ opacity: 0 }}
        animate={{ opacity: finishedLoading ? 1 : 0 }}
        transition={{ duration: 3.5, delay: 1.7 }}
      >
        <MagicPenTitle
          className="flex items-center justify-center text-blue-300 gap-2"
          title="Welcome to BUU.FUN"
        />
        <h1 className="text-2xl mt-6 md:text-3xl lg:text-4xl xl:text-7xl text-center font-bold hero-gradient-text mb-8 ">
          Unleash Your <br /> Imagination in 3D
        </h1>
        <p className="text-xl max-w-2xl text-center">
          Transform ideas into fully animated 3D models with BUU.FUN&apos;s
          advanced AI technology
        </p>
        <div className="flex flex-col items-center gap-4 text-white/40 mt-10">
          <TryNow />
          <Link
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("bring-your-ideas");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            href={"/#bring-your-ideas"}
            scroll={false}
            className="flex items-center pointer-events-auto scroll-smooth justify-center gap-1 "
          >
            <p className="font-medium">Scroll to explore</p>
            <div className="flex relative w-[18px] h-[18px] flex-col -top-1">
              <div className="flex w-full  text-white/40">
                <MultiArrowDownIcon />
              </div>
              <div className="flex text-white w-full relative -top-2">
                <MultiArrowDownIcon />
              </div>
            </div>
          </Link>
        </div>
      </motion.section>
      <AnimatePresence>{finishedLoading ? children : null}</AnimatePresence>
    </div>
  );
}
