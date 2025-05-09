// import { SliderIconSecondary } from "@/assets/icons/slider-icon-secondary";
// import { features } from "@/components/(home)/feature/feature-data";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { RefObject, useEffect, useRef, useState } from "react";

// gsap.registerPlugin(useGSAP);

// type TFeatureTextSlider = {
//   index: number;
//   progressRef: RefObject<number>;
// };

// export default function FeatureTextSlider({
//   index,
//   progressRef,
// }: TFeatureTextSlider) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const prevProgressRef = useRef<number>(0);
//   const lastRotationRef = useRef<number>(0);
//   const animationRef = useRef<number | null>(null);
//   const activeItemRef = useRef<number>(0);
//   const textAnimatedRef = useRef<Set<number>>(new Set());

//   // Initialize positions in a circle
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const divElements = gsap.utils.toArray(".images-ref") as HTMLElement[];
//     const totalItems = divElements.length;

//     const radius = container.clientWidth / 2;
//     const centerX = container.clientWidth / 2;
//     const centerY = container.clientHeight / 2;

//     divElements.forEach((item, idx) => {
//       const angle = (idx / totalItems) * Math.PI * 2 - Math.PI / 2; // Start at top
//       const x = centerX + radius * Math.cos(angle) - item.clientWidth / 2;
//       const y = centerY + radius * Math.sin(angle) - item.clientHeight / 2;

//       gsap.set(item, {
//         x,
//         y,
//         rotate: (angle * 180) / Math.PI + 90, // Keep text upright
//         opacity: idx === 0 ? 1 : 0,
//       });
//     });

//     // Initial text animation for first item
//     animateTextForItem(0);
//   }, []);

//   // Function to animate text for a specific item
//   const animateTextForItem = (itemIndex: number) => {
//     if (textAnimatedRef.current.has(itemIndex)) return;

//     const words = gsap.utils.toArray(`#feature-title-${itemIndex} .word`) as HTMLElement[];

//     gsap.set(words, {
//       visibility: "hidden",
//       opacity: 0,
//       filter: "blur(4px)",
//       y: 100
//     });

//     gsap.to(words, {
//       visibility: "visible",
//       opacity: 1,
//       filter: "blur(0px)",
//       y: 0,
//       ease: "power4.inOut",
//       duration: 2.5,
//       stagger: 0.15,
//       onComplete: () => {
//         textAnimatedRef.current.add(itemIndex);
//       }
//     });
//   };

//   // Split text helper function
//   const splitText = (text: string, itemIndex: number) => {
//     return text.split(/(\s+)/).map((word, index) => {
//       if (word.match(/^\s+$/)) return word;
//       return (
//         <span
//           className="word opacity-0 will-change-[filter_opacity_transform] relative"
//           key={`${itemIndex}-${index}-${word}`}
//         >
//           {word}
//         </span>
//       );
//     });
//   };

//   // Handle continuous scroll-based animation
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container || !progressRef.current) return;

//     const updateBasedOnProgress = () => {
//       if (progressRef.current === null || progressRef.current === undefined) {
//         animationRef.current = requestAnimationFrame(updateBasedOnProgress);
//         return;
//       }

//       const currentProgress = progressRef.current - 20;

//       // Only update if progress changed
//       if (currentProgress !== prevProgressRef.current) {
//         const totalItems = features.length

//         // Convert progress (0-1) to rotation angle
//         const progressAngle = (currentProgress / 100) * 360;

//         // Calculate which items should be visible based on progress
//         const normalizedProgress = (currentProgress / 100) * totalItems;
//         const currentIdx = Math.floor(normalizedProgress) % totalItems;
//         const nextIdx = (currentIdx + 1) % totalItems;
//         const itemProgress = normalizedProgress - Math.floor(normalizedProgress); // 0-1 progress between current and next item

//         // Apply rotation based on continuous progress
//         gsap.to(container, {
//           rotation: -progressAngle,
//           duration: 0.1, // Quick update for smooth scrubbing
//           ease: "none",
//           overwrite: true,
//           onComplete: () => {
//             lastRotationRef.current = -progressAngle;
//           },
//         });

//         // Update all items with counter-rotation to keep text upright
//         const divElements = gsap.utils.toArray(".images-ref") as HTMLElement[];
//         divElements.forEach((item, idx) => {
//           // Calculate opacity for smooth crossfade between items
//           let opacity = 0.1;
//           if (idx === currentIdx) {
//             opacity = 1 - itemProgress * 0.9; // Fade out from 1 to 0.3
//           } else if (idx === nextIdx) {
//             opacity = 0.3 + itemProgress * 0.9; // Fade in from 0.3 to 1
//           }

//           gsap.to(item, {
//             rotation: progressAngle,
//             duration: 0.1,
//             ease: "none",
//             opacity,
//             overwrite: true,
//           });
//         });

//         // Handle paragraph transitions - with smoother transitions
//         const paragraphs = gsap.utils.toArray(
//           ".feature-text-paragraph"
//         ) as HTMLElement[];

//         paragraphs.forEach((para, idx) => {
//           if (idx === currentIdx) {
//             gsap.to(para, {
//               opacity: Math.max(0, 1 - itemProgress * 3.5), // Fade out faster
//               y: itemProgress * 20,
//               duration: 0.2,
//               overwrite: true,
//             });
//           } else if (idx === nextIdx) {
//             // Start animation for next item if needed
//             if (itemProgress > 0.5 && activeItemRef.current !== nextIdx) {
//               activeItemRef.current = nextIdx;
//               animateTextForItem(nextIdx);
//             }

//             gsap.to(para, {
//               opacity: Math.min(1, itemProgress * 8), // Fade in faster
//               y: 40 - itemProgress * 40,
//               duration: 0.2,
//               overwrite: true,
//             });
//           } else {
//             gsap.set(para, { opacity: 0, y: 40 });
//           }
//         });

//         prevProgressRef.current = currentProgress;
//       }

//       animationRef.current = requestAnimationFrame(updateBasedOnProgress);
//     };

//     // Start the animation loop
//     updateBasedOnProgress();

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [progressRef]);

//   return (
//     <div className="w-full h-full relative overflow-hidden">
//       <div className="w-[100%] max-md:px-2 aspect-square -bottom-[80%] absolute mx-auto rounded-full">
//         <div
//           className="rounded-full aspect-square border-green-300"
//           ref={containerRef}
//         >
//           {features.map((item, itemIndex) => (
//             <div
//               key={`feature-text-key-${item.title.trim()}`}
//               id={`feature-text-index-${itemIndex}`}
//               className="images-ref absolute"
//             >
//               <div className="relative">
//                 <div className="flex items-center gap-2 justify-center flex-col text-center">
//                   <h1
//                     id={`feature-title-${itemIndex}`}
//                     className="text-lg md:text-2xl  font-medium tracking-tight"
//                   >
//                     <span className="relative">
//                       {splitText(item.title, itemIndex)}
//                     </span>
//                   </h1>
//                   <div>
//                     <p
//                       id={`feature-para-${itemIndex}`}
//                       className="max-md:text-sm font-medium max-w-sm opacity-0 feature-text-paragraph"
//                     >
//                       {item.description}
//                     </p>
//                     <div className="flex items-center pt-2 justify-center">
//                       <SliderIconSecondary index={index} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
