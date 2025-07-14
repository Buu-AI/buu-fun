import { RectangleRounded } from "@/lib/helpers/threejs/rectangle-rounded";
import { memo, useRef } from "react";
import { DoubleSide, Mesh } from "three";
import { GLOBE_CONFIG, Position3D } from "./position-generator";
import { useTexture } from "@/hooks/use-texture";
import { useCardAnimations } from "@/hooks/use-card-animation";

interface ImageCardProps {
  imageUrl: string;
  index: number;
  finishedLoading: boolean;
  initialPosition: Position3D;
}

export const ImageCard = memo<ImageCardProps>(
  ({ imageUrl, index, finishedLoading, initialPosition }) => {
    const meshRef = useRef<Mesh>(null);
    const { texture } = useTexture(imageUrl);

    useCardAnimations(meshRef, finishedLoading, index, initialPosition);

    const { size, material } = GLOBE_CONFIG.cards;

    if (!texture) return null;

    return (
      <mesh
        ref={meshRef}
        position={[initialPosition.x, initialPosition.y, initialPosition.z]}
        geometry={RectangleRounded(
          size.width,
          size.height,
          size.cornerRadius,
          size.segments,
        )}
        lookAt={[0, 0, 0]}
      >
        <meshStandardMaterial
          map={texture}
          side={DoubleSide}
          transparent
          opacity={material.opacity}
          emissive={material.emissive}
          emissiveIntensity={material.emissiveIntensity}
        />
      </mesh>
    );
  },
);

ImageCard.displayName = "ImageCard";
