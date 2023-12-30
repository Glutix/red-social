import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Post } from "./post.model";
import { User } from "./user.model";

@Table({
  tableName: "Comment",
})
export class Comment extends Model<Comment> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  commentID!: number;

  @ForeignKey(() => User)
  userID!: number;

  @ForeignKey(() => Post)
  postID!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt!: Date;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Post)
  post!: Post;
}
