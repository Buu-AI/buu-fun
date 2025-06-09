// components/SceneLights.tsx
import { useAppSelector } from "@/hooks/redux";
import { LightItem } from "./lights-item";

export function SceneLights() {
  const lights = useAppSelector((state) => state.stage.present.lights);

  return (
    <>
      {/* Render the lights */}
      {lights?.map((light) => <LightItem key={light.id} light={light} />)}
    </>
  );
}
