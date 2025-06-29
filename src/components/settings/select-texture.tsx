import PaidFeature from "@/assets/icons/paid-feature";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { changeTexture } from "@/lib/redux/features/settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { textureDetailData, TTextureKey } from "./options-data";

type TSelectTexture = {};

export default function SelectTexture({}: TSelectTexture) {
  const selected = useAppSelector((state) => state.settings.textureType);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full">
      <p className="uppercase text-sm font-semibold mb-2">Texture</p>
      <Select
        onValueChange={(value: TTextureKey) => {
          const faceValue: TTextureKey = textureDetailData[value]?.value
            ? textureDetailData[value].value
            : "none";

          dispatch(changeTexture(faceValue));
        }}
        value={selected ?? undefined}
        defaultValue="none"
      >
        <SelectTrigger className="bg-buu-secondary focus:ring-1 border-none h-11 rounded-2xl ">
          <SelectValue
            placeholder={
              <div className="flex items-center justify-center gap-2 ">
                <span>No Textures</span>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent className="bg-[#1C2129] z-[101] relative border-none shadow-buu-muted border-buu  ">
          {Object.values(textureDetailData).map(
            ({ displayName, value, pro }) => (
              <SelectItem
                key={`${displayName}-${value}-styles-selector`}
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
            )
          )}
        </SelectContent>
      </Select>{" "}
    </div>
  );
}
