import { useMemo, useRef } from "react";
import { Group } from "three";
import { ImageCard } from "./image-card";
import { useGlobeAnimations } from "@/hooks/use-global-animation";
import { GLOBE_CONFIG, PositionGenerator } from "./position-generator";

interface ImageGlobeProps {
  finishedLoading: boolean;
  imageUrls: string[];
  config?: Partial<typeof GLOBE_CONFIG>;
}

export const ImageGlobe = ({ finishedLoading, imageUrls, config }: ImageGlobeProps) => {
  const groupRef = useRef<Group>(null);
  const currentConfig = { ...GLOBE_CONFIG, ...config };
  
  useGlobeAnimations(groupRef, finishedLoading);

  const imageCards = useMemo(() => {
    return imageUrls.map((imageUrl, index) => {
      const initialPosition = PositionGenerator.generateSpherePosition(
        index,
        imageUrls.length,
        currentConfig.radius
      );

      return (
        <ImageCard
          key={`${index}-${imageUrl}`}
          imageUrl={imageUrl}
          index={index}
          finishedLoading={finishedLoading}
          initialPosition={initialPosition}
        />
      );
    });
  }, [imageUrls, finishedLoading, currentConfig.radius]);

  return <group ref={groupRef}>{imageCards}</group>;
};
