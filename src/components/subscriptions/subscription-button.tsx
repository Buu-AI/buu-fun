import { useAppSelector } from "@/hooks/redux";
import { useUserSubscription } from "@/hooks/use-credits";
import { getPaymentLinkUrl } from "@/lib/react-query/subscriptions-stripe";
import { useAuthentication } from "@/providers/account.context";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { capitalizeFirstLetter } from "@/lib/utils";
import { isFreePlan } from "@/lib/helpers/status-checker";

export default function SubscriptionButton() {
  const {
    identityToken: accessToken,
    isAuthenticated,
    login,
  } = useAuthentication();
  const planKey = useAppSelector(
    (state) => state.subscription.SubscriptionModelPlan,
  );
  const { data, refetch } = useUserSubscription();

  const { mutate: getPaymentLink } = useMutation({
    mutationFn: async () => {
      if (!accessToken) return;
      return await getPaymentLinkUrl({
        accessToken: accessToken,
        planKey,
      });
    },
    onSuccess(data) {
      if (data?.url && typeof data.url !== "undefined") {
        window.location.href = data.url;
      }
    },
    onError(error) {
      console.log(error);
      toast.error(error.message);
    },
  });
  const isCurrentPlan = data?.planKey === planKey;
  const isUserPlanFree = isFreePlan(data?.planKey);
  return (
    <Button
      variant={isCurrentPlan ? "secondary" : undefined}
      onClick={async () => {
        if (!accessToken || !isAuthenticated) {
          login();
          return;
        }
        if (!isUserPlanFree) {
          const { data } = await refetch();
          if (data?.customerPortalLink) {
            window.location.href = data?.customerPortalLink;
          }
        } else {
          getPaymentLink();
        }

        // if (isCurrentPlan) {
        // const { data } = await refetch();
        // if (data?.customerPortalLink) {
        //   window.location.href = data?.customerPortalLink;
        // }
        // } else {
        //   getPaymentLink();
        // }
      }}
      className="w-full"
    >
      {isCurrentPlan ? (
        "Current plan"
      ) : (
        <div>
          Select
          <span className="capitalize"> {capitalizeFirstLetter(planKey)} </span>
          Plan
        </div>
      )}
    </Button>
  );
}
