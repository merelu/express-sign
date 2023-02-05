import { DataTypes, Model, ModelStatic, Optional } from "sequelize";
import sequelizeConnection from "../config";
import { User } from "./index";

export interface IDocumentModel {
  id: string;
  user_id: string;
  title: string;
  content: string;
  status: string;

  created_at?: Date;
  updated_at?: Date;
}

export interface IDocumentInput extends Optional<IDocumentModel, "id"> {}

export interface IDocumentOutput extends Required<IDocumentModel> {}

class Document
  extends Model<IDocumentModel, IDocumentInput>
  implements IDocumentModel
{
  public id!: string;
  public user_id!: string;
  public title!: string;
  public content!: string;
  public status!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Document.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

export default Document;
