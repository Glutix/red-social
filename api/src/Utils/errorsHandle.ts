import { PropsRegisterErrorMessages } from "../types/user.types";

//? Regex
export const regexName = /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñs'-]+$/;
export const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+/;
export const birthdateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;

export const RegisterErrorMessages: PropsRegisterErrorMessages = {
  //? firstName
  firstName: {
    regexError: "El nombre no puede contener números o caracteres especiales.",
    minLengthError: "El nombre debe tener 3 o más caracteres.",
    maxLengthError: "El nombre debe tener 30 caracteres o menos.",
  },

  //? lastName
  lastName: {
    regexError:
      "El apellido no puede contener números o caracteres especiales.",
    minLengthError: "El apellido debe tener 3 o más caracteres.",
    maxLengthError: "El apellido debe tener 30 caracteres o menos.",
  },

  email: "El correo ingresado no es valido.",
  password: {
    regexError: "La contraseña debe contener letras y números.",
    minLengthError: "La contraseña debe tener 8 o mas caracteres.",
    maxLengthError: "La contraseña debe tener 32 o menos caracteres",
  },
  
  birthdate: {
    regexError: "Fecha no valida",
    minLengthError: "La fecha no puede estar vacia",
    maxLengthError: "La fecha no puede contener mas de 10 caracteres",
  },
};
