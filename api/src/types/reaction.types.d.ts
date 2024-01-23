export interface ReactionProps {
  reactionType: string;
  userID: number;
  postID: number;
  commentID?: number; // Puedes ajustar esto según tus necesidades
}
