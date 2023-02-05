import { DataTypes, Model, ModelStatic, Optional } from "sequelize";
import sequelizeConnection from "../config";

export interface IUserModel {
  id: string;
  name: string;
  email: string;
  password: string;

  created_at?: Date;
  updated_at?: Date;
}

export interface IUserInput extends Optional<IUserModel, "id"> {}

export interface IUserOutput extends Required<IUserModel> {}

class User extends Model<IUserModel, IUserInput> implements IUserModel {
  public id!: string;
  public name!: string;
  public password!: string;
  public email!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public toJson(): IUserOutput {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      email: this.email,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

export default User;
