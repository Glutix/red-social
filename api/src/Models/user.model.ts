import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Post } from './post.model';
import { Comment } from './comment.model';

@Table({
  tableName: 'User',
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  userID!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birthdate!: string;

  @Column({
    type: DataType.TEXT,
  })
  description?: string;

  //* Relación con Publicaciones (Un usuario tiene muchas publicaciones)
  @HasMany(() => Post)
  posts!: Post[];

  //* Relación con Comentarios (Un usuario tiene muchos comentarios)
  @HasMany(() => Comment)
  comments!: Comment[];

  /* Relación con Chats (Un usuario tiene muchos chats)
  @HasMany(() => Chat, 'user1ID')
  chats1!: Chat[];

  @HasMany(() => Chat, 'user2ID')
  chats2!: Chat[];

  // Relación con Mensajes (Un usuario envía muchos mensajes)
  @HasMany(() => Message)
  messages!: Message[];

  // Relación con Notificaciones (Un usuario tiene muchas notificaciones)
  @HasMany(() => Notification)
  notifications!: Notification[];
  */
}