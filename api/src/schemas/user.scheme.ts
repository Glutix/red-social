import { z } from "zod";
import {
  RegisterErrorMessages,
  birthdateRegex,
  passwordRegex,
  regexName,
} from "../utils/errorsHandle";

export const updateScheme = z.object({
  body: z.object({
    firstName: z
      .string()
      .trim()
      .toLowerCase()
      .regex(regexName, RegisterErrorMessages.firstName.regexError)
      .min(3, RegisterErrorMessages.firstName.minLengthError)
      .max(30, RegisterErrorMessages.firstName.maxLengthError)
      .optional(),
    lastName: z
      .string()
      .trim()
      .toLowerCase()
      .regex(regexName, RegisterErrorMessages.lastName.regexError)
      .min(3, RegisterErrorMessages.lastName.minLengthError)
      .max(30, RegisterErrorMessages.lastName.maxLengthError)
      .optional(),
    email: z.string().email(RegisterErrorMessages.email).optional(),
    password: z
      .string()
      .regex(passwordRegex, RegisterErrorMessages.password.regexError)
      .min(8, RegisterErrorMessages.password.minLengthError)
      .max(32, RegisterErrorMessages.password.maxLengthError)
      .optional(),
    birthdate: z
      .string()
      .regex(birthdateRegex, RegisterErrorMessages.birthdate.regexError)
      .min(1, RegisterErrorMessages.birthdate.minLengthError)
      .max(10, RegisterErrorMessages.birthdate.maxLengthError)
      .optional(),
    image: z.string().optional(),
    description: z.string().trim().toLowerCase().optional(),
  }),
});
