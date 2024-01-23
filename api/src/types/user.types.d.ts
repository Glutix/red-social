export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthdate: Date;
  image?: string | undefined;
  description?: string | undefined;
  isDeleted?: boolean;
}

type Login = Pick<UserProps, "email" | "password">;

type CommonErrorMessages = {
  regexError: string;
  minLengthError: string;
  maxLengthError: string;
};

interface PropsRegisterErrorMessages extends UserProps {
  firstName: CommonErrorMessages;
  lastName: CommonErrorMessages;
  password: CommonErrorMessages
  birthdate: CommonErrorMessages;
}
