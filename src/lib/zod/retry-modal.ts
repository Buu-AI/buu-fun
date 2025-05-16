import { z } from "zod";

export const retryWithImageSchema = z.object({
  imageUrl: z
    .string()
    .url({ message: "Not a valid image, Please try different image" }),
  message: z.string().min(3, "Please enter at least 3 character"),
});

export type TRetryWithImageSchema = z.infer<typeof retryWithImageSchema>;
