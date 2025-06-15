import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setLightInteractionMode,
  setSelectedLights,
  updateLights,
} from "@/lib/redux/features/stage";
import { getSelectedLights } from "@/lib/redux/selectors/light-selector";
import ProgressBar from "./progress-bar";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import PositionXYZ from "./inputs/position-x-y-z";
import ColorPicker from "./color-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LightInteractionMode } from "@/types/stage/objects";

export default function StagePropertiesViewer() {
  const selectedLight = useAppSelector(
    (state) => state.stage.present.selectedLights,
  );
  const lightState = useAppSelector((state) =>
    getSelectedLights(state, selectedLight?.id ?? ""),
  );
  const light = lightState?.light;
  const dispatch = useAppDispatch();

  if (!light) return null;
  return (
    <div className="absolute top-16 right-0 max-w-sm w-full   bg-stage-modal rounded-lg px-4 py-3">
      <div className="relative w-full h-full ">
        <div className="flex justify-between items-center">
          <p className="font-semibold">
            {capitalizeFirstLetter(light.type)} Light {lightState.index + 1}
          </p>
          <button
            onClick={() => {
              dispatch(setSelectedLights(null));
            }}
            className="border border-buu rounded-full w-5 h-5 text-xs flex items-center justify-center"
          >
            <p className="leading-none font-bold">x</p>
          </button>
        </div>
        <div className="pt-1">
          <div className="mt-4">
            <div className="flex justify-between items-center my-2">
              <p className="text-xs font-semibold uppercase">Position</p>
            </div>
            <PositionXYZ
              className="w-full  justify-around "
              maxValue={[50, 50, 50]}
              onChange={(value) => {
                dispatch(
                  updateLights({
                    id: light.id,
                    position: value,
                  }),
                );
              }}
              value={light.position}
            />
          </div>
        </div>
        {/*  */}

        <div className="pt-1">
          <div className="mt-4">
            <div className="flex justify-between items-center my-2">
              <p className="text-xs font-semibold uppercase">
                Interaction Mode
              </p>
            </div>
            <Select
              value={selectedLight?.interactionMode ?? undefined}
              onValueChange={(value) => {
                if (!value) {
                  return;
                }
                const interactionMode = value as LightInteractionMode | null;
                if (!interactionMode) return;
                dispatch(
                  setLightInteractionMode({
                    lightId: light.id,
                    mode: interactionMode,
                  }),
                );
              }}
            >
              <SelectTrigger className="w-full border-0 bg-buu">
                <SelectValue placeholder="select a light" />
              </SelectTrigger>
              <SelectContent
                defaultValue={"rotate"}
                className="bg-buu-button w-full border-0"
              >
                <SelectItem
                  className="border-none text-sm focus:bg-buu-secondary  pl-4 pr-4 text-center  mx-auto"
                  value="rotate"
                >
                  Rotate
                </SelectItem>
                <SelectItem
                  className="border-none text-sm focus:bg-buu-secondary  pl-4 pr-4 text-center  mx-auto"
                  value="scale"
                >
                  Scale
                </SelectItem>
                <SelectItem
                  className="border-none text-sm focus:bg-buu-secondary  pl-4 pr-4 text-center  mx-auto"
                  value="translate"
                >
                  Translate
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-1">
          <ColorPicker
            value={light.color || "#ffffff"}
            onChange={(color) => {
              dispatch(
                updateLights({
                  id: light.id,
                  color: color,
                }),
              );
            }}
          />
        </div>
        <div className="pt-1">
          <div className="mt-4">
            <div className="flex justify-between items-center my-2">
              <p className="text-xs font-semibold uppercase">Intensity</p>
              <p className="text-xs font-semibold ">{light.intensity}</p>
            </div>
            <ProgressBar
              allowDecimals
              decimalPlaces={2}
              onChange={(value) => {
                dispatch(
                  updateLights({
                    id: light.id,
                    intensity: value,
                  }),
                );
              }}
              value={light.intensity}
              max={10}
              min={0}
              disabled={false}
            />
          </div>
        </div>
        <div className="pt-1">
          <div className="mt-4">
            <div className="flex justify-between items-center my-2">
              <p className="text-xs font-semibold uppercase">Distance</p>
              <p className="text-xs font-semibold ">{light.distance}</p>
            </div>
            <ProgressBar
              allowDecimals
              decimalPlaces={2}
              onChange={(value) => {
                dispatch(
                  updateLights({
                    id: light.id,
                    distance: value,
                  }),
                );
              }}
              value={light.distance ?? 0}
              max={50}
              min={0}
              disabled={false}
            />
          </div>
        </div>
        <div className="pt-2">
          <div className="mt-2  flex gap-2 justify-between items-center w-full">
            <div className="flex justify-between items-center my-1">
              <p className="text-xs font-semibold uppercase">Cast Shadows</p>
            </div>
            <Switch
              checked={light.castShadow}
              onCheckedChange={(value) => {
                dispatch(
                  updateLights({
                    id: light.id,
                    castShadow: value,
                  }),
                );
              }}
            />
          </div>
        </div>
        <div className="">
          <div className="mt-2  flex gap-2 items-center  justify-between w-full">
            <div className="flex justify-between items-center my-1">
              <p className="text-xs font-semibold uppercase">Show Helper</p>
            </div>
            <Switch
              checked={light.helper}
              onCheckedChange={(value) => {
                dispatch(
                  updateLights({
                    id: light.id,
                    helper: value,
                  }),
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
