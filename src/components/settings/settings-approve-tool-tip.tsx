import QuestionIcon from "@/assets/icons/utility/question";
import ToolTipWrapper from "../ui/tool-tip-wrapper";

type TSettingsApproveToolTip = {};

export default function SettingsApproveToolTip({}: TSettingsApproveToolTip) {
  return (
    <div className=" group/approve">
      <ToolTipWrapper
        content="Create 3 assets faster with auto-approval of prompts"
        trigger={
          <div className="group-hover/approve:text-gray-300 group-hover/approve:fill-text-gray-300 text-gray-500 w-5 h-5">
            <QuestionIcon />
          </div>
        }
      />
    </div>
  );
}
