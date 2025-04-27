import { SubthreadStyle } from "@/gql/types/graphql";
import { TSubthread } from "@/lib/react-query/threads-types";

export const MockData: { items: TSubthread[] } = {
  items: [
    {
      _id: "e632dd93-abea-4d0b-8cdd-f232c3146f9a",
      address: "0x123345235213",
      createdAt: "2025-02-24T13:00:55.478Z",
      updatedAt: "2025-02-24T13:01:06.609Z",
      threadId: "b14ea14c-27f3-4404-ad1f-eb8fa903c4e1",
      prompt: "can you generate a boy?",
      style: "Metallic" as SubthreadStyle,
      imageRequests: [
        {
          _id: "8acee4ff-8dfe-4d2b-b30c-25e52d8dccf3",
          status: "Success",
          metadata: {
            prompt:
              "can you generate a boy?. A 3D object optimized for real-time rendering in video games, featuring clean topology, efficient UV mapping, rendered on a pure white background with balanced lighting, no shadows, and no extraneous elements. The asset must display clearly defined colors and boundaries, without any base or additional components. . Reflective surfaces, metallic sheens, chrome or gold materials, industrial feel.",
            imageSize: {
              width: 2048,
              height: 2048,
            },
            numOfInferenceSteps: 28,
            seed: 6250856,
            loras: null,
            guidanceScale: 3.5,
            syncMode: false,
            numImages: 1,
            enableSafetyChecker: true,
            outputFormat: "png",
            webhookUrl: "",
          },
          type: "fal-ai/flux-lora",
          images: [
            {
              content_type: "image/png",
              file_name: "",
              file_size: 0,
              url: "https://v3.fal.media/files/tiger/BB3w8EYyrC9Jn6cIQpQzS_db45a81fc56b41e1b247efcbb60b5706.png",
            },
          ],
          model_mesh: {
            content_type: "",
            file_name: "",
            file_size: 1,
            url: "",
          },
          timings: {
            inference: 1,
          },
        },
      ],
      modelRequests: [
        {
          _id: "dasdasdasd-5dbf-4c64-9dcb-dasdasdas",
          status: "Success",
          metadata: {
            imageUrl:
              "https://v3.fal.media/files/tiger/BB3w8EYyrC9Jn6cIQpQzS_db45a81fc56b41e1b247efcbb60b5706.png",
            webhookUrl: "",
          },
          type: "fal-ai/trellis",
          images: [],
          model_mesh: {
            content_type: "application/octet-stream",
            file_name: "model.glb",
            file_size: 3318916,
            url: "https://v3.fal.media/files/monkey/U0Oim5EBquYFeNSr7kLb__model.glb",
          },
          timings: {
            inference: 1,
          },
        },
        {
          _id: "8fc5d095-c5a6-4a50-88aa-dasdasdadasd",
          status: "Success",
          metadata: {
            imageUrl:
              "https://v3.fal.media/files/elephant/vWz9lDnBWjJD9bkXiVJIp_69f5cc404e48495388404d2a727ac53a.png",
            webhookUrl: "",
          },
          type: "fal-ai/trellis",
          images: [],
          model_mesh: {
            content_type: "application/octet-stream",
            file_name: "model.glb",
            file_size: 4138276,
            url: "https://v3.fal.media/files/lion/HRFe-k7P9WO4fVOAuyyXx_model.glb",
          },
          timings: {
            inference: 1,
          },
        },
      ],
    },
    {
      _id: "6f07acfd-767e-47a9-9493-02e69a6ac2db",
      address: "0x123345235213",
      createdAt: "2025-02-24T13:06:41.830Z",
      updatedAt: "2025-02-24T13:06:52.943Z",
      threadId: "b14ea14c-27f3-4404-ad1f-eb8fa903c4e1",
      prompt: "can you generate a monkey and sitting on a boys head?",
      style: "Realistic" as SubthreadStyle,
      imageRequests: [
        {
          _id: "e4f5b37d-7cd9-4c17-af1d-a3225196d6db",
          status: "Success",
          metadata: {
            prompt:
              "can you generate a monkey and sitting on a boys head?. A 3D object optimized for real-time rendering in video games, featuring clean topology, efficient UV mapping, rendered on a pure white background with balanced lighting, no shadows, and no extraneous elements. The asset must display clearly defined colors and boundaries, without any base or additional components. . High-resolution textures, lifelike materials, accurate lighting, photorealistic rendering.",
            imageSize: {
              width: 2048,
              height: 2048,
            },
            numOfInferenceSteps: 28,
            seed: 9686049,
            loras: null,
            guidanceScale: 3.5,
            syncMode: false,
            numImages: 1,
            enableSafetyChecker: true,
            outputFormat: "png",
            webhookUrl: "",
          },
          type: "fal-ai/flux-lora",
          images: [
            {
              content_type: "image/png",
              file_name: "null",
              file_size: 1,
              url: "https://v3.fal.media/files/elephant/vWz9lDnBWjJD9bkXiVJIp_69f5cc404e48495388404d2a727ac53a.png",
            },
          ],
          model_mesh: {
            content_type: "",
            file_name: "",
            file_size: 1,
            url: "",
          },
          timings: {
            inference: 1,
          },
        },
      ],
      modelRequests: [
        {
          _id: "fdf00209-5dbf-4c64-9dcb-dasdasdas",
          status: "Success",
          metadata: {
            imageUrl:
              "https://v3.fal.media/files/tiger/BB3w8EYyrC9Jn6cIQpQzS_db45a81fc56b41e1b247efcbb60b5706.png",
            webhookUrl: "",
          },
          type: "fal-ai/trellis",
          images: [],
          model_mesh: {
            content_type: "application/octet-stream",
            file_name: "model.glb",
            file_size: 3318916,
            url: "https://v3.fal.media/files/monkey/U0Oim5EBquYFeNSr7kLb__model.glb",
          },
          timings: {
            inference: 1,
          },
        },
        {
          _id: "8fc5d095-c5a6-4a50-88aa-e609993559d9",
          status: "Success",
          metadata: {
            imageUrl:
              "https://v3.fal.media/files/elephant/vWz9lDnBWjJD9bkXiVJIp_69f5cc404e48495388404d2a727ac53a.png",
            webhookUrl: "",
          },
          type: "fal-ai/trellis",
          images: [],
          model_mesh: {
            content_type: "application/octet-stream",
            file_name: "model.glb",
            file_size: 4138276,
            url: "https://v3.fal.media/files/lion/HRFe-k7P9WO4fVOAuyyXx_model.glb",
          },
          timings: {
            inference: 1,
          },
        },
        {
          _id: "8fc5d095-c5a6-4a50-dasdada-e609993559d9",
          status: "Success",
          metadata: {
            imageUrl:
              "https://v3.fal.media/files/elephant/vWz9lDnBWjJD9bkXiVJIp_69f5cc404e48495388404d2a727ac53a.png",
            webhookUrl: "",
          },
          type: "fal-ai/trellis",
          images: [],
          model_mesh: {
            content_type: "application/octet-stream",
            file_name: "model.glb",
            file_size: 4138276,
            url: "https://v3.fal.media/files/lion/HRFe-k7P9WO4fVOAuyyXx_model.glb",
          },
          timings: {
            inference: 1,
          },
        },
        {
          _id: "8fc5d095-c5a6-4a50-88aa-e60999dasdasd3559d9",
          status: "Success",
          metadata: {
            imageUrl:
              "https://v3.fal.media/files/elephant/vWz9lDnBWjJD9bkXiVJIp_69f5cc404e48495388404d2a727ac53a.png",
            webhookUrl: "",
          },
          type: "fal-ai/trellis",
          images: [],
          model_mesh: {
            content_type: "application/octet-stream",
            file_name: "model.glb",
            file_size: 4138276,
            url: "https://v3.fal.media/files/lion/HRFe-k7P9WO4fVOAuyyXx_model.glb",
          },
          timings: {
            inference: 1,
          },
        },
      ],
    },
  ],
  //   metadata: {
  //     limit: 10,
  //     offset: 0,
  //     orderBy: "createdAt",
  //     orderDirection: "asc",
  //     numElements: 1,
  //     page: 1,
  //     pages: 1,
  //   },
};

export const mockReferralReward: {
  __typename?: "ReferralReward";
  _id: string;
  referral: string;
  referee: string;
  creditsPurchaseId?: string | null;
  tokens?: string | null;
  decimals?: number | null;
  transactionHash?: string | null;
  createdAt: any;
} = {
  __typename: "ReferralReward",
  _id: "reward_abc123",
  referral: "user_referral_001",
  referee: "user_referee_002",
  creditsPurchaseId: "purchase_xyz789",
  tokens: "1500000000000000000", // 1.5 tokens if decimals = 18
  decimals: 18,
  transactionHash: "0xabcdef1234567890abcdef1234567890abcdef12",
  createdAt: new Date().toISOString(), // or just `new Date()`
};
