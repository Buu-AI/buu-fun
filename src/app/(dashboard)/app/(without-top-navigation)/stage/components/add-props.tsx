import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { createDefaultLight } from "../helper/utils";
import { addLights, removeLights } from "@/lib/redux/features/stage";
import { LightType } from "./lights-item";

export default function AddProps() {
  const lights = useAppSelector((state) => state.stage.present.lights);
  const dispatch = useAppDispatch();

  const addLight = (type: LightType) => {
    const newLight = createDefaultLight(type);
    dispatch(addLights(newLight));
  };

  const removeLight = (id: string) => {
    dispatch(removeLights(id));
  };
  return (
    <div className="border-2 absolute z-[100] top-0 right-0 max-w-max w-full h-full ">
      <div className="">
        <button
          className="hover:bg-red-400"
          onClick={() => addLight("directional")}
        >
          Add Directional Light
        </button>
        <button className="hover:bg-red-400" onClick={() => addLight("spot")}>
          Add Spot Light
        </button>
        <ul style={{ marginTop: 10, padding: 0 }}>
          {lights.map((l) => (
            <li key={l.id} style={{ listStyle: "none" }}>
              <button onClick={() => removeLight(l.id)}>
                Remove {l.type} - {l.id}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
