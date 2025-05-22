import { useControls } from "leva";
import React from "react";

export default function GridHelpers() {
  const { visible, size, divisions } = useControls("Grid Helper", {
    visible: false,
    size: {
      value: 100,
      min: 1,
      max: 500,
      step: 1,
      render: (get) => get("Grid Helper.visible") === true,
    },
    divisions: {
      value: 100,
      min: 1,
      max: 500,
      step: 1,
      render: (get) => get("Grid Helper.visible") === true,
    },
  });

  return <gridHelper visible={visible} args={[size, divisions]} />;
}
