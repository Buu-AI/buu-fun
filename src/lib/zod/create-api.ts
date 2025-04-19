import { z } from "zod";
export const ExpirationUnitEnums = [
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
] as const;

export const createAPISchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter at least 2 characters" })
    .max(20, { message: "Please enter characters below 20" }),
  expiresIn: z
    .object({
      units: z.enum(ExpirationUnitEnums),
      value: z.number(),
    })
    .optional(),
});

export type TCreateAPISchema = z.infer<typeof createAPISchema>;
