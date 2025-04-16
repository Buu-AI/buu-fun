import CheckBlue from "@/assets/icons/check-blue";
import CrossGray from "@/assets/icons/cross-gray";
import {
  Plans,
  SubscriptionDetails,
} from "@/constants/subscription/subscription-plans";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import Pill from "../elements/pill";

export default function SubscriptionPlanDetails({
  // subscriptionButton,
  plan,
  subscriptionDetails,
  className,
}: {
  subscriptionButton: ReactNode;
  plan: Plans | "ENTERPRISE";
  subscriptionDetails?: SubscriptionDetails;
  className?: string;
}) {
  // Refined animation variants with faster plan transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.05,
        staggerChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2, // Faster exit for quicker plan transitions
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.05,
        staggerChildren: 0.04,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 }, // Reduced distance for less "falling" feeling
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35, // Slower item appearance
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother motion
      },
    },
    exit: {
      opacity: 0,
      y: -4,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  // const buttonVariants = {
  //   hidden: { opacity: 0, y: 0 },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.35,
  //       delay: 0.2, // Reduced delay
  //       ease: "easeOut",
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  // Custom Pill component with animation
  const AnimatedPill = ({
    children,
    className,
  }: {
    children: ReactNode;
    className?: string;
  }) => (
    <motion.div variants={pillVariants}>
      <Pill className={className}>{children}</Pill>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={plan}
        initial="hidden"
        animate="show"
        exit="exit"
        variants={containerVariants}
        className={cn(
          "md:grid flex flex-col  md:grid-cols-2 mt-7 scrollbar-w-2 scrollbar-track-orange-lighter scrollbar-thumb-orange scrollbar-thumb-rounded gap-4 md:max-h-[45dvh] overflow-y-auto",
          className,
        )}
      >
        <motion.div
          variants={sectionVariants}
          className="flex items- flex-col gap-2"
        >
          <AnimatedPill className="text-[10px] max-w-max uppercase text-muted-foreground/60 font-semibold mb-2">
            Core Features
          </AnimatedPill>
          {subscriptionDetails &&
            subscriptionDetails.coreFeatures.map((item, index) => {
              return (
                <motion.div
                  variants={itemVariants}
                  key={`${plan}-subscriptionDetails.coreFeatures-${index}-${item.title.trim()}-${item.description.trim()}`}
                  className="w-full"
                >
                  <div className="flex w-full items-center gap-2">
                    <div className="w-5 flex-shrink-0 h-5">
                      <CheckBlue />
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <p className="text-sm text-muted-foreground/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
        <motion.div variants={sectionVariants} className="flex flex-col gap-2">
          {subscriptionDetails && subscriptionDetails.additionalBenefits && (
            <motion.div
              variants={sectionVariants}
              className="flex items- flex-col gap-2 "
            >
              <AnimatedPill className="text-[10px] mb-2 max-w-max uppercase text-muted-foreground/60 font-semibold">
                Additional Benefits
              </AnimatedPill>
              {subscriptionDetails.additionalBenefits.map((item, index) => {
                return (
                  <motion.div
                    variants={itemVariants}
                    key={`${plan}-subscriptionDetails-additionalBenefits-${index}-${item.title.trim()}-${item.description.trim()}`}
                    className="w-full"
                  >
                    <div className="flex w-full items-center gap-2">
                      <div className="rounded-full flex-shrink-0 h-5 w-5">
                        <CheckBlue />
                      </div>
                      <div>
                        <p>{item.title}</p>
                        <p className="text-sm text-muted-foreground/40">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
          {subscriptionDetails && subscriptionDetails.restrictions && (
            <motion.div
              variants={sectionVariants}
              className="flex items- flex-col gap-2 mt-3"
            >
              <AnimatedPill className="text-[10px] max-w-max mb-2 uppercase text-muted-foreground/60 font-semibold">
                Restrictions
              </AnimatedPill>
              {subscriptionDetails.restrictions.map((item, index) => {
                return (
                  <motion.div
                    variants={itemVariants}
                    key={`${plan}-subscriptionDetails-additionalBenefits-${index}-${item.title.trim()}-${item.description.trim()}`}
                    className="w-full"
                  >
                    <div className="flex w-full items-center gap-2">
                      <div className=" bg-[#737984] rounded-full flex-shrink-0 h-5 w-5">
                        <CrossGray />
                      </div>
                      <div>
                        <p>{item.title}</p>
                        <p className="text-sm text-muted-foreground/40">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
