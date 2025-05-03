import { z } from "zod";

export const createNftSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter at least 2 characters" })
    .max(20, { message: "Please enter characters below 20" }),
  description: z
    .string()
    .min(4, { message: "Please enter at least 2 characters" }),
});

export type TCreateNftSchema = z.infer<typeof createNftSchema>;
