import { z } from "zod";
import { ErrorMessages, regexName } from "../utils/errorsHandle";

export const registerScheme = z.object({
  body: z.object({
    firstName: z
      .string()
      .trim()
      .toLowerCase()
      .regex(regexName, ErrorMessages.firstName.regexError)
      .min(3, ErrorMessages.firstName.lengthMinError)
      .max(30, ErrorMessages.firstName.lengthMaxError),
    lastName: z
      .string()
      .trim()
      .toLowerCase()
      .regex(regexName, ErrorMessages.lastName.regexError)
      .min(3, ErrorMessages.lastName.lengthMinError)
      .max(30, ErrorMessages.lastName.lengthMaxError),
    email: z.string().email(),
    password: z.string(),
    birthdate: z.string(),
    image: z.string(),
    description: z.string(),
  }),
});
