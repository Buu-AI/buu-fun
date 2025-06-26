"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setSettingsPopoverChange } from "@/lib/redux/features/settings";
export default function PopoverHiddenTrigger() {
  const dispatch = useAppDispatch();
  const isSettingsPopoverOpen = useAppSelector((state) => state.settings);
  if (isSettingsPopoverOpen.isPopoverOpen) return;
  return (
    <button
      onClick={() => {
        dispatch(setSettingsPopoverChange(true));
      }}
      className="absolute z-20  w-full h-full "
    ></button>
  );
}
