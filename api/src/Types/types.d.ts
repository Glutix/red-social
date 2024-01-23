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

export interface PostProps {
  content: string;
  images?: string[];
  userID: number;
}

export interface ReactionProps {
  reactionType: string;
  userID: number;
  postID: number;
  commentID?: number; // Puedes ajustar esto según tus necesidades
}

export interface CommentProps {
  content: string;
  images?: string[];
  userID: number;
  postID: number;
}

type NameErrorMessages = {
  regexError: string;
  lengthMinError: string;
  lengthMaxError: string;
};

interface PropsErrorMessages {
  firstName: NameErrorMessages;
  lastName: NameErrorMessages;
}
