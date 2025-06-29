import { ReactNode } from "react";
import { Create3DLayout } from "../headers/home/image-layouts";

export default function SettingsBarSelectedDisplay({
  title = "3D Object",
}: {
  title?: ReactNode;
}) {
  //add framer-motion animated-out. or similar apis. for hidden to view transitions.
  return (
    <div className=" relative z-10  items-center group justify-center flex gap-2">
      <div className="relative group-data-[state=inactive]:hidden   flex items-center w-6 h-6 justify-center   ">
        {/* will need to add dynamic Layouts for each options. */}
        <Create3DLayout
          containerClass=""
          ImageOneClassName="max-w-max h-5 w-5 rounded-sm left-0.5 top-0.5  group-hover:rotate-[-12deg] rotate-[-6deg] "
          ImageTwoClassName="max-w-max group-hover:rotate-[14deg] rotate-[6deg] h-5 w-5 rounded-sm -bottom-0  left-2 top-1"
        />
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
}
