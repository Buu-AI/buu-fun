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
    <div className="h-screen">
      <InfiniteMenu items={items} />
    </div>
  );
}
