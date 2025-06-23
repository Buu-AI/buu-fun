import LightIcon from "@/assets/icons/light-icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setLightsPopover } from "@/lib/redux/features/stage";
import LightsController from "./lights-controller";

type TLightsPopover = {};

export default function LightsPopover({}: TLightsPopover) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(
    (state) => state.stage.present.openLightsPopover,
  );
  return (
    <Popover
      open={isOpen}
      onOpenChange={(value) => {
        dispatch(setLightsPopover(value));
      }}
    >
      <PopoverTrigger asChild>
        <button className="flex items-center  justify-center rounded-lg py-2 px-2 h-10  text-">
          <div className="text-white  ">
            <LightIcon />
          </div>
          <p className="leading-none  mt-1">Lights</p>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={15}
        className="bg-stage-modal border-none flex max-w-full w-96 "
      >
        <div className="w-full">
          <LightsController />
        </div>
      </PopoverContent>
    </Popover>
  );
}
