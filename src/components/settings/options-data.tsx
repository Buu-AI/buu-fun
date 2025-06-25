import { SettingsState } from "@/lib/redux/features/settings";

export type TFacesKey = Exclude<SettingsState["faces"], null>;
export type TFacesValue = {
  value: TFacesKey;
  displayName: string;
  pro: boolean;
};

export const facesDetailData: Record<TFacesKey, TFacesValue> = {
  tenKey: {
    pro: false,
    displayName: "10K",
    value: "tenKey",
  },
  twentyKey: {
    pro: false,
    displayName: "20K",
    value: "twentyKey",
  },
  fiftyKey: {
    pro: true,
    displayName: "50K",
    value: "fiftyKey",
  },
  oneHundredKey: {
    pro: true,
    displayName: "100K",
    value: "oneHundredKey",
  },
} as Record<TFacesKey, TFacesValue>;

export type TTextureKey = Exclude<SettingsState["textureType"], null>;

export type TTextureValue = {
  value: TTextureKey;
  displayName: string;
  pro: boolean;
};

export const textureDetailData: Record<TTextureKey, TTextureValue> = {
  none: {
    pro: false,
    displayName: "No Texture",
    value: "none",
  },
  fast: {
    pro: false,
    displayName: "SD",
    value: "fast",
  },
  hd: {
    pro: true,
    displayName: "HD",
    value: "hd",
  },
} as Record<TTextureKey, TTextureValue>;
