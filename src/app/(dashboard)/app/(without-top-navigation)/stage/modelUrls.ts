import { TModelState } from "@/types/stage/objects";
import { nanoid } from "@reduxjs/toolkit";

export const modelUrls = [
  "https://cdn.buu.fun/development/requests/5340d683-eb13-46c6-a7b0-9c42b470fd13/models/08b0d251-0689-4cab-b866-9613741df584.glb",
  "https://cdn.buu.fun/development/requests/c12b5e8c-cf60-4b6f-9b4e-89aab219b56b/models/714ddc57-fcba-4bf4-b0c2-828dd6b0f147.glb",
];

export const INITIAL_STAGING_MODELS: TModelState[] = [
  {
    id: nanoid(),
    type: "url",
    modelUrl:
      "https://cdn.buu.fun/development/requests/5340d683-eb13-46c6-a7b0-9c42b470fd13/models/08b0d251-0689-4cab-b866-9613741df584.glb",
    position: [0, 0, 5],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
  {
    type: "url",
    id: nanoid(),
    modelUrl:
      "https://cdn.buu.fun/development/requests/c12b5e8c-cf60-4b6f-9b4e-89aab219b56b/models/714ddc57-fcba-4bf4-b0c2-828dd6b0f147.glb",
    position: [0, 5, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
  {
    id: nanoid(),
    type: "url",
    modelUrl:
      "https://cdn.buu.fun/development/requests/5340d683-eb13-46c6-a7b0-9c42b470fd13/models/08b0d251-0689-4cab-b866-9613741df584.glb",
    position: [5, 0, 5],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
];

export type TModel = typeof INITIAL_STAGING_MODELS;

export const MOCK_HISTORY_MODELS: TModelState[] = [
  {
    id: nanoid(),
    type: "url",
    modelUrl:
      "https://cdn.buu.fun/development/requests/cd8d784b-918b-476b-8a94-de95177c2995/models/872c442c-b533-4a31-8696-8a8561db14a8.glb",
    imageUrl:
      "https://cdn.buu.fun/development/requests/94092d6f-3517-468e-a17d-39c409e86664/images/d7af05bd-6bd1-4cdc-855a-adbf6b95b591.jpg",
    position: [5, 0, 5],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
  {
    id: nanoid(),
    type: "url",
    modelUrl:
      "https://cdn.buu.fun/development/requests/e551c3d1-4cef-4297-a5aa-69aa8b8fa3ca/models/683346cc-cd16-4bfc-a6b6-a8b0ed84d75e.glb",
    imageUrl:
      "https://cdn.buu.fun/development/requests/3b6875ac-0090-4a2f-8e83-35c8d1507844/images/2f3adf66-0dd1-42f0-956e-2eff16a3e6fb.jpg",
    position: [5, 0, 5],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
  {
    id: nanoid(),
    type: "url",
    modelUrl:
      "https://cdn.buu.fun/development/requests/f2f6b924-8c8a-40bc-bc2f-c3c66ee5988e/models/30f9261f-6680-437c-90ca-6cc646abb393.glb",
    imageUrl:
      "https://cdn.buu.fun/development/requests/7c895129-71eb-47da-8d18-897c90f49893/images/270dae18-2f10-4ef8-85fb-d173f69b1595.jpg",
    position: [5, 0, 5],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
  {
    id: nanoid(),
    type: "url",
    modelUrl:
      "https://cdn.buu.fun/development/requests/59767f59-e84c-45bd-9a72-e1c02d2ba1b5/models/867f54a7-a32e-4b1e-89b5-e8b2dc732786.glb",
    imageUrl:
      "https://cdn.buu.fun/development/requests/2e8da39f-09d6-4f8c-8246-b2a22f157960/images/c845f5d7-7620-4b9b-b1e5-38beb2c38d58.jpg",
    position: [5, 0, 5],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
  {
    id: nanoid(),
    type: "url",
    modelUrl:
      "https://cdn.buu.fun/development/requests/c5a791d8-d5d8-4510-99f8-b1546f20427c/models/eee611d4-6268-4e71-a604-c26eeb036046.glb",
    position: [5, 0, 5],
    imageUrl:
      "https://cdn.buu.fun/development/requests/ab8d5026-7c9d-4575-b584-258b0b6b4cc8/images/b0387320-0889-4f51-8ddc-2611368d84fe.jpg",
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    visible: true,
  },
];
