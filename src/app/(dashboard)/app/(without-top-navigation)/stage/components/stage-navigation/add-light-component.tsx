type TAddLightComponent = {};
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import toast from "react-hot-toast";
import { createDefaultLightConfig } from "../../helper/utils";
import { addLights } from "@/lib/redux/features/stage";
import { useAppDispatch } from "@/hooks/redux";
type TLightType = "directional" | "spot" | "point";

export default function AddLightComponent({}: TAddLightComponent) {
  const [selectedLightsToAdd, setSelectedLights] = useState<TLightType | null>(
    null,
  );
  const dispatch = useAppDispatch();
  function addDefaultLights() {
    if (!selectedLightsToAdd) {
      toast.error("Please select a light");
      return;
    }
    try {
      const defaultLightConfig = createDefaultLightConfig(selectedLightsToAdd);
      dispatch(addLights(defaultLightConfig));
      toast.success(`Added ${selectedLightsToAdd} light to scene`);
    } catch (error) {
      toast.error(`Failed to add ${selectedLightsToAdd} light`);
      console.error("Error adding light:", error);
    }
    toast.success(`Selected ${selectedLightsToAdd}`);
  }
  return (
    <div className="gap-2 max-w-sm w-full ">
      <div className="w-full">
        <p className="text-xs font-semibold mb-1 ml-1 uppercase">Add Lights</p>
        <Select
          value={selectedLightsToAdd ?? undefined}
          onValueChange={(value) => {
            if (!value) {
              return;
            }
            const light = value as TLightType | null;
            setSelectedLights(light);
          }}
        >
          <SelectTrigger className="w-full border-0 bg-buu">
            <SelectValue placeholder="select a light" />
          </SelectTrigger>
          <SelectContent
            defaultValue={"point"}
            className="bg-buu-button w-full border-0"
          >
            <SelectItem
              className="border-none text-sm focus:bg-buu-secondary  pl-4 pr-4 text-center  mx-auto"
              value="point"
            >
              Point Light
            </SelectItem>
            <SelectItem
              className="border-none text-sm focus:bg-buu-secondary  pl-4 pr-4 text-center  mx-auto"
              value="directional"
            >
              Directional Light
            </SelectItem>
            <SelectItem
              className="border-none text-sm focus:bg-buu-secondary  pl-4 pr-4 text-center  mx-auto"
              value="spot"
            >
              Spot Light
            </SelectItem>
          </SelectContent>
        </Select>{" "}
      </div>

      <div className="mt-2">
        <Button className="w-full" onClick={addDefaultLights}>
          Add {selectedLightsToAdd} light
        </Button>
      </div>
    </div>
  );
}
