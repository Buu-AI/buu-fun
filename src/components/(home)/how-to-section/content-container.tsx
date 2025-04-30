import React, { ReactNode } from "react";
type TContentContainer = {
  title: string;
  index: number | string;
  subTitle: ReactNode;
  subDescription: string;
};
export default function ContentContainer({
  title,
  index,
  subDescription,
  subTitle,
}: TContentContainer) {
  return (
    <div className="h-full w-full min-w-[320px] max-w-[100vw] max-md:pl-[55%] max-md:last-of-type:pr-[20%] max-md:first-of-type:pl-[5%] md:first-of-type:pl-[5%] md:last-of-type:pr-[5%] flex flex-shrink-0 items-center justify-between flex-col">
      <h1 className="text-[100px] md:text-[150px] 2xl:text-[250px] dark-text-clip text-center font-medium tracking-tighter">
        {title}
      </h1>
      <div className="flex flex-col max-md:min-w-max  self-start pl-[5%] pt-[10%] md:pt-[15%]">
        <p className="blue-text-clip font-medium">{index}</p>
        <h4 className="text-3xl md:text-5xl font-medium tracking-tighter">
          {subTitle}
        </h4>
        <p className="tracking-tighter text-base md:text-lg">
          {subDescription}
        </p>
      </div>
    </div>
  );
}
