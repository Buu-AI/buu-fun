"use client";
import PaidFeature from "@/assets/icons/paid-feature";
import { useAppSelector } from "@/hooks/redux";
import { SettingsState } from "@/lib/redux/features/settings";
import { facesDetailData, textureDetailData } from "./options-data";
import SelectedStyles from "./selected-styles";
import { iconByTitle } from "./styles-data";
import Pill from "../elements/pill";
import { motion, AnimatePresence } from "framer-motion";

export const modes_mapper: Record<SettingsState["modes"], string> = {
  rigging: "Rigging",
  three_d_object: "3D Object",
  animation: "Animation",
};

export default function SettingsBarDisplayTitle() {
  const selectedStyle = useAppSelector((state) => state.settings.ThreeDStyle);
  const isGameReady = useAppSelector((state) => state.settings.isGameReady);
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
    (state) => state.settings.numberOfModelsMode
  );
  const numberOfModel = useAppSelector(
    (state) => state.settings.numberOfModels
  );
  return (
    <div className="flex gap-1 items-center">
      <motion.div
        layout
        className="px-2.5 py-1.5 gap-2 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center"
      >
        <SelectedStyles />
        <p className="hidden sm:block text-sm">{displayName}</p>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {facesValue !== "definedByAI" && !isGameReady ? (
          <motion.div
            key="faces"
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            layout
            className="px-2.5 py-1.5 gap-1 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center"
          >
            <p className="text-sm">{faces}</p>
            {facesPro ? (
              <div className="hidden md:block w-4 h-4">
                <PaidFeature />
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {isGameReady ? (
          <motion.div
            key="gameReady"
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            layout
            className="px-2.5 relative py-1.5 gap-1 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center"
          >
            <div className="absolute -top-1 left-0">
              <Pill size={"tiny"} variant={"bannerBlue"}>
                NEW
              </Pill>
            </div>
            <p className="text-sm text-nowrap">Game Ready</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {textureValue !== "definedByAI" && !isGameReady ? (
          <motion.div
            key="texture"
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            layout
            className="px-2.5 py-1.5 gap-1 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center"
          >
            <p className=" text-ellipsis line-clamp-1 text-sm ">{texture}</p>
            {texturePro ? (
              <div className="hidden md:block w-4 h-4">
                <PaidFeature />
              </div>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layout
        className="px-2.5 py-1.5 gap-2 min-w-10 shadow-buu-inner bg-buu rounded-lg flex items-center  justify-center"
      >
        <p className="text-sm">
          {numberOfModelsMode === "definedByAI" ? "AI" : numberOfModel}
        </p>
      </motion.div>
    </div>
  );
}
