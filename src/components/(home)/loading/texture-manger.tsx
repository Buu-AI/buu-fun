import { Texture, TextureLoader } from "three";

export class TextureManager {
  private static instance: TextureManager;
  private cache = new Map<string, Texture>();
  private loader = new TextureLoader();
  private loadingPromises = new Map<string, Promise<Texture>>();

  static getInstance(): TextureManager {
    if (!TextureManager.instance) {
      TextureManager.instance = new TextureManager();
    }
    return TextureManager.instance;
  }

  async loadTexture(url: string): Promise<Texture> {
    // Return cached texture if available
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    // Return existing loading promise if texture is being loaded
    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url)!;
    }

    // Create new loading promise
    const loadPromise = new Promise<Texture>((resolve, reject) => {
      this.loader.load(
        url,
        (texture) => {
          texture.anisotropy = 4;
          this.cache.set(url, texture);
          this.loadingPromises.delete(url);
          resolve(texture);
        },
        undefined,
        (error) => {
          this.loadingPromises.delete(url);
          reject(error);
        },
      );
    });

    this.loadingPromises.set(url, loadPromise);
    return loadPromise;
  }

  getTexture(url: string): Texture | null {
    return this.cache.get(url) || null;
  }

  preloadTextures(urls: string[]): Promise<Texture[]> {
    return Promise.all(urls.map((url) => this.loadTexture(url)));
  }

  dispose(): void {
    this.cache.forEach((texture) => texture.dispose());
    this.cache.clear();
    this.loadingPromises.clear();
  }

  getCacheSize(): number {
    return this.cache.size;
  }
}
