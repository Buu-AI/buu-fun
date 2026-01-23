"use client";
import EnableGameReadySwitch from "./enable-game-ready-switch";
import NumberOfModel from "./number-of-model";
import SelectFaces from "./select-faces";
import SelectModel from "./select-model";
import SelectTexture from "./select-texture";
import SettingsApprovalCheckbox from "./settings-approval-checkbox";
import StylesSelector from "./styles-selector";

export default function SettingsCardContainer() {
  return (
    <div className="w-full px-2">
      <StylesSelector />
      {/* <ThreeDSelectBox /> */}
      <EnableGameReadySwitch />
        <SelectModel/>
      <div className="flex gap-4  items-center justify-between w-full">
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
