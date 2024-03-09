interface ValidationErrorProps {
  path: string;
  message: string;
}

export type ValidationError = ValidationErrorProps[];

export interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string | undefined;
  description: string | undefined;
  birthdate: string;
}
