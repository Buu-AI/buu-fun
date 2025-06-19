import { Model } from "@/gql/types/graphql";
import { useAppDispatch } from "@/hooks/redux";
import { Maybe } from "@/types";
import { TToolRequest } from "@/types/chat/chat-types";
import { ZoomIn } from "lucide-react";

type TViewModelTrigger = {
  model: Model;
  toolRequest: Maybe<TToolRequest>;
};

export default function ViewModelTrigger({
  model,
  toolRequest,
}: TViewModelTrigger) {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => {}}>
      <ZoomIn />{" "}
    </button>
  );
}
