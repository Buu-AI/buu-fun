import { TextureManager } from "@/components/(home)/loading/texture-manger";
import { useEffect, useState } from "react";
import { Texture } from "three";

export const useTexture = (url: string) => {
  const [texture, setTexture] = useState<Texture | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const textureManager = TextureManager.getInstance();

    // Check if texture is already cached
    const cachedTexture = textureManager.getTexture(url);
    if (cachedTexture) {
      setTexture(cachedTexture);
      setLoading(false);
      return;
    }

    // Load texture
    textureManager
      .loadTexture(url)
      .then((loadedTexture) => {
        setTexture(loadedTexture);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { texture, loading, error };
};
