"use client";
import React, { useEffect, useRef } from "react";
import Pill from "../elements/pill";
import { useLocalStorage } from "@mantine/hooks";
import {
  SETTINGS_STORAGE_KEY,
  NEW_FEATURES,
  type SettingsStorage,
} from "@/constants/localstorage";
import { useAppSelector } from "@/hooks/redux";

function NewAvailableSettingsPill() {
  const isPopoverOpen = useAppSelector((state) => state.settings.isPopoverOpen);
  const hasMarkedAsSeen = useRef(false);

  const [settingsStorage, setSettingsStorage] =
    useLocalStorage<SettingsStorage>({
      key: SETTINGS_STORAGE_KEY,
      defaultValue: {
        newFeatures: [...NEW_FEATURES],
        seenFeatures: [],
      },

      sync: true,
    });

  // Migrate old schema to new schema
  useEffect(() => {
    if (!settingsStorage.newFeatures || !settingsStorage.seenFeatures) {
      // Old schema detected, migrate to new schema
      setSettingsStorage({
        newFeatures: [...NEW_FEATURES],
        seenFeatures: [],
      });
    }
  }, [settingsStorage, setSettingsStorage]);
  console.log("hello");
  // Sync newFeatures with the latest NEW_FEATURES constant
  useEffect(() => {
    if (settingsStorage.newFeatures && settingsStorage.seenFeatures) {
      const currentFeatures = [...NEW_FEATURES];
      const storedFeatures = settingsStorage.newFeatures;

      // Check if there are new features in the code that aren't in localStorage
      const hasNewFeatures = currentFeatures.some(
        (feature) => !storedFeatures.includes(feature),
      );

      if (hasNewFeatures) {
        setSettingsStorage({
          ...settingsStorage,
          newFeatures: currentFeatures,
        });
      }
    }
  }, [settingsStorage, setSettingsStorage]);

  // Mark all new features as seen when the popover is opened for the first time
  useEffect(() => {
    if (
      isPopoverOpen &&
      !hasMarkedAsSeen.current &&
      settingsStorage.newFeatures &&
      settingsStorage.seenFeatures
    ) {
      const unseenFeatures = settingsStorage.newFeatures.filter(
        (feature) => !settingsStorage.seenFeatures.includes(feature),
      );

      if (unseenFeatures.length > 0) {
        setSettingsStorage({
          ...settingsStorage,
          seenFeatures: [...settingsStorage.seenFeatures, ...unseenFeatures],
        });
        hasMarkedAsSeen.current = true;
      }
    }
  }, [isPopoverOpen, settingsStorage, setSettingsStorage]);

  // Check if there are any unseen features
  const hasUnseenFeatures = settingsStorage.newFeatures?.some(
    (feature) => !settingsStorage.seenFeatures?.includes(feature),
  );

  if (!hasUnseenFeatures) {
    return null;
  }

  return (
    <div className="absolute -top-2 left-0 animate-pulse">
      <Pill variant={"bannerBlue"} size={"tiny"}>
        NEW
      </Pill>
    </div>
  );
}

export default NewAvailableSettingsPill;
