export interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthdate: Date;
  image?: string | undefined;
  description?: string | undefined;
  isDeleted?: boolean;
}

export interface Login {
  email: string;
  password: string;
}