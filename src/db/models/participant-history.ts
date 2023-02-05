import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";
import { Participant } from "./index";

export interface IParticipantHistoryModel {
  id: number;
  participant_id: string;
  type: string;
  data: string;

  created_at?: Date;
  updated_at?: Date;
}

export interface IParticipantHistoryInput
  extends Optional<IParticipantHistoryModel, "id"> {}

export interface IParticipantHistoryOutput
  extends Required<IParticipantHistoryModel> {}

class ParticipantHistory
  extends Model<IParticipantHistoryModel, IParticipantHistoryInput>
  implements IParticipantHistoryModel
{
  public id!: number;
  public participant_id: string;
  public type: string;
  public data: string;
  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ParticipantHistory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    participant_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Participant,
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

export default ParticipantHistory;
