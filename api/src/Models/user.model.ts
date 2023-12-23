import { Model, Table, Column, DataType, HasMany } from "sequelize-typescript";
import { Post } from "./post.model";
import { Comment } from "./comment.model";

@Table({
  tableName: "User",
})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
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
    validate: {
      isEmail: true, // Validar formato de correo electrónico
    },
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image?: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  birthdate!: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Valor por defecto para el borrado lógico
  })
  isDeleted!: boolean;

  //* Relación con Publicaciones (Un usuario tiene muchas publicaciones)
  @HasMany(() => Post)
  posts?: Post[];

  //* Relación con Comentarios (Un usuario tiene muchos comentarios)
  @HasMany(() => Comment)
  comments?: Comment[];

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
