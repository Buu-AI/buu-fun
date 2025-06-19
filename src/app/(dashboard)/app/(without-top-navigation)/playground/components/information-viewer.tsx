import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateCamera } from "@/lib/redux/features/stage";
import { Info } from "lucide-react";

export default function InformationViewer() {
  const selectedPolyCount = useAppSelector(
    (state) => state.stage.present.camera.position,
  );
  const dispatch = useAppDispatch();
  return (
    <div className="absolute flex gap-2 bottom-4 left-4 bg-roi-shadow p-2 rounded">
      <div className="flex items-center gap-2">
        <div className="flex items-center  gap-1">
          <Info className="" size={14} />
          <p>Click to select/unselect objects</p>
        </div>
        <div className="flex items-center  gap-1">
          <Info className="" size={14} />
          <p>Click empty space to unselect all</p>
        </div>
        <div className="flex items-center  gap-1">
          <Info className="" size={14} />
          <p>Drag to orbit camera</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(updateCamera({ position: [0, 0, 5] }));
          }}
          className=""
        >
          update camera
        </button>
        <div className="flex items-center justify-center gap-4">
          <p>x: {selectedPolyCount[0].toFixed(2)}</p>
          <p>y: {selectedPolyCount[0].toFixed(2)}</p>
          <p>z: {selectedPolyCount[0].toFixed(2)}</p>
        </div>
        {/* {true === true ? (
          <div className="flex items-center  gap-1">
            <Info className="" size={14} />
            <p className=" text-blue-300">
              Polygon count: {selectedPolyCount?.polygonCount}
            </p>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}
