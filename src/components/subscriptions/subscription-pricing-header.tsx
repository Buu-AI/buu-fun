import { Plans, TPricing } from "@/constants/subscription/subscription-plans";
import {
  isPlanEnterprise,
  isPlanFree,
} from "@/lib/helpers/subscription-plan-checker";
import { cn } from "@/lib/utils";
import Pill from "../elements/pill";

export default function SubscriptionPricingHeader({
  isAdditionalPlan,
  // planDetails,
  pricing,
  plan,
}: {
  plan: Plans | "ENTERPRISE";
  isAdditionalPlan: boolean;
  pricing: TPricing;
  // planDetails: TPricingDetails;
}) {
  return (
    <div
      className={cn(
        "grid pt-10 grid-cols-1  md:grid-cols-2 place-content-center place-items-center",
        {
          "grid-cols-3": isAdditionalPlan,
        },
      )}
    >
      <div className="flex w-full  items-center justify-center flex-col ">
        <h4 className="text-muted-foreground/60 text-sm font-medium">Price</h4>
        <div className="flex justify-center">
          <p
            className={cn("text-base", {
              hidden: pricing.contactSales || !pricing.price,
            })}
          >
            $
          </p>
          <div className="flex items-center justify-center gap-2">
            <div
              className={cn("flex items-center gap-1 justify-center", {
                hidden: pricing.contactSales || !pricing.price,
              })}
            >
              <p className="text-5xl font-medium tracking-tight">
                {pricing.price}
              </p>
              <p className="text-xs font-semibold uppercase tracking-tight text-muted-foreground/60">
                / Month
              </p>
            </div>
            <div
              className={cn("flex items-center gap-1 justify-center", {
                hidden: pricing.price || pricing.contactSales,
              })}
            >
              <p className="text-5xl font-medium tracking-tight blue-text-clip">
                FREE
              </p>
            </div>
            <div
              className={cn("flex items-center gap-1 justify-center", {
                hidden: !pricing.contactSales,
              })}
            >
              <p className="text-5xl font-medium tracking-tight">Custom</p>
            </div>
            <Pill
              variant={"blue"}
              className={cn("text-[10px] font-semibold uppercase px-1 py-1", {
                hidden: !isPlanEnterprise(plan),
              })}
            >
              contact sales
            </Pill>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "flex w-full md:border-l-2  border-muted-foreground/20  items-center justify-center flex-col",
          {
            "md:border-x-2": isAdditionalPlan,
          },
        )}
      >
        <h4 className="text-muted-foreground/60 text-sm font-medium mt-2 md:mt-0">
          {isPlanFree(plan)
            ? "Initial trial credits"
            : "Included Monthly Credits"}
        </h4>
        <div className="flex justify-center">
          <p className="text-3xl md:text-5xl font-medium tracking-tight">
            {pricing.includedMonthlyCredit}
          </p>
        </div>
      </div>
      <div
        className={cn("flex items-center justify-center flex-col", {
          hidden: !isAdditionalPlan,
        })}
      >
        <h4 className="text-muted-foreground/60 text-sm font-medium">
          Additional credits
        </h4>
        <div className={cn("flex justify-center gap-1")}>
          <p className="text-base">$</p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-3xl md:text-5xl font-medium tracking-tight">
              {pricing.additionalCredits}
            </p>
            <p className="text-xs font-semibold uppercase tracking-tight text-muted-foreground/60">
              / Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
