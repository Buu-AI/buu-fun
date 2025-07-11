export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface GlobeConfig {
  radius: number;
  animationSpeed: {
    rotation: Position3D;
    loading: number;
  };
  camera: {
    targetZ: number;
    animationDuration: number;
  };
  cards: {
    size: {
      width: number;
      height: number;
      cornerRadius: number;
      segments: number;
    };
    material: {
      emissive: number;
      emissiveIntensity: number;
      opacity: number;
    };
    animation: {
      duration: number;
      staggerDelay: number;
      ease: string;
    };
  };
}

export interface CardLayout {
  position: Position3D;
  rotation: Position3D;
}

// config/globe.config.ts
export const GLOBE_CONFIG: GlobeConfig = {
  radius: 8,
  animationSpeed: {
    rotation: { x: 0.003, y: 0.008, z: 0.01 },
    loading: 0.05,
  },
  camera: {
    targetZ: 5,
    animationDuration: 3,
  },
  cards: {
    size: {
      width: 1.6,
      height: 2,
      cornerRadius: 0.2,
      segments: 10,
    },
    material: {
      emissive: 0x444444,
      emissiveIntensity: 0.002,
      opacity: 1,
    },
    animation: {
      duration: 2.8,
      staggerDelay: 0.1,
      ease: "power3.out",
    },
  },
};

export const CARD_LAYOUTS: CardLayout[] = [
  { position: { x: 0, y: -3.5, z: -2 }, rotation: { x: -0.2, y: 0, z: 0 } },
  {
    position: { x: 6, y: -4, z: -10 },
    rotation: { x: -0.5, y: -0.2, z: -0.4 },
  },
  {
    position: { x: -4, y: -4.5, z: -5 },
    rotation: { x: -0.5, y: 0.7, z: 0.7 },
  },
  { position: { x: -6, y: 0, z: -5 }, rotation: { x: 0, y: 0, z: 0.7 } },
  { position: { x: -5, y: 4, z: -3 }, rotation: { x: 0.5, y: -0.3, z: 0.5 } },
  { position: { x: -5, y: 4, z: -10 }, rotation: { x: 0.2, y: -0.2, z: 0.5 } },
  { position: { x: 0, y: 4.3, z: -3 }, rotation: { x: 0.8, y: 0, z: 0 } },
  { position: { x: 5, y: 4, z: -3 }, rotation: { x: 0.5, y: 0.3, z: -0.5 } },
  { position: { x: 7, y: 0, z: -5 }, rotation: { x: 0, y: 0, z: -0.7 } },
  {
    position: { x: 6, y: -4.5, z: -5 },
    rotation: { x: -0.2, y: -0.4, z: -0.4 },
  },
  { position: { x: -8, y: 5, z: 8 }, rotation: { x: 0.3, y: -0.1, z: 0.2 } },
  { position: { x: 0, y: 5, z: 8 }, rotation: { x: 0.4, y: 0.2, z: -0.3 } },
];

export class PositionGenerator {
  private static generateRandomLayout(): CardLayout {
    return {
      position: {
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
        z: (Math.random() - 0.5) * 20,
      },
      rotation: {
        x: (Math.random() - 0.5) * Math.PI,
        y: (Math.random() - 0.5) * Math.PI,
        z: (Math.random() - 0.5) * Math.PI,
      },
    };
  }

  static getLayoutByIndex(index: number): CardLayout {
    return CARD_LAYOUTS[index] || this.generateRandomLayout();
  }

  static generateSpherePosition(
    index: number,
    total: number,
    radius: number
  ): Position3D {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    return {
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi) + 0.5,
    };
  }
}
