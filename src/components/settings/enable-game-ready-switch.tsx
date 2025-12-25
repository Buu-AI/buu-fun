import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { switchGameReady } from "@/lib/redux/features/settings";
import { Switch } from "../ui/switch";
import Pill from "../elements/pill";

function EnableGameReadySwitch() {
  const dispatch = useAppDispatch();
  const { isGameReady } = useAppSelector((state) => state.settings);
  return (
    <div className="pt-4 flex relative gap-4 my-3">
      <div className="absolute -top-0 left-0">
        <Pill size={"tiny"} variant={"bannerBlue"}>
          NEW
        </Pill>
      </div>
      <label htmlFor="game-ready-toggle">
        <p className="uppercase text-sm font-semibold select-none">
          Enable Game Ready Models
        </p>
      </label>
      <div className="flex-end self-end">
        <Switch
          id="game-ready-toggle"
          thumbClassName="data-[state=checked]:bg-buu-blue"
          className="bg-buu-secondary bg-new-pill  data-[state=checked]:bg-buu-blue/40"
          checked={isGameReady}
          onCheckedChange={(value) => {
            dispatch(switchGameReady({ isGameReady: value }));
          }}
        />
      </div>
    </div>
  );
}

export default EnableGameReadySwitch;
