import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ScrollToBottomButtonProps {
  isScrollDownAvailable: boolean;
  scrollToBottom: () => void;
  className?: string;
}

// You'll need to install react-icons or use your preferred icon library
// npm install react-icons
import { IoArrowDown } from "react-icons/io5";

export default function ScrollToBottomButton({
  isScrollDownAvailable,
  scrollToBottom,
  className = "",
}: ScrollToBottomButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    if (isScrollDownAvailable) {
      // Animate in
      gsap.to(button, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
        display: "block",
      });
    } else {
      // Animate out
      gsap.to(button, {
        opacity: 0,
        y: 20,
        scale: 0.8,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(button, { display: "none" });
        },
      });
    }
  }, [isScrollDownAvailable]);

  // Initial state setup
  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.8,
      display: "none",
    });
  }, []);

  const handleClick = () => {
    // Add a little bounce effect on click
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }

    scrollToBottom();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`
        absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 z-20 flex items-center justify-center  border-gray-200 hover:bg-gray-50
        ${className}
      `}
      aria-label="Scroll to bottom"
    >
      <div className="flex items-center justify-center ">
        <IoArrowDown className="text-black text-lg" size={14} />
      </div>
    </button>
  );
}
