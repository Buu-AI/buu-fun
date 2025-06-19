import { useAppSelector } from "@/hooks/redux";
import { getSelectedLights } from "@/lib/redux/selectors/light-selector";
import { getX, getY, getZ } from "@/lib/utils";

type TLogger = {};

export default function Logger({}: TLogger) {
  const lights = useAppSelector((state) => state.stage.present.selectedLights);
  const currentLight = useAppSelector((state) =>
    getSelectedLights(state, lights?.id ?? ""),
  );
  const light = currentLight?.light;
  return (
    <div className="absolute bottom-0 w-full mx-auto h-14 px-2   ">
      <div className=" w-full h-full border-2 bg-buu">
        {light?.id ? "Light Selected:" : null}
        {lights?.interactionMode ? `${lights?.interactionMode}` : null}
        {light?.scale
          ? `x:${getX(light.scale)} \n Z:${getY(light.scale)} \n Z:${getZ(light.scale)}`
          : null}
      </div>
    </div>
  );
}
