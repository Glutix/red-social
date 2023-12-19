import { Model, Table, Column, DataType } from 'sequelize-typescript';

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
  name!: string;

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
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  registration_date!: Date;
}