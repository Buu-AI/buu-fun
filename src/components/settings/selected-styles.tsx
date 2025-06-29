"use client";
import { useAppSelector } from "@/hooks/redux";
import { iconByTitle } from "./styles-data";

export default function SelectedStyles() {
  const selected = useAppSelector((state) => state.settings.ThreeDStyle);
  const { Icon } = selected
    ? iconByTitle[selected]
    : iconByTitle["definedByAI"];
  return (
    <div className="w-5 h-5 flex items-center justify-center p-0.5 shadow-buu-inner rounded-none bg-buu  ">
      {Icon}
    </div>
  );
}
