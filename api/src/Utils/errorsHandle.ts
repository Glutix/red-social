import { PropsErrorMessages } from "../types/types";
export const regexName = RegExp("^[A-Za-zÁÉÍÓÚáéíóúÜüÑñs'-]+$");

export const ErrorMessages: PropsErrorMessages = {
  //? firstName
  firstName: {
    regexError: "El nombre no puede contener números o caracteres especiales",
    lengthMinError: "El nombre debe tener 3 o más caracteres.",
    lengthMaxError: "El nombre debe tener 30 caracteres o menos",
  },

  //? lastName
  lastName: {
    regexError: "El apellido no puede contener números o caracteres especiales",
    lengthMinError: "El apellido debe tener 3 o más caracteres.",
    lengthMaxError: "El apellido debe tener 30 caracteres o menos",
  },
};
