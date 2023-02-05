import { DataTypes, Model, ModelStatic, Optional } from "sequelize";
import sequelizeConnection from "../config";
import { Document } from "./index";

export interface IParticipantModel {
  id: string;
  document_id: string;
  name: string;
  email: string;
  status: string;
  signature: string;

  created_at?: Date;
  updated_at?: Date;
}

export interface IParticipantInput extends Optional<IParticipantModel, "id"> {}

export interface IParticipantOutput extends Required<IParticipantModel> {}

class Participant
  extends Model<IParticipantModel, IParticipantInput>
  implements IParticipantModel
{
  public id!: string;
  public name!: string;
  public email!: string;

  public document_id!: string;
  public status!: string;
  public signature!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Participant.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Document,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

export default Participant;
