"use client";
import SubscriptionPlanDetailWrapper from "@/components/subscriptions/subscription-plan-details-wrapper";
import SubscriptionPricingHeaderWrapper from "@/components/subscriptions/subscription-pricing-header-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { SUBSCRIPTION_PLANS } from "@/constants/subscription/subscription-plans";
import { useAppHomeDispatch, useAppHomeSelector } from "@/hooks/redux-home";
import { setSubscriptionModelPlanType } from "@/lib/redux/features/subscription";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function PricingWrapper() {
  const Plan = useAppHomeSelector(
    (state) => state.subscription.SubscriptionModelPlan,
  );
  const dispatch = useAppHomeDispatch();

  return (
    <div className="max-w-3xl   rounded-2xl mx-auto">
      <div className="border-subscription-pricing relative bg-subscription-pricing pt-6 pb-3 my-12 px-6  ">
        <div className="-top-6 absolute   left-0 right-0  ">
          <div className="bg-pricing-header mx-auto max-w-max px-2 py-2 rounded-lg">
            <div className="flex items-center flex-wrap justify-center gap-2">
              {SUBSCRIPTION_PLANS.map((item, index) => {
                return (
                  <Button
                    key={`subscription-plan-button-${item}-${index}`}
                    onClick={() => {
                      dispatch(setSubscriptionModelPlanType(item));
                    }}
                    variant={Plan !== item ? "ghost" : undefined}
                    className={cn({
                      "hover:text-white text-sm  transition-all duration-300 ease-in-out hover:bg-muted/0":
                        Plan !== item,
                    })}
                  >
                    <p className="text-sm">{item}</p>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <SubscriptionPricingHeaderWrapper />
          <SubscriptionPlanDetailWrapper
            subscriptionButton={
              <Link
                href="/app"
                className={buttonVariants({ className: "w-full" })}
              >
                Sign up now
              </Link>
            }
          />
        </div>
      </div>
    </div>
  );
}
