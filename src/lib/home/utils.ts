import { TextureLoader } from "three";

const textureCache = new Map();

export function getCachedTexture(url: string) {
  if (textureCache.has(url)) {
    return textureCache.get(url);
  }

  const loader = new TextureLoader();
  const texture = loader.load(url);
  texture.anisotropy = 4;
  textureCache.set(url, texture);
  return texture;
}
