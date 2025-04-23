import { useLayoutEffect, useRef, RefObject } from "react";

// Type definitions for our configurations
export interface DesignConfig {
  designWidth: number;
  designHeight: number;
}

export interface PositioningConfig {
  centerX: number;
  topY: number;
  elementWidth: number;
  elementHeight: number;
  offsetXFactor?: number;
}

// Reusable function to position elements responsively based on reference design
const useResponsivePositioning = (
  containerRef: RefObject<HTMLElement | null>,
  elementRef: RefObject<HTMLElement| null>,
  designConfig: DesignConfig,
  positioningConfig: PositioningConfig
): void => {
  useLayoutEffect(() => {
    const { designWidth, designHeight } = designConfig;
    const {
      centerX,
      topY,
      elementWidth,
      elementHeight,
      offsetXFactor = 2,
    } = positioningConfig;

    // Function to update element position based on current viewport
    const updateElementPosition = (): void => {
      if (!elementRef.current || !containerRef.current) return;

      // Get current container dimensions
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Get background image dimensions as it's rendered
      const bgRatio = designWidth / designHeight;
      const containerRatio = containerWidth / containerHeight;

      let renderedBgWidth: number, renderedBgHeight: number;

      // Determine how the object-cover scales the background
      if (containerRatio > bgRatio) {
        // Background is wider than container's aspect ratio
        renderedBgWidth = containerWidth;
        renderedBgHeight = containerWidth / bgRatio;
      } else {
        // Background is taller than container's aspect ratio
        renderedBgHeight = containerHeight;
        renderedBgWidth = containerHeight * bgRatio;
      }

      // Calculate scaling factors based on how the background is actually rendered
      const scaleX = renderedBgWidth / designWidth;
      const scaleY = renderedBgHeight / designHeight;

      // Calculate offset if background is centered
      const offsetX = (containerWidth - renderedBgWidth) / 2;
      const offsetY = (containerHeight - renderedBgHeight) / 2;

      // Calculate the position where the element should be
      const elementX = centerX * scaleX + offsetX;
      const elementY = topY * scaleY + offsetY;

      // Calculate the element dimensions based on the rendered background
      const scaledWidth = elementWidth * scaleX;
      const scaledHeight = elementHeight * scaleY;

      // Position the element centered on the calculated position
      elementRef.current.style.width = `${scaledWidth}px`;
      elementRef.current.style.height = `${scaledHeight}px`;
      elementRef.current.style.left = `${elementX - scaledWidth / offsetXFactor}px`;
      elementRef.current.style.top = `${elementY}px`;
    };

    // Run on mount and resize
    updateElementPosition();
    window.addEventListener("resize", updateElementPosition);

    return () => {
      window.removeEventListener("resize", updateElementPosition);
    };
  }, [containerRef, elementRef, designConfig, positioningConfig]);
};
export default useResponsivePositioning;
