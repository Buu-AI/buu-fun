import { useAppSelector } from "@/hooks/redux";
import { Info } from "lucide-react";

type TInformationViewer = {};

export default function InformationViewer({}: TInformationViewer) {
  const selectedPolyCount = useAppSelector(
    (state) => state.stage.selectedModel
  );
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
        {true === true ? (
          <div className="flex items-center  gap-1">
            <Info className="" size={14} />
            <p className=" text-blue-300">
              Polygon count: {selectedPolyCount?.polygonCount}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
