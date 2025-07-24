import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { setAutoApprove } from "@/lib/redux/features/settings";

type TSettingsApprovalCheckbox = {};

export default function SettingsApprovalCheckbox({}: TSettingsApprovalCheckbox) {
  const autoApprove = useAppSelector((state) => state.settings.autoApprove);
  const dispatch = useAppDispatch();
  return (
    <div className="pt-2 ml-1">
      <div className="flex py-2 gap-2 items-center ">
        <Checkbox
          checked={autoApprove}
          onCheckedChange={(value) => {
            if (typeof value === "boolean") {
              dispatch(setAutoApprove(value));
            }
          }}
          id="compound-checkbox"
          className="rounded-[4px] w-4 h-4  
              data-[state=checked]:bg-buu-blue/40
              data-[state=checked]:text-buu-blue
              border-muted-foreground/40
              border
              data-[state=checked]:border-none              
              "
        />{" "}
        <Label
          htmlFor="compound-checkbox"
          className="font-semibold tracking-tight  uppercase"
        >
          Auto Approve
        </Label>
      </div>
    </div>
  );
}
