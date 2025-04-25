"use client";
import QuestionIcon from "@/assets/icons/Icon.png";
import Image from "next/image";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import KnowMoreContent from "./know-more-content";

export default function KnowMorePopover() {
  const [open, setIsOpen] = useState(false);
  return (
    <Popover onOpenChange={setIsOpen} open={open}>
      <PopoverTrigger
        onMouseEnter={() => {
          setIsOpen(true);
        }}
      >
        <Image
          className="w-6 h-6"
          src={QuestionIcon}
          alt="Question Help"
          width={100}
          height={100}
        />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={4}
        className="mb-8 bg-buu pb-5 border-buu shadow-buu-inner opacity-100 max-w-[250px]"
        side="right"
      >
        <KnowMoreContent />
      </PopoverContent>
    </Popover>
  );
}
