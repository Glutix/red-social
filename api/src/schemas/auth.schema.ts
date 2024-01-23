import { z } from "zod";
import {
  RegisterErrorMessages,
  birthdateRegex,
  passwordRegex,
  regexName,
} from "../utils/errorsHandle";

export const registerScheme = z.object({
  body: z.object({
    firstName: z
      .string()
      .trim()
      .toLowerCase()
      .regex(regexName, RegisterErrorMessages.firstName.regexError)
      .min(3, RegisterErrorMessages.firstName.minLengthError)
      .max(30, RegisterErrorMessages.firstName.maxLengthError),
    lastName: z
      .string()
      .trim()
      .toLowerCase()
      .regex(regexName, RegisterErrorMessages.lastName.regexError)
      .min(3, RegisterErrorMessages.lastName.minLengthError)
      .max(30, RegisterErrorMessages.lastName.maxLengthError),
    email: z.string().email(RegisterErrorMessages.email),
    password: z
      .string()
      .regex(passwordRegex, RegisterErrorMessages.password.regexError)
      .min(8, RegisterErrorMessages.password.minLengthError)
      .max(32, RegisterErrorMessages.password.maxLengthError),
    birthdate: z
      .string()
      .regex(birthdateRegex, RegisterErrorMessages.birthdate.regexError)
      .min(1, RegisterErrorMessages.birthdate.minLengthError)
      .max(10, RegisterErrorMessages.birthdate.maxLengthError),
    image: z.string().optional(),
    description: z.string().trim().toLowerCase().optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(RegisterErrorMessages.email),
    password: z
      .string()
      .regex(passwordRegex, RegisterErrorMessages.password.regexError)
      .min(8, RegisterErrorMessages.password.minLengthError)
      .max(32, RegisterErrorMessages.password.maxLengthError),
  }),
});
