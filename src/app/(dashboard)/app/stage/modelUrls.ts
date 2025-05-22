import { nanoid } from "@reduxjs/toolkit";

export const modelUrls = [
  "https://cdn.buu.fun/development/requests/5340d683-eb13-46c6-a7b0-9c42b470fd13/models/08b0d251-0689-4cab-b866-9613741df584.glb",
  "https://cdn.buu.fun/development/requests/c12b5e8c-cf60-4b6f-9b4e-89aab219b56b/models/714ddc57-fcba-4bf4-b0c2-828dd6b0f147.glb",
];

export const modelData = [
  {
    id: nanoid(),
    modelUrl:
      "https://cdn.buu.fun/development/requests/5340d683-eb13-46c6-a7b0-9c42b470fd13/models/08b0d251-0689-4cab-b866-9613741df584.glb",
  },
  {
    id: nanoid(),
    modelUrl:
      "https://cdn.buu.fun/development/requests/c12b5e8c-cf60-4b6f-9b4e-89aab219b56b/models/714ddc57-fcba-4bf4-b0c2-828dd6b0f147.glb",
  },
  {
    id: nanoid(),
    modelUrl:
      "https://cdn.buu.fun/development/requests/c12b5e8c-cf60-4b6f-9b4e-89aab219b56b/models/714ddc57-fcba-4bf4-b0c2-828dd6b0f147.glb",
  },
];

export type TModel = typeof modelData