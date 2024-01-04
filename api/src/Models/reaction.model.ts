/* import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { Comment } from './comment.model';
import { Post } from "./post.model";

@Table({
  tableName: "Reaction",
})
export class Reaction extends Model<Reaction> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  reactionType!: string;
  
  @ForeignKey(() => User)
  userID!: number;
  
  @ForeignKey(() => Post)
  postID!: number;

  @ForeignKey(() => Comment)
  commentID?: number;
  
  @BelongsTo(() => User)
  user!: User;
  
  @BelongsTo(() => Post)
  post!: Post;

  @BelongsTo(() => Comment)
  comment?: Comment;

}
 */