import { contentSections } from "@/constants/home/how-to-section";
import React from "react";
import ContentContainer from "./content-container";

export default function HowToContainerMobile() {
  return (
    <div className="how-to-container flex w-max">
      {contentSections.map((section) => (
        <ContentContainer
          key={section.index}
          subDescription={section.subDescription}
          subTitle={section.subTitle}
          index={section.index}
          title={section.title}
        />
      ))}
    </div>
  );
}
