import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  changeThreeDStyles,
  setStyleSelectChange,
  threeDStyles,
  TThreeDStyles,
} from "@/lib/redux/features/settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { iconByTitle } from "./styles-data";

export default function ThreeDSelectBox() {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.settings);
  return (
    <div className="">
      <p className="uppercase text-sm font-semibold mb-3">style</p>
      <Select
        open={selected.isStyleBoxOpen}
        onOpenChange={(value) => {
          dispatch(setStyleSelectChange(value));
        }}
        defaultValue="definedByAI"
        value={selected.ThreeDStyle}
        // This is disabled because it could be any value also added defensive statement to check whether the value is right one.
        onValueChange={(value: TThreeDStyles) => {
          if (threeDStyles.includes(value)) {
            dispatch(changeThreeDStyles(value));
            return;
          }
          dispatch(changeThreeDStyles(undefined));
        }}
      >
        <SelectTrigger className="bg-buu-secondary h-11 focus:ring-1 border-none  rounded-2xl ">
          <SelectValue
            placeholder={
              <div className="flex items-center justify-center gap-2 ">
                <div className="bg-[#80c6ff] w-4 h-4 rounded-full" />{" "}
                <span>Defined By AI</span>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent className="bg-[#1C2129] border-none relative z-[101] shadow-buu-muted border-buu  ">
          {Object.values(iconByTitle).map(({ displayName, value, Icon }) => (
            <SelectItem
              key={`${displayName}-${value}-styles-selector`}
              className="focus:bg-[#252931] pl-4 border-none backdrop-blur-10   py-3"
              value={value}
            >
              <div className="flex items-center justify-center gap-2 ">
                <div className="h-4 w-4">{Icon}</div>
                <span>{displayName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>{" "}
    </div>
  );
}
