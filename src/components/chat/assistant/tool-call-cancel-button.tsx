import { Button } from "../../ui/button";

type TToolCallCancelButton = {
  messageId: string;
};

export default function ToolCallCancelButton({}: TToolCallCancelButton) {
  return (
    <Button size={"buu"} variant={"muted_button"} className="px-5 py-1.5 ">
      Cancel
    </Button>
  );
}
