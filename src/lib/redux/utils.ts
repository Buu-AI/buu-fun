export const ImageModelType = ["fal-ai/flux-lora", "FluxLora"];
export const ThreeDModelType = ["fal-ai/trellis", "Trellis"];

export function isThreeDModel(type: string) {
  return ThreeDModelType.includes(type);
}

export function isImageModel(type: string) {
  return ImageModelType.includes(type);
}
