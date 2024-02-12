import { z } from "zod";

export const postScheme = z.object({
  body: z.object({
    content: z.string().min(1),
    images: z.array(z.string()).optional(),
    userID: z.number(),
  }),
});
