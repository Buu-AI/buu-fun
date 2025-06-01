export type TLightType = "directional" | "spot";

export type TVector3 = [number, number, number];
export type TVector3Positions = "x" | "y" | "z";
export type TLightConfig = {
  id: string;
  type: TLightType;
  position: TVector3;
  target: TVector3;
  intensity: number;
  angle?: number;
  color: string;
  visible: boolean;
};

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
