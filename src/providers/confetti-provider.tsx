"use client";
import React, { createContext, useContext, useRef, ReactNode } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
type TConfettiOpts = {
  speed?: number;
  delay?: number;
  duration?: number;
};
interface ConfettiContextType {
  runConfetti: (options?: TConfettiOpts) => void;
}

const ConfettiContext = createContext<ConfettiContextType | null>(null);

export const useConfetti = () => {
  const context = useContext(ConfettiContext);
  if (!context) {
    throw new Error("useConfetti must be used within a ConfettiProvider");
  }
  return context;
};

interface ConfettiProviderProps {
  children: ReactNode;
}

export function ConfettiProvider({ children }: ConfettiProviderProps) {
  const confettiRef = useRef<TConductorInstance | null>(null);

  const runConfetti = (options: TConfettiOpts = {}) => {
    const { speed = 1.2, delay = 250, duration = 5000 } = options;

    confettiRef.current?.run({
      speed,
      delay,
      duration,
    });
  };

  return (
    <ConfettiContext.Provider value={{ runConfetti }}>
      {children}
      <div className="fixed w-full h-full top-0 left-0 -z-[100]">
        <Fireworks
          className="w-full h-full"
          globalOptions={{
            useWorker: true,
          }}
          onInit={({ conductor }) => {
            confettiRef.current = conductor;
          }}
        />
      </div>
    </ConfettiContext.Provider>
  );
}
