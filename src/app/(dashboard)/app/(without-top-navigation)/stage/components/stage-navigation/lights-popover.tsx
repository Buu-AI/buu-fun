import LightIcon from "@/assets/icons/light-icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppDispatch } from "@/hooks/redux";
import { addLights } from "@/lib/redux/features/stage";
import { createDefaultLight } from "../../helper/utils";

type TLightsPopover = {};

export default function LightsPopover({}: TLightsPopover) {
  const dispatch = useAppDispatch();
  return (
    <Popover>
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
        className="bg-stage-modal border-none"
      >
        <div>
          <button
            onClick={() => {
              dispatch(addLights(createDefaultLight("spot")));
            }}
          >
            Add spot lights
          </button>
        </div>
        <div>
          <h1>hello</h1>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </PopoverContent>
    </Popover>
  );
}
