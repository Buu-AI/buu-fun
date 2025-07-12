"use client";
import PaidFeature from "@/assets/icons/paid-feature";
import { useAppSelector } from "@/hooks/redux";
import { SettingsState } from "@/lib/redux/features/settings";
import { facesDetailData, textureDetailData } from "./options-data";
import SelectedStyles from "./selected-styles";
import { iconByTitle } from "./styles-data";

export const modes_mapper: Record<SettingsState["modes"], string> = {
  rigging: "Rigging",
  three_d_object: "3D Object",
  animation: "Animation",
};

export default function SettingsBarDisplayTitle() {
  const selectedStyle = useAppSelector((state) => state.settings.ThreeDStyle);

  const { displayName } = selectedStyle
    ? iconByTitle[selectedStyle]
    : iconByTitle["definedByAI"];

  const selectedTexture = useAppSelector((state) => state.settings.textureType);

  const {
    displayName: texture,
    pro: texturePro,
    value: textureValue,
  } = selectedStyle
    ? textureDetailData[selectedTexture]
    : textureDetailData["none"];

  const selectedFaces = useAppSelector((state) => state.settings.faces);

  const {
    displayName: faces,
    pro: facesPro,
    value: facesValue,
  } = selectedStyle
    ? facesDetailData[selectedFaces]
    : facesDetailData["tenKey"];

  const numberOfModelsMode = useAppSelector(
    (state) => state.settings.numberOfModelsMode,
  );
  const numberOfModel = useAppSelector(
    (state) => state.settings.numberOfModels,
  );
  return (
    <div className="flex gap-1 items-center">
      <div className="px-2.5 py-1.5 gap-2 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center">
        <SelectedStyles />
        <p className="hidden sm:block text-sm">{displayName}</p>
      </div>
      {facesValue !== "definedByAI" ? (
        <div className="px-2.5 py-1.5 gap-1 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center">
          <p className="text-sm">{faces}</p>
          {facesPro ? (
            <div className="hidden md:block w-4 h-4">
              <PaidFeature />
            </div>
          ) : null}
        </div>
      ) : null}
      {textureValue !== "definedByAI" ? (
        <div className="px-2.5 py-1.5 gap-1 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center">
          <p className=" text-ellipsis line-clamp-1 text-sm ">{texture}</p>
          {texturePro ? (
            <div className="hidden md:block w-4 h-4">
              <PaidFeature />
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="px-2.5 py-1.5 gap-2 min-w-10 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center">
        <p className="text-sm">
          {numberOfModelsMode === "definedByAI" ? "AI" : numberOfModel}
        </p>
      </div>
    </div>
  );
}
