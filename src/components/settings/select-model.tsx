import PaidFeature from "@/assets/icons/paid-feature";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { changeModel } from "@/lib/redux/features/settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { modelDetailData, TModelKey } from "./options-data";
import { cn } from "@/lib/utils";
import React from "react";
import { DEFAULT_MODEL } from "@/constants/settings-card";

export default function SelectModel() {
  const model = useAppSelector((state) => state.settings.model);
  const isGameReadyEnabled = useAppSelector(
    (state) => state.settings.isGameReady,
  );
  const dispatch = useAppDispatch();
  return (
    <div className="w-full my-2 mb-4">
      <p
        className={cn("uppercase text-sm font-semibold mb-2", {
          "text-gray-400": isGameReadyEnabled,
        })}
      >
        Model
      </p>
      <Select
        disabled={isGameReadyEnabled}
        onValueChange={(value: TModelKey) => {
          const modelValue: TModelKey = modelDetailData[value]?.value
            ? modelDetailData[value].value
            : "buuV1";

          dispatch(changeModel(modelValue));
        }}
        value={model ?? undefined}
        defaultValue={"buuV1"}
      >
        <SelectTrigger className="bg-buu-secondary focus:ring-1 border-none h-11 rounded-2xl ">
          <SelectValue
            placeholder={
              <div className="flex items-center justify-center gap-2 ">
                <span>Select Model</span>
              </div>
            }
          />
        </SelectTrigger>

        <SelectContent
          defaultValue={DEFAULT_MODEL}
          className="bg-[#1C2129] z-[101] relative border-none shadow-buu-muted border-buu  "
        >
          {Object.values(modelDetailData).map(({ displayName, value, pro }) => (
            <SelectItem
              key={`${displayName}-${value}-model-selector`}
              className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10   py-3"
              value={value}
            >
              <div className="flex items-center justify-center gap-2 ">
                <span>{displayName}</span>
                {pro ? (
                  <div className="w-5 h-5">
                    <PaidFeature />
                  </div>
                ) : null}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
