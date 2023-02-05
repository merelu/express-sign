import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";
import { Document } from "./index";

export interface IDocumentHistoryModel {
  id: number;
  document_id: string;
  type: string;
  data: string;

  created_at?: Date;
  updated_at?: Date;
}

export interface IDocumentHistoryInput
  extends Optional<IDocumentHistoryModel, "id"> {}

export interface IDocumentHistoryOutput
  extends Required<IDocumentHistoryModel> {}

class DocumentHistory
  extends Model<IDocumentHistoryModel, IDocumentHistoryInput>
  implements IDocumentHistoryModel
{
  public id!: number;
  public document_id: string;
  public type: string;
  public data: string;
  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

DocumentHistory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    document_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Document,
        key: "id",
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

export default DocumentHistory;
