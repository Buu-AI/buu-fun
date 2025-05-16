import ShareIcon from "@/assets/icons/share-icon";
import { useAppDispatch } from "@/hooks/redux";
import { useUserSubscription } from "@/hooks/use-credits";
import { isFreePlan } from "@/lib/helpers/status-checker";
import { setShareableModalOpen } from "@/lib/redux/features/boards";
import { setSubscriptionModel } from "@/lib/redux/features/subscription";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function ShareButtonWrapper() {
  const path = usePathname();

  const isGenerationPage = path.startsWith("/app/chat");

  const dispatch = useAppDispatch();
  const { data: userSubScription } = useUserSubscription();

  function handleOpenModal() {
    if (isFreePlan(userSubScription?.planKey)) {
      dispatch(setSubscriptionModel(true));
      return;
    }
    dispatch(setShareableModalOpen(true));
  }

  if (!isGenerationPage) {
    return null;
  }
  return (
    <Button
      onClick={() => {
        handleOpenModal();
      }}
      variant={"ghost"}
      className="px-3 flex items-center hover:bg-buu-button justify-center gap-1 text-base h-[40px] group  py-2  rounded-[10px]"
    >
      <div className="w-4 h-4">
        <ShareIcon />
      </div>
      <span className="hidden lg:block">Share</span>
    </Button>
  );
}
