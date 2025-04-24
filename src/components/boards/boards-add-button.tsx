import PlusIcon from "@/assets/icons/plus-blue-icon.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BoardsAddButton() {
  // const { data } = useSharableBoards({});
  // const { data: userUserSubscription } = useUserSubscription();
  const router = useRouter();
  // check the user plan and disable the plus.
  return (
    <Button
      onClick={() => {
        router.push("/app?new_board=true");
      }}
      size={"special"}
    >
      <div className=" items-center justify-center w-6 h-6 flex">
        <Image src={PlusIcon} alt="das" width={100} height={100} />
      </div>
      Create New Board
    </Button>
  );
}
