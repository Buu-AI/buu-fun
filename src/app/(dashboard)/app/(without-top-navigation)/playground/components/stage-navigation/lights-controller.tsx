import AddLightComponent from "./add-light-component";
import LightsInScene from "./lights-in-scene";
type TLightsController = {};

export default function LightsController({}: TLightsController) {
  return (
    <div className="w-full">
      <AddLightComponent />
      <LightsInScene />
    </div>
  );
}
