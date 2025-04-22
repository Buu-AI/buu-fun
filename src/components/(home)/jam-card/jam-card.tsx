import InfiniteMenu from "@/components/ui/infinity-menu";

const items = [
  {
    image: "https://picsum.photos/800/800",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/900/800",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/700/800",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/800/700",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

import React from "react";

export default function JamCard() {
  return (
    <div className="h-screen relative">
      {/* <div className=" w-[200px] h-[100px]  bg-overlay-secondary  bg-[#69CCD5]  rounded-full right-[20%] absolute bottom-[-140px] z-50 blur-[100px]  rotate-[-10deg]" /> */}
      <div className="w-[176px] h-[334px] violet-gradient left-[45%]  rounded-full  absolute top-[5%] z-50   md:block hidden  rotate-[-10deg]" />
      <InfiniteMenu items={items} />
    </div>
  );
}
