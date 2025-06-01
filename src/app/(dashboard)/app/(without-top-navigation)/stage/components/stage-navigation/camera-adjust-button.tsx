import CameraIcon from "@/assets/icons/camera-icon";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  INITIAL_CAMERA_STATE,
  updateCamera,
  updateFov,
} from "@/lib/redux/features/stage";
import { cn } from "@/lib/utils";
import PositionXYZ from "./inputs/position-x-y-z";
import ProgressBar from "./progress-bar";

type TCameraAdjustButton = {};

export default function CameraAdjustButton({}: TCameraAdjustButton) {
  const position = useAppSelector(
    (state) => state.stage.present.camera.position,
  );
  const fov = useAppSelector((state) => state.stage.present.camera.fov);

  const dispatch = useAppDispatch();
  return (
    <Popover defaultOpen>
      <PopoverTrigger className="peer" asChild>
        <button className="flex items-center rounded-lg py-2 px-2.5 h-10  group data-[state=open]:text-black   data-[state=open]:bg-white">
          <div className="text-white group-data-[state=open]:text-black">
            <CameraIcon />
          </div>
          <p>Camera</p>
        </button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={12}
        className="max-w-sm w-full bg-stage-modal border-none"
      >
        <div className="w-full mb-2.5">
          <div className="mb-3 w-full flex justify-between items-center">
            <p className="uppercase  text-xs font-bold">
              Field of view: {fov}º
            </p>
            <button
              onClick={() => {
                dispatch(updateFov(INITIAL_CAMERA_STATE.fov));
              }}
              disabled={fov === INITIAL_CAMERA_STATE.fov}
              className={cn("uppercase text-white text-xs font-bold", {
                "text-muted-foreground/80": fov === INITIAL_CAMERA_STATE.fov,
              })}
            >
              reset
            </button>
          </div>
          <ProgressBar
            min={40}
            max={100}
            onChange={(value) => {
              dispatch(updateFov(value));
            }}
            value={fov}
          />
        </div>
        <div className="w-full ">
          <div className="mb-3">
            <p className="uppercase  text-xs font-semibold">Camera Position</p>
          </div>
          <PositionXYZ
            maxValue={[50, 50, 50]}
            onChange={(value) => {
              dispatch(updateCamera({ position: value }));
            }}
            value={position}
          />
        </div>
        <div className="mt-3">
          <Button
            disabled={position === INITIAL_CAMERA_STATE.position}
            onClick={() => {
              dispatch(
                updateCamera({ position: INITIAL_CAMERA_STATE.position }),
              );
            }}
            size={"special"}
            className="w-full"
          >
            Reset Camera
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
