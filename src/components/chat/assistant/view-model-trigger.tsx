import { useAppDispatch } from "@/hooks/redux";
import { setViewModel } from "@/lib/redux/features/chat";
import { Maybe } from "@/types";
import { ZoomIn } from "lucide-react";

type TViewModelTrigger = {
  modelId: string;
  toolRequestId: Maybe<string>;
};

export default function ViewModelTrigger({
  modelId,
  toolRequestId,
}: TViewModelTrigger) {
  const dispatch = useAppDispatch();
  return (
    <button
      className="hover:text-white"
      onClick={() => {
        dispatch(
          setViewModel({
            isOpen: true,
            model: {
              id: modelId,
            },
            toolRequest: {
              id: toolRequestId ?? "",
            },
          }),
        );
      }}
    >
      <ZoomIn />{" "}
    </button>
  );
}
