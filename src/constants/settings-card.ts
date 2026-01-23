import { ModelType } from "@/gql/types/graphql";
import { TTextureKey, TFacesKey } from "@/components/settings/options-data";

export const DEFAULT_MODEL = ModelType.BuuV1;

export const enableFeature = {
  faces: {
    [ModelType.BuuV1]: true,
    [ModelType.BuuV2]: false,
  },
  texture: {
    [ModelType.BuuV1]: true,
    [ModelType.BuuV2]: true,
  },
};

// Configuration for which specific options are disabled per model
export const disabledOptions: {
  texture: Record<ModelType, TTextureKey[]>;
  faces: Record<ModelType, TFacesKey[]>;
} = {
  texture: {
    [ModelType.BuuV1]: [], // All texture options available
    [ModelType.BuuV2]: ["none"], // "No Texture" is disabled for BuuV2
  },
  faces: {
    [ModelType.BuuV1]: [], // All face options available
    [ModelType.BuuV2]: [], // All face options disabled already by enableFeature
  },
};