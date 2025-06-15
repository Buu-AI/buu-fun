export type TLightType = "directional" | "spot" | "point";
export type TVector3 = [number, number, number];
export type TVector3Positions = "x" | "y" | "z";

export type TLightConfig = {
  id: string;
  type: TLightType;
  position: TVector3;
  rotation: TVector3;
  scale: TVector3;
  target?: TVector3;
  intensity: number;
  angle?: number; // For spot lights (in radians)
  penumbra?: number; // For spot lights
  distance?: number; // For point and spot lights
  decay?: number; // For point and spot lights
  color: string;
  visible: boolean;
  castShadow?: boolean;
  helper?: boolean; // Show visual helper
};

export type LightInteractionMode = "translate" | "rotate" | "scale" | "none";

export type TModelState = {
  id: string;
  type: "url" | "object";
  modelUrl: string;
  imageUrl?: string;
  position: TVector3;
  visible: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object?: any;
  rotation: TVector3;
  scale: TVector3;
  extraLights: boolean;
};

export type TCamera = {
  fov: number;
  position: TVector3;
  target?: TVector3;
};

export type TWorlds = {
  type: "hdri" | "cuboid";
  hdriImageUrl: "";
  //should be index based and can manipulate the image
  cuboidImage: [];
};
