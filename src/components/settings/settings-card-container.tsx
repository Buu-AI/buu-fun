"use client";
import NumberOfModel from "./number-of-model";
import SelectFaces from "./select-faces";
import SelectTexture from "./select-texture";
import SettingsApprovalCheckbox from "./settings-approval-checkbox";
import ThreeDSelectBox from "./three-d-select-box";

export default function SettingsCardContainer() {
  return (
    <div className="w-full px-2">
      <ThreeDSelectBox />
      <div className="flex gap-4 mt-4 items-center justify-between w-full">
        <SelectFaces />
        <SelectTexture />
      </div>
      <div className="mt-4">
        <NumberOfModel />
      </div>
      <SettingsApprovalCheckbox />
    </div>
  );
}
