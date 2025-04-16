import { PRICING_PLAN } from "@/constants/subscription/subscription-plans";
import { useAppSelector } from "@/hooks/redux";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import SubscriptionPlanDetails from "./subscription-plan-details";

export default function SubscriptionPlanDetailWrapper({
  subscriptionButton,
}: {
  subscriptionButton: ReactNode;
}) {
  const plan = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan,
  );
  const planDetails = PRICING_PLAN[plan];
  const subscriptionDetails = planDetails.subscriptionDetails;

  const buttonVariants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: 0.2, // Reduced delay
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <SubscriptionPlanDetails
        plan={plan}
        subscriptionDetails={subscriptionDetails}
        subscriptionButton={subscriptionButton}
      />
      <motion.div variants={buttonVariants} className="grid col-span-2 mt-4">
        {subscriptionButton}
      </motion.div>
    </>
  );
}
