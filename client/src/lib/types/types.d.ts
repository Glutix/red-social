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

export interface UserProps extends RegisterProps {
  userID: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export type UserInfo = UserInfoProps[];

export type UserLogin = {
  email: string;
  password: string;
};
