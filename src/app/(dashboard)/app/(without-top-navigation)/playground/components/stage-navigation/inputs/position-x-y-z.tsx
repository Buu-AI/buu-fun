import { cn, getX, getY, getZ } from "@/lib/utils";
import { TVector3, TVector3Positions } from "@/types/stage/objects";
import Position from "./position";

type TPositionXYZ = {
  value: TVector3;
  maxValue: TVector3 | number;
  toFixed?: number;
  onChange: (value: TVector3) => void;
  revolve?: boolean;
  className?: string;
};

export default function PositionXYZ({
  value,
  onChange,
  toFixed = 2,
  maxValue,
  className,
  // revolve = true,
}: TPositionXYZ) {
  const x = getX(value);
  const y = getY(value);
  const z = getZ(value);
  function handlePositionChange(type: TVector3Positions, value: number) {
    if (type === "x") {
      onChange([value, y, z]);
    }
    if (type === "y") {
      onChange([x, value, z]);
    }
    if (type === "z") {
      onChange([x, y, value]);
    }
  }

  return (
    <div className={cn("flex items-center  justify-center gap-2", className)}>
      <Position
        revolve
        maxValue={maxValue}
        type="x"
        onChange={(value) => {
          handlePositionChange("x", value);
        }}
        value={Number(x.toFixed(toFixed))}
      />
      <Position
        revolve
        maxValue={maxValue}
        type="y"
        onChange={(value) => {
          handlePositionChange("y", value);
        }}
        value={Number(y.toFixed(toFixed))}
      />
      <Position
        maxValue={maxValue}
        type="z"
        revolve
        onChange={(value) => {
          handlePositionChange("z", value);
        }}
        value={Number(z.toFixed(toFixed))}
      />
    </div>
  );
}
