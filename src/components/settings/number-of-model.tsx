import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  changeNumberOfModel,
  changeNumberOfModelMode,
} from "@/lib/redux/features/settings";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TNumberOfModel = {};

export default function NumberOfModel({}: TNumberOfModel) {
  const dispatch = useAppDispatch();
  const numberOfModels = useAppSelector(
    (state) => state.settings.numberOfModels,
  );
  const numberOfModelsMode = useAppSelector(
    (state) => state.settings.numberOfModelsMode,
  );
  const isAIHandled = numberOfModelsMode === "definedByAI";
  return (
    <div className="w-full flex gap-2 items-center justify-between">
      <div className=" basis-[60%]">
        <p className="uppercase text-sm  font-semibold mb-3">NUMBER OF MODEL</p>
        <Select
          value={numberOfModelsMode}
          onValueChange={(value) => {
            if (value === "custom") {
              dispatch(changeNumberOfModelMode("custom"));
            }
            if (value === "definedByAI") {
              dispatch(changeNumberOfModelMode("definedByAI"));
            }
          }}
          defaultValue="definedByAI"
        >
          <SelectTrigger className="bg-buu-secondary focus:ring-1 border-none h-11 rounded-2xl ">
            <SelectValue
              placeholder={
                <div className="flex items-center justify-center gap-2 ">
                  <div className="bg-[#2D323C] w-4 h-4 rounded-full" />
                  <span>Default</span>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className="bg-[#1C2129] border-2 relative z-[101]   shadow-buu-muted border-buu  ">
            <SelectItem
              value="definedByAI"
              className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10   py-3"
            >
              <div className="flex items-center justify-center gap-2 ">
                <span>Default</span>
              </div>
            </SelectItem>{" "}
            <SelectItem
              value="custom"
              className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10   py-3"
            >
              <div className="flex items-center justify-center gap-2 ">
                <span>Custom</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div
        className={cn(
          "self-end h-11 border-2 rounded-lg border-muted-foreground/20 px-2 relative flex items-center justify-between gap-2 bg-[#1A1E2450]  basis-[40%]",
          {
            "bg-[#1A1E2490]": numberOfModelsMode,
          },
        )}
      >
        <div className="flex  items-center gap-1.5 left-2 ">
          <button
            disabled={isAIHandled}
            onClick={() => {
              dispatch(changeNumberOfModel("increment"));
            }}
            className={cn(
              "aspect-square w-7 text-lg font-medium flex items-center justify-center rounded-full  bg-buu-secondary",
              {
                "text-muted-foreground/60": isAIHandled,
              },
            )}
          >
            <p className="">+</p>
          </button>
          <button
            disabled={isAIHandled}
            onClick={() => {
              dispatch(changeNumberOfModel("decrement"));
            }}
            className={cn(
              "aspect-square w-7 text-lg font-medium flex items-center justify-center rounded-full  bg-buu-secondary",
              {
                "text-muted-foreground/60": isAIHandled,
              },
            )}
          >
            <p className="">-</p>
          </button>
        </div>
        <div
          className={cn("pr-2", {
            "text-muted-foreground/60": isAIHandled,
          })}
        >
          <div>
            <p>
              {numberOfModelsMode === "definedByAI" ? "AI" : numberOfModels}
            </p>
          </div>
          {/* <Input className="focus-visible:ring-0  dark:bg-[#1A1E24] border-none  focus:outline-none ring-0 " /> */}
        </div>
      </div>
    </div>
  );
}
