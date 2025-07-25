import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type TUseToolTip = {};

export default function useToolTip({}: TUseToolTip) {
  const router = useRouter();
  function redirectToAnimator(url?: string) {
    if (!url) {
      toast.error("Couldn't find the model, please try again");
      return;
    }
    if (!url.endsWith(".glb")) {
      toast.error("Couldn't find the correct model, please try again");
      return;
    }
    router.push(`/app/animator?modelUrl=${url}`);
  }

  return { redirectToAnimator };
}
